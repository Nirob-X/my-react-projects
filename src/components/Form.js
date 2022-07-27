import CheckBox from "./CheckBox";
import {useState} from "react";

export default function Form() {
	const [text, setText] = useState('');
	const [todos, setTodos] = useState([]);

	function textFormate(value) {
		const data = value.toLowerCase();
		const firstLetter = data[0].toUpperCase();
		return firstLetter + data.slice(1);
	}

	const deleteItem = (e) => {
		const id = e.target.dataset.id
		const newTodos = todos.filter(item => item._id !== id );
		setTodos(newTodos)
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		const  spaceRemoved =e.target[0].value.replace(/\s+/g, ' ').trim();
		if (!spaceRemoved) return;
		const data = textFormate(spaceRemoved);
		const id = `${Math.random()}`.slice(2)
		const newObj = {_id: id, text: data}
		const copyTodos = [ ...todos, newObj ]
		setTodos(copyTodos)
		setText("")
	}
	
	return (
		<>
			{todos.map((el) => <CheckBox uid={el._id} text={el.text} deleteItem={deleteItem} /> )}
			<form className="checkbox-group add-shadow" onSubmit={handleSubmit} >
				<input className="input" autocomplete="off"  type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Add todo" />
			</form>
		</>
	);
}
