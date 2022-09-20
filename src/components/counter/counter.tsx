import { useEffect, useState } from "react";
import "./counter.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked State ${count} times`;
  }, [count]);
  return (
    <div>
      <section className="counter-box" onClick={() => setCount(count + 1)}>
        {count}
      </section>
    </div>
  );
};
