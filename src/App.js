import React, {Component} from 'react';
import logo from './static/images/logo.svg';
import art from './static/images/header_art.svg';
import article_img from './static/images/article_example.png'
import sert from './static/images/icon_cert.svg';
import ar_art from './static/images/ar_art.png';
import img_devices from './static/images/img_devices.png';
import icon_contact from './static/images/icon_contact.svg';

import logo1 from './static/images/logo_1.png'
import logo2 from './static/images/logo_2.png'
import logo3 from './static/images/logo_3.png'
import logo4 from './static/images/logo_4.png'
import logo5 from './static/images/logo_5.png'
import logo6 from './static/images/logo_6.png'
import logo7 from './static/images/logo_7.png'
import logo8 from './static/images/logo_8.png'
import logo9 from './static/images/logo_9.png'
import logo10 from './static/images/logo_10.png'
import logo11 from './static/images/logo_11.png'
import logo12 from './static/images/logo_12.png'


import './App.scss';
import NavigationMenu from './components/navigationMenu/navigationMenu'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="area">
                        <NavigationMenu/>
                        <div className="brand-info">
                            <h1 className="title">МЕДИА
                                ПРОФИ</h1>
                            <p className="description">Мы помогаем создавать бренды и предоставляем современные,
                                бизнес-ориентированные решения, которые помогают достичь поставленных результатов.</p>
                            <a href="#">ПОДРОБНЕЕ</a>
                        </div>
                    </div>
                </header>
                <div className="App-content services">
                    <div className="area">
                        <div className="content">
                            <div className="content-header">
                                <h2 className="title">НАШИ УСЛУГИ</h2>
                                <p className="description">Медиапрофи — креативное агенство с широким спектом услуг,
                                    работающее с компаниями по всей России.</p>
                            </div>
                            <div className="service-info art">
                                <img src={img_devices}/>
                            </div>
                            <div className="service-info info1">
                                <h3><span>01</span><a href="#">Дизайн</a></h3>
                                <p>Мы воплощаем уникальные творческие проекты с учетом специфики и направления
                                    деятельности вашей компании.</p>
                            </div>

                            <div className="service-info info2">
                                <h3><span>02</span><a href="#">Event</a></h3>
                                <p>Специализируемся на продюссировании мероприятий для частных и корпоративных клиентов,
                                    мы разрабатываем, планируем и управляем каждым проектом от замысла до
                                    исполнения.</p>
                            </div>

                            <div className="service-info info3">
                                <h3><span>03</span><a href="#">Сайты</a></h3>
                                <p>Разработанные нами веб-сайты визуально привлекательны и оптимизированы для
                                    результатов поиска и специально адаптированные к вашему бренду</p>
                            </div>

                            <div className="service-info info4">
                                <h3><span>04</span><a href="#">Видеопроизводство</a></h3>
                                <p>Мы вдыхаем жизнь в утомительную формальность. Мы вдохновим ваших клиентов сочетанием
                                    увлекательных сценариев, высококлассных постановок, привлекательных анимаций и
                                    уникальных стилей пост-продакшена.</p>
                            </div>

                            <div className="service-info info5">
                                <h3><span>05</span><a href="#">Приложения с дополненной реальностью</a></h3>
                                <p>Дополненная реальность (AR) является уникальным методом, который ввел новый класс
                                    моделирования, нарушая традиционные методы коммуникации и создавая инструменты для
                                    установления нового необычного контакта с окружающим миром.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="App-content about">
                    <div className="area">
                        <div className="content">
                            <div className="content-header">
                                <h2 className="title">О КОМПАНИИ</h2>
                                <p className="description">Полученный опыт и знания специалистов компании позволяют
                                    успешно
                                    разрабатывать программное обеспечение в следующих областях Полученный опыт и знания
                                    специалистов компании позволяют успешно разрабатывать программное обеспечение в
                                    следующих областях</p>
                            </div>

                            <div className="reward-info">
                                <img src={sert}/>
                                <p>Награда за лучший дизайн</p>
                            </div>
                            <div className="reward-info">
                                <img src={sert}/>
                                <p>Награда за лучший дизайн</p>
                            </div>


                            <div className="about-info">
                                <h3><span>> 40</span></h3>
                                <p>охваченных городов России</p>
                            </div>
                            <div className="about-info">
                                <h3><span>> 200</span></h3>
                                <p>работ в дизайне социальных сетей и веб</p>
                            </div>
                            <div className="about-info">
                                <h3><span>> 800 000</span></h3>
                                <p>экземпляров отпечатано с нашим дизайном</p>
                            </div>
                            <div className="about-info">
                                <h3><span>150+</span></h3>
                                <p>специалистов в команде</p>
                            </div>
                            <div className="about-info">
                                <h3><span>> 3 000</span></h3>
                                <p>упоминаний в СМИ</p>
                            </div>
                            <div className="about-info">
                                <h3><span>> 1,5 млн</span></h3>
                                <p>человек охват аудитории</p>
                            </div>
                            <div className="about-info">
                                <h3><span>> 500 000</span></h3>
                                <p>просмотроы сайта</p>
                            </div>
                            <div className="about-info">
                                <h3><span>300+</span></h3>
                                <p>реализованных проектов</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="App-service design news">
                    <div className="area">
                        <div className="content">
                            <div className="content-header">
                                <span>01</span>
                                <h2>ДИЗАЙН</h2>
                                <p>Дизайн не может ограничиваться рамками экрана и страницы, он нарушает их и выходит за
                                    пределы. Все наши проекты основываются на пространственном отожествлении клиента,
                                    привязанном к детальности компании. Правильно подобранный фирменный стиль сделает
                                    бренд неотразимым и запоминающимся. Учитывая весь накопленный опыта, у нас есть
                                    необходимые знания и возможности, чтобы продумать все мельчайшие детали вашего
                                    стиля</p>
                            </div>
                            <div className="articles">
                                <article>
                                    <img src={article_img}/>
                                    <h3><a href="#">Деловая встреча «Подмосковная масленица»</a></h3>
                                    <span className="subtitle">Правительство Московской области</span>
                                    <p>Разработка фирменного стиля делового завтрака с губернатором Московской облатсти
                                        А.Ю. Воробьевым и представителей бизнеса</p>
                                </article>
                                <article>
                                    <img src={article_img}/>
                                    <h3><a href="#">Всероссийский молодежный инновационный конвент</a></h3>
                                    <span className="subtitle">Федеральное агенство по делам молодежи</span>
                                    <p>Фирменный стиль форума молодых инноваторов, проходившего в технополисе
                                        «Москва»</p>
                                </article>
                                <article>
                                    <img src={article_img}/>
                                    <h3><a href="#">Семинары Fun Education</a></h3>
                                    <span className="subtitle">Молодежный туроператор NeverSleep</span>
                                    <p>Разработка фирменного стиля образовательных семинатов, проходивших в
                                        университетах
                                        и институтах в 10 регионах России</p>
                                </article>
                                <article>
                                    <img src={article_img}/>
                                    <h3><a href="#">Деловая встреча «Подмосковная масленица»</a></h3>
                                    <span className="subtitle">Правительство Московской области</span>
                                    <p>Разработка фирменного стиля делового завтрака с губернатором Московской облатсти
                                        А.Ю. Воробьевым и представителей бизнеса</p>
                                </article>
                                <article>
                                    <img src={article_img}/>
                                    <h3><a href="#">Всероссийский молодежный инновационный конвент</a></h3>
                                    <span className="subtitle">Федеральное агенство по делам молодежи</span>
                                    <p>Фирменный стиль форума молодых инноваторов, проходившего в технополисе
                                        «Москва»</p>
                                </article>
                                <article>
                                    <img src={article_img}/>
                                    <h3><a href="#">Семинары Fun Education</a></h3>
                                    <span className="subtitle">Молодежный туроператор NeverSleep</span>
                                    <p>Разработка фирменного стиля образовательных семинатов, проходивших в
                                        университетах
                                        и институтах в 10 регионах России</p>
                                </article>


                            </div>
                            <div className="expand">
                                <a href="#">Развернуть</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="App-service event">
                    <div className="area">
                        <div className="content">
                            <div className="content-header">
                                <span>02</span>
                                <h2>EVENT</h2>
                                <p>Мы обеспечиваем стратегическое планирование и творческое проведение встреч и событий
                                    различного характера. Мы предлагаем полное руководство и управление программой
                                    мероприятия. Начиная с реализации концепции и обеспечения всей логистики события
                                    и заканчивая его проведением.</p>
                            </div>
                            <div className="articles">
                                <article>
                                    <img src={article_img}/>
                                    <div className="event-bottom">
                                        <h3><a href="#">Социальные проекты</a></h3>
                                        <a href="#" className="more">ПОДРОБНЕЕ</a>
                                    </div>
                                </article>
                                <article>
                                    <img src={article_img}/>
                                    <div className="event-bottom">
                                        <h3><a href="#">Корпоративные праздники</a></h3>
                                        <a href="#" className="more">ПОДРОБНЕЕ</a>
                                    </div>
                                </article>
                                <article>
                                    <img src={article_img}/>
                                    <div className="event-bottom">

                                        <h3><a href="#">Образовательные</a></h3>
                                        <a href="#" className="more">ПОДРОБНЕЕ</a>
                                    </div>
                                </article>
                                <article>
                                    <img src={article_img}/>
                                    <div className="event-bottom">
                                        <h3><a href="#">Выставки</a></h3>
                                        <a href="#" className="more">ПОДРОБНЕЕ</a>
                                    </div>
                                </article>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="App-service sites news">
                    <div className="area">
                        <div className="content">
                            <div className="content-header">
                                <span>03</span>
                                <h2>САЙТЫ</h2>
                                <p>Самые впечатляющие веб-сайты основаны на интеллектуальном дизайне, соединяющем в
                                    себе четкое видение композиции и применение передовых технологических решений.
                                    Веб-сайт является необходимым инструментом привлечения клиентов для современной
                                    компании. Эффективный, красивый сайт меняет правила игры. Мы разрабатываем
                                    адаптивные сайты с заботой обо всем, начиная с информационной архитектуры и
                                    заканчивая подборкой качественного контента.

                                </p>
                            </div>
                            <div className="articles">
                                <article>
                                    <img src={article_img}/>
                                    <h3><a href="#">Деловая встреча «Подмосковная масленица»</a></h3>
                                    <span className="subtitle">Правительство Московской области</span>
                                    <p>Разработка фирменного стиля делового завтрака с губернатором Московской облатсти
                                        А.Ю. Воробьевым и представителей бизнеса</p>
                                </article>
                                <article>
                                    <img src={article_img}/>
                                    <h3><a href="#">Всероссийский молодежный инновационный конвент</a></h3>
                                    <span className="subtitle">Федеральное агенство по делам молодежи</span>
                                    <p>Фирменный стиль форума молодых инноваторов, проходившего в технополисе
                                        «Москва»</p>
                                </article>
                                <article>
                                    <img src={article_img}/>
                                    <h3><a href="#">Семинары Fun Education</a></h3>
                                    <span className="subtitle">Молодежный туроператор NeverSleep</span>
                                    <p>Разработка фирменного стиля образовательных семинатов, проходивших в
                                        университетах
                                        и институтах в 10 регионах России</p>
                                </article>
                                <article>
                                    <img src={article_img}/>
                                    <h3><a href="#">Деловая встреча «Подмосковная масленица»</a></h3>
                                    <span className="subtitle">Правительство Московской области</span>
                                    <p>Разработка фирменного стиля делового завтрака с губернатором Московской облатсти
                                        А.Ю. Воробьевым и представителей бизнеса</p>
                                </article>
                                <article>
                                    <img src={article_img}/>
                                    <h3><a href="#">Всероссийский молодежный инновационный конвент</a></h3>
                                    <span className="subtitle">Федеральное агенство по делам молодежи</span>
                                    <p>Фирменный стиль форума молодых инноваторов, проходившего в технополисе
                                        «Москва»</p>
                                </article>
                                <article>
                                    <img src={article_img}/>
                                    <h3><a href="#">Семинары Fun Education</a></h3>
                                    <span className="subtitle">Молодежный туроператор NeverSleep</span>
                                    <p>Разработка фирменного стиля образовательных семинатов, проходивших в
                                        университетах
                                        и институтах в 10 регионах России</p>
                                </article>


                            </div>
                            <div className="expand">
                                <a href="#">Развернуть</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="App-service video">
                    <div className="area">
                        <div className="content">
                            <div className="content-header">
                                <span>04</span>
                                <h2>ВИДЕОПРОИЗВОДСТВО</h2>
                                <p>Видео контент о компании является одним из ярчейших способов остановить взор клиента
                                    именно на вас. Наш подход сочетает в себе опыт и страсть с глубоким пониманием
                                    деятельности вашей компании и вашей аудитории. Все это необходимо для того,
                                    чтобы сделать видео привлекательным, вдохновляющим и призывающим людей к
                                    действиям. Эффективное видео — это инструмент, который сподвигает аудиторию к
                                    действиям. Мы создаем целевые стратегии, чтобы ваш видеоконтент правильно
                                    доводил заложенные мысли к целевой аудитории.</p>

                            </div>
                            <video></video>
                        </div>
                    </div>
                </div>


                <div className="App-service ar">
                    <div className="area">
                        <div className="content">
                            <div className="content-header">
                                <span>05</span>
                                <h2>ПРИЛОЖЕНИЯ С ДОПОЛНЕННОЙ РЕАЛЬНОСТЬЮ</h2>

                            </div>
                            <div className="ar-info">
                                <div className="column info1">
                                    <p>Дополненная реальность (Augmented Reality) — технология интеграции 3D-моделей
                                        в окружающее пространство рядом с реальными объектами.</p>
                                    <p>Всего каких-то несколько лет назад дополненная реальность казалась мечтой
                                        прогрессивных людей о мире, соединяющем мир реальный с виртуальным.</p>
                                    <p>Сегодня мы можем предложить профессиональные AR-решения, оперативно подстраивая
                                        их под потребности наших клиентов.</p>
                                </div>
                                <div className="column info2">
                                    <p>В наших силах осуществлять проекты любой сложности, начиная с первичного
                                        анализа и разработкой и заканчивая комплексной поставкой и сопровождением.</p>

                                    <p>Мы ориентируемся на долгосрочное сотрудничество, которое будет полезно
                                        обеим сторонам, и поэтому в наших силах предложить разработку AR-решений,
                                        идеально подходящих под потребности наших клиентов.</p>
                                </div>
                                <div className="column info3">
                                    <img src={ar_art} className="ar-image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="App-service clients">
                    <div className="area">
                        <div className="content">
                            <div className="content-header">
                                <h2>НАМ ДОВЕРЯЮТ</h2>
                            </div>
                            <div className="clients-page">
                                <a href="#"><img src={logo1}/></a>
                                <a href="#"><img src={logo2}/></a>
                                <a href="#"><img src={logo3}/></a>
                                <a href="#"><img src={logo4}/></a>
                                <a href="#"><img src={logo5}/></a>
                                <a href="#"><img src={logo6}/></a>
                                <a href="#"><img src={logo7}/></a>
                                <a href="#"><img src={logo8}/></a>
                                {/*<a href="#"><img src={logo9}/></a>*/}
                                {/*<a href="#"><img src={logo10}/></a>*/}
                                {/*<a href="#"><img src={logo11}/></a>*/}
                                {/*<a href="#"><img src={logo12}/></a>*/}
                            </div>
                            <ul className="pagination-list">
                                <li className="pagination-item active"><a href="#"></a></li>
                                <li className="pagination-item"><a href="#"></a></li>
                                <li className="pagination-item"><a href="#"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <footer className="App-footer">
                    <div className="area">
                        <div class="footer">
                            <div className={'form'}>
                                <h2>СВЯЖИТЕСЬ<br/> С НАМИ</h2>
                                <div className={'contact-form'}>
                                    <input className={'name'} id="inputName" type={'text'} placeholder={'Как вас зовут?'}/>
                                    <input className={'phone'} id="inputMessage" className="inputPhone" type={'text'}
                                           placeholder={'Номер телефона'}/>
                                    <input className={'message'} id="inputPhone" type={'text'} placeholder={'Сообщение'}/>


                                    <button className={'button-send'}
                                            onClick={this.submitForm}>
                                        ОТПРАВИТЬ
                                    </button>
                                    <p  className={'privacy'}><a target="_blank" rel="noopener noreferrer"
                                       href="https://policies.google.com/privacy?hl=ru&gl=ua">Политика
                                        конфиденциальности</a></p>
                                    <p className={'copyright'}>&copy; 2005–2018. Все права защищены</p>

                                </div>
                            </div>
                            <div className={'cutaway'}>
                                <img src={icon_contact} />
                                <div className={'contacts'}>
                                    <span>ООО «МЕДИАПРОФИ»</span>
                                    <span>тел.: +7 (495) 531-52-52</span>
                                    <span>эл. почта: <a href='#'> mediaproffi@mail.ru</a> </span>
                                </div>
                                <a id={'move-to-top'} href='#'></a>
                            </div>
                        </div>

                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
