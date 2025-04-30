import { useState } from 'react'
import { getAdviceForMood } from '../services/gemini'
import ReactMarkdown from 'react-markdown'
import useLocalStorage from '../hooks/useLocalStorage'

type Message = {
  sender: string
  text: string
}

const Chat = () => {
  const [messages, setMessages] = useLocalStorage<Message[]>('chat-history', [])
  const [input, setInput] = useState('')
  const [isBotTyping, setIsBotTyping] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: userMessage },
    ])

    setIsBotTyping(true)

    let botReply = ''
    await getAdviceForMood(userMessage, (partial) => {
      botReply = partial
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot-temp', text: partial },
      ])
    })

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'bot', text: botReply },
    ])
    setIsBotTyping(false)

    setInput('')
  }

  return (
    <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/40 shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Чат з психологом 🤖</h2>

      <div className="h-64 overflow-y-auto bg-white rounded-lg p-4 mb-4 shadow-inner space-y-2 max-h-[400px]">
        {messages.length === 0 && (
          <p className="text-gray-500 text-center italic">Почніть чат, щоб отримати підтримку 💬</p>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`text-sm ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : msg.sender === 'bot-temp' ? 'bg-yellow-100 text-gray-700 italic' : 'bg-gray-200 text-gray-800'}`}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </span>
          </div>
        ))}
        {isBotTyping && <p className="text-xs italic text-gray-500">🤖 Друкує відповідь...</p>}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Напишіть щось..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Надіслати
        </button>
      </div>
    </div>
  )
}

export default Chat
