import { useState } from "react";
import List from "./List";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);


  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button className="btn btn-block" type="button" onClick={()=>setPeople([])}>Clear the list</button>
      </section>
    </main>
  );
};
export default App;
