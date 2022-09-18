
export const getStaticPaths = async () => {
    const res = await fetch('http://ergast.com/api/f1/seasons.json?offset=55');
    const data = await res.json();

    const paths = data.MRData.RaceTable.Seasons.Round.reverse().map(season => {
        return {
            params: {season: season.season.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const season = context.params.season;
    const res = await fetch('http://ergast.com/api/f1/seasons.json?offset=55/' +  season);
    const data = await res.json();

    console.log(data.MRData.SeasonTable.Seasons)

    return {
        props: {season: data.MRData.RaceTable.Seasons}
    }
}

const  Details = ({ season }) => {
    return (
        
        <div>
            <h1>Here we are + { season.url }</h1>
        </div>
    );
}
 
export default  Details;