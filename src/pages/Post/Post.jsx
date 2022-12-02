import styles from "./Post.module.css";
import { useLocation } from "react-router-dom";

export default function Post() {
  const { state } = useLocation();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div key={state.id}>
            <h1> {state.title} </h1>
            <p> {state.body} </p>
          </div>
        </div>
      </div>
    </>
  );
}
