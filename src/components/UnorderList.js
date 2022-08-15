import {Ul} from "./style/element.styled";

export default function UnorderList({children, length}) {
	
	return (
		<Ul  className={length > 5 ? "overflow" : undefined}>
			{children}
		</Ul>
	);
}
