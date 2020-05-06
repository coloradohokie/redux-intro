import {createStore, combineReducers} from 'redux'

let counter = document.querySelector('h2')
let increment = document.querySelector('#increment')
let decrement = document.querySelector('#decrement')
let reducers = combineReducers({count})
const store = createStore(reducers)

counter.innerText = store.getState().count

let incrementAction = {type: "INCREMENT", payload: 10}

function count(state=0, action){
  switch(action.type){
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1

    default:
      return state
  }
}

increment.addEventListener('click', () => {
  store.dispatch(incrementAction)
  counter.innerText = store.getState().count
})

decrement.addEventListener('click', () => {
  store.dispatch({type: 'DECREMENT'})
  counter.innerText = store.getState().count
})

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))