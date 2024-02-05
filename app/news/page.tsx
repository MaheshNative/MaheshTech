import Link from 'next/link'
import React from 'react'

export default function news() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>
                News Page
            </h1>
            <Link href="/about">
                Go to About Page
            </Link>
        </div>

    )
}
