import {memo} from "react";
import style from "./Char.module.css";

function Char({char, active, correct}) {	
	if (active) {
		return <span className={style.active}>{char}</span>
	}
	if (correct === true) {
		return <span className={style.correct}>{char}</span>
	}

	if (correct === false) {
		return <span className={style.incorrect}>{char}</span>
	}

	return <span>{char}</span>
}

export default memo(Char)
