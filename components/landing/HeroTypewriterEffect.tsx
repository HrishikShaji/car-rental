"use client"


import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
	typingSpeed?: number;
	deletingSpeed?: number;
	pauseDuration?: number;
}

const messages = [
	"Transform your workflow with AI",
	"Automate tasks effortlessly",
	"Enhance productivity instantly",
	"Create content intelligently",
	"Analyze data seamlessly",
];
const HeroTypewriterEffect: React.FC<TypewriterEffectProps> = ({
	typingSpeed = 100,
	deletingSpeed = 50,
	pauseDuration = 2000,
}) => {
	const [text, setText] = useState('');
	const [messageIndex, setMessageIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [isWaiting, setIsWaiting] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (isWaiting) {
				setIsWaiting(false);
				setIsDeleting(true);
				return;
			}

			const currentMessage = messages[messageIndex];

			if (isDeleting) {
				setText(currentMessage.substring(0, text.length - 1));
				if (text.length === 0) {
					setIsDeleting(false);
					setMessageIndex((prev) => (prev + 1) % messages.length);
				}
			} else {
				setText(currentMessage.substring(0, text.length + 1));
				if (text.length === currentMessage.length) {
					setIsWaiting(true);
				}
			}
		}, isDeleting ? deletingSpeed : isWaiting ? pauseDuration : typingSpeed);

		return () => clearTimeout(timeout);
	}, [text, messageIndex, isDeleting, isWaiting, messages, typingSpeed, deletingSpeed, pauseDuration]);

	return (
		<div className="inline-flex items-center">
			<span className="text-primary">{text}</span>
			<span className="w-0.5 h-6 bg-primary animate-pulse ml-1"></span>
		</div>
	);
};

export default HeroTypewriterEffect;
