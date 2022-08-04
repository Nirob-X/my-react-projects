import {useState, useCallback} from "react";
import ControlForm from "./ControlForm";
import Controls from "./Controls";
import UnorderList from "./UnorderList";
import Task from "./Task";

function Main() {
	const [task, setTask] = useState([]);
	const [filter, setFilter] = useState("a");
	
	const key = () => {
		const one = `${Math.random()}`.slice(2);
		const tow = `${Math.random()}`.slice(2);
		return one + tow;
	}

	const handleFilter = (e) => {
		setFilter(e)
	}

	const filterByStatus = (filterBy, object) => {
		if (filterBy === "a") {
			return object
		} else if (filterBy === "p") {
			const p =  object.filter((el) => el.checked !== true)
			return p
		} else {
			const c = object.filter((el) => el.checked !== false)
			return c
		}
	} 

	const checkChange = (e) => {
		const uid = e.target.id
		const filteredTask = task.filter((element) => {
			if (uid === element._id){
				element.checked = !element.checked
			}
			return element
		})
		setTask(filteredTask)
	}

	const deleteTask = uid => {
		const filterDelete = task.filter((item) => uid !== item._id);
		setTask(filterDelete)
	}

	const handleTaskSubmit = useCallback((data) => {
		const newTask = {
			taskText: data,
			checked: false,
			_id: key()
		}
		console.log("im runing")
		const copyTask = [...task, newTask]
		setTask(copyTask)
	}, [task]);

	const filterData = filterByStatus(filter, task)
	
	return (
		<>
			<ControlForm take={handleTaskSubmit}/>
			<Controls handler={handleFilter} />
			<UnorderList>
				{filterData.map(element => <Task checkFun={checkChange} deleteTask={deleteTask} key={element._id} text={element.taskText} uid={element._id} checked={element.checked} />)} 
			</UnorderList>
		</>
	);
}

export default Main
