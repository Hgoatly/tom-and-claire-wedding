import React from 'react';

import './homepage.styles.css';

import image from '../../img/tom-and-claire.jpg'


function HomePage() {
    return (
        <div style={{height: '100vh',
                    width: '100vw'
                    }}>
        <div style={{ backgroundImage:`url(${image})`,
                      height:'100vh',
                      width: '100vw',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat'
                    }}>
                    <div id="greeting">Tom &amp; Claire's Wedding</div>
        </div>
        </div>
    )
}

export default HomePage