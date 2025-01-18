import {COLORCHANGED, STATUSCHAGNED} from "./actionTypes"

const initalState = {
    status: 'All',
    colors: ['']
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case STATUSCHAGNED:
            return{
                ...state,
                status: action.payload
            }
            
            case COLORCHANGED:
                const {color, changeType} = action.payload
                
                switch (changeType) {
                    case 'added':
                        return{
                            ...state,
                            colors:[
                                ...state.colors,
                                color
                            ]
                        }

                        case 'removed':
                            return{
                                ...state,
                                colors: state.colors.filter(existingColor => existingColor !== color)
                            }
                       
                     
                
                    default:
                        return state;
                }
            
    
        default:
            return state;
    }

}

export default reducer;