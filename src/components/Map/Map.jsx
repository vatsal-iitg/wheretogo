import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper,Typography,useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Rating } from "@material-ui/lab";

import useStyles from './styles';

const Map = ({places,setCoordinates,setBounds,coordinates}) => {


    const classes  = useStyles();    
    const isMobile = useMediaQuery('(max-width:600px)');



    // const coordinates = { lat: 0 , lng:0 };
    return ( 
<div className={classes.mapContainer}>
<GoogleMapReact
bootstrapURLKeys={{key:process.env.REACT_GOOGLE_MAPS_API_KEY}}
defaultCenter={coordinates}
center={coordinates}
defaultZoom={14}
margin={[50,50,50,50]}
options={''}
onChange={(e)=>{
    console.log("the event is ");
    console.log(e);
    setCoordinates({lat:e.center.lat,lng:e.center.lat})
    setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})

}}
>
{places?.map((place,i)=>(
    <div className={classes.markerContainer} lat={Number(place.latitude)} lng={Number(place.longitude)} key={i}>

        {
            isMobile?(
                <LocationOnOutlinedIcon color="primary" fontSize="large"/>
            ):(
                <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                        {place.name}
                    </Typography>
                    <img src={place.photo?place.photo.images.large.url:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'} className={classes.pointer} alt={place.name}/>
                    <Rating size="small" value={Number(place.rating)} readOnly/>
                </Paper>
            )
        }
    </div>
))}
</GoogleMapReact>
</div>
    );
}
 
export default Map;