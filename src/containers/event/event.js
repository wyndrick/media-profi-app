import React from 'react'
import article_img from "../../static/images/article_example.png";

const Event = props => {
    return (
        <section className="App-service page event" id={'event'}>
            <div className="area">
                <div className="content">

                    <div className="content-header">
                        <span>02</span>
                        <h2>{props.title}</h2>
                        <p>{props.desc}</p>
                    </div>
                    <div className="articles">
                        <div className={'articles-block'} id={"events-articles-list"}>
                            {props.works.length > 0
                                ?
                                props.works.map((w,k)=>{
                                    return (
                                        <article key={k} className={k === 0 ? 'selected': null } onClick={(e) => {props.slideTo(e, k)}}>
                                            <div className={'wrapper'}>
                                                <img alt={w.alt} src={Boolean(w.source) ? w.source : article_img}/>
                                                <div className="event-bottom">
                                                    <h3><a href="true">{w.title}</a></h3>
                                                    <a href={w.href} className="more">{w.btnTitle}</a>
                                                </div>
                                            </div>
                                        </article>
                                    )
                                })
                                :
                                null
                            }
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Event