const initialState = {
    id: 0,
    username: '',
    profile_pic: '',
    posts: [],
    myPosts: true,
    title: ''
    
    
}

const AUTHORIZE = 'AUTHORIZE'

export function authorize(id, username, profile_pic) {
    return {
        type: AUTHORIZE,
        payload:{id, username, profile_pic}
    }
}


export default function reducer(state = initialState, action){
const {type, payload} = action;
switch (type) {
    case AUTHORIZE:
        const {id, username, profile_pic} = payload;
        return{...state, id, username, profile_pic}

    default:
        return state
    }
}