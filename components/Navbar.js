import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
            <Image src="/f1-logo.png" width={128} height={77} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/seasons"><a>Seasons</a></Link>
        </nav>  
     );
}
 
export default Navbar;