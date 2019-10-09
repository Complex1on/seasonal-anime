import React from 'react';
import { connect } from 'react-redux';
import { fetchSeason, changeSeason, changeYear } from '../actions';
import { Field, reduxForm } from 'redux-form';

class Header extends React.Component {
    onSubmit = async ({ season, year }) => {
        if (season && !year) {
            this.props.changeSeason(season);
            this.props.fetchSeason(this.props.year, season.toLowerCase());
        } else if (year && !season) {
            this.props.changeYear(year);
            this.props.fetchSeason(year, this.props.season.toLowerCase());
        } else if (year && season) {
            this.props.fetchSeason(year, season.toLowerCase());
        } else {
            this.props.fetchSeason(
                this.props.year,
                this.props.season.toLowerCase()
            );
        }
    };

    // NEED TO MAKE DROPDOWN MORE REUSABLE
    // MAKE DROPDOWN YEARS MORE INTELLIGENT
    // MAKE DROPDOWN LOOK PRETTIER
    renderDropdown() {
        return (
            <div className="ui menu">
                <Field
                    className="ui field fluid dropdown"
                    name="season"
                    component="select"
                >
                    <option>Fall</option>
                    <option>Winter</option>
                    <option>Spring</option>
                    <option>Summer</option>
                </Field>

                <Field
                    className="ui field fluid dropdown"
                    name="year"
                    component="select"
                >
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                    <option>2010</option>
                </Field>
                <button className="ui button">Find</button>
            </div>
        );
    }

    render() {
        //console.log(this.props);
        return (
            <div className="ui relaxed grid container segment">
                <h1 className="ui header eight wide column">Seasonal Anime</h1>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    {this.renderDropdown()}
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { season: state.dropdown.season, year: state.dropdown.year };
};

const form = reduxForm({
    form: 'dropdown'
})(Header);
export default connect(
    mapStateToProps,
    { fetchSeason, changeSeason, changeYear }
)(form);
