import React, { Component } from 'react';
import {connect} from "react-redux";
// import {bindActionCreators} from "redux";

class BookDetail extends Component {
    render() {
        if (!this.props.activeBook) {
            return <div>Select a book to get started.</div>;
        }

        return (
            <div>
                <h3>Book Details</h3>
                <div>{this.props.activeBook.title}</div>
                <div>Pages: {this.props.activeBook.pages}</div>
            </div>
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

// Promotes this component to a redux "container" that is connected to the redux lifecycle
export default connect(mapStateToProps)(BookDetail);