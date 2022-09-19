
export const getStaticPaths = async () => {
    const res = await fetch('http://ergast.com/api/f1/seasons.json?offset=55');
    const data = await res.json();

    const paths = data.MRData.SeasonTable.Seasons.reverse().map(season => {
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

    console.log(season);

    const res = await fetch('http://ergast.com/api/f1/' +  season + ".json");

    const data = await res.json();

    

    return {

        props: {races: data.MRData.RaceTable.Races}

    }

}

const Details = ({ races }) => {
    return (

        <div>
            {console.log(races)}
            {races.map(Race => (
                <p>{Race.raceName}</p>
            ))}
        </div>

    );

}


 
export default  Details;