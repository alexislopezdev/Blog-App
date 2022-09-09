
import styles from '../styles/Home.module.css'
import Post from "./blog/index"

export default function Home() {
  return (
    <div className={styles.container}>
      <Post></Post>
    </div>
  )
}
