export const initialState = {
    basket: [],
    user: null,
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'ADD_TO_BASKET':
            //lOGIC FOR ADDING ITEM TO BASKET
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_BASKET':
            //lOGIC FOR REMOVING ITEM FROM BASKET
            break;
        default:
            return state;
    }
}

export default reducer;