import {useState, useEffect, useRef} from "react";

export default function TimeAndSpeed({start, text, typedText, reset, setReset}) {
	const [time, setTime] = useState(0);
	const id = useRef(null);

	if(reset) {
		setTime(0);
		setReset(false);
		clearInterval(id.current)
	}
	
	
	useEffect(() => {
		if(start) {
			id.current = setInterval(() => {
				setTime((oldTime) => oldTime + 1)
			}, 1000);
		}
		

		return () => {
			clearInterval(id.current);
		}

	}, [start])		

	return (
		<div>
			<p>Time: {time}</p>
		</div>
	)
}
