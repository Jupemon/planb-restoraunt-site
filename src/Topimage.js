import React from 'react';

const Topimage = (image) => {
    return ( 
    <div className="landing">
        <div className="home-wrap">
            <div className="home-inner" style={{backgroundImage:`url(${image})`}}>
            </div>
        </div>

        <div className="caption text-center">
        </div>
    </div> );
}
 
export default Topimage;