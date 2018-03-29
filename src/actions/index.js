export function selectBook(book) {
    // This is an action creator, it returns an action, which is an object
    // with (always) type and (sometimes) payload (data)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
