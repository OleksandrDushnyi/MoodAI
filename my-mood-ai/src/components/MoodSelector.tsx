import { useState } from 'react'
import MoodCard from './MoodCard'
import { moods } from '../utils/moods'
import { getAdviceForMood } from '../services/gemini'

const MoodSelector = () => {
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleMoodClick = async (mood: string) => {
    setLoading(true)
    setResponse('')
    await getAdviceForMood(mood, (partialText) => {
      setResponse(partialText)
    })
    setLoading(false)
  }

  return (
    <div className="mt-6 mb-6 w-full max-w-2xl bg-white/20 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/30">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">🧘‍♀️ Капсульний Психолог</h1>
      <p className="text-gray-700 mb-8 text-lg">Обери свій настрій, і AI підтримає тебе 💛</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {moods.map(mood => (
          <button
            key={mood.label}
            onClick={() => handleMoodClick(mood.label)}
            className="bg-white/80 hover:bg-white text-gray-800 font-semibold text-xl py-3 px-4 rounded-2xl shadow-md flex flex-col items-center justify-center transition-all hover:scale-105 active:scale-95"
          >
            <span className="text-3xl">{mood.emoji}</span>
            <span className="mt-1">{mood.label}</span>
          </button>
        ))}
      </div>

      {loading && <p className="text-indigo-700 text-sm animate-pulse">Завантаження...</p>}
      {response && <MoodCard text={response} />}
    </div>
  )
}

export default MoodSelector
