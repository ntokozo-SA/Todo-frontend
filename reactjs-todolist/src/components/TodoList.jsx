import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todos } = props


    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}

// Debugging steps:
// 1. Ensure that the `TodoCard` component is imported or defined in this file.
// 2. Verify that the `className='main'` is styled correctly in your CSS.
// 3. Check if the `todos` array is rendering correctly by logging it to the console:
//    console.log(todos);
// 4. If `TodoCard` is a custom component, ensure it accepts children properly.
