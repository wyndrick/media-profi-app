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

    goToPage = pageNumber => {
        this.reactPageScroll.goToPage(pageNumber)
    }

    disableHandlePageScroller = e => {
        e.stopPropagation()
    }

    removeListeners = (element,event) => {
        if ((event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight && element.id !== "footer") || event.target.scrollTop === 0)
        {
            element.removeEventListener("wheel",this.disableHandlePageScroller,false)
            element.removeEventListener("scroll",this.removeListeners,false)
        }
    }

    onChangePage = pageNumber => {
        let addListeners = (element) => {
            element.addEventListener("wheel",this.disableHandlePageScroller)
            element.addEventListener("scroll",(e) => { this.removeListeners(element,e) })
        }
        console.log(window.innerWidth)
        switch (pageNumber) {
            case 1:
                this.pageID = "header"
                setTimeout(this.navigationMenu.toggleDefault, 1000)
                break
            case 2:
                this.pageID = "services"
                setTimeout(this.navigationMenu.toggleInvert, 1000)
                break
            case 3:
                this.pageID = "about"
                setTimeout(this.navigationMenu.toggleInvert, 1000)
                if (window.innerWidth < 768) {
                    addListeners(document.getElementById(this.pageID))
                }
                break
            case 4:
                this.pageID = "design"
                setTimeout(this.navigationMenu.toggleInvert, 1000)
                break
            case 5:
                this.pageID = "event"
                setTimeout(this.navigationMenu.toggleInvert, 1000)
                break
            case 6:
                this.pageID = "site"
                setTimeout(this.navigationMenu.toggleInvert, 1000)
                break
            case 7:
                this.pageID = "video"
                setTimeout(this.navigationMenu.toggleInvert, 1000)
                break
            case 8:
                this.pageID = "ar"
                setTimeout(this.navigationMenu.toggleInvert, 1000)
                if (window.innerWidth < 768) {
                    addListeners(document.getElementById(this.pageID))
                }
                break
            case 9:
                this.pageID = "clients"
                setTimeout(this.navigationMenu.toggleInvert, 1000)
                break
            case 10:
                this.pageID = "footer"
                setTimeout(this.navigationMenu.toggleDefault, 1000)
                if (window.innerWidth < 768) {
                    addListeners(document.getElementById(this.pageID))
                }
                break
            default:
                break
        }
        this.navigationMenu.setActivePage(pageNumber)
    }

    render() {
        return (
            <Main title="Медиа">
                <div className="App">
                    <NavigationMenu ref={c => this.navigationMenu = c}
                                    handlePageClick={(pageNumber) => this.goToPage(pageNumber)}/>
                    <ReactPageScroller  ref={c => {this.reactPageScroll = c;}} pageOnChange={this.onChangePage}>
                    <Header goToPage={this.goToPage}/>
                    <Services/>
                    <About/>
                    <Design/>
                    <Event/>
                    <Site/>
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
