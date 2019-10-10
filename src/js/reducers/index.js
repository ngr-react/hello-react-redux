import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
    
    console.log(">>>>> src/js/reducers/index - rootReducer - (state, action) : ", state, action)

    if(action.type === ADD_ARTICLE) {

        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });

    }
    
    return state;
};

export default rootReducer;