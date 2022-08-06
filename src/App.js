import {useReducer} from "react";
import DigitButton from "./components/DigitButton";
import "./index.css";

export const ACTION = {
	addDigit: "addDigit",
	calculate: "calculate",
	clearAll: "clearAll",
	clearOne: "deleteOne"
}

const initState = {
	currentText: "",
	prevText: "",
	oparetion: null
}

const reducer = (state, action) => {
	switch(action.type) {
		case ACTION.addDigit:
			const newState = {
				...state, currentText: state.currentText + action.digit
			}
			return newState;
		default:
			return state;
	}
}

function App() {
	const [{currentText, prevText, oparetion}, dispatch] = useReducer(reducer, initState);
  return (
    <div className="container">
    	<div className="full">
    		<p>{prevText} {oparetion}</p>
    		<p>{currentText}</p>
    	</div>
    	<button className="two-span">AC</button>
    	<button>DET</button>
    	<button>÷</button>
    	<DigitButton digit="1" dispatch={dispatch} />
    	<DigitButton digit="2" dispatch={dispatch} />
    	<DigitButton digit="3" dispatch={dispatch} />
    	<button>x</button>
    	<DigitButton digit="4" dispatch={dispatch} />
    	<DigitButton digit="5" dispatch={dispatch} />
    	<DigitButton digit="6" dispatch={dispatch} />
    	<button>-</button>
    	<DigitButton digit="7" dispatch={dispatch} />
    	<DigitButton digit="8" dispatch={dispatch} />
    	<DigitButton digit="9" dispatch={dispatch} />
    	<button>+</button>
    	<DigitButton digit="." dispatch={dispatch} />
    	<DigitButton digit="0" dispatch={dispatch} />
    	<button className="two-span">=</button>
    </div>
  );
}


export default App;
