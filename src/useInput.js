import { useState } from "react";
export function useInput(initialValue) {
    const [inputValue, setInputValue] = useState(initialValue);
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = () => {
        setInputValue("");
        alert(inputValue);
    };
    return [inputValue, handleChange, handleSubmit];
}