import React from 'react'
import ar_art from "../../static/images/ar_art.png";

const AR = props => {
    return (
        <section className="App-service ar" id={'ar'}>
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
                            <p>Сегодня мы можем предложить профессиональные AR-решения, оперативно
                                подстраивая
                                их под потребности наших клиентов.</p>
                        </div>
                        <div className="column info2">
                            <p>В наших силах осуществлять проекты любой сложности, начиная с первичного
                                анализа и разработкой и заканчивая комплексной поставкой и
                                сопровождением.</p>

                            <p>Мы ориентируемся на долгосрочное сотрудничество, которое будет полезно
                                обеим сторонам, и поэтому в наших силах предложить разработку AR-решений,
                                идеально подходящих под потребности наших клиентов.</p>
                        </div>
                        <div className="column info3">
                            <img alt="" src={ar_art} className="ar-image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AR