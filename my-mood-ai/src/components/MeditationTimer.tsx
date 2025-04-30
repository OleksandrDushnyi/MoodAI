import React, { useState, useEffect } from 'react'

const MeditationTimer = () => {
  const [timeLeft, setTimeLeft] = useState(300) // 5 хвилин (300 секунд)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let timer: number | undefined
    if (isActive && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      if (timer !== undefined) clearInterval(timer)
      setIsActive(false)
      alert("Час вичерпано! Завершіть медитацію.")
    }
  
    return () => {
      if (timer !== undefined) clearInterval(timer)
    }
  }, [isActive, timeLeft])

  const toggleTimer = () => {
    setIsActive((prev) => !prev)
  }

  const resetTimer = () => {
    setTimeLeft(300)
    setIsActive(false)
  }

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto text-center">
      <h3 className="text-2xl font-semibold mb-4">🧘 Таймер медитації</h3>

      <div className="mb-4">
        <p className="text-xl font-semibold text-gray-800">{formatTime(timeLeft)}</p>
        <p className="mt-2 text-gray-600">Вдих – Видих: Поглиблюйте своє дихання</p>
      </div>

      <div className="space-x-4">
        <button
          onClick={toggleTimer}
          className={`px-6 py-2 rounded-lg text-white ${isActive ? 'bg-red-600' : 'bg-green-600'} hover:bg-opacity-80 transition-all duration-300`}
        >
          {isActive ? 'Пауза' : 'Почати'}
        </button>
        <button
          onClick={resetTimer}
          className="px-6 py-2 rounded-lg bg-gray-600 text-white hover:bg-opacity-80 transition-all duration-300"
        >
          Скинути
        </button>
      </div>
    </div>
  )
}

export default MeditationTimer