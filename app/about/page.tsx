import Link from 'next/link'
import React from 'react'

export default function about() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>
                About Page
            </h1>
            <Link href="/">
                Go to Home Page
            </Link>
        </div>

    )
}
