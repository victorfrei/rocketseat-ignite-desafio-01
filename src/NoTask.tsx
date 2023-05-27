
import styles from './NoTask.module.css';
import Clipboard from "./assets/Clipboard.png";

export function NoTask() {
    return (
        <div className={styles.container}>
            <img src={Clipboard} />
            <p><b>Você ainda não tem tarefas cadastradas</b><br />
                Crie tarefas e organize seus itens a fazer</p>
        </div >
    )
}