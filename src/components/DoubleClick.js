export default function DoubleClick({count, add}) {
	return (
		<h2 onDoubleClick={add}>I'm double clicked {count} times</h2>
	);
}
