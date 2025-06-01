import AdviceCard from "./components/AdviceSection/AdviceSection";
import AdviceList from "./components/AdviceListSection/AdviceListSection";
import styles from './page.module.css'

export default function AdvicePage() {
  return (
    <main className={styles.main}>
      <h1>Advice Generator</h1>
      <AdviceCard />
      <AdviceList />
    </main>
  )
}