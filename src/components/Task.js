import {useState, useRef} from "react";
import useOnOutSideClick from "./useOnOutSideClick";
import {ACTIONS} from "./Main";
import {TopLevelLi, Label, Settings, TaskMenu} from "./style/element.styled";

export default function Task({dispatch, data, id, display, setInputText, setInputAndFun}) {
	const [show, setShow] = useState(false);

	function applyClass(x, status) {
		if (x === "ALL") {
			
			return "";
		} else if (x === "PENDING") {
			if (data.checked) {
				return "hide";
			} else {
				return "";
			}
		} else {
			if (data.checked) {
				return "";
			} else {
				return "hide";
			}
		}
	}
	
	const ref = useRef(null)
	useOnOutSideClick(ref, () => setShow(false));

	const edit = () => {
		setInputAndFun(data.text, id);
		setShow(false);
	}
	
	return (
		<TopLevelLi className={`${applyClass(display)} ${data.checked ? "checked" : ""}`}>
			<Label htmlFor={id}>
				<input onChange={() => dispatch({type: ACTIONS.CHECKED, payload: {data: data, id: id}})} type="checkbox" id={id} checked={data.checked}/>
				<p>{data.text}</p>
			</Label>
		    <Settings className="settings">
				<i className="uil uil-ellipsis-h" onClick={() => setShow(true)}></i>
				<TaskMenu ref={ref} className={`${show ? "show" : ""}`}>
					<li onClick={edit}><i className="uil uil-pen"></i>Edit</li>
		            <li onClick={() => dispatch({type: ACTIONS.DELETE_TASK, payload: { id }})}><i className="uil uil-trash"></i>Delete</li>
		        </TaskMenu>
			</Settings>
		</TopLevelLi>
	);
}
