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
                        <h2 className="title">НАШИ УСЛУГИ</h2>
                        <p className="description">Медиапрофи — креативное агенство с широким спектом услуг,
                            работающее с компаниями по всей России.</p>
                    </div>
                    <div className="service-info service-info-art">
                        <img className={"active"} alt="" src={service_img_1}/>
                        <img alt="" src={service_img_2}/>
                        <img alt="" src={service_img_3}/>
                        <img alt="" src={service_img_4}/>
                        <img alt="" src={service_img_5}/>
                    </div>
                    <div className="info">
                        <ul id={"service-list"}>
                            <li className="service-info info1">
                                <div className="info-block" onClick={(e)=> {props.onServiceClick(e, "design")}} onMouseEnter={(e) => {props.servicesChangeImage(0)}}>
                                    <h3><span>01</span><strong className="title">Дизайн</strong></h3>
                                    <p>Мы воплощаем уникальные творческие проекты с учетом специфики и
                                        направления
                                        деятельности вашей компании.</p>
                                </div>
                                <div className={'right-chevron'} onClick={(e) => {
                                    props.slide(0);
                                    e.preventDefault();
                                    return false;
                                }}>&nbsp;</div>
                            </li>

                            <li className="service-info info2">
                                <div className="info-block" onClick={(e)=> {props.onServiceClick(e, "event")}}  onMouseEnter={(e) => {props.servicesChangeImage(1)}}>
                                    <h3><span>02</span><strong className="title">Event</strong></h3>
                                    <p>Специализируемся на продюссировании мероприятий для частных и
                                        корпоративных клиентов,
                                        мы разрабатываем, планируем и управляем каждым проектом от замысла
                                        до
                                        исполнения.</p>
                                </div>
                                <div className={'right-chevron'} onClick={(e) => {
                                    props.slide(1);
                                    e.preventDefault();
                                    return false;
                                }}>&nbsp;</div>
                            </li>

                            <li className="service-info info3">
                                <div className="info-block" onClick={(e)=> {props.onServiceClick(e, "site")}}  onMouseEnter={(e) => {props.servicesChangeImage(2)}}>
                                    <h3><span>03</span><strong className="title">Сайты</strong></h3>
                                    <p>Разработанные нами веб-сайты визуально привлекательны и
                                        оптимизированы
                                        для
                                        результатов поиска и специально адаптированные к вашему бренду</p>
                                </div>
                                <div className={'right-chevron'} onClick={(e) => {
                                    props.slide(2);
                                    e.preventDefault();
                                    return false;
                                }}>&nbsp;</div>
                            </li>

                            <li className="service-info info4">
                                <div className="info-block" onClick={(e)=> {props.onServiceClick(e, "video")}}  onMouseEnter={(e) => {props.servicesChangeImage(3)}}>
                                    <h3><span>04</span><strong className="title">Видеопроизводство</strong>
                                    </h3>
                                    <p>Мы вдыхаем жизнь в утомительную формальность. Мы вдохновим ваших
                                        клиентов
                                        сочетанием
                                        увлекательных сценариев, высококлассных постановок, привлекательных
                                        анимаций и
                                        уникальных стилей пост-продакшена.</p>
                                </div>
                                <div className={'right-chevron'} onClick={(e) => {
                                    props.slide(3);
                                    e.preventDefault();
                                    return false;
                                }}>&nbsp;</div>
                            </li>

                            <li className="service-info info5">
                                <div className="info-block" onClick={(e)=> {props.onServiceClick(e, "ar")}}  onMouseEnter={(e) => {props.servicesChangeImage(4)}}>
                                    <h3><span>05</span><strong className="title">Приложения с дополненной
                                        реальностью</strong></h3>
                                    <p>Дополненная реальность (AR) является уникальным методом, который ввел
                                        новый класс
                                        моделирования, нарушая традиционные методы коммуникации и создавая
                                        инструменты для
                                        установления нового необычного контакта с окружающим миром.</p>
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