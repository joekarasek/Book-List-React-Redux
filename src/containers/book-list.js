import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { selectBook } from '../actions';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li className="list-group-item"
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}</li>
            )
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// Listens to redux state
function mapStateToProps(state) {
    // Whatever is returned from here will be props for you component
    return {
        books: state.books
    }
}

// Connects to actions lifecycle
// Anything returned from this will be set as props on this component
function mapDispathToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed
    // to all reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promotes this component to a redux "container" that is connected to the redux lifecycle
export default connect(mapStateToProps, mapDispathToProps)(BookList);