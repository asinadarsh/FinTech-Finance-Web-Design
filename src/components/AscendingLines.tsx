import { useEffect, useState } from 'react';

interface AscendingLinesProps {
  scrollY: number;
}

export default function AscendingLines({ scrollY }: AscendingLinesProps) {
  const [lines, setLines] = useState<number[]>([]);

  useEffect(() => {
    const lineCount = 30;
    const newLines = Array.from({ length: lineCount }, (_, i) => i);
    setLines(newLines);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {lines.map((line) => {
        const delay = line * 0.5;
        const xPos = (line / lines.length) * 100;
        const height = 40 + (line % 3) * 20;

        return (
          <div
            key={line}
            className="absolute bottom-0 w-[1px] bg-gradient-to-t from-emerald-500/30 via-emerald-400/20 to-transparent animate-ascend opacity-0"
            style={{
              left: `${xPos}%`,
              height: `${height}%`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
