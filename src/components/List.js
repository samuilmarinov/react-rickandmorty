import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { Link, useParams } from "react-router-dom";


const GET_EPISODES_INFO = gql`query ($page: Int!) {
  episodes(page: $page) {
    info {
      pages
      next
      prev
      count
    }
    results {
  	  id
      name
      air_date
      created
    }
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
    const { data, loading, error } = useQuery(GET_EPISODES_INFO, { variables: { page: thispage } });

    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    let pages = data.episodes.info.pages;
    var charac = "/episodes/";

    var pagesint = parseInt(pages);
    var pagesarray = [];
    for (var k = 1; k <= pagesint; k++) {
      pagesarray.push(k);
    }

    
    return (
      pagesarray.map((n,i) => <a key={i} className={(thispage === n ? 'active ' : '') + 'controls'} href={charac + n}><li key={i}>{n}</li></a>)
    );
  }
 
  function List() {
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

    const { data, loading, error } = useQuery(GET_EPISODES_INFO, { variables: { page: thispage }, });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    let next = data.episodes.info.next;
    let prev = data.episodes.info.prev;
    let curr = next - 1;
    if(curr < 0 ){ 
      curr = prev + 1;
    }
    let pages = data.episodes.info.pages;
    
    var charac = "/episodes/";
    var nextpage = charac + next;
    var prevpage = charac + prev;
    console.log(data);
  
    return (
      <React.Fragment>
        <div className="container episodesGrid">
          {data && data.episodes.results &&
            data.episodes.results.map((result, index) => (
              <div key={index} className="card cardEpisodes">
               <Link className="paginationLink" to ={"/episode/" + result.name} >
                <div className="card-body">
                  <h4>EPISODE {result.id}</h4>
                  <h5>{result.name}</h5>
                  <h5>{result.air_date}</h5>
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




 
export default List;