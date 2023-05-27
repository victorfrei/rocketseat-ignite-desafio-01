
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './TaskInput.module.css';
import { PlusCircle } from "@phosphor-icons/react";
import { task } from './App';
import { v4 } from 'uuid';

interface TaskInputProps {
    handleAddNewTask: (task: task) => void;
}

export function TaskInput({ handleAddNewTask }: TaskInputProps) {

    const [input, setInput] = useState("");


    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        setInput(e.target.value);
    }

    function handleNewTask(e: FormEvent) {
        e.preventDefault();
        const task = {
            id: v4(),
            text: input,
            completed: false
        }
        handleAddNewTask(task);
        setInput("");
    }

    return (
        <form onSubmit={handleNewTask} className={styles.container}>
            <input type='text' required={true} className={styles.input} onChange={handleChange} value={input} placeholder='Adicione uma nova tarefa'></input>
            <button className={styles.button}>Criar <PlusCircle size={20} /></button>
        </form>
    )
}