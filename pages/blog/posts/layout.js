import Link from "next/link";
import styles from '/styles/Home.module.css'

function Layout({ children }) {
  return (
    <div >
      <div className={styles.navbar}>
        <li>
          <Link href="/blog">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog/posts/primer-post">Mi primer post</Link>
        </li>
      </div>
      {children}
    </div>
  );
}

export default Layout;
