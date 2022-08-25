import {memo} from "react";
import style from "./Char.module.css";

function Char({char, active, correct}) {	
	if (active) {
		return <span className="active">{char}</span>
	}
	if (correct === true) {
		return <span className="correct">{char}</span>
	}

	if (correct === false) {
		return <span className="incorrect">{char}</span>
	}

	return <span>{char}</span>
}

export default memo(Char)
