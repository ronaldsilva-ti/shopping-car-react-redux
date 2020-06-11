const INITIAL_STATE = {
    ShowMessage:false
}




export default function reducer(state = INITIAL_STATE,action){
    switch(action.type){
        case 'SHOW_MESSAGE':
            return {...state,ShowMessage:true};
        case 'HIDE_MESSAGE':
            return{...state,ShowMessage:false};
            default:
                return state
    }
}


export const ShowMessage = () => {
    return{
        type: 'SHOW_MESSAGE'
    }
}

export const HideMessage = () => {
    return{
        type: 'HIDE_MESSAGE'
    }
}