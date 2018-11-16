import React, {Component} from 'react';
import './navigationMenu.scss';
import logo from "../../static/images/logo.svg";

    class NavigationMenu extends Component {
    render() {
        return (
            <nav>
                <a href="#" className='App-logo'><img src={logo} /></a>
                <ul>
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">О компании</a></li>
                    <li><a href="#">Клиенты</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav>
        );
    }
}

export default NavigationMenu;