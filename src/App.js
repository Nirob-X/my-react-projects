import {useReducer} from "react";
import DigitButton from "./components/DigitButton";
import OparetionButton from "./components/OparetionButton";
import "./index.css";

export const ACTIONS = {
	addDigit: "addDigit",
	calculate: "calculate",
	paretion: "addOparetion",
	clearAll: "clearAll",
	clearOne: "deleteOne"
}

const reducer = (state, action) => {
	switch(action.type) {
		case ACTIONS.addDigit:
			if (state.overwrite) {
				return {
					...state,
					currentOparend: action.digit,
					overwrite: false
				}
			}
			
			if (state.currentOparend === "0" && action.digit !== ".") {
				return {
					...state,
					currentOparend: action.digit
				}
			}
			
			if (action.digit === "0" && state.currentOparend === "0") return state;
			if (action.digit === "." && state.currentOparend && state.currentOparend.includes(".")) return state;
			
			return {
				...state,
				currentOparend: `${state.currentOparend || ""}${action.digit}`
			};
			
		case ACTIONS.oparetion:
			if (state.currentOparend == null && state.previousOparend == null){
			 	return state;
			}
			
			if (state.currentOparend == null) {
				return {
					...state,
					oparetion: action.oparetion
				}
			}

			if (state.currentOparend === ".") {
				return state;
			}
			

			if (state.previousOparend == null) {
				return {
					...state,
					oparetion: action.oparetion,
					previousOparend: state.currentOparend,
					currentOparend: null
				}
			}


			return {
				...state,
				previousOparend: calculate(state),
				currentOparend: null,
				oparetion: action.oparetion
			}

		case ACTIONS.calculate:
			if (state.currentOparend == null || state.previousOparend == null || state.oparetion == null || state.currentOparend === ".") {
				return state;
			}

			return {
				...state,
				previousOparend: null,
				currentOparend: calculate(state),
				oparetion: null,
				overwrite: true
			}
		case ACTIONS.clearOne:
			if (!Boolean(state.currentOparend)) return state;
			if (state.overwrite) {
				return {
					...state,
					currentOparend: null,
					previousOparend: null,
					oparetion: null,
					overwrite: false
				}
			}

			if (state.currentOparend.length === 1) {
				return {
					...state,
					currentOparend: null
				};
			}
			
			return {
				...state,
				currentOparend: state.currentOparend.slice(0, -1)
			};
		
		case ACTIONS.clearAll:
			return {};
		
		default:
			return state;
	}
}

const calculate = (state) => {
	const current = parseFloat(state.currentOparend);
	const previous = parseFloat(state.previousOparend);
	switch(state.oparetion) {
		case "+":
			return `${previous + current}`;
		case "-":
			return `${previous - current}`;
		case "÷":
			if (current === 0) return previous;
			return `${previous / current}`;
		case "*":
			return `${previous * current}`;
		default:
			return state;
	}
}

function App() {
	const [{currentOparend, previousOparend, oparetion}, dispatch] = useReducer(reducer, {});
  return (
    <div className="container">
    	<div className="full">
    		<p className="prevOparend">{previousOparend} {oparetion}</p>
    		<p className="currentOparend">{currentOparend}</p>
    	</div>
    	<button className="two-span" onClick={() => dispatch({type: ACTIONS.clearAll})}>C</button>
    	<button onClick={() => dispatch({type: ACTIONS.clearOne})}>DE</button>
    	<OparetionButton oparetion="÷" dispatch={dispatch} />
    	<DigitButton digit="1" dispatch={dispatch} />
    	<DigitButton digit="2" dispatch={dispatch} />
    	<DigitButton digit="3" dispatch={dispatch} />
    	<OparetionButton oparetion="*" dispatch={dispatch} />
    	<DigitButton digit="4" dispatch={dispatch} />
    	<DigitButton digit="5" dispatch={dispatch} />
    	<DigitButton digit="6" dispatch={dispatch} />
    	<OparetionButton oparetion="-" dispatch={dispatch} />
    	<DigitButton digit="7" dispatch={dispatch} />
    	<DigitButton digit="8" dispatch={dispatch} />
    	<DigitButton digit="9" dispatch={dispatch} />
    	<OparetionButton oparetion="+" dispatch={dispatch} />
    	<DigitButton digit="." dispatch={dispatch} />
    	<DigitButton digit="0" dispatch={dispatch} />
    	<button className="two-span" onClick={() => dispatch({type: ACTIONS.calculate})}>=</button>
    </div>
  );
}


export default App;
