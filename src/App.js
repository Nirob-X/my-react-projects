import {useState} from "react";
import Square from "./components/Square"
import "./index.css";

function App() {
	// eslint-disable-next-line
	const [grid, setGrid] = useState(Array(9).fill(null));
	const [isX, setIsX] = useState(true);

	const winner = (square) => {
		const winingPattern = [
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6]
		];

		for (let i = 0; i<winingPattern.length; i++) {
			const [a, b, c] = winingPattern[i];
			if (square[a] && square[a] === square[b] && square[a] === square[c] ){
				return square[a];
			}
		}

		return null;
	}

	const win = winner(grid);

	const handleClick = (index) => {
		if (grid[index] || win) return
		const xy = isX ? "X" : "O";
		setGrid(prev => {
			prev[index] = xy;
			return prev;
		});
		setIsX(prev => !prev);
	}

	const restart = () => {
		setIsX(true);
		setGrid(Array(9).fill(null));
	}

	const text = win ? `${win} win 👑` : `now ${isX ? "X" : "O"}`
	
  	return (
    	<div className="container">
    		{grid.map((s, index) => <Square xORy={s} onClick={() => handleClick(index)} />)}
    		<span className="twoSpan">{text}</span>
    		<button className="twoSpan" onClick={restart}>Restart</button>
    	</div>
  	);
}

export default App;
