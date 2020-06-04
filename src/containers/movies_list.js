import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class MoviesList extends Component{

    componentWillMount(){
        this.props.artistList();
        this.props.moviesList();
    }

    renderList = (movies) => {
        if(movies){
            return movies.map((item)=>{
                return(
                    <div key={item.id}>
                    <h1>{item.name}</h1>
                    </div>
                )
            })
        }
    }
 
    render(){
        return(
            <div>
                {this.renderList(this.props.movies)}
                <hr/>
                {this.renderList(this.props.artists)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        movies:state.movies,
        artists: state.artists
    }
}

export default connect(mapStateToProps, actions) (MoviesList);
