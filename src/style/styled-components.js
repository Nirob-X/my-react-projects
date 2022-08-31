import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`		
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:root {
		--mono-font: 'Share Tech Mono', monospace;
		--text-font: 'Nunito Sans', sans-serif;
		--green-color: rgba(84, 255, 146, .5);
		--dark-green: #00CC00;
		--red-color: rgba(255, 0, 103, 1);
		--black-color: rgba(40, 40, 43, 1);
		--black-75: rgba(40, 40, 43, .75);
		--black-60: rgba(40, 40, 43, .60);		
	}
	
	body {
		@media screen and (max-width: 640px) {
			padding: 0 16px;
		}
	}
`

export const Title = styled.div`
	font-size: 38px;
	text-align: left;
	color: var(--black-color);
	font-family: var(--text-font);
	font-weight: bold;
	margin: 32px 0; 
`

export const Container = styled.div`
	margin: 24px auto;
	width: 860px;
	
	@media screen and (max-width: 920px) {
		width: 640px;
	}

	@media screen and (max-width: 640px) {
		width: fit-content;
	}

`

export const InfoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const ButtonGroup = styled.div`
	display: flex;
	gap: 32px;
	margin-top: 24px;
`

export const Info = styled.div`
	padding: 8px 0;
	font-family: var(--text-font);

`

export const InfoText = styled.span`
	font-size: 28px;
	color: var(--black-75);
	@media screen and (max-width: 640px) {
		font-size: 21px;
	}
`

export const P = styled.p`
	font-size: 28px;
	font-family: var(--mono-font);
	color: var(--black-60);
	line-height: 1.8;
	text-align: left;

	& span.active {
	        background-color: var(--green-color);
	}
	
	& span.correct {
	        color: var(--dark-green);
	}
	
	& span.incorrect {
	        color: var(--red-color);
	        background-color: rgba(254,204,203,255);
	}

	@media screen and (max-width: 640px) {
		font-size: 21px;
	}
`

export const TextWrapper = styled.div`
	font-family: var(--text-font);
`

export const InputFild = styled.input`
	position: absolute;
	transform: scale(0);
`

export const Button = styled.button`
	font-size: 21px;
	color: rgb(255, 255, 255);
	font-family: var(--text-font);
	padding: 8px 32px;
	background-color: #311B92;
	border: none;
	box-shadow: 0px 5px 20px #311b924D;
	text-align: center;
	border-radius: 5px;
	transition: transform .2s ease;

	&:hover{
		filter: brightness(2);
	}
	&:active {
		transform: translateY(5px); 
	}
	@media screen and (max-width: 640px) {
		font-size: 15px;
	}
`
