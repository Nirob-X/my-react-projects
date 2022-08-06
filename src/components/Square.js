export default function Square({text, fun}) {
	return (
		<span onClick={fun}>{text}</span>
	);
}
