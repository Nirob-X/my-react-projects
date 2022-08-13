import {useReducer, useState} from "react";
import ControlForm from "./ControlForm";
import Controls from "./Controls";
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
			const stateKeys = Object.keys(prevState);
			for (let item of stateKeys) {
				if (prevState[item].text === text) {
					return prevState;
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
	const [inputText, setInputText] = useState("");
	const [uid, setUid] = useState();

	const setIdAndFun = (text, id) => {
		setUid(id);
		setInputText(text);
	}

	return (
		<>
			<ControlForm dispatch={dispatch} data={{inputText: inputText, setInputText: setInputText, uid: uid, setUid: setUid}}/>
			<Controls dispatch={() => dispatch({type: ACTIONS.CLEAR_ALL})} setDisplay={setDisplay} display={display}  />
			<UnorderList>
				{Object.keys(state).map(key => <Task key={key} dispatch={dispatch} data={state[key]} id={key} display={display} setInputText={setInputText} setIdAndFun={setIdAndFun} />)}
			</UnorderList>
		</>
	);
}

export default Main
