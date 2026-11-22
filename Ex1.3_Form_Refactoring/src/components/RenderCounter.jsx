
import { Profiler, useCallback, useRef } from "react";

export default function RenderCounter({ id, children }) {
  const commitCount = useRef(0);

  const handleRender = useCallback(
    (profilerId, phase, actualDuration) => {
      commitCount.current += 1;

      console.log(
        `[Profiler] ${profilerId}`,
        {
          phase,
          commits: commitCount.current,
          duration: `${actualDuration.toFixed(2)} ms`,
        }
      );
    },
    []
  );

  return (
    <Profiler id={id} onRender={handleRender}>
      {children}
    </Profiler>
  );
}
