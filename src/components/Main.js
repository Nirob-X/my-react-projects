import ControlForm from "./ControlForm";
import Controls from "./Controls";
import UnorderList from "./UnorderList";
import Task from "./Task";

function Main() {
	return (
		<>
			<ControlForm />
			<Controls />
			<UnorderList>
				<Task />
			</UnorderList>
		</>
	);
}

export default Main
