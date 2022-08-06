import {ACTION} from "../App";

export default function DigitButton({dispatch, digit}) {
	return (
		<button onClick={() => dispatch({type: ACTION.addDigit, digit: digit})}>{digit}</button>
	);
}
