import React from "react";
import Link from '../../Link'

function Navbar() {
    return (
        <ul>
            <li><Link href="/" >Home</Link></li>
            <li><Link href="/portfolio" >Portfolio</Link></li>
            <li><Link href="/contato" >Contato</Link></li>
        </ul>
    )
}

export default Navbar;