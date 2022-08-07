import {ACTIONS} from "../App";

export default function OparetionButton({dispatch, oparetion}) {
	return (
		<button onClick={() => dispatch({type: ACTIONS.oparetion, oparetion: oparetion})}>{oparetion}</button>
	);
}
