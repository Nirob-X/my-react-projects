import withCounter from "./withCounter";

function ClickCounter({count, add}) {
	return (
		<button type="button" onClick={add}>Im clicked {count} time</button>
	);
}


export default withCounter(ClickCounter);
