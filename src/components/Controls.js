import Styled from "./Controls.module.css";
import {useState} from "react";

export default function Controls({handler}) {
	const [active, setActive] = useState("a");
	const handleEvery = e => {
		const id = e.target.dataset.id
		handler(id)
		setActive(id)
	}
	return (
		<div className={Styled.controls}>
			<div className={Styled.filters}>
		    	<span data-id="a" className={active === "a" ? Styled.active : ""} onClick={handleEvery} >All</span>
		        <span data-id="p" onClick={handleEvery} className={active === "p" ? Styled.active : ""} >Pending</span>
		        <span data-id="c" onClick={handleEvery} className={active === "c" ? Styled.active : ""} >Completed</span>
		    </div>
		    <button className={Styled.clearBtn}>Clear All</button>
		</div>
	);
}
