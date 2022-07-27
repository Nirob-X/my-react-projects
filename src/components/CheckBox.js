import {useState} from "react";

export default function CheckBox({uid, text, deleteItem}) {
	const [check, setCheck] = useState(false)
	
	const handleCheck = (e) => {
		setCheck((old) => !old)
		e.target.parentNode.classList.toggle("checked")
	}
	
	return (
		<div className="checkbox-group">
			<input type="checkbox" id={uid} checked={check} onChange={handleCheck} />
			<label htmlFor={uid}>{text}</label>
			<button data-id={uid} onClick={deleteItem}>×</button>
		</div>
	);
}
