import { useEffect, useState } from "react";

export function Countdown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date(
      "2026-06-27T10:00:00"
    );

    const difference =
      targetDate.getTime() -
      new Date().getTime();

    if (difference <= 0) {
      return null;
    }

    return {
      dias: Math.floor(
        difference /
          (1000 * 60 * 60 * 24)
      ),
      horas: Math.floor(
        (difference /
          (1000 * 60 * 60)) %
          24
      ),
      minutos: Math.floor(
        (difference /
          (1000 * 60)) %
          60
      ),
      segundos: Math.floor(
        (difference / 1000) %
          60
      ),
    };
  };

  const [timeLeft, setTimeLeft] =
    useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () =>
      clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  const items = [
    {
      label: "Dias",
      value: timeLeft.dias,
    },
    {
      label: "Horas",
      value: timeLeft.horas,
    },
    {
      label: "Min",
      value: timeLeft.minutos,
    },
    {
      label: "Seg",
      value: timeLeft.segundos,
    },
  ];

  return (
    <div className="mt-8">
      <p className="mb-4 text-sm uppercase tracking-[0.3em]">
        Faltam
      </p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-white/20 p-4 backdrop-blur-md"
          >
            <div className="text-3xl font-bold">
              {String(
                item.value
              ).padStart(2, "0")}
            </div>

            <div className="mt-1 text-xs uppercase tracking-widest">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm">
        para o nosso grande dia ❤️
      </p>
    </div>
  );
}