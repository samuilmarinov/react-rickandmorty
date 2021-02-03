import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { useParams } from "react-router-dom";
import Characterspepage from './Characterspepage';


const GET_EPISODE_INFO = gql`query ($name: String!) {
  episodes( filter: { name: $name } ) {
    results {
  	  id
      name
      air_date
      episode
      created
      characters{
        id
        name
        status
        image
        species
        type
        gender
      	created
      }
    }
  }
}
`
 
  function Single() {
    let { name } = useParams();

    let episodeteext = name;
    
    const { data, loading, error } = useQuery(GET_EPISODE_INFO, { variables: { name: episodeteext }, });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <div className="container"><div className="card"><div className="card-body"><h4>EPISODE 1</h4><h3>Pilot</h3><h5>December 2, 2013</h5></div></div></div>;

    console.log(data);
  
    return (
      <React.Fragment>

        <div className="container">
       
          {data && data.episodes.results &&
            data.episodes.results.map((result, index) => (
  
              <div key={index} className="card">
                <div className="card-body">
                  <h4>EPISODE {result.id}</h4>
                  <h3>{result.name}</h3>
                  <h5>{result.air_date}</h5>
                </div>
              </div>
             
            ))}
            
        </div>
        <h4 className="container">Characters in this episode:</h4>
        <Characterspepage /> 
        
      </React.Fragment>
    );
  }




 
export default Single;