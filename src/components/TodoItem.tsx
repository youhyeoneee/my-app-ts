import React, { useEffect, useRef, useState } from "react";
import { ITodoItem } from "./TodoList";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

type Prop = {
    todoItem: ITodoItem;
};

export default function TodoItem({ todoItem }: Prop) {
    const [todo, setTodo] = useState<ITodoItem>();
    const { id, text, color }: ITodoItem = todoItem;

    useEffect(() => {
        setTodo(todoItem);
    }, []);

    return (
        <div className="todoItemContainer">
            <InputGroup className="mb-3">
                <Form.Control
                    value={text}
                    style={{ backgroundColor: todoItem.color }}
                ></Form.Control>
                <Button variant="danger" id="button-addon2">
                    삭제
                </Button>
            </InputGroup>
        </div>
    );
}
