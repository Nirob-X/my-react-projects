import Counter from "./components/Counter";
import DoubleClick from "./components/DoubleClick";
import Click from "./components/Click";

function App() {
  return (
  	<>
    	<Counter rander={(count, add) => <Click count={count} add={add} />} />
    	<Counter rander={(count, add) => <DoubleClick count={count} add={add} />} />
    </>	
  );
}

export default App;
