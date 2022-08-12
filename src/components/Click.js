export default function Click({count, add}) {
	return (
		<h2 onClick={add}>I'm clicked {count} times</h2>
	);
}
