import styled, {createGlobalStyle} from "styled-components";
import {AiFillClockCircle} from "react-icons/ai";
import {IoIosSpeedometer} from "react-icons/io";

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto+Mono&display=swap');
	
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		background-color: #000;
	}
`

export const Title = styled.div`
	font-size: 1.6rem;
	color: #000;
	text-align: center;
	font-family: 'Roboto Condensed', sans-serif;
	padding: 10px 0;
	border-bottom: 1px #011111 solid;
`

export const Container = styled.div`
	background-color: rgba(255, 255, 255, 1);
	color: #000;
	margin: 20px 10px 20px;
	padding: 10px 0;
	border-radius: 5px;
`
export const TimeIcon = styled(AiFillClockCircle)`
	width: 25px;
	height: auto;
	position: relative;
	top: -1px;
`
export const SpeedIcon = styled(IoIosSpeedometer)`
	width: 25px;
	height: auto;
	position: relative;
	top: -1px;
`

export const InfoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 20px;
`

export const Info = styled.div`
	padding: 5px 0;
	display: flex;
	gap: 5px;
`

export const InfoText = styled.span`
	font-family: 'Roboto Condensed', sans-serif;
	font-size: 20px;
	color: #111827;
`

export const P = styled.p`
	font-size: 1.4rem;
	font-family: 'Roboto Mono', monospace;
	color: #A8A8A8;
	line-height: 1.5;
	text-align: left;

	& span.active {
	        background-color: #d3e9ff;
	}
	
	& span.correct {
	        color: rgba(105,161,214,255);
	}
	
	& span.incorrect {
	        color: rgba(98,70,68,255);
	        background-color: rgba(254,204,203,255);
	}
`

export const TextWrapper = styled.div`
	padding: 10px 15px;
`

export const InputFild = styled.input`
	position: absolute;
	left: -100vw;
	top: 300px;
`

export const StartButton = styled.button`
	font-size: 1rem;
	color: black;
	border-radius: 20px;
	padding: 5px 10px;
	border: 3px #d3e9ff solid;
	background-color: rgba(105,161,214,255);
	text-align: center;
	display: block;
	margin: 10px auto;
`
