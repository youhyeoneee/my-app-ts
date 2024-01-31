import React, { useCallback, useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";
import ColorButton from "./ColorButton";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

type IInput = {
    text: string;
    color?: string;
};

export interface ITodoItem extends IInput {
    id: number;
}

export default function TodoList() {
    const [colorList, setColorList] = useState<string[]>([
        "white",
        "yellow",
        "red",
        "pink",
    ]);

    const [inputs, setInputs] = useState<IInput>({
        text: "",
        color: colorList[0],
    });

    const { text, color } = inputs;
    const inputRef = useRef<HTMLInputElement>(null);
    const nextId = useRef<number>(5);

    const [todoList, setTodoList] = useState<ITodoItem[]>([
        { id: 1, text: "first", color: "white" },
        { id: 2, text: "second", color: "pink" },
        { id: 3, text: "third", color: "red" },
        { id: 4, text: "fourth", color: "yellow" },
    ]); // TO DO LIST

    const focusInput = () => {
        inputRef.current?.focus();
    };

    const addTodo = useCallback(() => {
        const newTodo: ITodoItem = {
            id: nextId.current,
            text: text,
            color: color,
        };
        setTodoList((prev: ITodoItem[]) => prev.concat(newTodo));
        focusInput(); // 입력란으로 초점
        setInputs({
            text: "",
            color: color,
        });
        nextId.current += 1;
    }, [inputs]);

    const deleteTodo = useCallback(
        (id: number) => {
            setTodoList((prev) => {
                return prev.filter((todo) => {
                    return todo.id !== id;
                });
            });
        },
        [todoList]
    );

    const updateTodo = useCallback(
        (id: number, newValue: string) => {
            console.log(`${id} 수정`);
            setTodoList((prev) => {
                return prev.map((todo) =>
                    todo.id === id ? { ...todo, text: newValue } : todo
                );
            });
            console.log(todoList);
        },
        [todoList]
    );

    const onChange = (e: { target: { value: string } }) => {
        console.log(`test : ${inputs.text}, ${inputs.color} `);
        setInputs({
            color: color,
            text: e.target.value,
        });
    };

    const changeColor = useCallback(
        (newColor: string) => {
            setInputs({
                ...inputs,
                color: newColor,
            });
        },
        [inputs]
    );

    return (
        <div className="todoListContainer">
            <h1>Todo App</h1>
            <div>
                <InputGroup className="mb-3">
                    <Form.Control
                        ref={inputRef}
                        style={{ backgroundColor: color }}
                        type="text"
                        placeholder="입력"
                        value={inputs.text}
                        onChange={onChange}
                    />
                    <Button
                        variant="secondary"
                        id="button-addon2"
                        onClick={addTodo}
                    >
                        입력
                    </Button>
                </InputGroup>
            </div>
            <div className="colorContainer">
                {colorList.map((elem) => (
                    <ColorButton color={elem} changeColor={changeColor} />
                ))}
            </div>
            <h3> Todo Items</h3>
            <div className="todoItemsContainer">
                {todoList.map((elem) => (
                    <TodoItem
                        todoItem={elem}
                        onDelete={deleteTodo}
                        onUpdate={updateTodo}
                    />
                ))}
            </div>
        </div>
    );
}
function focusInput() {
    throw new Error("Function not implemented.");
}
