import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

// Spinner component styling
const StyledSpinner = styled.div`
	height: 100vh;
	width: 100vw;
	background: ${colors.primary};
	z-index: 4;
	div {
		
		color: ${colors.light};
		font-size: 50px;
		text-indent: -9999em;
		overflow: hidden;
		width: 1em;
		height: 1em;
		top: 30vh;
		border-radius: 50%;
		transform: translateZ(0);
		margin: 72px auto;
		animation: load6 1.7s infinite ease, round 1.7s infinite ease;
		position: relative;
		z-index: 5;

		@keyframes load6 {
			0% {
				box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
					0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,
					0 -0.83em 0 -0.477em;
			}
			5%,
			95% {
				box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
					0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,
					0 -0.83em 0 -0.477em;
			}
			10%,
			59% {
				box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
					-0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
					-0.297em -0.775em 0 -0.477em;
			}
			20% {
				box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
					-0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
					-0.749em -0.34em 0 -0.477em;
			}
			38% {
				box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
					-0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
					-0.82em -0.09em 0 -0.477em;
			}
			100% {
				box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
					0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,
					0 -0.83em 0 -0.477em;
			}
		}

		@keyframes round {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
`;

// Export Spinner component
export const Spinner = ({ children }) => {
	return (
		<StyledSpinner>
			<div>{children}</div>
		</StyledSpinner>
	);
};

// Spinner PropTypes
Spinner.propTypes = {
	children: PropTypes.any
};

export default Spinner;
