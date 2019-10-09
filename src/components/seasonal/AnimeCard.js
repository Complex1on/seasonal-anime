import React from 'react';

const limitDescription = (description, limit = 250) => {
    const newDescription = [];
    if (description.length > limit) {
        description.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newDescription.push(cur);
            }
            return acc + cur.length;
        }, 0);

        return `${newDescription.join(' ')} ...`;
    }

    return description;
};
const SeasonAnime = props => {
    console.log(props.id);
    return (
        <div className="ui card four wide column">
            <div className="image">
                <img src={props.imgURL} alt={props.title} />
            </div>
            <div className="content">
                <a className="header" href={props.URL}>
                    {props.title}
                </a>
                <div className="description">
                    {limitDescription(props.desc)}
                </div>
            </div>
        </div>
    );
};

export default SeasonAnime;
