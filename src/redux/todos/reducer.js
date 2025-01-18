import { ADDED, ALLCOMPLETED,CLEARCOMPLETED,COLORSELECTED,DELETED,TOGGLE } from './actionTypes';
const initialState=[
    {
        id: 1,
        text: 'learn react js',
        completed: true,
    },
    {
        id: 2,
        text: 'lear redux',
        completed: false,
        color:'red'
    }
]

const nextTodoId = (todos) => {
    const maxId = todos.reduce( (maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return[
                ...state,
                {
                    id: nextTodoId(state),
                }
            ]
            
            case TOGGLE:
                return state.map(todo => {
                    if(todo.id !== action.payload){
                        return todo;
                    }

                    return[
                        ...todo,
                        {
                            completed: !completed,
                        }
                    ]
                });
            
                case COLORSELECTED:
                    const {todoId, color} = action.payload;
                    return state.map(todo => {
                        if(todo.id !== todoId){
                            return todo;
                        }
    
                        return[
                            ...todo,
                            {
                                color: color
                            }
                        ]
                    });
            
                    case DELETED:
                        return state.filter( todo => todo.id !== action.payload);
            
                        case ALLCOMPLETED:
                            return state.map(todo => {
                                return{
                                    ...todo,
                                    completed: true
                                }
                            })
            
                            case CLEARCOMPLETED:
                                return state.filter(todo => !todo.completed);
                
    
        
        default:
            break;
    }
}

export default reducer;