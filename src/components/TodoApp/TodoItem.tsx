import React, { useEffect, useRef, useState } from "react";
import { ITodoItem } from "./TodoList";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

type Prop = {
    todoItem: ITodoItem;
    onDelete: Function;
    onUpdate: Function;
};

export default function TodoItem({ todoItem, onDelete, onUpdate }: Prop) {
    const [todo, setTodo] = useState<ITodoItem>({
        id: 0,
        text: "",
        color: "",
    });
    const { id, text, color }: ITodoItem = todoItem;

    useEffect(() => {
        setTodo(todoItem);
    }, []);

    const onChange = (e: { target: { value: string } }) => {
        setTodo({
            ...todo,
            text: e.target.value,
        });
        onUpdate(id, e.target.value);
    };

    return (
        <div className="todoItemContainer">
            <InputGroup className="mb-3">
                <Form.Control
                    value={text}
                    onChange={onChange}
                    style={{ backgroundColor: todoItem.color }}
                ></Form.Control>
                <Button
                    variant="danger"
                    id="button-addon2"
                    onClick={() => onDelete(id)}
                >
                    삭제
                </Button>
            </InputGroup>
        </div>
    );
}
