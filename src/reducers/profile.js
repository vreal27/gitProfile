const initialState = {
    profile: {}
} 

export default function(state = initialState, action) {
    switch(action.type) {
        case 'GET_PROFILE':
            return {...state, profile: action.profile}
        default: 
            return state
    }
} 