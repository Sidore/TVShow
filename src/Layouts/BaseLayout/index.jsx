import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import Lobby from "../Lobby";
import Episode from "../Episode";
import Show from "../Show";


class BaseLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="root-div">
                <Link to="/">Main</Link>
                <Link to="/episode/1">Episode</Link>

                <Link to="/show/6771">Show</Link>
                
                <Switch>
                    <Route path="/" exact component={Lobby}/>
                    <Route path="/episode/:id"  component={Episode}/>
                    <Route path="/show/:id"  component={Show}/>
                    <Route render={()=> {
                        "Not Found"
                    }}/>
                </Switch>
            </div>
        );
    }

}

function mapStateToProps(state, ownProps) {
    return {
    }
}

function mapDispatchToProps() {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout)