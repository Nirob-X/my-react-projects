import Counter from "./Counter";
import Content from "./Content";
import CountContext from "../context/CountContext";

export default function Section() {
	return (
		<>
			<CountContext.Consumer>
				{({count, setCount}) => <Counter count={count} setCount={setCount} />}
			</CountContext.Consumer>
			<Content />
		</>
	);
}
