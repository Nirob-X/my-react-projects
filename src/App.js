import Section from "./components/Section";
import CountContext from "./context/CountContext";
import {useState} from "react";

function App() {
	const [count, setCount] = useState(0);
  	return (
  		<CountContext.Provider value={{count, setCount}}>
    		<Section />
    	</CountContext.Provider>
  	);
}

export default App;
