// State argument is not the application state, it is the local state that this reducer
// is responsible for
// note, state cannot be undefined, so default it to null
// Do not mutate state, pass a new object or pass state straight through
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}