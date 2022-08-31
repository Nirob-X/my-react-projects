import {memo} from "react";

function Char({char, active, correct}) {

	const classGenarator = (ac, co) => {
		if (active) return "active";
		if (co === true) return "correct";
		if (co === false) return "incorrect";
		return "";
	}
	return (
		<span className={classGenarator(active, correct)}>{char}</span>
	)
}

export default memo(Char);
