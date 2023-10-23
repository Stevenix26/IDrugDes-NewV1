import React from 'react';
import headerimg from '../../assets/doctor1.png';


const Home = () => {
  return (
    <header>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 col-lg-8'>
                <h1>Welcome to IDRUGDES</h1>
                <p>where your health is our top priority.</p>
                <p>Discover a new era of prescription management and medication services right here.
                </p>
                <p>
                Protect your health and Take Care of your health
                </p>
                <button><a href="##">read more</a></button> 
                </div>
                <div className='col-lg-4 col-md-4'>
                 <img src={headerimg} alt='myown'/>
                
                </div>
            
            </div>
        
        </div>
    </header>
  )
}

export default Home;