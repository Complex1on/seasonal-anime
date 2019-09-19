import React from 'react';
import { connect } from 'react-redux';
class Header extends React.Component {
    render() {
        return (
            <div className="ui relaxed grid container segment">
                <h1 className="ui header eight wide column">Seasonal Anime</h1>

                <div className="ui compact menu">
                    <div className="ui simple dropdown item">
                        Fall
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <div className="item">Winter</div>
                            <div className="item">Spring</div>
                            <div className="item">Summer</div>
                        </div>
                    </div>
                </div>

                <div className="ui compact menu">
                    <div className="ui simple dropdown item">
                        2019
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <div className="item">2018</div>
                            <div className="item">2017</div>
                            <div className="item">2016</div>
                            <div className="item">2016</div>
                            <div className="item">2016</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// What do I want to do?
// 1. select a year and date from the header
// 2. Store that year and date in redux store
// 3. Change the options whenever the drop down is changed
// 4. Whenever the year or date is updated
//    make a new api request to jikan

export default Header;
