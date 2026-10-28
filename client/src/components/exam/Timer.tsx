import { useState, useEffect } from "react";
import { Timer as TimerIcon } from "lucide-react";

interface TimerProps {
  durationMinutes: number;
  onTimeUp: () => void;
  isPaused?: boolean;
}

export default function Timer({ durationMinutes, onTimeUp, isPaused }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);

  useEffect(() => {
    if (isPaused || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isPaused, onTimeUp]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`flex items-center gap-2 font-mono text-xl font-bold ${timeLeft < 60 ? "text-destructive animate-pulse" : "text-primary"}`}>
      <TimerIcon className="w-5 h-5" />
      <span>{formatTime(timeLeft)}</span>
    </div>
  );
}
