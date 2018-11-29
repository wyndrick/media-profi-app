import React from 'react';
import ReactPageScroller from "react-page-scroller";

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
            element.removeEventListener("scroll",this.removeListeners,false)
        }
    }

    addListeners = (element) => {
        element.addEventListener("wheel",this.disableHandlePageScroller)
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

    render() {
        return (
            <Main title="Медиа">
                <div className="App">
                    <NavigationMenu ref={c => this.navigationMenu = c}
                                    handlePageClick={(e, id) => this.goToPage(e, id)}/>
                    <ReactPageScroller ref={c => {this.reactPageScroll = c;}} pageOnChange={this.onChangePage}>
                    <Header goToPage={this.goToPage}/>
                        <Services slide={(index) => this.servicesSlide(index)}
                                  servicesChangeImage={(index) => this.servicesChangeImage(index)}
                                  onServiceClick={(e, id) => this.goToPage(e, id)}/>
                    <About ref={c => this.pageAbout = c}/>
                    <Design onExpandClick={this.onExpandClick}/>
                    <Event slideTo={(e, index) => this.eventsSlideTo(e, index)}/>
                    <Site onExpandClick={this.onExpandClick}/>
                    <VideoContainer/>
                    <AR/>
                    <Partners/>
                    <Contacts goToPage={this.goToPage}/>
                    </ReactPageScroller>
                </div>
            </Main>
        )
    }

}

export default App;
