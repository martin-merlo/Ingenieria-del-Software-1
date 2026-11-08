import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list: string[] = ["Pepe", "Pedro", "Juan"];
  const handleSelect = (elemento: string) => {
    console.log("imprimiento", elemento);
  };
  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      {list.length !== 0 ? (
        <List data={list} onSelect={handleSelect} />
      ) : (
        "No hay contenido"
      )}
      <Button isLoading={isLoading} onClick={handleClick}>
        Hola Mundo
      </Button>
    </Card>
  );
}

export default App;
