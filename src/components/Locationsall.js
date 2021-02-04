import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { Link, useParams } from "react-router-dom";

const GET_LOCATIONS_INFO = gql`query  ($page: Int!) {
    locations(page: $page) {
      info {
        pages
        next
        prev
        count
      }
      results {
        id
        name
        type
        dimension
        created
          
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`
  function PagesList() {
      
    let { page } = useParams();

    let pagetext = page;
    let thispage = parseInt(page);

    if(thispage === 0){
      thispage = 1;
    }

    if(pagetext === "null"){
      thispage = 1;
    }

    if(pagetext === ""){
      thispage = 1;
    }
    const { data, loading, error } = useQuery(GET_LOCATIONS_INFO, { variables: { page: thispage } });

    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    let pages = data.locations.info.pages;
    var charac = "/locations/";

    var pagesint = parseInt(pages);
    var pagesarray = [];
    for (var k = 1; k <= pagesint; k++) {
      pagesarray.push(k);
    }

    
    return (
      pagesarray.map((n,i) => <a key={i} className={(thispage === n ? 'active ' : '') + 'controls'} href={charac + n}><li key={i}>{n}</li></a>)
    );
  }

  function Locationsall() {
    let { page } = useParams();

    let pagetext = page;
    let thispage = parseInt(page);
   
    if(thispage === 0){
      thispage = 1;
    }
  
    if(pagetext === "null"){
      thispage = 1;
    }
  
    if(pagetext === ""){
      thispage = 1;
    }
  
    const { data, loading, error } = useQuery(GET_LOCATIONS_INFO, { variables: { page: thispage } });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
  
    let next = data.locations.info.next;
    let prev = data.locations.info.prev;
    let curr = next - 1;
    if(curr < 0 ){ 
      curr = prev + 1;
    }
    let pages = data.locations.info.pages;
  
    var charac = "/locations/";
    var nextpage = charac + next;
    var prevpage = charac + prev;
    console.log(data);
  
    return (
      <React.Fragment>
      
        <div className="container episodesGrid">
     
          {data && data.locations.results &&
            data.locations.results.map((result, index) => (
              <div key={index} className="card cardLocations">
               <Link className="paginationLink" to ={"/location/" + result.name} >
                <div className="card-body">
                  <h3>{result.name}</h3>
                  <h5>Type: {result.type}</h5>
                  <h5>Dimension: {result.dimension}</h5>
                </div>
                </Link>
              </div>
            ))}
             
        </div>
        
        <div className="alignleft padding margin">
        <h5>{curr} / {pages}</h5>
      
        <Link className="paginationLink" to ={prevpage} >PREVIOUS</Link>
        <Link className="paginationLink" to ={nextpage} >NEXT</Link>
        <ul className="pagination">
        <PagesList />
        </ul>
        </div>
      </React.Fragment>
    );
  }




 
export default Locationsall;