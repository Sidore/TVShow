import * as React from "react";
import * as actions from "../../Store/Episodes/actions";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

class Episode extends React.Component {

    componentDidMount(){
        this.props.getEpisode(this.props.match.params.id);
    }

    render() {
        const episode = this.props.edisode
        return episode.id ? <div><p>{episode.name}</p>
            <p>{episode.summary}</p>
            <img src={episode.image.medium}/>
        </div> : "loading"
    }
}

const mapStateToProps = state => ({
    edisode: state.episodes.currentEpisode
  });
  
export default connect(mapStateToProps, { getEpisode: actions.fetchEpisodes })(Episode);