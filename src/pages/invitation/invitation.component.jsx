import React from 'react';
import image from '../../img/flower-background.jpg';

import './invitation.styles.css';

function Invitation() {
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
                    <div className="invite">
                   <h3 className="names">Tom &amp; Claire</h3> <br />
                   <p className="invite-text">Would love you to join them on the occaision of their wedding. <br />
                    Saturday 7th May 2022. <br />
                    1.30 PM at Brentwood Cathedral. <br />
                    Followed by a reception at Greenwoods Hotel.
                    </p></div>
        </div>
        </div>
    )
};

export default Invitation
