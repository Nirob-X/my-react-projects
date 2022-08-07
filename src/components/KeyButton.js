import {ACTIONS} from "../App";

export default function KeyButton({dispatch}) {
	return (
		<button className="two-span" onClick={() => dispatch({type: ACTIONS.clearAll})}>AC</button>
	);
}
