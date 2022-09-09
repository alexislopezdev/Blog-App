import Link from "next/link";
import Layout from "./posts/layout";
import styles from "/styles/Home.module.css";
import image from "./posts/img/Captura de pantalla.png";
import Image from "next/image";

export default function Post() {
  return (
    <div>
      <Layout></Layout>
      <div className={styles.home}>

        <div className={styles.flexhome}>
        <div className={styles.containerhome}>
          <h1 className={styles.title}>
            The All-In-One <br></br> Newsletter for<br></br> Startup Founders
          </h1>
          <div>
            <p>
              Every week, I’ll send you Failory’s latest interviews<br></br> and
              articles and 3 curated resources for founders.
            </p>

            <ul>
              <li>
                <Link href="blog/posts/primer-post">A mi primer post</Link>
              </li>
              <li>
                <Link href="blog/posts/segundo-post">A mi segundo post</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.containerhome}><Image src={image}alt= "#"></Image></div>

        </div>


        
      </div>
    </div>
  );
}
