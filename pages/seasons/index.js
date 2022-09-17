import Head from 'next/head'
import styles from '../../styles/Seasons.module.css'
import Link from 'next/link'



// /* export async function getStaticProps(context) {
//     const res = await fetch(`http://ergast.com/api/f1/seasons`)
//     const data = await res.json()
  
//     if (!data) {
//       return {
//         notFound: true,
//       }
//     }
  
//     return {
//       props: {season: data}, // will be passed to the page component as props
//     }
//   }
//    */

export const getStaticProps = async () => {
    //const [res, data] = useState([]);
    const res = await fetch('http://ergast.com/api/f1/seasons.json');
    const data = await res.json();

    return {
        props: {seasons: data},
     }
 }

const Seasons = ({ seasons }) => {
    return ( 
    <> 
        <Head>
           <title>F1 Seasons | Seasons</title>
           <meta name="keywords" content="seasons" />
        </Head>     
        <div>
            <h1>All Seasons</h1>
            
            {seasons.map(Season => (
                <Link href={'/seasons/' + season.id} key={ season.id }>
                   <a className={styles.single}>
                    <h3><em>Season:</em>  { season.season }</h3>
                               
                   </a>
                </Link>
            ))}
        </div>
    </>   
     );
}
 
export default Seasons;
