import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'

type Props = {
  text: string
}

export default function MoodCard({ text }: Props) {
  return (
    <motion.div
      className="mt-6 p-6 bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30 text-gray-800 text-lg leading-relaxed"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
    
    <ReactMarkdown>{text}</ReactMarkdown>
    </motion.div>
  )
}
