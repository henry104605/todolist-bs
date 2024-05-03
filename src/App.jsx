import Navigation from "./components/Navigation";
import ToDo from "./components/ToDo";

export default function App() {
  return (
    <>
      <Navigation />
      <ToDo
        topic="Thema2"
        deadline="18/02/2024"
        info="informationen raussuchen"
        progress={40}
      />

      <ToDo
        topic="Thema2"
        deadline="20/06/2024"
        info="informationen loeschen"
        progress={60}
      />

      <ToDo
        topic="Thema3"
        deadline="22/08/2024"
        info="testen sfjsdjkjsadfjslkfjlkd asdjklfjsadfjksa jakdsfl;ksa"
        progress={60}
      />
    </>
  );
}
