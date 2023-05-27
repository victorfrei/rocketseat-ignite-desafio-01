
import { Check, Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';
import { ChangeEvent, useState } from 'react';


interface TaskProps {
    id: string;
    text: string;
    completed: boolean;
    onHandleDelete: (id: string, checked: boolean) => void
    onHandleTaskChecked: (id: string, checked: boolean) => void;
}


export function Task({ id, text, completed, onHandleDelete, onHandleTaskChecked }: TaskProps) {

    const [checked, setChecked] = useState(completed);


    function handleCheckInput() {
        setChecked(!checked);
        onHandleTaskChecked(id, !checked);
    }

    function handleCheckChange(e: ChangeEvent<HTMLInputElement>) {
        setChecked(e.target.checked);
    }

    function handleDelete() {
        onHandleDelete(id, checked);
    }


    return (
        <div className={styles.container}>

            <div className={styles.content}>
                <input className={styles.input} onChange={handleCheckChange} checked={checked} type='checkbox' />
                <button className={styles.roundedInput} onClick={handleCheckInput}>
                    <Check className={styles.checkIcon} weight='bold' />
                </button>
                <p className={styles.text}>
                    {text}
                </p>
            </div>
            <button className={styles.icon} onClick={handleDelete}>
                <Trash size={20} />
            </button>
        </div>
    )
}