import styles from "./page.module.css";
import TodoForm from "../components/todoForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <TodoForm/>
    </div>
  );
}
