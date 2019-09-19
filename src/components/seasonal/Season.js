import React from 'react';
import _ from 'lodash';
import { fetchSeason } from '../../actions';
import { connect } from 'react-redux';

import AnimeCard from './AnimeCard';

class Season extends React.Component {
    componentDidMount() {
        this.props.fetchSeason(2018, 'winter');
    }

    renderAnime() {
        const LIMIT = 12;
        let iterator = 0;
        return _.map(this.props.anime, (val, key) => {
            if (iterator < LIMIT) {
                iterator += 1;
                return (
                    <AnimeCard
                        title={val.title}
                        desc={val.synopsis}
                        imgURL={val.image_url}
                        URL={val.url}
                        id={val.mal_id}
                    />
                );
            }

            return;
        });
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui relaxed grid">{this.renderAnime()}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        anime: state.anime.anime,
        year: state.anime.season_year,
        season: state.anime.season_name
    };
};
export default connect(
    mapStateToProps,
    { fetchSeason }
)(Season);
