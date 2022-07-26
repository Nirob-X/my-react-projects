import Counter from "./components/Counter";
import Nav from "./components/Nav";
import {useState} from "react";

function App() {
	const [nums, setNums] = useState([1,2,3,4,5]);
	
	return (
    	<>
			<Nav name="NIROB" status="Login" count="5" />
			{nums.map((e)=> <Counter />)}
    	</>
  	);
}

export default App;
