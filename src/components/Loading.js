import React from 'react';
import spinner from './Spinner.gif'

export const Loading = () => {
    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img style={{width: "25px",height: "25px"}} src={spinner} alt="loading..."/>
            <p>Chargement en cours</p>
        </div>
    );
};