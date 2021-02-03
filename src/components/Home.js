import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { Link } from "react-router-dom";
const home = () => {
    return (
       <div className="aligncenter margintop1 homepage">
        <h1>Home</h1>
           <p>All you need to know about Rick and Morty</p>   
           
    <div className="homepageblock">
    <MDBRow>
      <MDBCol className="homepagecolumns" md='4'>
        <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('bg2.jpg')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='white-text'>
                <MDBIcon icon='film' /> Episodes
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>All Episodes</strong>
              </MDBCardTitle>
              <p>
              After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband does not. 
              </p>
              <Link className='cwhite hlink' to ="/episodes/1">
              <MDBBtn color='pink'>
                <MDBIcon icon='clone left' className="iconmargin" /> 
                All episodes 
              </MDBBtn>
              </Link>
            </div>
          </div>
        </MDBCard>
      </MDBCol>

      <MDBCol className="homepagecolumns" md='4'>
        <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('portal.jpg')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4'>
            <div>
              <h5 className='white-text'>
              <MDBIcon icon='atlas' /> Characters
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>All Characters</strong>
              </MDBCardTitle>
              <p>
                Did you know that Rick and Morty's characters are based on the characters from
                "Back to the Future" - Doc and Marty? Enjoy browsing through the characters from the animated TV series we all love.
              </p>
              <Link className='cwhite hlink' to ="/characters/1">
              <MDBBtn color='deep-orange'>
                <MDBIcon icon='clone left' className="iconmargin" />
                All characters
              </MDBBtn>
              </Link>
            </div>
          </div>
        </MDBCard>
      </MDBCol>

    <MDBCol className="homepagecolumns" md='4'>
        <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('bg3.jpg')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='white-text'>
                <MDBIcon icon='location-arrow' /> Locations
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>All Locations</strong>
              </MDBCardTitle>
              <p>
              The family lives outside of Seattle, Washington. The adventures of Rick and Morty, however, take place across an infinite number of realities, with the characters travelling to other planets and dimensions.
              </p>
              <Link className='cwhite hlink' to ="/locations/1">
              <MDBBtn color='pink'>
                <MDBIcon icon='clone left' className="iconmargin" />
                All locations
              </MDBBtn>
              </Link>
            </div>
          </div>
        </MDBCard>
      </MDBCol>

    </MDBRow>
        

    </div>
       </div>
    );
}
 
export default home;