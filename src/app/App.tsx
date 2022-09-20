import { Heading } from "../components/heading/heading";
import { Counter } from "../components/counter/counter";
import "./App.css";
import { Clock } from "../components/clock/clock";

function App() {
  return (
    <main>
      <Heading heading="State Hook" />
      <Counter/>
      <Heading heading="Clock" />
      <Clock/>
    </main>
  );
}

export default App;
