import * as React from "react";
import * as actions from "../../Store/Shows/actions";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

class Lobby extends React.Component {

    componentDidMount() {
        this.props.getShows("Powerpuff Girls");
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.shows.map(show => {
                            return <li key={show.show.id}><Link  to={"/show/" + show.show.id}>{show.show.name}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    shows: state.shows.shows
  });
  
export default connect(mapStateToProps, { getShows: actions.fetchShows })(Lobby);