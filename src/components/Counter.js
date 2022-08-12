import {useState} from "react";

export default function Counter({rander}) {
	const [count, setCount] = useState(0);

	function add() {
		setCount(prev => prev+1);
	}
	return rander(count, add);
}
