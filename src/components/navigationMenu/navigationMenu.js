import React, {Component} from 'react';
import './navigationMenu.scss';
import '../../icons_font.scss';

class NavigationMenu extends Component {
    pages = {
        'header': {index:0, menuIndex:0},
        'services':{index:1, menuIndex:0},
        'about':{index:2, menuIndex:1},
        'design':{index:3, menuIndex:0},
        'event':{index:4, menuIndex:0},
        'site':{index:5, menuIndex:0},
        'video':{index:6, menuIndex:0},
        'ar':{index:7, menuIndex:0},
        'clients':{index:8, menuIndex:2},
        'footer':{index:9, menuIndex:3}
    };

    setActivePage(id) {
        let elems = document.getElementsByClassName('menu')[0].children[1].children
        for (let i = 0; i < elems.length; i++) {
            elems[i].children[0].classList.remove('active')
        }

        if (this.pages.hasOwnProperty(id)) {
            let page = this.pages[id];
            if (elems[page.menuIndex] !== undefined) {
                elems[page.menuIndex].children[0].classList.add('active');
            }
        }
    }

    toggleIsOpen() {
        let element = document.getElementsByClassName("menu-icon")[0];
        element.classList.toggle("is-open");

        let menu = document.getElementsByClassName("menu-grid")[0];
        menu.classList.toggle("opened")
    }

    hideMenu() {
        let element = document.getElementsByClassName("menu-icon")[0];
        element.classList.remove("is-open");

        let menu = document.getElementsByClassName("menu-grid")[0];
        menu.classList.remove("opened")
    }

    toggleDefault() {
        let element = document.getElementsByClassName("menu-grid")[0];
        element.classList.remove('invert')
    }

    toggleInvert() {
        let element = document.getElementsByClassName("menu-grid")[0];
        element.classList.add('invert')
    }

    onMenuClick(e, id) {
        this.props.handlePageClick(e, id)
        this.hideMenu();
        e.preventDefault();
        return false;
    }

    render() {
        return (
            <nav>
                <div className="area">
                    <div className="menu-grid">
                        <div className='App-logo' onClick={(e) => {return this.onMenuClick(e, 'header');}} />
                        <div className={'menu'}>
                            <div className='App-logo' onClick={(e) => {this.onMenuClick(e, 'header');}} />
                            <ul>
                                <li><a href="#services" onClick={(e) => {this.onMenuClick(e, 'services');}}>Услуги</a></li>
                                <li><a href="#about" onClick={(e) => {this.onMenuClick(e, 'about');}}>О компании</a></li>
                                <li><a href="#clients" onClick={(e) => {this.onMenuClick(e, 'clients');}}>Клиенты</a></li>
                                <li><a href="#footer" onClick={(e) => {this.onMenuClick(e, 'footer');}}>Контакты</a></li>
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
