import { Hero } from "./components/Hero";
import { Message } from "./components/Message";
import { Invitation } from "./components/Invitation";
import { Location } from "./components/Location";
import { RSVPForm } from "./components/RSVPForm";
import { PixGift } from "./components/PixGift";
import { Family } from "./components/Family";

export default function App() {
  // Data do casamento
  const weddingDate = new Date(
    "2026-06-27T00:00:00"
  );

  // Data atual
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Diferença em milissegundos
  const diff =
    weddingDate.getTime() -
    today.getTime();

  // Dias restantes
  const daysLeft = Math.ceil(
    diff / (1000 * 60 * 60 * 24)
  );

  return (
    <>
      <Hero daysLeft={daysLeft} />
      <Message />
      <Invitation />
      <Location />
      <RSVPForm />
      <PixGift />
      <Family />
    </>
  );
}