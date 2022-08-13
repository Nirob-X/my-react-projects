import Styled from "./Ul.module.css"

export default function UnorderList({children}) {
	return (
		<ul className={`${Styled.taskBox} ${Styled.overflow}`}>
			{children}
		</ul>
	);
}
