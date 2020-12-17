import React from 'react';

const Titre = (props) => {

    return (
        <h1 
        className="border border-dark bg-info p-2 m-2 rounded text-center "
       
        >
           {props.children} 
        </h1>
    );
};

export default Titre;