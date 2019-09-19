import React from 'react';
import { connect } from 'react-redux';
import { fetchSeason, changeSeason, changeYear } from '../actions';
import { Field, reduxForm } from 'redux-form';

class Header extends React.Component {
    // Figure out logic
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
            <div className="ui compact menu">
                <Field defaultValue="Fall" name="season" component="select">
                    <option>Fall</option>
                    <option>Winter</option>
                    <option>Spring</option>
                    <option>Summer</option>
                </Field>

                <Field defaultValue="2019" name="year" component="select">
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                </Field>
                <button className="ui button">Submit</button>
            </div>
        );
    }

    render() {
        //console.log(this.props);
        return (
            <div className="ui relaxed grid container segment">
                <h1 className="ui header eight wide column">Seasonal Anime</h1>
                <form
                    initialValues={{ name: 'Fall', year: 2019 }}
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
                    {this.renderDropdown()}
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { season: state.dropdown.season, year: state.dropdown.year };
};

// What do I want to do? Refactor to use redux form
// 1. select a year and date from the header                     REDUX FORM
// 2. Store that year and date in redux store                    REDUX FORM
// 3. Change the options whenever the drop down is changed       REDUX FORM
// 4. Whenever the year or date is updated                       REDUX FORM
//    make a new api request to jikan

const form = reduxForm({
    form: 'dropdown'
})(Header);
export default connect(
    mapStateToProps,
    { fetchSeason, changeSeason, changeYear }
)(form);
