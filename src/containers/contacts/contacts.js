import React from 'react'
import icon_contact from "../../static/images/icon_contact.svg";

const Contacts = props => {
    return (
        <footer className="App-footer page" id={'footer'}>
            <div className="area">
                <div className="footer form">
                    <h2 className={'title'}>СВЯЖИТЕСЬ<br/> С НАМИ</h2>
                    <div className={'contact-form'}>
                        <input className={'name'} id="inputName" type={'text'}
                               placeholder={'Как вас зовут?'}/>
                        <input className="phone inputPhone" id="inputMessage" type={'text'}
                               placeholder={'Номер телефона'}/>
                        <input className={'message'} id="inputPhone" type={'text'}
                               placeholder={'Сообщение'}/>
                        <button className={'button-send'}>
                            ОТПРАВИТЬ
                        </button>
                    </div>
                    <div className={'cutaway'}>
                        <img src={icon_contact} alt=""/>
                        <div className={'contacts'}>
                            <span>ООО «МЕДИАПРОФИ»</span>
                            <span>тел.: +7 (495) 531-52-52</span>
                            <span>эл. почта: <a href={"mailto:mediaproffi@mail.ru"} target="_top">mediaproffi@mail.ru</a></span>
                        </div>
                    </div>
                    <div
                        id={'move-to-top'}
                        className={'xs-hidden'}
                        href='#'
                        onClick={(e) => {props.goToPage(0); e.preventDefault(); return false;}} />
                    <p className={'privacy'}><a target="_blank" rel="noopener noreferrer"
                                                href="https://policies.google.com/privacy?hl=ru&gl=ua">Политика
                        конфиденциальности</a></p>
                    <p className={'copyright'}>&copy; 2005–2018. Все права защищены</p>

                </div>

            </div>
        </footer>
    )
}

export default Contacts