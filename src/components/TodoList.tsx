import React, { useCallback, useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";
import ColorButton from "./ColorButton";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface IInput {
    text: string;
    color: string;
}

export interface ITodoItem extends IInput {
    id: number;
}

export default function TodoList() {
    const [inputs, setInputs] = useState<IInput>();
    const [colorList, setColorList] = useState<string[]>([
        "white",
        "yellow",
        "red",
        "pink",
    ]);

    const inputRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const nextId = useRef(1) as React.MutableRefObject<number>;

    const [todoList, setTodoList] = useState<ITodoItem[]>([
        { id: 1, text: "first", color: "white" },
        { id: 2, text: "second", color: "pink" },
        { id: 3, text: "third", color: "red" },
        { id: 4, text: "fourth", color: "yellow" },
    ]); // TO DO LIST

    return (
        <div className="todoListContainer">
            <h1>Todo App</h1>

            <h3> Todo Items</h3>
            <div className="todoItemsContainer">
                {todoList.map((elem) => (
                    <TodoItem todoItem={elem} />
                ))}
            </div>
        </div>
    );
}
