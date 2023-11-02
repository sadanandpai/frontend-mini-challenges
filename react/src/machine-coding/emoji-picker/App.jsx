import styles from "./app.module.css"
import Emoji from './Emoji';
import Code from './Code'
export default function App() {
  
    return (
    <div className={styles.main}>
     <Emoji/>
     <Code/>
    </div>
  );
}
