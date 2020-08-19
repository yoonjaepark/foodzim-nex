import React, {useState, useEffect} from "react";
import {todosRef} from "../../../apis";
import Todo from "../../../components/Todo";
import TodoForm from "../../../components/TodoForm";

function TodoList() {
    const [todos, setTodos] = useState<any>([]);
    useEffect(() => {
        todosRef.onSnapshot((res) => {
            const newState: any[] = [];
            res.docs.map((res) => {
                console.log(res.data())
                let item = res.data()
                newState.push({
                    id: res.id,
                    done: item.done,
                    name: item.name
                });
            })
            setTodos(newState);
        });
    }, [])
    return (
        <>
            <div>
                <TodoForm />
            </div>
            {todos.map((todo: any, i: number) => (
                <React.Fragment key={todo.id}>
                    <Todo todo={todo}/>
                    {i < todos.length - 1}
                </React.Fragment>
            ))}
        </>
    );
}

export default TodoList;