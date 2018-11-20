import React, {Component} from 'react';
import './navigationMenu.scss';
import '../../icons_font.scss';
import logo from "../../static/images/logo.svg";



class NavigationMenu extends Component {
    pages = [2, 3, 9, 10];

    setActivePage(pageNumber) {
        var elems = document.getElementsByClassName('menu')[0].children[0].children
        for (var i = 0; i < elems.length; i++) {
            console.log(elems[i]);
            elems[i].children[0].classList.remove('active')
        }
        let index = this.pages.indexOf(pageNumber);

        if (index != -1) {
            elems[index].children[0].classList.add('active');
        }
    }
    toggleIsOpen() {
        let element = document.getElementsByClassName("menu-icon")[0];
        element.classList.toggle("is-open");
    }

    toggleDefault() {
        let element = document.getElementsByClassName("menu-grid")[0];
        element.classList.remove('invert')
    }

    toggleInvert() {
        let element = document.getElementsByClassName("menu-grid")[0];
        element.classList.add('invert')
    }

    render() {
        return (
            <nav>
                <div className="area">
                    <div className="menu-grid">
                        <a href="#" className='App-logo' onClick={(e) => {this.props.handlePageClick(0); e.preventDefault(); return false;}}></a>
                        <div className={'menu'}>
                            <ul>
                                <li><a href="#services" className={'active'} onClick={(e) => {this.props.handlePageClick(1); e.preventDefault(); return false;}}>Услуги</a></li>
                                <li><a href="#about" onClick={(e) => {this.props.handlePageClick(2);e.preventDefault();  return false;}}>О компании</a></li>
                                <li><a href="#clients" onClick={(e) => {this.props.handlePageClick(8);e.preventDefault();  return false;}}>Клиенты</a></li>
                                <li><a href="#footer" onClick={(e) => {this.props.handlePageClick(9);e.preventDefault();  return false;}}>Контакты</a></li>
                            </ul>
                        </div>
                        <button className="menu-icon cross" onClick={this.toggleIsOpen}><span></span></button>
                    </div>
                </div>
            </nav>

        );
    }
}

export default NavigationMenu;
