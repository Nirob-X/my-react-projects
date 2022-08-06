import {useReducer} from "react";
import Square from "./components/Square";
import "./index.css";

const initState = {
	squares: Array(9).fill(null),
	x: true,
	win: null
}

const reducer = (state, action) => {
	const checkWiner = (squares) => {
		const pattern = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		]
		
		for (let item of pattern) {
			const [a, b, c] = item;
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}
		
		return null;		
	}
	
	switch(action.type) {
		case "setValue":
			const {x, win, squares} = state;
			if (squares[action.index] ||  win) return state;
			squares[action.index] = x ? "X" : "O";
			const newState = {};
			newState.squares = squares;
			newState.x = !x;
			const winer = checkWiner(squares);
			newState.win = winer ? winer : null;
			return newState;
		
		case "restart":
			return {
				squares: Array(9).fill(null),
				x: true,
				win: null
			};
		
		default:
			return state;
	}
}

function App() {
	const [{squares, win, x}, dispatch] = useReducer(reducer, initState)
	const text = win ? `${win} win 🏆` : `Now ${x ? "X" : "O"} trun!`;
  	return (
    	<div className="container">
    		{squares.map((el, index) => <Square text={el} fun={() => dispatch({type: "setValue", index: index})} />)}
    		<span className="twoSpan">{text}</span>
    		<button className="twoSpan" onClick={() => dispatch({type: "restart", data: initState})}>Restart</button>
    	</div>
  	);
}

export default App;
