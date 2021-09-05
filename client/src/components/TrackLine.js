import React from 'react'

export default function TrackLine({color}) {

    return (
        <div className="track-line" style={{
            backgroundColor: color ? color : 'white',
            width: '100%',
            height: 5,
            marginBottom: 500
        }}></div>
        
    )
}
