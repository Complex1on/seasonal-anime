import React from 'react';

const SeasonAnime = props => {
    console.log(props.id);
    return (
        <div className="ui card four wide column" key={props.id}>
            <div className="image">
                <img src={props.imgURL} alt={props.title} />
            </div>
            <div className="content">
                <a className="header" href={props.URL}>
                    {props.title}
                </a>
                <div className="description">{props.desc}</div>
            </div>
        </div>
    );
};

export default SeasonAnime;
