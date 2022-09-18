import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
            <Link href="/"><a><Image src="/f1-logo.png" width={128} height={77} /></a></Link>
            </div>
            <Link href="/"><a><span class="fa fa-home fa-lg"></span>Home</a></Link>
            <Link href="/seasons"><a><span className="fa fa-list fa-lg"></span>Seasons</a></Link>
        </nav>  
     );
}
 
export default Navbar;