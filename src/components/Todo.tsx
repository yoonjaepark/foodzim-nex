import React from "react";
// import {todosRef} from "../apis";
import {Button, Switch} from "antd";
import {DeleteOutlined} from "@ant-design/icons/lib";
import {todosRef} from "../apis";

function Todo(props: any) {
    const {todo} = props;
    const updateTodo = () => {
        todosRef.doc(todo.id).set({...todo,done:!todo.done}).then(() => {
            alert('업데이트 되었습니다.');
        })
    }
    return (
        <div className="Todo" style={{'display': "flex"}}>
            <div style={{display: 'inline-block', marginRight: '20px'}}>
                <Switch
                    checked={todo.done} onChange={updateTodo}
                />
            </div>
            <div style={{flex: 1}}>{todo.name}</div>
            <Button style={{display: 'inline-block'}} onClick={() => todosRef.doc(todo.id).delete()}>
                <DeleteOutlined/>
            </Button>
        </div>
    );
}



export default Todo;