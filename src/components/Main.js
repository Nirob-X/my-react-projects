import {useReducer, useState, useRef} from "react";
import {Form} from "./style/element.styled";
import Controls from "./Controls";
import svgLogo from "./bars-icon.svg";
import UnorderList from "./UnorderList";
import Task from "./Task";

export const ACTIONS = {
	ADD_TASK: "ADD-TASK",
	EDIT_TASK: "EDIT-TASK",
	CHECKED: "CHECKED_UNCHECKED",
	DELETE_TASK: "DELETE_TASK",
	CLEAR_ALL: "CLEAR_ALL"
}

function key(){
	return `${Math.random() * new Date().getTime()}`
}

function reducer(prevState, action){
	switch(action.type){
		case ACTIONS.ADD_TASK:
			const {text, uid} = action.payload;
			if (uid in prevState) {
				prevState[uid] = {
					text: text,
					checked: false
				}

				return {
					...prevState
				}
			}
			
			return {
				[key()]: {
					text: text,
					checked: false
				},
				...prevState
			}

		case ACTIONS.CHECKED:
			const {id, data} = action.payload;
			data.checked = !data.checked;
			prevState[id] = data;
			return {
				...prevState
			}

		case ACTIONS.DELETE_TASK:
			const {id:objKey} = action.payload;
			delete prevState[objKey];
			return {
				...prevState
			}

		case ACTIONS.CLEAR_ALL:
			return {}
			
		default:
			return prevState;
	}
}

 
function Main() {
	const [state, dispatch] = useReducer(reducer, {});
	const [display, setDisplay] = useState("ALL");
	const [input, setInput] = useState("");
	const [uid, setUid] = useState(null);
	const ref = useRef(null);

	
	function formateText(oldText) {
		const firstLetter = oldText[0].toUpperCase();
		const restLetter = oldText.slice(1).toLowerCase();
		return firstLetter + restLetter;
	}

	function has(inputData) {
		const array = Object.values(state);
		for (let element of array) {
			console.log(element)
			if (element.text === inputData) {
				return false;
			}
			
		}
		return true;
	}

	function  handleSubmit(e) {
		e.preventDefault();
		const inputData = input.replace(/\s+/g, ' ').trim();
		const taskText = formateText(inputData);
		if (taskText && has(taskText)) {
			dispatch({type: ACTIONS.ADD_TASK, payload: {text: taskText, uid: uid}});
			setInput("");
			setUid(null)
		}
	}

	function handleEdit(text, textId) {
		setInput(text);
		setUid(textId);
		ref.current.focus();
	}
	

	return (
		<>
			<Form className="taskInput" onSubmit={handleSubmit}>
				<img src={svgLogo} alt="icon" />
	            <input ref={ref} type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add Task Here"/>
			</Form>
			<Controls dispatch={() => dispatch({type: ACTIONS.CLEAR_ALL})} setDisplay={setDisplay} display={display}  />
			<UnorderList length={Object.keys(state).length}>
				{Object.keys(state).map(key => <Task key={key} dispatch={dispatch} data={state[key]} id={key} display={display} setInputText={setInput} setInputAndFun={handleEdit} />)}
			</UnorderList>
		</>
	);
}

export default Main;

