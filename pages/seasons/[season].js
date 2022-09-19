
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



    // console.log(data.MRData.SeasonTable.Seasons.Round)

    return {
        props: {season: data.MRData.SeasonTable.Seasons}
    }
}

const  Details = ({ season }) => {
    return (
        
            
            <div>
                <p>{ season.seasons}</p>
            </div>
     
      );
    
}
 
export default  Details;