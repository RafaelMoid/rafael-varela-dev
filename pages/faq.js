import Link from 'next/link'

export default function HomePage() {
    return (
        <div>
            <h1>Rafael Varela - FAQ</h1>
            <Link href="/" passHref>
                <a>Ir para a HOME</a>
            </Link>
        </div>
    )
}