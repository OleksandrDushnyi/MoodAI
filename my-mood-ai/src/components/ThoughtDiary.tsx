import { useState, useEffect } from 'react'

const ThoughtDiary = () => {
  const [entry, setEntry] = useState('')
  const [savedEntries, setSavedEntries] = useState<string[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('thought-diary')
    if (stored) {
      setSavedEntries(JSON.parse(stored))
    }
  }, [])

  const handleSave = () => {
    if (!entry.trim()) return
    const updated = [...savedEntries, entry]
    setSavedEntries(updated)
    localStorage.setItem('thought-diary', JSON.stringify(updated))
    setEntry('')
  }

  return (
    <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 border border-white/40 shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">📝 Щоденник думок</h2>

      <textarea
        className="w-full p-2 rounded-lg border border-gray-300 mb-4 resize-none"
        rows={4}
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Напишіть, що вас турбує або що ви відчуваєте..."
      />
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Зберегти запис
      </button>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Збережені записи:</h3>
        <ul className="space-y-2 text-sm text-gray-800">
          {savedEntries.length === 0 && (
            <p className="text-gray-500 italic">Записів ще немає</p>
          )}
          {savedEntries.map((item, idx) => (
            <li key={idx} className="bg-white p-2 rounded shadow-inner">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ThoughtDiary
