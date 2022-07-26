import { useState } from  "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div className="counter">
			<button className="add" type="button" disabled={count >= 100} onClick={() => setCount((prev) => prev+1)}>Increment</button>
			<span> {count} </span>
			<button className="sub" type="button" disabled={count <= 0} onClick={() => setCount((prev) => prev-1)}>Decrement</button>
		</div>
	);
}
