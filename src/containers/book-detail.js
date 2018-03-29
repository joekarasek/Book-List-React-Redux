import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class BookDetail extends Component {
    render() {
        const bookTitle = this.props.activeBook ? this.props.activeBook.title : 'Select a book';

        return (
            <div>{bookTitle}</div>
        );
    }
}

// Listens to redux state
function mapStateToProps(state) {
    // Whatever is returned from here will be props for you component
    return {
        activeBook: state.activeBook
    }
}

// Connects to actions lifecycle
// Anything returned from this will be set as props on this component
// function mapDispathToProps(dispatch) {
//     // Whenever selectBook is called, the result should be passed
//     // to all reducers
//     return bindActionCreators({ selectBook: selectBook }, dispatch);
// }


// Promotes this component to a redux "container" that is connected to the redux lifecycle
export default connect(mapStateToProps)(BookDetail);