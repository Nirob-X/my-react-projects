import Styled from "./Controls.module.css";

export default function Controls() {
	return (
		<div className={Styled.controls}>
			<div className={Styled.filters}>
		    	<span className={Styled.active} data-id="all">All</span>
		        <span data-id="pending">Pending</span>
		        <span data-id="completed">Completed</span>
		    </div>
		    <button className={Styled.clearBtn}>Clear All</button>
		</div>
	);
}
