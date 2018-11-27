import React, {Component} from 'react';
import sert from "../../static/images/icon_cert.svg";
import './about.scss'
import ValueAnimator from '../../components/valueAnimator/valueAnimator'

class About extends Component {

    aboutValueAnimators = [];

    onShow() {
        for (let i = 0; i < this.aboutValueAnimators.length; i++) {
            this.aboutValueAnimators[i].startAnimation();
        }
    }

    render() {
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
                            <h3><span>> <ValueAnimator ref={(c) => this.aboutValueAnimators.push(c)}
                                                       className="about-value-animator" duration={1000} targetValue={40}
                                                       delay={800} interval={50}/></span></h3>
                            <p>охваченных городов России</p>
                        </div>
                        <div className="about-info animateFadeLeft animateFadeLeftDelay2">
                            <h3><span>> <ValueAnimator ref={(c) => this.aboutValueAnimators.push(c)}
                                                       className="about-value-animator" duration={1000}
                                                       targetValue={200}
                                                       delay={1000} interval={50}/></span></h3>
                            <p>работ в дизайне социальных сетей и веб</p>
                        </div>
                        <div className="about-info animateFadeLeft animateFadeLeftDelay3">
                            <h3><span>> <ValueAnimator ref={(c) => this.aboutValueAnimators.push(c)}
                                                       className="about-value-animator" duration={1000}
                                                       targetValue={800000}
                                                       delay={1200} interval={50}/></span></h3>
                            <p>экземпляров отпечатано с нашим дизайном</p>
                        </div>
                        <div className="about-info animateFadeLeft animateFadeLeftDelay4">
                            <h3><span><ValueAnimator ref={(c) => this.aboutValueAnimators.push(c)}
                                                     className="about-value-animator" duration={1000}
                                                     targetValue={150}
                                                     delay={1400} interval={50}/>+</span></h3>
                            <p>специалистов в команде</p>
                        </div>
                        <div className="about-info animateFadeLeft animateFadeLeftDelay5">
                            <h3><span>> <ValueAnimator ref={(c) => this.aboutValueAnimators.push(c)}
                                                       className="about-value-animator" duration={1000}
                                                       targetValue={3000}
                                                       delay={1600} interval={50}/></span></h3>
                            <p>упоминаний в СМИ</p>
                        </div>
                        <div className="about-info animateFadeLeft animateFadeLeftDelay6">
                            <h3><span>> <ValueAnimator ref={(c) => this.aboutValueAnimators.push(c)}
                                                       className="about-value-animator" duration={1000}
                                                       targetValue={1.5}
                                                       delay={1800} interval={50}/> млн</span></h3>
                            <p>человек охват аудитории</p>
                        </div>
                        <div className="about-info animateFadeLeft animateFadeLeftDelay7">
                            <h3><span>> <ValueAnimator ref={(c) => this.aboutValueAnimators.push(c)}
                                                       className="about-value-animator" duration={1000}
                                                       targetValue={500000}
                                                       delay={2000} interval={50}/></span></h3>
                            <p>просмотроы сайта</p>
                        </div>
                        <div className="about-info animateFadeLeft animateFadeLeftDelay8">
                            <h3><span><ValueAnimator ref={(c) => this.aboutValueAnimators.push(c)}
                                                     className="about-value-animator" duration={1000}
                                                     targetValue={300}
                                                     delay={2200} interval={50}/>+</span></h3>
                            <p>реализованных проектов</p>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default About