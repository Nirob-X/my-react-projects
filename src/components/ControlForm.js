import Styled from "./Form.module.css";
import svgLogo from "./bars-icon.svg";
import {ACTIONS} from "./Main.js";
import {useRef, useEffect} from "react";

export default function ControlForm({dispatch, data}) {

	function formateText(oldText) {
		const firstLetter = oldText[0].toUpperCase();
		const restLetter = oldText.slice(1).toLowerCase();
		return firstLetter + restLetter;
	}

	const ref = useRef(null);
	useEffect(() => {
		ref.current.focus()
	}, [data.uid])


	function  handleSubmit(e) {
		e.preventDefault();
		const inputData = data.inputText.replace(/\s+/g, ' ').trim()
		if (data) {
			const taskText = formateText(inputData);
			dispatch({type: ACTIONS.ADD_TASK, payload: {text: taskText, uid: data.uid}});
			data.setUid(null)
			data.setInputText("");
		}
		
	}
	
	return (
		<form onSubmit={handleSubmit} className={Styled.taskInput}>
			<img src={svgLogo} alt="icon" />
			<input ref={ref} value={data.inputText} onChange={(e) => data.setInputText(e.target.value)} type="text" placeholder="Add a new task" />
		</form>
	);
}
