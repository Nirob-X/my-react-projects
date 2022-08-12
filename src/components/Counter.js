export default function Counter({count, setCount}) {
	return (
		<div>
			<p>Count: {count}</p>
			<button type="button" onClick={() => setCount(prev => prev+1)}>Increment Count</button>
		</div>
	);
}
