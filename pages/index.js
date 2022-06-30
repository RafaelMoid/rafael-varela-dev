import Link from 'next/link'

export default function HomePage() {
    return (
        <div>
            <h1>Rafael Varela - HOME</h1>
            <Link href="/faq" passHref>
                <a>Ir para a FAQ</a>
            </Link>
        </div>
    )
}