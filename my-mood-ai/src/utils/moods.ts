export interface Mood {
    emoji: string
    label: string
  }
  
  export const moods: Mood[] = [
    { emoji: '😞', label: 'Сумно' },
    { emoji: '😡', label: 'Злість' },
    { emoji: '😰', label: 'Тривожно' },
    { emoji: '😐', label: 'Порожньо' },
    { emoji: '😔', label: 'Розчарування' },
    { emoji: '😌', label: 'Релакс' },
  ]