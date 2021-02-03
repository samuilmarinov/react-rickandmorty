import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { Link, useParams } from "react-router-dom";



const GET_CHARACTERS_INFO = gql`query ($page: Int!) {
    characters(page: $page) {
      info {
        pages
        next
        prev
        count
      }
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
  const { data, loading, error } = useQuery(GET_CHARACTERS_INFO, { variables: { page: thispage } });

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  let pages = data.characters.info.pages;
  var charac = "/characters/";

  var pagesint = parseInt(pages);
  var pagesarray = [];
  for (var k = 1; k <= pagesint; k++) {
    pagesarray.push(k);
  }

  
  return (
    pagesarray.map((n,i) => <a key={i} className={(thispage === n ? 'active ' : '') + 'controls'} href={charac + n}><li key={i}>{n}</li></a>)
  );
}

function Allchar() {
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


  const { data, loading, error } = useQuery(GET_CHARACTERS_INFO, { variables: { page: thispage } });
   
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
  

    
    let next = data.characters.info.next;
    let prev = data.characters.info.prev;
    let curr = next - 1;
    if(curr < 0 ){ 
      curr = prev + 1;
    }
    let pages = data.characters.info.pages;

    var charac = "/characters/";
    var nextpage = charac + next;
    var prevpage = charac + prev;
    console.log(data);

    return (
      <React.Fragment>
 
        <div className="container episodesGrid">
          {data && data.characters.results &&
            data.characters.results.map((result, index) => (
              <div key={index} className="card">
                <div className="card-body">
                  <img className="charperepisodeall" alt="" src={result.image} />
                  <h5>Name: <Link className="paginationLink" to ={"/character/" + result.name} > {result.name}</Link></h5>
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


export default Allchar;