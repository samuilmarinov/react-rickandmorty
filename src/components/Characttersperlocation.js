import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { Link, useParams } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";



const GET_LOC_INFO = gql`query ($name: String!) {
  locations( filter: { name: $name } ) {
    results {
  	  id
      name
      residents{
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
 
  function Characttersperlocation() {
    let { name } = useParams();

    let episodeteext = name;
    
    const { data, loading, error } = useQuery(GET_LOC_INFO, { variables: { name: episodeteext }, });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <MDBContainer><MDBRow><MDBCol className="container card padding margin minwidth" md="2">No characters in this location</MDBCol></MDBRow></MDBContainer>;

    console.log(data);
  
    return (
      <React.Fragment>

 <div className="padding margin">
          {data && data.locations.results &&
            data.locations.results.map((result, index) => (
              <div key={index}>
        <MDBRow>
                {result.residents.map((result, index) => (
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





 
export default Characttersperlocation;