import React, {useReducer} from 'react'


const initialState ={
    firstCounter : 0,
    secondCounter: 0
};

const reducer = (state, action) =>{
    switch(action.type){
        case 'increment':
            return {...state,
                firstCounter: state.firstCounter + action.value};
        case 'decrement':
            return {...state,
                firstCounter: state.firstCounter - action.value};
        case 'increment2':
                return {...state,
                    secondCounter: state.secondCounter + action.value};
        case 'decrement2':
                return {...state,
                    secondCounter: state.secondCounter - action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
function UseReducer2(){
    const [count, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <div>First Count - {count.firstCounter}</div>
            <div>
                <button onClick = {() => dispatch({type: 'increment', value:1})}>
                    Increment by 1
                </button>
                <button onClick = {() => dispatch({type:'decrement', value:1})}>
                    Decrement by 1
                </button>
                <button onClick = {() => dispatch({type:'reset'})}>
                    Reset
                </button>
            </div>
            <div> Second Counter {count.secondCounter}</div>
            <div>
                <button onClick = {() => dispatch({type: 'increment2', value:5})}>
                    Increment by 5
                </button>
                <button onClick = {() => dispatch({type:'decrement2', value:5})}>
                    Decrement by 5
                </button>
                <button onClick = {() => dispatch({type:'reset'})}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default UseReducer2