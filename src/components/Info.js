import CountContext from "../context/CountContext";

export default function Info() {
	return (
		<CountContext.Consumer>
			{({count}) => <h3>count is {count} to increment number click increment button</h3>}
		</CountContext.Consumer>
	);
}
