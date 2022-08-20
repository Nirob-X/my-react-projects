import {useRef, useState, useEffect, useReducer} from "react";
import Char from "./components/Char";
// import TimeAndSpeed from "./components/TimeAndSpeed"
import "./global.css";

const text = () => `My name is al imam, I'm student in laksamipur politechnic institute.`.split("");

const ACTIONS = {
	INPUT: "INPUT",
	ACTIVE_INDEX: "ACTIVE-INDEX",
	RESET: "RESET",
	TIME: "TIME",
	WPM: "WPM"
}

const initState = {
	wpm: 0,
	time: 0
}

function reducer(prevState, action) {
	switch(action.type) {
		case ACTIONS.INPUT:
			return {
				...prevState,
				inputText: action.payload.text
			}
		case ACTIONS.ACTIVE_INDEX:
			return {
				...prevState,
				activeIndex: prevState.activeIndex + 1
			}
		case ACTIONS.RESET:
			return {
				...action.payload
			}
		case ACTIONS.TIME:
			return {
				...prevState,
				time: action.payload
			}
		default: return prevState;
	}
}


function App() {
	// eslint-disable-next-line
	const [state, dispatch] = useReducer(reducer, initState)
	const [input, setInput] = useState("");
	const [activeIndex, setActiveIndex] = useState(0);
	const [start, setStart] = useState(false);
	const [time, setTime] = useState(0);
	const {current} = useRef(text());
	const inputRef = useRef(null);
	const id = useRef(null);

	const proccesInput = (value) => {
		setInput(value);
		setActiveIndex(value.length);
		
		if (value.length === current.length) {
			inputRef.current.disabled = true;
			setStart(false);
			clearInterval(id.current)
			return;
		}
	}

	const handleStart = (e) => {
		clearInterval(id.current)
		setInput("");
		setActiveIndex(0);
		setStart(true);
		setTime(0);
		inputRef.current.disabled = false;
		inputRef.current.focus();
		id.current = setInterval(() => {
			setTime(oldTime => oldTime + 1)
		}, 1000)
	}

	useEffect(() => {
		inputRef.current.disabled = true;
	}, [])
	
  	return (
    	<div>
			<div>
				<p>Time {time}</p>
			</div>
    		<p>{current.map((char, index) => <Char active={index === activeIndex} char={char} correct={char === input[index] ? true : activeIndex < index ? null : false } />)}</p>
    		<input ref={inputRef} value={input} onChange={(e) => proccesInput(e.target.value)} type="text" />
    		<button type="button" onClick={handleStart}>{start ? "Restart" : "Start"}</button>
    	</div>
  	);
}

export default App;
