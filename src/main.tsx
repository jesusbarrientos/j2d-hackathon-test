import React from 'react'
import { createRoot } from 'react-dom/client'
import '@/presentation/index.scss'
import { Background } from '@/presentation/components/Background.tsx'
import { Characters } from '@/presentation/pages/characters/Characters.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Characters />
    <Background/>
  </React.StrictMode>,
)
