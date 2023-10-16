import React from 'react'
import { createRoot } from 'react-dom/client'
import '@/presentation/assets/styles/index.scss'
import { Characters } from '@/presentation/pages/characters/Characters.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Characters />
  </React.StrictMode>,
)
