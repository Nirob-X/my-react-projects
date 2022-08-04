import {useState, useRef} from "react";
import Styled from "./Task.module.css";
import useOnOutSideClick from "./useOnOutSideClick";

export default function Task({text, uid, checked, checkFun, deleteTask}) {
	const [show, setShow] = useState(false);
	const ref = useRef(null)
	const handler =()=> setShow(false)
	useOnOutSideClick(ref, handler)
	const deleteItem = e => {
		const uid = e.target.dataset.id
		deleteTask(uid)
		setShow(false)
		
	} 
	return (
		<li className={Styled.task} >
			<label htmlFor={uid}>
				<input onChange={checkFun} type="checkbox" id={uid} checked={checked}/>
				<p className={checked ? Styled.checked : ""}>{text}</p>
			</label>
		    <div className={Styled.settings}>
				<i className="uil uil-ellipsis-h" onClick={() => setShow(true)}></i>
				<ul ref={ref} className={`${Styled.taskMenu} ${show && Styled.show}`}>
		            <li data-id={uid} onClick={()=>console.log("edit")} ><i className="uil uil-pen"></i>Edit</li>
		            <li data-id={uid} onClick={deleteItem}><i className="uil uil-trash"></i>Delete</li>
		        </ul>
			</div>
		</li>
	);
}
