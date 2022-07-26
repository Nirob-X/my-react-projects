import {useState, useEffect} from "react";

export default function Clock({ ln }) {
	const [show, setShow] = useState(true);
	const [date, setDate] = useState(new Date());
	useEffect(() => {
		const interval = setInterval(() => {
			setDate(new Date());
		}, 1000);
		return () => clearInterval(interval)
	}, []);
	
	return (
		<div>
			{show ? <h1>{date.toLocaleTimeString(ln)}</h1> : <h1>clock hide successful</h1>}
			{show && <button type="button" onClick={()=>setShow(false)}>Hide</button>}
			{show || <button type="button" onClick={()=>setShow(true)}>Show</button>}
		</div>
	);
}
