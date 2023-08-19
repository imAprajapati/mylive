import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full h-14 flex items-center justify-center border-t border-solid border-gray-400'>
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-2xl text-gray-500">©</span>
          <span className="text-gray-500">2023 My Live</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/privacy-policy"><span className="text-gray-500 underline underline-offset-1">Privacy Policy</span></Link>
          <Link href="/terms-conditions"><span className="text-gray-500 underline underline-offset-1">Terms Conditions</span></Link>
        </div>
      </div>
    </footer>
  )
}
