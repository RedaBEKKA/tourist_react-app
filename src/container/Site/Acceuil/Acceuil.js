import React from 'react';
import Titre from "../../../components/UI/Titres/Titre"
import Image from "react-bootstrap/Image"
import ImgAcceuil from "../../../assets/aiguades.jpg"
const Acceuil = () => {
    return (
        <>
          <Titre>Bienvenue sur le site de Bejaia Tours</Titre>  
          <p className="text-center">Le site vous aide a trouver les établissements publics a Bejaia</p>
          <Image src={ImgAcceuil} fluid thumbnail style={{width:"100%"}} />
        </>
    );
};

export default Acceuil;