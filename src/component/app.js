import React,{ Component } from "react";
import {connect} from 'react-redux';
import * as actions from '../actions';

class App extends Component{

    componentDidMount()
    {
        this.props.moviesList();
    }
    
    render()
    {
        return(
            <h1>App Component</h1>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
}

export default connect(mapStateToProps,actions)(App);