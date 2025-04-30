import React, { useState, useEffect } from 'react'

type Goal = {
  id: number
  text: string
  completed: boolean
}

const Goals = () => {
  const [goals, setGoals] = useState<Goal[]>([])
  const [newGoal, setNewGoal] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem('user-goals')
    if (stored) {
      setGoals(JSON.parse(stored))
    }
  }, [])

  const addGoal = () => {
    if (!newGoal.trim()) return
    const newItem: Goal = {
      id: Date.now(),
      text: newGoal.trim(),
      completed: false,
    }

    setGoals((prev) => [...prev, newItem])
    localStorage.setItem('user-goals', JSON.stringify([...goals, newItem]))
    
    setNewGoal('')
  }

  const toggleGoal = (id: number) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    )
  }

  const deleteGoal = (id: number) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id))
    localStorage.setItem(
      'user-goals',
      JSON.stringify(goals.filter((goal) => goal.id !== id))
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-2xl font-semibold mb-4">🎯 Цілі на день / тиждень</h3>

      <div className="flex mb-4">
        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          placeholder="Введіть свою ціль..."
          className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
        />
        <button
          onClick={addGoal}
          className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
        >
          Додати
        </button>
      </div>

      <ul className="space-y-2">
        {goals.map((goal) => (
          <li
            key={goal.id}
            className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-2"
          >
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => toggleGoal(goal.id)}
              />
              <span
                className={`${
                  goal.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {goal.text}
              </span>
            </label>
            <button
              onClick={() => deleteGoal(goal.id)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Goals
