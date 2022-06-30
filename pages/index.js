import React from 'react';
import Link from '../src/components/Link';


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
            <Title as="h1">Rafael Varela - HOME</Title>
            <Link href="/portfolio">
                Acesse meu portfolio para saber mais
            </Link>
        </div>
    )
}