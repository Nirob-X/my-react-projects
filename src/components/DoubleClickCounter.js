import withCounter from "./withCounter"

function DoubleClickCounter({count, add}) {
	return (
		<p  onDoubleClick={add}>Im double clicked {count} time</p>
	);
}

export default withCounter(DoubleClickCounter);
