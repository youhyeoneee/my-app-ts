import React, { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";

type Prop = {
    color: string;
    changeColor: Function;
};

export default function ColorButton({ color, changeColor }: Prop) {
    const onClick = () => {
        changeColor(color);
    };
    return <button style={{ backgroundColor: color }} onClick={onClick} />;
}
