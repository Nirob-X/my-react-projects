import {useState} from "react";
import Styled from "./Form.module.css";
import svgLogo from "./bars-icon.svg";

export default function ControlForm({take}) {
	const [inputText, setInputText] = useState("");
	
	const handleInput = e => {
		setInputText(e.target.value);
	}

	function formateText(oldText) {
		const firstLetter = oldText[0].toUpperCase();
		const restLetter = oldText.slice(1).toLowerCase();
		return firstLetter + restLetter;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = e.target[0].value.replace(/\s+/g, ' ').trim()
		if (data) {
			const task = formateText(data);
			take(task);
			setInputText("");
		}
	}
	
	return (
		<form onSubmit={handleSubmit} className={Styled.taskInput}>
			<img src={svgLogo} alt="icon" />
			<input value={inputText} onChange={handleInput} type="text" placeholder="Add a new task" />
		</form>
	);
}
