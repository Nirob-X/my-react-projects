import {useState} from "react";
import style from "./CheckBox.module.css";

export default function CheckBox() {
	const [check, setCheck] = useState(false)
	
	const handleCheck = (e) => {
		setCheck((old) => !old)
		e.target.parentNode.classList.toggle("checked")
	}
	
	return (
		<div className="checkbox-group">
			<input type="checkbox" id="checkbox" checked={check} onChange={handleCheck} />
			<label htmlFor="checkbox">Listen to music</label>
		</div>
	);
}
