import axios from "axios";


export const getPlacesData=async(type,sw,ne)=>{
    try {

        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '3710dedb57mshb04dd48c66c3507p11b6fbjsnc77e212b0362',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        

        return data;

    } catch (error) {
        
        console.log(error);
    }
}

