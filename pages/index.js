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
      {/* <Link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css" />
      <Link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css" />
      <Link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css" />
      <Link rel="stylesheet" href="css/styles.css" /> */}
       <title>F1 Seasons | Home</title>
       <meta name="keywords" content="f1-seasons" />
       
    </Head>
    
       
        <h1 className={styles.title}>F1 Season Results</h1>
        <div className="container">
        <div className="row row-content">
        <div className="col-sm-6">
        <p className={styles.text}>This simple Web Application is to show the F1 seasons, the applications functionality is to fetch data from the F1 <b>Ergast.com</b> API and must populate a list or table of the F1 seasons from 2005 
        until currently. It will display the championship winners &#127942; of that season and how many championships they have won within that season. This application is developed using <em>Next.js</em> a react framework, which uses HTML, CSS, 
        JavaScript and Node.js with React and it will be contained within the Docker container image.</p>
          
          
                     
      </div>
         <div className="col-sm-6">
            <div className="center"  >
               <Image src="/f1-2022.jpg" className="f1-img" width={512} height={200} />
            </div>

          </div>
         
             <Link href="/seasons">
              <a className={styles.btn}>Go to Seasons</a>
             </Link>
      </div>
      </div>
    </>
  )
}
