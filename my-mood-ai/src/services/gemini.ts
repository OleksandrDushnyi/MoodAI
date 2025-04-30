export const getAdviceForMood = async (
    inputText: string,
    onProgress?: (partial: string) => void
  ): Promise<string> => {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: inputText
                  },
                ],
              },
            ],
          }),
        }
      )
  
      const data = await res.json()
      const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim()
  
      if (!aiText) return '🤖 Вибач, не зміг відповісти'
  
      if (onProgress) {
        let output = ''
        for (const char of aiText) {
          output += char
          onProgress(output)
          await new Promise((r) => setTimeout(r, 20)) 
        }
      }
  
      return aiText
    } catch (err) {
      console.error('Gemini fetch error:', err)
      return '⚠️ Виникла помилка. Спробуй ще раз.'
    }
  }
  