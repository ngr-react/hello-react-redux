import { ADD_ARTICLE } from '../constants/action-types'

export function addArticle(payload) {
    
    console.log(">>>>>>>>>>>>>>> js/actions/index : ", payload)
    
    return { type: ADD_ARTICLE, payload }
};