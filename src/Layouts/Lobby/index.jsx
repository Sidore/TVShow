import * as React from "react";
import * as actions from "../../Store/Shows/actions";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

import Card from "../../Components/LobbyCard"
class Lobby extends React.Component {

    componentDidMount() {
        this.props.getShows("Powerpuff Girls");
    }

    render() {
        return (
            <div>
                
                    {
                        this.props.shows.map((show, index) => {
                            return <Card key={index} show={show.show}/>
                        })
                    }
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    shows: state.shows.shows
  });
  
export default connect(mapStateToProps, { getShows: actions.fetchShows })(Lobby);