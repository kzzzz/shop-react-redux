import React from 'react';


class Flow extends React.Component{
    render(){
        return(
            <div className="flex-container">
                <div className="flex-item"><span>1.</span> Bedrijf zoeken</div>
                <div className="flex-item"><span>2.</span> Product kiezen</div>
                <div className="flex-item"><span>3.</span> Bestelling afronden</div>
            </div>
        )
    }
}

export default Flow;