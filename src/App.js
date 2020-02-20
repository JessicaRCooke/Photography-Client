import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';


import {
  BrowserRouter as Router,
} from 'react-router-dom';
import MainGallery from './components/MainGallery';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 100,

    marginLeft: 300,
  
  },
  heading: {
    flexGrow: 1,
    fontFamily: 'Cormorant Garamond',
    

    
    
  },
})


function App() {
  const classes = useStyles();
  return ( 
    <div>
   
    <h1 className={classes.heading}> Jessica Cooke Photography </h1>

    <div className={classes.root}>
     <MainGallery />
     <Router>
     
      </Router>
      </div>
    </div>
  )
}

export default App;
