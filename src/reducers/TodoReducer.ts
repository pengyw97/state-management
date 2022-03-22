import { ActionTypes } from '../actions'

const TodoReducer = (state: any[] = [], actions) => {
  switch (actions.type) {
    case ActionTypes.ADDTODO:
      return [actions.payload, ...state]
    case ActionTypes.REMOVETODO:
      return state.filter(todo => todo.id !== actions.payload)
    case ActionTypes.COMPLETEDTODO:
      return state.map(todo => {
        if (todo.id === actions.payload) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    case ActionTypes.EDITTODO:
      const {id, text} = actions.payload
      return state.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            text
          }
        }
        return todo
      })
    default :
      return state
  }
}

export default TodoReducer
