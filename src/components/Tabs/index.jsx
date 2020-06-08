import React, { useState } from "react";
import styled from "styled-components";

export default function TabBar({ tabs }) {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabContainer>
				{tabs.map((tab, index) => (
					<TabButton
						key={index}
						active={activeTab === index}
						onClick={() => setActiveTab(index)}
					>
						{tab.title}
					</TabButton>
				))}
			</TabContainer>
			{tabs[activeTab].render()}
		</>
	);
}

const TabContainer = styled.section`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 40px;
	background-color: var(--color-gray-light);
	border-radius: 5px;
    margin:10px 0 20px;
    padding:0 3px;
    
	
`;
const TabButton = styled.button`
	border: 0;
	border-radius: 5px;
	color: var(--color-gray-dark);
	width: 100%;
	height: auto;
	margin: 3px 0;
	align-items: center;
	position: relative;
	transition: 0.3s;
	padding: 0;
	overflow: auto;
	font-size: 11px;
	font-weight: ${(props) => (props.active ? "700" : "500")};
	box-shadow: ${(props) =>
		props.active ? "1px 1px 4px rgba(0, 0, 0, 0.25)" : "0"};
	z-index: ${(props) => (props.active ? "1" : "auto")};
	background: ${(props) => (props.active ? "var(--color-light)" : "#f2f2f2")};
	&:focus {
		outline: none;
	}
`;
