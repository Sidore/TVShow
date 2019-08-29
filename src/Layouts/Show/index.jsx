import * as React from "react";
import * as actions from "../../Store/Shows/actions";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

class Show extends React.Component {

    componentDidMount(){
        this.props.getShow(this.props.match.params.id);
    }

    componentDidUpdate() {
        console.log(this.props.show)
    }

    render() {
        const show = this.props.show
        console.log(show);
        return show.id ? <div>
            <p>{show.name} - {show.id}</p>
            <p>{show.summary}</p>
            <img src={show.image.medium}/>
            <ul>
                {
                    show.episodes.map((ep, index) => {
                        return <li key={index}>
                        <Link to={"/episode/" + ep.id}> {ep.name}</Link>
                        </li>
                    })
                }
            </ul>
        </div> : "loading"
    }
}

const mapStateToProps = state => ({
    show: state.shows.currentShow
  });
  
export default connect(mapStateToProps, { getShow: actions.fetchSingleShow })(Show);