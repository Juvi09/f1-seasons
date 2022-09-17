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
    <div className="row row-content">
       <div className="col-sm-6">
        <h1 className={styles.title}>F1 Season Results</h1>
        <p className={styles.text}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
             non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
             <Link href="/seasons">
              <a className={styles.btn}>Go to Seasons</a>
             </Link>
        
      </div>
    </>
  )
}
