import {useState, useRef} from "react";
import Styled from "./Task.module.css";
import useOnOutSideClick from "./useOnOutSideClick";
import {ACTIONS} from "./Main";

export default function Task({dispatch, data, id, display, setInputText, setIdAndFun}) {
	const [show, setShow] = useState(false);

	function applyClass(x) {
		if (x === "ALL") {
			return "";
		} else if (x === "PENDING") {
			if (data.checked) {
				return Styled.hide;
			} else {
				return "";
			}
		} else {
			if (data.checked) {
				return "";
			} else {
				return Styled.hide;
			}
		}
	}
	
	const ref = useRef(null)
	useOnOutSideClick(ref, () => setShow(false));

	const edit = () => {
		setIdAndFun(data.text, id);
		setShow(false);
	}
	
	return (
		<li className={`${Styled.task} ${applyClass(display)}`}>
			<label htmlFor={id}>
				<input onChange={() => dispatch({type: ACTIONS.CHECKED, payload: {data: data, id: id}})} type="checkbox" id={id} checked={data.checked}/>
				<p className={data.checked ? Styled.checked : ""}>{data.text}</p>
			</label>
		    <div className={Styled.settings}>
				<i className="uil uil-ellipsis-h" onClick={() => setShow(true)}></i>
				<ul ref={ref} className={`${Styled.taskMenu} ${show && Styled.show}`}>
					<li onClick={edit}><i className="uil uil-pen"></i>Edit</li>
		            <li onClick={() => dispatch({type: ACTIONS.DELETE_TASK, payload: { id }})}><i className="uil uil-trash"></i>Delete</li>
		        </ul>
			</div>
		</li>
	);
}
