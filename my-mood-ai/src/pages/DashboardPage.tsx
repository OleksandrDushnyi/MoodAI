import { useState } from 'react'
import MoodSelector from '../components/MoodSelector'
import Chat from '../components/Chat'
import ThoughtDiary from '../components/ThoughtDiary'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'mood' | 'chat' | 'other' | 'diary'>('mood')

  return (
    <div className="pt-6 px-4">
      <div className="mb-4 flex space-x-4">
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === 'mood' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
          onClick={() => setActiveTab('mood')}
        >
          Настрій
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === 'chat' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
          onClick={() => setActiveTab('chat')}
        >
          Чат
        </button>

        <button
          className={`px-4 py-2 rounded-lg ${activeTab === 'diary' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
          onClick={() => setActiveTab('diary')}
        >
            Щоденник думок
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === 'other' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
          onClick={() => setActiveTab('other')}
        >
          Інше
        </button>
      </div>

      <div>
        {activeTab === 'mood' && <MoodSelector />}
        {activeTab === 'chat' && <Chat/>}
        {activeTab === 'diary' && <ThoughtDiary />}
        {activeTab === 'other' && <div>Інші функції...</div>}
      </div>
    </div>
  )
}

export default Dashboard
