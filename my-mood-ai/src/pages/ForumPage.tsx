import { useEffect, useState } from 'react'
import { Post } from '../types/Forum'

const Forum = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'mine'>('all')
  const [posts, setPosts] = useState<Post[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false) // ✅

  // Створюємо або отримуємо user-id
  useEffect(() => {
    let existingId = localStorage.getItem('user-id')
    if (!existingId) {
      existingId = Date.now().toString()
      localStorage.setItem('user-id', existingId)
    }
    setUserId(existingId)
  }, [])

  // Завантажуємо пости з localStorage
  useEffect(() => {
    const stored = localStorage.getItem('forum-posts')
    if (stored) {
      setPosts(JSON.parse(stored))
    }
    setIsLoaded(true) // ✅ тільки після завантаження
  }, [])

  // Зберігаємо пости після завантаження
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('forum-posts', JSON.stringify(posts))
    }
  }, [posts, isLoaded]) // ✅ додаємо isLoaded

  const addPost = () => {
    if (!title.trim() || !content.trim() || !userId) return

    const newPost: Post = {
      id: Date.now(),
      title,
      content,
      authorId: userId,
      createdAt: new Date().toISOString(),
    }
    setPosts((prev) => [newPost, ...prev])
    setTitle('')
    setContent('')
  }

  if (!userId) return <p className="text-center p-4">Завантаження...</p>

  const filteredPosts = activeTab === 'mine'
    ? posts.filter((p) => p.authorId === userId)
    : posts

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-lg ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          📰 Всі пости
        </button>
        <button
          onClick={() => setActiveTab('mine')}
          className={`px-4 py-2 rounded-lg ${activeTab === 'mine' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          📝 Мої пости
        </button>
      </div>

      {activeTab === 'mine' && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Створити пост</h2>
          <input
            className="w-full p-2 mb-2 border rounded"
            placeholder="Заголовок"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full p-2 mb-2 border rounded"
            placeholder="Ваш текст..."
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            onClick={addPost}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Додати пост
          </button>
        </div>
      )}

      <div>
        <h3 className="text-lg font-bold mb-2">Пости</h3>
        {filteredPosts.length === 0 ? (
          <p className="text-gray-500">Немає постів</p>
        ) : (
          filteredPosts.map((post) => (
            <div key={post.id} className="border rounded p-4 mb-3 shadow-sm bg-white">
              <h4 className="font-semibold text-lg">{post.title}</h4>
              <p className="text-gray-700">{post.content}</p>
              <small className="text-gray-400">{new Date(post.createdAt).toLocaleString()}</small>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Forum
