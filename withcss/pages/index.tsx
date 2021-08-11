import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });

  return (
    <main>
      <div className={styles.container}>
        <MapWithNoSSR />
      </div>
    </main>
  );
}
