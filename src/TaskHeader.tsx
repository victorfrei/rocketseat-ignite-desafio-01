
import styles from './TaskHeader.module.css';


interface TaskHeaderProps {
    tasksAmount: number;
    tasksCompleted: number;
}

export function TaskHeader({ tasksAmount, tasksCompleted }: TaskHeaderProps) {


    return (
        <div className={styles.header}>
            <div className={styles.content}>
                Tarefas criadas
                <span>{tasksAmount}</span>
            </div>
            <div className={styles.content}>
                Concluídas
                <span>{tasksCompleted} de {tasksAmount}</span>
            </div>
        </div>
    )
}