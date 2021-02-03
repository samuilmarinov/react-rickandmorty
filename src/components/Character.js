import React from 'react';
import Singlecharacter from './Singlecharacter';
import { useParams } from "react-router-dom";


const Character = () => {
    let { name } = useParams();
    return (
       <div>
            <h3 className="margin">Results for: { name } </h3>
           <Singlecharacter /> 
       </div>
        
    );
}
 
export default Character;