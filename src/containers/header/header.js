import React from 'react'
import header_art from "../../static/images/header_art.svg";

const Header = props => {
    return (
        <header className="App-header page" id={'header'}>
            <div className="area">
                <div className={'content'}>
                    <div className="brand-info">
                        <h1 className="title">{props.title}</h1>
                        <p className="description">{props.desc}</p>
                        <div className='btn-scroll'>
                            <div onClick={(e) => {props.goToPage(e, "services"); e.preventDefault(); return false;}}>{props.btnTitle}</div>
                        </div>
                        <img alt={props.alt} className={'header-art'} src={Boolean(props.source) ? props.source :header_art}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header