import style from "./style/Nav.module.css"

export default function Nav({name, status, count}){
	return (
		<nav className={style.navBar}>
			<ul className={style.uls}>
				<li>{name}</li>
				<li className={style.number}>{count}</li>
				<li>{status}</li>
			</ul>
		</nav>
	);
}
