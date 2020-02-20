import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import dsc from '../assets/DSC_8996.jpg';
import hdr from '../assets/DSC_3159-HDR.jpg';

import styled from 'styled-components';


const Img = styled.img`
width: 100%;
height: 250px;
transition: all .2s ease-in-out;
`
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },

  
 
});


function MainGallery() {
  const classes = useStyles();
  return ( 
    
   
 

    <div className={classes.root}>

      <Grid container spacing={0}>
      <Grid item xs={6}>
          <Img src="https://i.imgur.com/HVv1KIH.jpg" className={classes.img}></Img>
        </Grid>
        <Grid item xs={6}>
          <Img src="https://i.imgur.com/HVv1KIH.jpg"></Img>
        </Grid>
        <Grid item xs={4}>
          <Img src= { dsc }></Img>
        </Grid>
        <Grid item xs={8}>
          <Img src= { hdr }></Img>
        </Grid>
      </Grid>
    
      </div>
    
  )
}

export default MainGallery;