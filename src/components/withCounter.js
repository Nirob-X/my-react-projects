import {useState} from "react";

export default function withCounter(Component) {
	function  NewComponent() {
		const [count, setCount] = useState(0);

		const add = () => {
			setCount(prev => prev + 1);
		}
		
		return (
			<>
				<Component count={count} add={add} />
				<p>I'm Render with Higher Order Component (HOC)!</p>
			</>
		)
	}

	return NewComponent;
}
