import React, { useState } from "react";
import {todosRef} from "../apis";
import {Button} from "antd";
import TextArea from "antd/lib/input/TextArea";
function TodoForm() {
    const [value, setValue] = useState("");
    const createTodo = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        const item = {
            name: value,
            done: false,
        };
        todosRef.add(item).then(() => {
            setValue("");
        });
    };
    return (
        <form style={{display: "flex", marginBottom: "20px"}}>
            <TextArea
                id="outlined-basic"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button onClick={createTodo}>
                추가
            </Button>
            {/*label="Add Todo"*/}
            {/*variant="outlined"*/}
        </form>
    );
}
export default TodoForm;