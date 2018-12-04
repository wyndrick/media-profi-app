import React from 'react'
import service_img_1 from "../../static/images/service_img_1.png";
import service_img_2 from "../../static/images/service_img_2.png";
import service_img_3 from "../../static/images/service_img_3.png";
import service_img_4 from "../../static/images/service_img_4.png";
import service_img_5 from "../../static/images/service_img_5.png";

const Services = props => {
    return (
        <section className="App-content page services" id={'services'}>
            <div className="area">
                <div className="content">
                    <div className="content-header">
                        <h2 className="title">{props.title}</h2>
                        <p className="description">{props.desc}</p>
                    </div>
                    <div className="service-info service-info-art">
                        <img className={"active"} alt={props.service[0].alt} src={props.service[0].src ? props.service[0].src :service_img_1}/>
                        <img alt={props.service[1].alt} src={props.service[1].src ? props.service[1].src :service_img_2}/>
                        <img alt={props.service[2].alt} src={props.service[2].src ? props.service[2].src :service_img_3}/>
                        <img alt={props.service[3].alt} src={props.service[3].src ? props.service[3].src :service_img_4}/>
                        <img alt={props.service[4].alt} src={props.service[4].src ? props.service[4].src :service_img_5}/>
                    </div>
                    <div className="info">
                        <ul id={"service-list"}>
                            <li className="service-info info1">
                                <div className="info-block" onClick={(e)=> {props.onServiceClick(e, "design")}} onMouseEnter={(e) => {props.servicesChangeImage(0)}}>
                                    <h3><span>01</span><strong className="title">{props.service[0].title}</strong></h3>
                                    <p>{props.service[0].desc}</p>
                                </div>
                                <div className={'right-chevron'} onClick={(e) => {
                                    props.slide(0);
                                    e.preventDefault();
                                    return false;
                                }}>&nbsp;</div>
                            </li>

                            <li className="service-info info2">
                                <div className="info-block" onClick={(e)=> {props.onServiceClick(e, "event")}}  onMouseEnter={(e) => {props.servicesChangeImage(1)}}>
                                    <h3><span>02</span><strong className="title">{props.service[1].title}</strong></h3>
                                    <p>{props.service[1].desc}</p>
                                </div>
                                <div className={'right-chevron'} onClick={(e) => {
                                    props.slide(1);
                                    e.preventDefault();
                                    return false;
                                }}>&nbsp;</div>
                            </li>

                            <li className="service-info info3">
                                <div className="info-block" onClick={(e)=> {props.onServiceClick(e, "site")}}  onMouseEnter={(e) => {props.servicesChangeImage(2)}}>
                                    <h3><span>03</span><strong className="title">{props.service[2].title}</strong></h3>
                                    <p>{props.service[2].desc}</p>
                                </div>
                                <div className={'right-chevron'} onClick={(e) => {
                                    props.slide(2);
                                    e.preventDefault();
                                    return false;
                                }}>&nbsp;</div>
                            </li>

                            <li className="service-info info4">
                                <div className="info-block" onClick={(e)=> {props.onServiceClick(e, "video")}}  onMouseEnter={(e) => {props.servicesChangeImage(3)}}>
                                    <h3><span>04</span><strong className="title">{props.service[3].title}</strong>
                                    </h3>
                                    <p>{props.service[3].desc}</p>
                                </div>
                                <div className={'right-chevron'} onClick={(e) => {
                                    props.slide(3);
                                    e.preventDefault();
                                    return false;
                                }}>&nbsp;</div>
                            </li>

                            <li className="service-info info5">
                                <div className="info-block" onClick={(e)=> {props.onServiceClick(e, "ar")}}  onMouseEnter={(e) => {props.servicesChangeImage(4)}}>
                                    <h3><span>05</span><strong className="title">{props.service[4].title}</strong></h3>
                                    <p>{props.service[4].desc}</p>
                                </div>
                                <div className={'right-chevron'} onClick={(e) => {
                                    props.slide(4);
                                    e.preventDefault();
                                    return false;
                                }}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services