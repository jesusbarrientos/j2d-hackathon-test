import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Characters } from '@/presentation/pages/characters/Characters.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Characters />
  </React.StrictMode>,
)
