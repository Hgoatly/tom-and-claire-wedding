import React from 'react';

import image from '../../img/tom-and-claire.jpg'


function HomePage() {
    return (
        <div style={{height: '100vh',
                    width: '100vw'
                    }}>
        <div style={{ backgroundImage:`url(${image})`,
                      height: '100%',
                      width: '100%',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat'
                    }}>
          Tom &amp; Claire's Wedding
        </div>
        </div>
    )
}

// const HomePage = () => (

//     <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '../../assets/tom-and-claire.jpg'})` }}>
//         console.log(Background)
//     </div>
// );

export default HomePage