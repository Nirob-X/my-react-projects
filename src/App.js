import {useRef, useState} from "react";
import Char from "./components/Char";
import "./global.css";

const text = () => `My name is al imam, I'm student in laksamipur politechnic institute.`.split("");

function App() {
	const [input, setInput] = useState("");
	const [activeIndex, setActiveIndex] = useState(0);
	const {current} = useRef(text());

	const proccesInput = (value) => {
		setInput(value);
		setActiveIndex(value.length);
	}
	
  	return (
    	<div>
    		<p>{current.map((char, index) => <Char active={index === activeIndex} char={char} correct={char === input[index] ? true : activeIndex < index ? null : false } />)}</p>
    		<input value={input} onChange={(e) => proccesInput(e.target.value)} type="text" />
    	</div>
  	);
}

export default App;
