const reducer = (state, action) => {

    switch (action?.type) {
        case 'GET_ALL_GOMMENTS':
            return [...action.payload];
        case 'ADD_COMMENT':
            return [...state, action.payload];
        //TODO EDIT_COMMENT
        // case 'EDIT_COMMENT':
        //     return state.map(c => c._id === action.payload._id ? {...c, text: action.payload.text} : c);
        //TODO DELETE_COMMENT    
        default:
            return state;
    }
};

export default reducer;