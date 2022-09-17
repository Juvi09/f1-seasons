
import Link from "next/link";
import { useEffect, userEffect } from 'react';
import { useRouter } from 'next/router';


const NotFoundPage = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
         router.push('/');
        }, 3000)
    }, [])
    return ( 
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>The page cannot be found.</h2>
            <p>Go Back To <Link href="/"><a>Home</a></Link></p>
        </div>
     );
}
 
export default NotFoundPage;