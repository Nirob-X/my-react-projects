import Styled from "./Form.module.css";
import svgLogo from "./bars-icon.svg";

export default function ControlForm() {
	return (
		<div className={Styled.taskInput}>
			<img src={svgLogo} alt="icon" />
			<input type="text" placeholder="Add a new task" />
		</div>
	);
}
