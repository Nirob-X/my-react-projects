import {useRef, useEffect, useReducer} from "react";
import Char from "./components/Char";
import "./global.css";
import {GlobalStyle, InputFild, DropDown, DropDownTitle, Title, P, Container, TextWrapper, TimeIcon, SpeedIcon, InfoWrapper, Info, InfoText, StartButton} from "./style/styled-components"

const text = () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut`.split("");

const ACTIONS = {
	INIT: "INIT",
	INPUT_CHANGE: "INPUT_CHANGE",
	RESET: "RESET",
	TIME: "TIME",
}

const initState = {
	activeIndex: 0,
	inputText: "",
	time: 0,
	testText: null,
	correctWord: 0,
}

function reducer(prevState, action) {
	switch(action.type) {
		case ACTIONS.INPUT_CHANGE:
			const {text} = action.payload;
			const textArray = text.split(" ");
			const correctWord = prevState.testText.filter((item) => textArray.indexOf(item) !== -1).length;

			return {
				...prevState,
				inputText: text,
				activeIndex: text.length,
				correctWord: correctWord
			}
			
		case ACTIONS.RESET:
			return {
				...action.payload,
				testText: prevState.testText
			}
			
		case ACTIONS.TIME:
			return {
				...prevState,
				time: prevState.time + 1
			}
			
		case ACTIONS.INIT:
			return {
				...prevState,
				testText: action.payload
			}
			
		default: return prevState;
	}
}


function App() {
	const [state, dispatch] = useReducer(reducer, initState);
	const {current} = useRef(text());
	const inputRef = useRef(null);
	const id = useRef(null);

	const proccesInput = (value) => {
		dispatch({type: ACTIONS.INPUT_CHANGE, payload: {text: value}})

		if (value.length >= current.length) {
			inputRef.current.disabled = true;
			clearInterval(id.current)
			return;
		}
	}

	const handleStart = (e) => {
		clearInterval(id.current)
		dispatch({type: ACTIONS.RESET, payload: initState})
		inputRef.current.disabled = false;
		inputRef.current.focus({preventScroll: true});
		id.current = setInterval(() => {
			dispatch({type: ACTIONS.TIME})
		}, 1000)
	}

	const changeText = async () => {
		try {		
			const res = await fetch("http://metaphorpsum.com/paragraphs/1/5")
			const data = await res.text()
			current.length = 0
			const array = data.toLowerCase().split("");
			current.push(...array)
			clearInterval(id.current)
			dispatch({type: ACTIONS.RESET, payload: initState})
			inputRef.current.disabled = true;
			dispatch({type: ACTIONS.INIT, payload: current.join("").split(" ")})
		
		} catch(err) {
			console.log(err)
		}
	}

	const handleP = () => {
		console.log("im clicked/")
		inputRef.current.focus({preventScroll: true})
	}
	

	useEffect(() => {
	
		dispatch({type: ACTIONS.INIT, payload: current.join("").split(" ")})
		inputRef.current.disabled = true;
		
	}, [current])
	
  	return (
    	<Container>
    		<GlobalStyle />
    		<Title>Typing Speed Test</Title>
			<InfoWrapper>
				<Info>
					<TimeIcon />
					<InfoText>{`${Math.floor(state.time / 60)}`.padStart("2", "0")}m {`${state.time % 60}`.padStart("2", "0")}s</InfoText>
				</Info>
				<Info>
					<SpeedIcon />
					<InfoText>{((state.correctWord / (state.time / 60)) || 0).toFixed(2)}WPM</InfoText>
				</Info>
			</InfoWrapper>
			<TextWrapper>
    			<P onClick={handleP}>{current.map((char, index) => <Char active={index === state.activeIndex} char={char} correct={char === state.inputText[index] ? true : state.activeIndex < index ? null : false } />)}</P>
			</TextWrapper>
    		<InputFild ref={inputRef} value={state.inputText} onChange={(e) => proccesInput(e.target.value)} type="text" />
    		<StartButton type="button" onClick={handleStart}>{state.inputText === "" ? "Start Test" : "Restart Test"}</StartButton>
    		<StartButton type="button" onClick={changeText}>Change Text</StartButton>
    	</Container>
  	);
}

export default App;
