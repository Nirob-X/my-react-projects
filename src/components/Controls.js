import {Div, Span, Button} from "./style/element.styled"

export default function Controls({setDisplay, display, dispatch}) {
	
	return (
		<Div>
			<div className="filters">
		    	<Span onClick={() => setDisplay("ALL")} className={`${display === "ALL" ? "active" : ""}`} >All</Span>
		        <Span onClick={() => setDisplay("PENDING")} className={`${display === "PENDING" ? "active" : ""}`} >Pending</Span>
		        <Span onClick={() => setDisplay("COMPLETED")} className={`${display === "COMPLETED" ? "active" : ""}`} >Completed</Span>
		    </div>
		    <Button onClick={dispatch} type="button" className="clearBtn">Clear All</Button>
		</Div>
	);
}
