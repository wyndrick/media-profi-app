import React from 'react'
import article_img from "../../static/images/article_example.png";

const Site = props => {
    return (
        <section className="App-service page sites news" id={'sites'}>
            <div className="area">
                <div className="content">
                    <div className="content-header">
                        <span>03</span>
                        <h2>{props.title}</h2>
                        <p>{props.desc}

                        </p>
                    </div>
                    <div className="articles">
                        {props.works.length > 0
                            ?
                            props.works.map((w,k)=>{
                                return(
                                    <article key={k}>
                                        <img alt={w.alt} src={Boolean(w.source) ? w.source : article_img}/>
                                        <h3><a href={w.href}>{w.title}</a></h3>
                                        <span className="subtitle">{w.subtitle}</span>
                                        <p>{w.desc}</p>
                                    </article>
                                )
                            })
                            :
                            null
                        }
                    </div>
                    <div className="expand">
                        <a id="expand-sites" onClick={(e) => {props.onExpandClick(e, 'sites');e.preventDefault(); return false}} href="/">{props.btnTitle}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Site