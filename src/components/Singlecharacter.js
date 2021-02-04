import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { Link, useParams } from "react-router-dom";

const GET_SINGLECHARACTER_INFO = gql`query ($name: String!) {
  characters( filter: { name: $name } ) {
    results {
        id
        image
        name
        status
        species
        type
        gender
        created
        location{
          name
        }
        origin{
          name
        }
        episode{
          name
        }
    }
  }
}
`
 
  function Singlecharacter() {
    let { name } = useParams();

    let charactername = name;
    
    
    const { data, loading, error } = useQuery(GET_SINGLECHARACTER_INFO, { variables: { name: charactername }, });
  
    if (loading) return <p>Loading...</p>;
    if (error) return "No characters found";

    console.log(data);
  
    return (
      <React.Fragment>

        <div className="container">
       
          {data && data.characters.results &&
            data.characters.results.map((result, index) => (
              <div key={index} className="card">
                <div className="card-body">
                  <img className="characterresults" alt="" src={result.image} />
                  <h3>Name: {result.name}</h3>
                  <h5>Gender: {result.gender}</h5>
                  <h5>Status: {result.status}</h5>
                  <h5>Species: {result.species}</h5>
                  <h5>Type: {result.type}</h5>
                  <h5>Location: <Link className="paginationLink" to ={"/location/" + result.location.name} > {result.location.name}</Link></h5>
                  <h5>Origin: {result.origin.name}</h5>
                </div>
              </div>
             
            ))}
            
        </div>
       
      </React.Fragment>
    );
  }




 
export default Singlecharacter;