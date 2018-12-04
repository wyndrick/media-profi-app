import React from 'react'

const VideoContainer = props => {
    return (
        <section className="App-service page video" id={'video'}>
            <div className="area">
                <div className="content">
                    <div className="content-header">
                        <span>04</span>
                        <h2>{props.title}</h2>
                        <p>{props.desc}</p>

                    </div>
                    <video></video>
                </div>
            </div>
        </section>
    )
}

export default VideoContainer