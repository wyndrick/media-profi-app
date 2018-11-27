import React from 'react'
import article_img from "../../static/images/article_example.png";

const Site = props => {
    return (
        <section className="App-service page sites news" id={'sites'}>
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
                            <img alt="" src={article_img}/>
                            <h3><a href="true">Деловая встреча «Подмосковная масленица»</a></h3>
                            <span className="subtitle">Правительство Московской области</span>
                            <p>Разработка фирменного стиля делового завтрака с губернатором Московской
                                облатсти
                                А.Ю. Воробьевым и представителей бизнеса</p>
                        </article>
                        <article>
                            <img alt="" src={article_img}/>
                            <h3><a href="true">Всероссийский молодежный инновационный конвент</a></h3>
                            <span className="subtitle">Федеральное агенство по делам молодежи</span>
                            <p>Фирменный стиль форума молодых инноваторов, проходившего в технополисе
                                «Москва»</p>
                        </article>
                        <article>
                            <img alt="" src={article_img}/>
                            <h3><a href="true">Семинары Fun Education</a></h3>
                            <span className="subtitle">Молодежный туроператор NeverSleep</span>
                            <p>Разработка фирменного стиля образовательных семинатов, проходивших в
                                университетах
                                и институтах в 10 регионах России</p>
                        </article>
                        <article>
                            <img alt="" src={article_img}/>
                            <h3><a href="true">Деловая встреча «Подмосковная масленица»</a></h3>
                            <span className="subtitle">Правительство Московской области</span>
                            <p>Разработка фирменного стиля делового завтрака с губернатором Московской
                                облатсти
                                А.Ю. Воробьевым и представителей бизнеса</p>
                        </article>
                        <article>
                            <img alt="" src={article_img}/>
                            <h3><a href="true">Всероссийский молодежный инновационный конвент</a></h3>
                            <span className="subtitle">Федеральное агенство по делам молодежи</span>
                            <p>Фирменный стиль форума молодых инноваторов, проходившего в технополисе
                                «Москва»</p>
                        </article>
                        <article>
                            <img alt="" src={article_img}/>
                            <h3><a href="true">Семинары Fun Education</a></h3>
                            <span className="subtitle">Молодежный туроператор NeverSleep</span>
                            <p>Разработка фирменного стиля образовательных семинатов, проходивших в
                                университетах
                                и институтах в 10 регионах России</p>
                        </article>


                    </div>
                    <div className="expand">
                        <a href="true">Развернуть</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Site