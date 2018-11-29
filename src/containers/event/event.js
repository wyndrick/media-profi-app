import React from 'react'
import article_img from "../../static/images/article_example.png";

const Event = props => {
    return (
        <section className="App-service page event" id={'event'}>
            <div className="area">
                <div className="content">

                    <div className="content-header">
                        <span>02</span>
                        <h2>EVENT</h2>
                        <p>Мы обеспечиваем стратегическое планирование и творческое проведение встреч и
                            событий
                            различного характера. Мы предлагаем полное руководство и управление программой
                            мероприятия. Начиная с реализации концепции и обеспечения всей логистики события
                            и заканчивая его проведением.</p>
                    </div>
                    <div className="articles">
                        <div className={'articles-block'} id={"events-articles-list"}>
                            <article className={'selected'}  onClick={(e) => {props.slideTo(e, 0)}}>
                                <div className={'wrapper'}>
                                    <img alt="" src={article_img}/>
                                    <div className="event-bottom">
                                        <h3><a href="true">Социальные проекты</a></h3>
                                        <a href="true" className="more">ПОДРОБНЕЕ</a>
                                    </div>
                                </div>
                            </article>
                            <article  onClick={(e) => {props.slideTo(e, 1)}}>
                                <div className={'wrapper'}>
                                    <img alt="" src={article_img}/>
                                    <div className="event-bottom">
                                        <h3><a href="true">Корпоративные праздники</a></h3>
                                        <a href="true" className="more">ПОДРОБНЕЕ</a>
                                    </div>
                                </div>

                            </article>
                            <article  onClick={(e) => {props.slideTo(e, 2)}}>
                                <div className={'wrapper'}>
                                    <img alt="" src={article_img}/>
                                    <div className="event-bottom">

                                        <h3><a href="true">Образовательные</a></h3>
                                        <a href="true" className="more">ПОДРОБНЕЕ</a>
                                    </div>
                                </div>
                            </article>
                            <article  onClick={(e) => {props.slideTo(e, 3)}}>
                                <div className={'wrapper'}>
                                    <img alt="" src={article_img}/>
                                    <div className="event-bottom">
                                        <h3><a href="true">Выставки</a></h3>
                                        <a href="true" className="more">ПОДРОБНЕЕ</a>
                                    </div>
                                </div>

                            </article>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Event