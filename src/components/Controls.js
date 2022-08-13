import Styled from "./Controls.module.css";
// import {ACTIONS} from "./Main";

export default function Controls({setDisplay, display, dispatch}) {
	
	return (
		<div className={Styled.controls}>
			<div className={Styled.filters}>
		    	<span onClick={() => setDisplay("ALL")} className={display === "ALL" ? Styled.active : ""} >All</span>
		        <span onClick={() => setDisplay("PENDING")} className={display === "PENDING" ? Styled.active : ""} >Pending</span>
		        <span onClick={() => setDisplay("COMPLETED")} className={display === "COMPLETED" ? Styled.active : ""} >Completed</span>
		    </div>
		    <button onClick={dispatch} type="button" className={Styled.clearBtn}>Clear All</button>
		</div>
	);
}
