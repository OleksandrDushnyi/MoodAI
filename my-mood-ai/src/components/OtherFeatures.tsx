import { useState } from 'react'
import Resources from './Resources'
import MeditationTimer from './MeditationTimer'
import Goals from './Goals'

const OtherFeatures = () => {
  const [activeFeature, setActiveFeature] = useState<'goals' | 'resources' | 'breathing' | null>(null)

  const handleButtonClick = (feature: 'goals' | 'resources' | 'breathing') => {
    setActiveFeature(feature)
  }

  return (
    <div className="space-y-8">
      <div className="mb-4 flex gap-6 justify-center">
        <button
          onClick={() => handleButtonClick('goals')}
          className="px-6 py-3 text-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg transform transition-all hover:scale-105 focus:outline-none hover:shadow-2xl"
        >
          🎯 Цілі на день / тиждень
        </button>
        <button
          onClick={() => handleButtonClick('resources')}
          className="px-6 py-3 text-xl bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg shadow-lg transform transition-all hover:scale-105 focus:outline-none hover:shadow-2xl"
        >
          📚 Ресурси
        </button>
        <button
          onClick={() => handleButtonClick('breathing')}
          className="px-6 py-3 text-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-lg transform transition-all hover:scale-105 focus:outline-none hover:shadow-2xl"
        >
          🧘 Медитація
        </button>
      </div>

      <div className="mt-4">
        {activeFeature === 'goals' && <Goals />}

        {activeFeature === 'resources' && <Resources />} 

        {activeFeature === 'breathing' && <MeditationTimer />}

        {activeFeature === null && <p className="text-xl text-center">Оберіть одну з опцій вище, щоб побачити більше.</p>}
      </div>
    </div>
  )
}

export default OtherFeatures
