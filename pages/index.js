import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
       <title>F1 Seasons | Home</title>
       <meta name="keywords" content="f1-seasons" />
       
    </Head>
    <div className="row">
       <div className="col-6">
        <h1 className={styles.title}>F1 Season Results</h1>
        <p className={styles.text}>This mini application is for the F1 seasons, the applications functionality is to fetch data from the F1 <b>Ergast.com</b> api and must populate the F1 seasons from 2005 
        until currently. It will diplay the championship winners of that season and how many championships they have won within that season. This application is developed using <em>Next.js,</em> which uses HTML, CSS and 
        Javascript with Node.js and it will be contained within the Docker container image. Enjoy! &#128515;</p>
          </div>
          <div className="row row-content">
            <div className="col-6">
               <Image src="/f1-cars3.jpg" width={512} height={256} className="f1-img"/>
            </div>

          </div>
             <Link href="/seasons">
              <a className={styles.btn}>Go to Seasons</a>
             </Link>
        
      </div>
    </>
  )
}
