import React from "react";
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select } from "@material-ui/core";
import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
const List = ({places,isLoading,type,setType,rating,setRating}) => {


    const classes = useStyles();




    return ( 
        <div className={classes.container}>
            <Typography variant="h5">Know What's Around you</Typography>
            {isLoading?(
                <div className={classes.loading}>
                    <CircularProgress size="5rem"/>
                </div>
            ):(
                <>
                <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e=>setType(e.target.value))}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e=>setRating(e.target.value))}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>


            <Grid spacing={3} className={classes.list}>
                {
                    places?.map((place,i)=>(
                        <Grid item key={i} xs={12}>
                            <PlaceDetails place={place}/>
                        </Grid>
                    ))
                }
            </Grid>
                </>
            )}
        </div>
    );
}
 
export default List;