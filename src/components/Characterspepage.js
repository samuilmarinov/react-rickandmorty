import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { Link, useParams } from "react-router-dom";
import { MDBRow, MDBCol } from "mdbreact";


const GET_CH_INFO = gql`query ($name: String!) {
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
        location{
          name
        }
        origin{
          name
        }
      }
    }
  }
}
`
 
  function Characterspepage() {
    let { name } = useParams();

    let episodeteext = name;
    
    const { data, loading, error } = useQuery(GET_CH_INFO, { variables: { name: episodeteext }, });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <div className="container"><div className="card"><div className="card-body"><h4>EPISODE 1</h4><h3>Pilot</h3><h5>December 2, 2013</h5></div></div></div>;

    console.log(data);
  
    return (
      <React.Fragment>
 <div className="padding margin">
    
          {data && data.episodes.results &&
            data.episodes.results.map((result, index) => (
              <div key={index}>
        <MDBRow>
                {result.characters.map((result, index) => (
                <MDBCol key={index} className="card padding margin" md="3"> 
                
                  <img className="charperepisode" alt="" src={result.image} />
                  <h5>Name: <Link className="paginationLink" to ={"/character/" + result.name} > {result.name}</Link></h5>
                  <h5>Gender: {result.gender}</h5>
                  <h5>Status: {result.status}</h5>
                  <h5>Species: {result.species}</h5>
                  <h5>Type: {result.type}</h5>
                  <h5>Location: <Link className="paginationLink" to ={"/location/" + result.location.name} > {result.location.name}</Link></h5>
                  <h5>Origin: {result.origin.name}</h5>
               
                </MDBCol>
                ))}
          </MDBRow>    
              </div>
             
            ))}
             
    
       
       </div>
      </React.Fragment>
    );
  }





 
export default Characterspepage;