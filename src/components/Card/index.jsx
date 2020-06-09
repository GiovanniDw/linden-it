import React from "react";
import StyledCard from './StyledCard';
import {PrimaryButton} from '../Button';
import {CourseTags} from '../Tags';

export default function Card({tag, content, title, label}) {
	return (
		<StyledCard>
			{tag &&
				<CardHeader title={title} tag={tag} >
					{tag}
				</CardHeader>
			}
			{content &&
				<CardContent content={content}>
					{content}
				</CardContent> }
				
			<CardFooter>
				{label}
			</CardFooter>
			</StyledCard>
	)
}

export const BaseCard = ({children}) => {
	return (
		<StyledCard>
			{children}
		</StyledCard>
	)
}

export const CardHeader = ({tag,title}) => {
	return (
		<div className='card-header'>
			{tag && <CourseTags>{tag}</CourseTags>}

			<h2>{title}</h2>
		</div>
	);
}
export const CardContent = ({content}) => {
	return (
		<div className="card-content">
			<p><b>Korte Introductie</b></p>
			<p>
				{content}
			</p>
		</div>
	);
};

export const CardFooter = ({children}) => {
	return (
		<div className='card-footer'>
			<PrimaryButton label={children} />
		</div>
	);
};

