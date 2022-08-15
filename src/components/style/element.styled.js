import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
	
	* {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	  font-family: 'Poppins', sans-serif;
	}
	
	body {
	  width: 100%;
	  height: 100vh;
	  overflow: hidden;
	  background: linear-gradient(135deg, #4AB1FF, #2D5CFE);
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	::selection {
	  color: #fff;
	  background: #3C87FF;
	}

	@media (max-width: 400px) {
		body {
			padding: 0 10px;
		}
	}
`


export const Wrapper = styled.div`
	max-width: 405px;
	padding: 28px 0 30px;
	margin: 137px auto;
	background: #fff;
	border-radius: 7px;
	box-shadow: 0 10px 30px rgba(0,0,0,0.1);

	@media (max-width: 400px) {
		padding: 20px 0;
	}
`

export const Form = styled.form`
	height: 52px;
	padding: 0 25px;
	position: relative;
	
	& img {
		top: 50%;
		position: absolute;
		transform: translate(17px, -50%);
	}
	
	& input {
		height: 100%;
		width: 100%;
		outline: none;
		font-size: 18px;
		border-radius: 5px;
		padding: 0 20px 0 53px;
		border: 1px solid #999;

		&:hover, &:focus {
			border: 2px solid #3C87FF;
		}

		::placeholder {
			color: #bfbfbf;
		}
	}

	@media (max-width: 400px) {
		padding: 0 20px;
	}	
`


export const Div = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 18px 25px;
	border-bottom: 1px solid #ccc;

	& span:first-child {
		margin-left: 0;
	}

	& span:nth-last-child(1) {
		margin-right: 0;
	}
	
	@media (max-width: 400px) {
		padding: 18px 20px;

		& span {
			padding: 0 5px;
		}
	}
`

export const Span = styled.span`
	padding: 0 8px;
	font-size: 17px;
	color: #444444;
	cursor: pointer;
	margin-right: 5px;

	&.active {
		color: #3C87FF;
		border-style: solid;
		border-color: #3C87FF;
		border-width: 1px;
		border-radius: 3px;
		transition: color 200ms ease-in;
	}
`


export const Button = styled.button`
	border: none;
	outline: none;
	color: #fff;
	cursor: pointer;
	font-size: 13px;
	padding: 7px 13px;
	border-radius: 4px;
	letter-spacing: 0.3px;
	background: linear-gradient(135deg, #1798fb 0%, #2D5CFE 100%);
	transition: transform 250ms ease;

	&:active {
		transform: scale(0.9);
	}
`

export const Ul = styled.ul`
	margin-top: 20px;
	margin-right: 5px;
	padding: 0 20px 10px 25px;

	&.overflow {
		overflow-y: auto;
		max-height: 300px;
	}

	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 25px;
	}

	&::-webkit-scrollbar-thumb {
		background: #f1f1f1;
		border-radius: 25px;
	}

	& > li:last-child {
		margin-bottom: 0;
		border-bottom: 0;
		padding-bottom: 0;

		& ul {
			bottom: 0;
			transform-origin: bottom right;
		}
	}

	& li:first-child {
		& ul {
			bottom: -65px;
			transform-origin: top right;
		}
	}

	@media (max-width: 400px) {                          24   .taskBox{                                          25     margin-top: 20px;
		margin-right: 5px;
		padding: 0 15px 10px 20px;                       28   }
	}
`

export const TopLevelLi = styled.li`
	list-style: none;
	font-size: 17px;
	margin-bottom: 18px;
	padding-bottom: 16px;
	align-items: center;
	border-bottom: 1px solid #ccc;
	transition: opacity, transform 200ms ease;

	&.hide {
		display: none;
	}
`

export const Label = styled.label`
	display: flex;
	align-items: center;

	& input {
		accent-color: #3C87FF;
	}

	& p {
		user-select: none;
		margin-left: 12px;
		word-wrap: break-word;

		&.checked {
			text-decoration: line-through;
		}
	}
`

export const Settings = styled.div`
	position: relative;

	& i, & li {
		cursor: pointer;
	}
`

export const TaskMenu = styled.ul`
	z-index: 10;
	right: -5px;
	bottom: -65px;
	padding: 5px 0;
	background: #fff;
	position: absolute;
	border-radius: 4px;
	transform: scale(0);
	transform-origin: top right;
	box-shadow: 0 0 6px rgba(0,0,0,0.15);
	transition: transform 0.2s ease;

	&.show {
		transform: scale(1);
	}

	& li {
		height: 25px;
		font-size: 16px;
		margin-bottom: 2px;
		padding: 17px 15px;
		cursor: pointer;
		justify-content: flex-start;

		&:hover {
			background: #f5f5f5;
		}

		&:last-child {
			margin-bottom: 0;
		}

		& i {
			padding-right: 8px;
		}
	}
`

