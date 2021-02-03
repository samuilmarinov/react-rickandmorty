import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { useParams } from "react-router-dom";
import Characttersperlocation from './Characttersperlocation';

const GET_LOCATION_INFO = gql`query ($name: String!) {
  locations( filter: { name: $name } ) {
    results {
  	  id
      name
      type
      dimension
    }
  }
}
`
 
  function Singlelocation() {
    let { name } = useParams();

    let episodeteext = name;
    
    
    const { data, loading, error } = useQuery(GET_LOCATION_INFO, { variables: { name: episodeteext }, });
  
    if (loading) return <p>Loading...</p>;
    if (error) return "Location not available";

    console.log(data);
  
    return (
      <React.Fragment>

        <div className="container">
       
          {data && data.locations.results &&
            data.locations.results.map((result, index) => (
              <div key={index} className="card">
                <div className="card-body">
                  <h4>LOCATION {result.id}</h4>
                  <h3>{result.name}</h3>
                  <h5>{result.type}</h5>
                  <h5>{result.dimension}</h5>

                </div>
              </div>
             
            ))}
            
        </div>
        <h4 className="container">Characters in this location:</h4>
        <Characttersperlocation /> 
        
      </React.Fragment>
    );
  }




 
export default Singlelocation;