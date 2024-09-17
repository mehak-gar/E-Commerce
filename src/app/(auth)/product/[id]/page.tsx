'use client'
import { useSearchParams } from 'next/navigation' // Changed from 'next/router'
import React from 'react'

const Page = () => {
  const router = useSearchParams()
  console.log('router', router)
  return <div>dferterterg</div>
}

export default Page
