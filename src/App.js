import React from 'react';
import ReactPageScroller from "react-page-scroller";
import firebase from "firebase";

import './App.scss';
import NavigationMenu from './components/navigationMenu/navigationMenu'

import Main from './layouts/main'
import Header from './containers/header/header'
import Services from './containers/services/services'
import About from "./containers/about/about";
import Design from "./containers/design/design";
import Event from "./containers/event/event";
import Site from "./containers/site/site";
import VideoContainer from "./containers/video/video";
import AR from "./containers/ar-app/ar";
import Partners from "./containers/partners/partners";
import Contacts from "./containers/contacts/contacts";

class App extends React.Component {

    lastPage = 0

    state = {
        content: {
            about:{
                title:"О КОМПАНИ",
                desc:"Полученный опыт и знания специалистов компании позволяют\n" +
                    "                                успешно\n" +
                    "                                разрабатывать программное обеспечение в следующих областях Полученный опыт и\n" +
                    "                                знания\n" +
                    "                                специалистов компании позволяют успешно разрабатывать программное обеспечение в\n" +
                    "                                следующих областях",
                images:[
                    {
                        alt:"",
                        text:"Награда за лучший дизайн"
                    },
                    {
                        alt:"",
                        text:"Награда за лучший дизайн"
                    },
                ],
                info:[
                    {value:40,text:"охваченных городов России"},
                    {value:200,text:"работ в дизайне социальных сетей и веб"},
                    {value:800000,text:"экземпляров отпечатано с нашим дизайном"},
                    {value:150,text:"специалистов в команде"},
                    {value:3000,text:"упоминаний в СМИ"},
                    {value:1.5,text:"человек охват аудитории"},
                    {value:500000,text:"просмотроы сайта"},
                    {value:300,text:"реализованных проектов"},
                ],

            },
            ar:{
                title:"ПРИЛОЖЕНИЯ С ДОПОЛНЕННОЙ РЕАЛЬНОСТЬЮ",
                info:[
                    {text:`<p>Дополненная реальность (Augmented Reality) — технология интеграции 3D-моделей
                                в окружающее пространство рядом с реальными объектами.</p>
                            <p>Всего каких-то несколько лет назад дополненная реальность казалась мечтой
                                прогрессивных людей о мире, соединяющем мир реальный с виртуальным.</p>
                            <p>Сегодня мы можем предложить профессиональные AR-решения, оперативно
                                подстраивая
                                их под потребности наших клиентов.</p>`},
                    {text:`<p>В наших силах осуществлять проекты любой сложности, начиная с первичного
                                анализа и разработкой и заканчивая комплексной поставкой и
                                сопровождением.</p>
                            <p>Мы ориентируемся на долгосрочное сотрудничество, которое будет полезно
                                обеим сторонам, и поэтому в наших силах предложить разработку AR-решений,
                                идеально подходящих под потребности наших клиентов.</p>`},
                    {alt:"",img:""}
                ],
            },
            footer:{
                title:`СВЯЖИТЕСЬ<br/> С НАМИ`,
                form:{
                    inputName:"Как вас зовут?",
                    inputPhone:"Номер телефона",
                    inputMessage:"Сообщение",
                    btnSend:"ОТПРАВИТЬ"
                },
                contacts:{
                    title:"ООО «МЕДИАПРОФИ»",
                    phone:"тел.: +7 (495) 531-52-52",
                    email:{
                        title:"эл. почта: ",
                        value:"mediaproffi@mail.ru",
                    },
                },
                policy:{
                    title:"Политика\n" +
                        "                        конфиденциальности",
                    source:"https://policies.google.com/privacy?hl=ru&gl=ua",
                },
                copyright:`&copy; 2005–2018. Все права защищены`,
            },
            design:{
                title:"ДИЗАЙН",
                desc:`Дизайн не может ограничиваться рамками экрана и страницы, он нарушает их и
                            выходит за
                            пределы. Все наши проекты основываются на пространственном отожествлении
                            клиента,
                            привязанном к детальности компании. Правильно подобранный фирменный стиль
                            сделает
                            бренд неотразимым и запоминающимся. Учитывая весь накопленный опыта, у нас есть
                            необходимые знания и возможности, чтобы продумать все мельчайшие детали вашего
                            стиля`,
                works:[
                    {href:"",source:"",alt:"",title:"Деловая встреча «Подмосковная масленица»",subtitle:"Правительство Московской области",desc:"Разработка фирменного стиля делового завтрака с губернатором Московской\n" +
                            "                                облатсти\n" +
                            "                                А.Ю. Воробьевым и представителей бизнеса"},
                    {href:"",source:"",alt:"",title:"Всероссийский молодежный инновационный конвент",subtitle:"Федеральное агенство по делам молодежи",desc:"Фирменный стиль форума молодых инноваторов, проходившего в технополисе\n" +
                            "                                «Москва»"},
                    {href:"",source:"",alt:"",title:"Семинары Fun Education",subtitle:"Молодежный туроператор NeverSleep",desc:"Разработка фирменного стиля образовательных семинатов, проходивших в\n" +
                            "                                университетах\n" +
                            "                                и институтах в 10 регионах России"},
                    {href:"",source:"",alt:"",title:"Деловая встреча «Подмосковная масленица»",subtitle:"Правительство Московской области",desc:"Разработка фирменного стиля делового завтрака с губернатором Московской\n" +
                            "                                облатсти\n" +
                            "                                А.Ю. Воробьевым и представителей бизнеса"},
                    {href:"",source:"",alt:"",title:"Всероссийский молодежный инновационный конвент",subtitle:"Федеральное агенство по делам молодежи",desc:"Фирменный стиль форума молодых инноваторов, проходившего в технополисе\n" +
                            "                                «Москва»"},
                    {href:"",source:"",alt:"",title:"Семинары Fun Education",subtitle:"Молодежный туроператор NeverSleep",desc:"Разработка фирменного стиля образовательных семинатов, проходивших в\n" +
                            "                                университетах\n" +
                            "                                и институтах в 10 регионах России"},
                ],
                btnTitle:"Развернуть",
            },
            event:{
                title:"EVENT",
                desc:`Мы обеспечиваем стратегическое планирование и творческое проведение встреч и
                            событий
                            различного характера. Мы предлагаем полное руководство и управление программой
                            мероприятия. Начиная с реализации концепции и обеспечения всей логистики события
                            и заканчивая его проведением.`,
                works:[
                    {alt:"",source:"",href:"",btnTitle:"ПОДРОБНЕЕ",title:"Социальные проекты"},
                    {alt:"",source:"",href:"",btnTitle:"ПОДРОБНЕЕ",title:"Корпоративные праздники"},
                    {alt:"",source:"",href:"",btnTitle:"ПОДРОБНЕЕ",title:"Образовательные"},
                    {alt:"",source:"",href:"",btnTitle:"ПОДРОБНЕЕ",title:"Выставки"},
                ],
            },
            header:{
                title:`МЕДИА
                            ПРОФИ`,
                desc:`Мы помогаем создавать бренды и предоставляем современные,
                            бизнес-ориентированные решения, которые помогают достичь поставленных
                            результатов.`,
                btnTitle:"ПОДРОБНЕЕ",
                alt:"",
                source:""
            },
            partners:{
                title:"НАМ ДОВЕРЯЮТ",
                images:[]
            },
            services:{
                title:"НАШИ УСЛУГИ",
                desc:"Медиапрофи — креативное агенство с широким спектом услуг,\n" +
                    "                            работающее с компаниями по всей России.",
                service:[
                    {alt:"",src:"",title:"Дизайн",desc:"Мы воплощаем уникальные творческие проекты с учетом специфики и\n" +
                            "                                        направления\n" +
                            "                                        деятельности вашей компании."},
                    {alt:"",src:"",title:"Event",desc:"Специализируемся на продюссировании мероприятий для частных и\n" +
                            "                                        корпоративных клиентов,\n" +
                            "                                        мы разрабатываем, планируем и управляем каждым проектом от замысла\n" +
                            "                                        до\n" +
                            "                                        исполнения."},
                    {alt:"",src:"",title:"Сайты",desc:"Разработанные нами веб-сайты визуально привлекательны и\n" +
                            "                                        оптимизированы\n" +
                            "                                        для\n" +
                            "                                        результатов поиска и специально адаптированные к вашему бренду"},
                    {alt:"",src:"",title:"Видеопроизводство",desc:"Мы вдыхаем жизнь в утомительную формальность. Мы вдохновим ваших\n" +
                            "                                        клиентов\n" +
                            "                                        сочетанием\n" +
                            "                                        увлекательных сценариев, высококлассных постановок, привлекательных\n" +
                            "                                        анимаций и\n" +
                            "                                        уникальных стилей пост-продакшена."},
                    {alt:"",src:"",title:"Приложения с дополненной\n" +
                            "                                        реальностью",desc:"Дополненная реальность (AR) является уникальным методом, который ввел\n" +
                            "                                        новый класс\n" +
                            "                                        моделирования, нарушая традиционные методы коммуникации и создавая\n" +
                            "                                        инструменты для\n" +
                            "                                        установления нового необычного контакта с окружающим миром."},
                ],
            },
            site:{
                title:"САЙТЫ",
                desc:"Самые впечатляющие веб-сайты основаны на интеллектуальном дизайне, соединяющем в\n" +
                    "                            себе четкое видение композиции и применение передовых технологических решений.\n" +
                    "                            Веб-сайт является необходимым инструментом привлечения клиентов для современной\n" +
                    "                            компании. Эффективный, красивый сайт меняет правила игры. Мы разрабатываем\n" +
                    "                            адаптивные сайты с заботой обо всем, начиная с информационной архитектуры и\n" +
                    "                            заканчивая подборкой качественного контента.",
                works:[
                    {href:"",source:"",alt:"",title:"Деловая встреча «Подмосковная масленица»",subtitle:"Правительство Московской области",desc:"Разработка фирменного стиля делового завтрака с губернатором Московской\n" +
                            "                                облатсти\n" +
                            "                                А.Ю. Воробьевым и представителей бизнеса"},
                    {href:"",source:"",alt:"",title:"Всероссийский молодежный инновационный конвент",subtitle:"Федеральное агенство по делам молодежи",desc:"Фирменный стиль форума молодых инноваторов, проходившего в технополисе\n" +
                            "                                «Москва»"},
                    {href:"",source:"",alt:"",title:"Семинары Fun Education",subtitle:"Молодежный туроператор NeverSleep",desc:"Разработка фирменного стиля образовательных семинатов, проходивших в\n" +
                            "                                университетах\n" +
                            "                                и институтах в 10 регионах России"},
                    {href:"",source:"",alt:"",title:"Деловая встреча «Подмосковная масленица»",subtitle:"Правительство Московской области",desc:"Разработка фирменного стиля делового завтрака с губернатором Московской\n" +
                            "                                облатсти\n" +
                            "                                А.Ю. Воробьевым и представителей бизнеса"},
                    {href:"",source:"",alt:"",title:"Всероссийский молодежный инновационный конвент",subtitle:"Федеральное агенство по делам молодежи",desc:"Фирменный стиль форума молодых инноваторов, проходившего в технополисе\n" +
                            "                                «Москва»"},
                    {href:"",source:"",alt:"",title:"Семинары Fun Education",subtitle:"Молодежный туроператор NeverSleep",desc:"Разработка фирменного стиля образовательных семинатов, проходивших в\n" +
                            "                                университетах\n" +
                            "                                и институтах в 10 регионах России"},
                ],
                btnTitle:"Развернуть",
            },
            video:{
                title:"ВИДЕОПРОИЗВОДСТВО",
                desc:"Видео контент о компании является одним из ярчейших способов остановить взор\n" +
                    "                            клиента\n" +
                    "                            именно на вас. Наш подход сочетает в себе опыт и страсть с глубоким пониманием\n" +
                    "                            деятельности вашей компании и вашей аудитории. Все это необходимо для того,\n" +
                    "                            чтобы сделать видео привлекательным, вдохновляющим и призывающим людей к\n" +
                    "                            действиям. Эффективное видео — это инструмент, который сподвигает аудиторию к\n" +
                    "                            действиям. Мы создаем целевые стратегии, чтобы ваш видеоконтент правильно\n" +
                    "                            доводил заложенные мысли к целевой аудитории.",
            },
        },
        menu:{
            logo:{
                alt:"",
                source:"",
                href:"",
            },
            elements:[
                {title:"Услуги",href:"services"},
                {title:"О компании",href:"about"},
                {title:"Клиенты",href:"clients"},
                {title:"Контакты",href:"footer"},
            ],
        }
    }

    goToPage = (e, pageId) => {
        console.log(pageId)
        if (this.navigationMenu.pages.hasOwnProperty(pageId)) {
            let page = this.navigationMenu.pages[pageId];
            this.reactPageScroll.goToPage(page.index)
        }
    }

    disableHandlePageScroller = e => {
        e.stopPropagation()
    }


    disableTouch = e => {
        e.stopPropagation()
    }

    removeListeners = (element,event) => {
        if ((event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight && element.id !== "footer") || event.target.scrollTop === 0)
        {
            element.removeEventListener("wheel",this.disableHandlePageScroller,false)
            element.removeEventListener("touchmove",this.disableHandlePageScroller,false)
            element.removeEventListener("keydown",this.disableHandlePageScroller,false)
            element.removeEventListener("scroll",this.removeListeners,false)
        }
    }

    addListeners = (element) => {
        element.addEventListener("wheel",this.disableHandlePageScroller)
        element.addEventListener("touchmove",this.disableHandlePageScroller)
        element.addEventListener("keydown",this.disableHandlePageScroller)
        element.addEventListener("scroll",(e) => { this.removeListeners(element,e) })
    }


    onChangePage = pageNumber => {
        console.log(window.innerWidth)

        let timeout = 900;
        if (this.lastPage > pageNumber) {
            timeout = 100;
        }
        switch (pageNumber) {
            case 1:
                this.pageID = "header"
                setTimeout(this.navigationMenu.toggleDefault, timeout)
                break
            case 2:
                this.pageID = "services"
                setTimeout(this.navigationMenu.toggleInvert, timeout)
                break
            case 3:
                this.pageID = "about"
                setTimeout(this.navigationMenu.toggleInvert, timeout)
                this.pageAbout.onShow();
                if (window.innerWidth < 768) {
                    this.addListeners(document.getElementById(this.pageID))
                }
                break
            case 4:
                this.pageID = "design"
                setTimeout(this.navigationMenu.toggleInvert, timeout)
                let elemDesign = document.getElementById(this.pageID)
                if ( elemDesign.classList.contains("expanded")) {
                    this.addListeners(elemDesign)
                }
                break;
            case 5:
                this.pageID = "event"
                setTimeout(this.navigationMenu.toggleInvert, timeout)
                break
            case 6:
                this.pageID = "sites"
                setTimeout(this.navigationMenu.toggleInvert, timeout)
                let elemSite = document.getElementById(this.pageID)
                if ( elemSite.classList.contains("expanded")) {
                    this.addListeners(elemSite)
                }
                break
            case 7:
                this.pageID = "video"
                setTimeout(this.navigationMenu.toggleInvert, timeout)
                break
            case 8:
                this.pageID = "ar"
                setTimeout(this.navigationMenu.toggleInvert, timeout)
                if (window.innerWidth < 768) {
                    this.addListeners(document.getElementById(this.pageID))
                }
                break
            case 9:
                this.pageID = "clients"
                setTimeout(this.navigationMenu.toggleInvert, timeout)
                break
            case 10:
                this.pageID = "footer"
                setTimeout(this.navigationMenu.toggleDefault, timeout)
                if (window.innerWidth < 768) {
                    this.addListeners(document.getElementById(this.pageID))
                }
                break
            default:
                break
        }
        this.lastPage = pageNumber;
        this.navigationMenu.setActivePage(this.pageID)
    }


    servicesChangeImage = (index) => {
        let images = document.getElementsByClassName("service-info-art")[0].children;
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove("active");
        }
        images[index].classList.add("active")
    }


    servicesSlide = index => {
        let elem = document.getElementById("service-list");
        let nextIndex = index;
        if (elem.children[index].classList.contains("past") === false) {
            nextIndex += 1;
        }
        elem.children[index].classList.toggle("past")
        const percent = nextIndex * -100;
        const offset = nextIndex * 90;
        elem.style.transform = "translateX(calc(" + percent + "% + " + offset + "px))"
        this.servicesChangeImage(nextIndex);
    }

    onExpandClick = (ev, id )=> {
        ev.target.parentElement.classList.toggle("hidden");
        let elem = document.getElementById(id);
        this.addListeners(elem);
        elem.classList.toggle("expanded")
    }


    eventsSlideTo = (e, index) => {
        let elem = document.getElementById("events-articles-list");
        const percent = index * -100;
        const offset = index * 22;
        console.log(index);
        let elems = elem.children;
        console.log(elems);
        for (let i = 0; i < elems.length; i++) {
            elems[i].classList.remove("selected");
        }
        elems[index].classList.add("selected");
        elem.style.transform = "translateX(calc(" + percent + "% - " + offset + "px))"

    }

    getHeight = () => {
        return window.innerHeight;
    }

    componentWillMount() {
        try {
            let app = {}
            const db = firebase.firestore();
            const settings = {timestampsInSnapshots: true};
            db.settings(settings);
            db.collection('app').get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach((doc) => {
                        app = doc.data()
                    })
                })
                .catch((e)=>{
                    console.log("firebase receive data error: ",e)
                    app = {}
                })
        } catch(e) {
            console.log("firebase load error: ",e)
        }
    }

    render() {
        return (
            <Main title="Медиа">
                <div className="App">
                    <NavigationMenu ref={c => this.navigationMenu = c}
                                    handlePageClick={(e, id) => this.goToPage(e, id)}
                                    {...this.state.menu}
                    />
                    <ReactPageScroller ref={c => {this.reactPageScroll = c;}} pageOnChange={this.onChangePage}>
                    <Header goToPage={this.goToPage} {...this.state.content.header}/>
                    <Services slide={(index) => this.servicesSlide(index)}
                              servicesChangeImage={(index) => this.servicesChangeImage(index)}
                              onServiceClick={(e, id) => this.goToPage(e, id)}
                              {...this.state.content.services}
                    />
                    <About ref={c => this.pageAbout = c} {...this.state.content.about}/>
                    <Design onExpandClick={this.onExpandClick} {...this.state.content.design}/>
                    <Event slideTo={(e, index) => this.eventsSlideTo(e, index)} {...this.state.content.event}/>
                    <Site onExpandClick={this.onExpandClick} {...this.state.content.site}/>
                    <VideoContainer {...this.state.content.video}/>
                    <AR {...this.state.content.ar}/>
                    <Partners {...this.state.content.partners}/>
                    <Contacts goToPage={this.goToPage} {...this.state.content.footer}/>
                    </ReactPageScroller>
                </div>
            </Main>
        )
    }

}

export default App;
