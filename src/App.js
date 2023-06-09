import React from "react";
import CounterApp from "./ejemplo_1/CounterApp";
import CustomCounterApp from "./ejemplo_1/CustomCounterApp";
import TodoApp from "./ejemplo_2/TodoApp";
import CustomTodoApp from "./ejemplo_2/CustomTodoApp";
import MouseApp from "./ejemplo_3/MouseApp";
import CustomMouseApp from "./ejemplo_3/CustomMouseApp";

function App() {
  return (
    // <div>
    //   <h1>Ejemplo 1 -- Contador</h1>
    //   <CounterApp/>
    //   <CustomCounterApp/>
    // </div>
    // <div>
    //   <h1>Ejemplo 2 -- Lista Todo</h1>
    //     <TodoApp/>
    //     <CustomTodoApp/>
    // </div>
    <div>
    <h1>Ejemplo 3 -- Evento raton</h1>
      <MouseApp/>
      <CustomMouseApp/>
  </div>
  );
}

export default App;
