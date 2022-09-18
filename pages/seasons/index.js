import Head from 'next/head'
import styles from '../../styles/Seasons.module.css'
import Link from 'next/link'


export const getStaticProps = async () => {
    
    const res = await fetch('http://ergast.com/api/f1/seasons.json?offset=55');
    const data = await res.json();

    return { props: { seasons: data}}
   
 }

const Seasons = ({ seasons }) => {
    return ( 
    <> 
        <Head>
           <title>F1 Seasons | Seasons</title>
           <meta name="keywords" content="seasons" />
        </Head>     
        <div>
            <h1>Seasons</h1>

            {seasons.MRData.SeasonTable.Seasons.reverse().map(Season => (
                <Link href={'/seasons/' + Season.season } key={ Season.season }>
                   <a className={styles.single}>
                   { Season.season }    
                   </a>
                </Link>
            ))} 
        </div>
    </>   
     );
}
 
export default Seasons;
