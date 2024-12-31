import { useEffect, useState } from "react";
import { ProgressBar } from "react-native-paper";

export default function PracticeProgressBar({ seconds, onComplete }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter >= seconds * 10) {
      onComplete();
      return () => {};
    } else {
      let timer = setTimeout(() => {
        setCounter(counter + 1);
      }, 100);

      return () => {
        if (timer) clearTimeout(timer);
      };
    }
  }, [counter]);

  return (
    <>
      <ProgressBar
        animatedValue={counter / seconds / 10}
        style={{ marginBottom: 5 }}
      />
    </>
  );
}
