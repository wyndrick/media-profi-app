import React from 'react'
import ar_art from "../../static/images/ar_art.png";

const AR = props => {
    return (
        <section className="App-service page ar" id={'ar'}>
            <div className="area">
                <div className="content">
                    <div className="content-header">
                        <span>05</span>
                        <h2>{props.title}</h2>

                    </div>
                    <div className="ar-info">
                        <div className="column info1" dangerouslySetInnerHTML={{__html:props.info[0].text}} />
                        <div className="column info2" dangerouslySetInnerHTML={{__html:props.info[1].text}} />
                        <div className="column info3">
                            <img alt={props.info[2].alt} src={Boolean(props.info[2].img) ? props.info[2].img : ar_art} className="ar-image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AR