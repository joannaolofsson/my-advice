import AdviceCard from "./components/AdviceCard";
import AdviceList from "./components/AdviceList";
import styles from './page.module.css';


export default function AdvicePage() {
  return (
    <main>
      <h1>Advice Generator</h1>
      <AdviceCard />
      <AdviceList />
    </main>
  )
}