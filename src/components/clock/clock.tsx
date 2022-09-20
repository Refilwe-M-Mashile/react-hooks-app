import { useState, useEffect } from "react";
export const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => setTime(new Date()));
  return (
    <section className="clock-box">
      <h2>{time.toLocaleTimeString()}</h2>
    </section>
  );
};
