import { ContactProvider } from '@/contexts/contactContext'
import React from 'react'

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ContactProvider>
        {children}
      </ContactProvider>

    </div>
  )
}
