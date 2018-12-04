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
                            <h2 className="title">{this.props.title}</h2>
                            <p className="description">{this.props.desc}</p>
                        </div>

                        <div className="reward-info">
                            <img alt={this.props.images[0].alt} src={sert}/>
                            <p>{this.props.images[0].text}</p>
                        </div>
                        <div className="reward-info">
                            <img alt={this.props.images[1].alt} src={sert}/>
                            <p>{this.props.images[1].text}</p>
                        </div>


                        <div className="about-info animateFadeLeft animateFadeLeftDelay1">
                            <h3><span>> <ValueAnimator ref={(c) => this.aboutValueAnimators.push(c)}
                                                       className="about-value-animator" duration={1000} targetValue={this.props.info[0].value}
                                                       delay={800} interval={50}/></span></h3>
                            <p>{this.props.info[0].text}</p>
                        </div>
                        <div className="about-info animateFadeLeft animateFadeLeftDelay2">
                            <h3><span>> <ValueAnimator ref={(c) => this.aboutValueAnimators.push(c)}
                                                       className="about-value-animator" duration={1000}
                                                       targetValue={this.props.info[1].value}
                                                       delay={1000} interval={50}/></span></h3>
                            <p>{this.props.info[1].text}</p>
                        </div>
                        <div className="about-info animateFadeLeft animateFadeLeftDelay3">
                            <h3><span>> <ValueAnimator ref={(c) => this.aboutValueAnimators.push(c)}
                                                       className="about-value-animator" duration={1000}
                                                       targetValue={this.props.info[2].value}
                                                       delay={1200} interval={50}/></span></h3>
                            <p>{this.props.info[2].text}</p>
                        </div>
                        <div className="about-info animateFadeLeft animateFadeLeftDelay4">
                            <h3><span><ValueAnimator ref={(c) => this.aboutValueAnimators.push(c)}
                                                     className="about-value-animator" duration={1000}
                                                     targetValue={this.props.info[3].value}
                                                     delay={1400} interval={50}/>+</span></h3>
                            <p>{this.props.info[3].text}</p>
                        </div>
                        <div className="about-info animateFadeLeft animateFadeLeftDelay5">
                            <h3><span>> <ValueAnimator ref={(c) => this.aboutValueAnimators.push(c)}
                                                       className="about-value-animator" duration={1000}
                                                       targetValue={this.props.info[4].value}
                                                       delay={1600} interval={50}/></span></h3>
                            <p>{this.props.info[4].text}</p>
                        </div>
                        <div className="about-info animateFadeLeft animateFadeLeftDelay6">
                            <h3><span>> <ValueAnimator ref={(c) => this.aboutValueAnimators.push(c)}
                                                       className="about-value-animator" duration={1000}
                                                       targetValue={this.props.info[5].value}
                                                       delay={1800} interval={50}  round={10}/> млн</span></h3>
                            <p>{this.props.info[5].text}</p>
                        </div>
                        <div className="about-info animateFadeLeft animateFadeLeftDelay7">
                            <h3><span>> <ValueAnimator ref={(c) => this.aboutValueAnimators.push(c)}
                                                       className="about-value-animator" duration={1000}
                                                       targetValue={this.props.info[6].value}
                                                       delay={2000} interval={50}/></span></h3>
                            <p>{this.props.info[6].text}</p>
                        </div>
                        <div className="about-info animateFadeLeft animateFadeLeftDelay8">
                            <h3><span><ValueAnimator ref={(c) => this.aboutValueAnimators.push(c)}
                                                     className="about-value-animator" duration={1000}
                                                     targetValue={this.props.info[7].value}
                                                     delay={2200} interval={50}/>+</span></h3>
                            <p>{this.props.info[7].text}</p>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default About