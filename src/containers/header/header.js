import React from 'react'
import header_art from "../../static/images/header_art.svg";

const Header = props => {
    return (
        <header className="App-header page" id={'header'}>
            <div className="area">
                <div className={'content'}>
                    <div className="brand-info">
                        <h1 className="title">МЕДИА
                            ПРОФИ</h1>
                        <p className="description">Мы помогаем создавать бренды и предоставляем современные,
                            бизнес-ориентированные решения, которые помогают достичь поставленных
                            результатов.</p>
                        <div className='btn-scroll'>
                            <div onClick={(e) => {props.goToPage("services"); e.preventDefault(); return false;}}>ПОДРОБНЕЕ</div>
                        </div>
                        <img alt="" className={'header-art'} src={header_art}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header