import {useState, useEffect, useRef, useCallback} from "react";
import Styled from "./Task.module.css";
import useOnOutSideClick from "./useOnOutSideClick";

export default function Task() {
	const [show, setShow] = useState(false);
	const ref = useRef(null)
	const handler = useCallback(()=> setShow(false))
	useOnOutSideClick(ref, handler)
	return (
		<li className={Styled.task} >
			<label htmlFor="uid">
				<input type="checkbox" id="uid" />
				<p className={true && Styled.checked}>hello</p>
			</label>
		    <div className={Styled.settings}>
				<i className="uil uil-ellipsis-h" onClick={() => setShow(true)}></i>
				<ul ref={ref} className={`${Styled.taskMenu} ${show && Styled.show}`}>
		            <li><i className="uil uil-pen"></i>Edit</li>
		            <li><i className="uil uil-trash"></i>Delete</li>
		        </ul>
			</div>
		</li>
	);
}
