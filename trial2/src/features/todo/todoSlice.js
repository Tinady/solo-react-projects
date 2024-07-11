import {CreateSlice, nanoid} from '@reduxjs/toolkit'

const intialstate={
    todos:[]
}

export const todoSlice= CreateSlice({
    name:'todo',
    intialstate,
    reducers:{
        addTodo:(state, action)=>{
          const todo={
            id:nanoid(),
            text: action.payload
          }

          state.todos.push(todo)
        },

        deleteTodo:(state, action)=>{
           

            state.todos=state.todos.filter((todo)=> 
                todo.id!==action.payload
        )
        }
    }

})


export const{addTodo, deleteTodo }= toslice.actions