import React from 'react'
import article_img from "../../static/images/article_example.png";

const Design = props => {
    return (
        <section className="App-service page design news" id={'design'}>
            <div className="area">
                <div className="content">
                    <div className="content-header">
                        <span>01</span>
                        <h2>ДИЗАЙН</h2>
                        <p>Дизайн не может ограничиваться рамками экрана и страницы, он нарушает их и
                            выходит за
                            пределы. Все наши проекты основываются на пространственном отожествлении
                            клиента,
                            привязанном к детальности компании. Правильно подобранный фирменный стиль
                            сделает
                            бренд неотразимым и запоминающимся. Учитывая весь накопленный опыта, у нас есть
                            необходимые знания и возможности, чтобы продумать все мельчайшие детали вашего
                            стиля</p>
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

export default Design