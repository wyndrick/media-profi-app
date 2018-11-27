import React from 'react'
import sert from "../../static/images/icon_cert.svg";
import './about.scss'

const About = props => {
    return (
        <section className="App-content page about" id={'about'}>
            <div className="area">
                <div className="content">
                    <div className="content-header">
                        <h2 className="title">О КОМПАНИИ</h2>
                        <p className="description">Полученный опыт и знания специалистов компании позволяют
                            успешно
                            разрабатывать программное обеспечение в следующих областях Полученный опыт и
                            знания
                            специалистов компании позволяют успешно разрабатывать программное обеспечение в
                            следующих областях</p>
                    </div>

                    <div className="reward-info">
                        <img alt="" src={sert}/>
                        <p>Награда за лучший дизайн</p>
                    </div>
                    <div className="reward-info">
                        <img alt="" src={sert}/>
                        <p>Награда за лучший дизайн</p>
                    </div>


                    <div className="about-info animateFadeLeft animateFadeLeftDelay1">
                        <h3><span>> 40</span></h3>
                        <p>охваченных городов России</p>
                    </div>
                    <div className="about-info animateFadeLeft animateFadeLeftDelay2">
                        <h3><span>> 200</span></h3>
                        <p>работ в дизайне социальных сетей и веб</p>
                    </div>
                    <div className="about-info animateFadeLeft animateFadeLeftDelay3">
                        <h3><span>> 800 000</span></h3>
                        <p>экземпляров отпечатано с нашим дизайном</p>
                    </div>
                    <div className="about-info animateFadeLeft animateFadeLeftDelay4">
                        <h3><span>150+</span></h3>
                        <p>специалистов в команде</p>
                    </div>
                    <div className="about-info animateFadeLeft animateFadeLeftDelay5">
                        <h3><span>> 3 000</span></h3>
                        <p>упоминаний в СМИ</p>
                    </div>
                    <div className="about-info animateFadeLeft animateFadeLeftDelay6">
                        <h3><span>> 1,5 млн</span></h3>
                        <p>человек охват аудитории</p>
                    </div>
                    <div className="about-info animateFadeLeft animateFadeLeftDelay7">
                        <h3><span>> 500 000</span></h3>
                        <p>просмотроы сайта</p>
                    </div>
                    <div className="about-info animateFadeLeft animateFadeLeftDelay8">
                        <h3><span>300+</span></h3>
                        <p>реализованных проектов</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About