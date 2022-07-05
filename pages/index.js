import React from 'react';
import Link from '../src/components/Link';
import Footer from '../src/components/patterns/Footer';
import Navbar from "../src/components/patterns/Navbar"

function Title({children, as}) {
    const Tag = as;
    return (
        <React.Fragment>
            <Tag>
                {children}
            </Tag>
            <style jsx>{`
                ${Tag} {
                    color:red;
                }
            `}</style>
        </React.Fragment>
    )
}

export default function HomePage() {
    return (
            <div>
                <Navbar />
                <Title as="h1">Rafael Varela - HOME</Title>
                <Link href="/StrateegiaLP">
                    Acesse meu portfolio para saber mais
                </Link>
                <Footer />
            </div>
    )
}