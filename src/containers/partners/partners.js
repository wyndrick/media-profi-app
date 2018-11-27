import React from 'react'
import logo1 from "../../static/images/logo_1.png";
import logo2 from "../../static/images/logo_2.png";
import logo3 from "../../static/images/logo_3.png";
import logo4 from "../../static/images/logo_4.png";
import logo5 from "../../static/images/logo_5.png";
import logo6 from "../../static/images/logo_6.png";
import logo7 from "../../static/images/logo_7.png";
import logo8 from "../../static/images/logo_8.png";

const Partners = props => {
    return (
        <section className="App-service page clients" id={'clients'}>
            <div className="area">
                <div className="content">
                    <div className="content-header">
                        <h2>НАМ ДОВЕРЯЮТ</h2>
                    </div>
                    <div className="clients-page">
                        <a href="true"><img alt="" src={logo1}/></a>
                        <a href="true"><img alt="" src={logo2}/></a>
                        <a href="true"><img alt="" src={logo3}/></a>
                        <a href="true"><img alt="" src={logo4}/></a>
                        <a href="true"><img alt="" src={logo6}/></a>
                        <a href="true"><img alt="" src={logo7}/></a>
                        <a href="true"><img alt="" src={logo5}/></a>
                        <a href="true"><img alt="" src={logo8}/></a>
                        {/*<a href="#"><img src={logo9}/></a>*/}
                        {/*<a href="#"><img src={logo10}/></a>*/}
                        {/*<a href="#"><img src={logo11}/></a>*/}
                        {/*<a href="#"><img src={logo12}/></a>*/}
                    </div>
                    <ul className="pagination-list">
                        <li className="pagination-item active"><a href="true">&nbsp;</a></li>
                        <li className="pagination-item"><a href="true">&nbsp;</a></li>
                        <li className="pagination-item"><a href="true">&nbsp;</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Partners