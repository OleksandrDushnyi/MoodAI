// src/components/Resources.tsx
import React from 'react'

const Resources = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
      <h3 className="text-3xl font-semibold text-gray-800 mb-6">📚 Ресурси / Корисні посилання</h3>
      <ul className="space-y-4">
        <li>
          <a
            href="https://link-to-article1.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-all duration-300"
          >
            <span className="mr-3">📝</span> Стаття 1
          </a>
        </li>
        <li>
          <a
            href="https://link-to-podcast1.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg font-medium text-green-600 hover:text-green-800 hover:underline transition-all duration-300"
          >
            <span className="mr-3">🎧</span> Подкаст 1
          </a>
        </li>
        <li>
          <a
            href="https://link-to-video1.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg font-medium text-red-600 hover:text-red-800 hover:underline transition-all duration-300"
          >
            <span className="mr-3">📺</span> Відео 1
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Resources
