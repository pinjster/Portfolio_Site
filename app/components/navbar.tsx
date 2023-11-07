import Link from 'next/link'
import React from 'react'

function navbar() {
  return (
    <nav className='' >
        <Link href="/"></Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact me</Link>
        <Link href="/qualifications">qualifications</Link>
        <Link href="/applications">applications</Link>
    </nav>
  )
}

export default navbar