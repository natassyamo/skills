import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from 'remotion';

export const Scene1Threat: React.FC = () => {
	const frame = useCurrentFrame();

	// Lock icon spring animation
	const lockScale = spring({
		frame,
		fps: 30,
		config: {
			damping: 200,
		},
		from: 0,
		to: 1,
		durationInFrames: 60,
	});

	// Threat arrows stagger animation
	const threatOpacity = interpolate(
		frame,
		[30, 90],
		[0, 1],
		{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
	);

	const threatScale = spring({
		frame: Math.max(0, frame - 30),
		fps: 30,
		config: {
			damping: 200,
		},
		from: 0,
		to: 1,
		durationInFrames: 60,
	});

	// Red danger indicators
	const dangerOpacity = interpolate(
		frame,
		[90, 150],
		[0, 1],
		{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
	);

	return (
		<AbsoluteFill
			style={{
				background: '#0a0a0a',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '150px 60px',
				color: 'white',
				fontFamily: 'Inter',
			}}
		>
			{/* Headline */}
			<div
				style={{
					fontSize: 56,
					fontWeight: 800,
					marginBottom: 40,
					textAlign: 'center',
					color: '#ffffff',
					animation: 'fadeInScale 0.6s ease-out',
					opacity: interpolate(
						frame,
						[0, 30],
						[0, 1],
						{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
					),
					transform: `scale(${spring({
						frame,
						fps: 30,
						config: { damping: 200 },
						from: 0.8,
						to: 1,
						durationInFrames: 30,
					})})`,
				}}
			>
				Why Cybersecurity Matters
			</div>

			{/* Lock Icon */}
			<svg
				width="120"
				height="120"
				viewBox="0 0 120 120"
				style={{
					marginBottom: 60,
					transform: `scale(${lockScale})`,
					opacity: interpolate(frame, [0, 60], [0.5, 1]),
				}}
			>
				<g stroke="#6366f1" strokeWidth="3" fill="none">
					<rect x="30" y="50" width="60" height="50" rx="4" />
					<path d="M 45 50 V 35 A 15 15 0 0 1 75 35 V 50" />
					<circle cx="60" cy="80" r="4" fill="#6366f1" />
				</g>
			</svg>

			{/* Threat Arrows */}
			<div
				style={{
					position: 'absolute',
					width: 200,
					height: 200,
					top: '35%',
					left: '50%',
					transform: `translateX(-50%) scale(${threatScale})`,
					opacity: threatOpacity,
				}}
			>
				{/* Arrow 1 - Top Left */}
				<svg
					width="80"
					height="80"
					viewBox="0 0 80 80"
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
					}}
				>
					<line x1="60" y1="60" x2="20" y2="20" stroke="#ef4444" strokeWidth="3" />
					<polygon points="20,20 25,35 15,30" fill="#ef4444" />
				</svg>

				{/* Arrow 2 - Top Right */}
				<svg
					width="80"
					height="80"
					viewBox="0 0 80 80"
					style={{
						position: 'absolute',
						top: 0,
						right: 0,
					}}
				>
					<line x1="20" y1="60" x2="60" y2="20" stroke="#ef4444" strokeWidth="3" />
					<polygon points="60,20 55,35 65,30" fill="#ef4444" />
				</svg>

				{/* Arrow 3 - Bottom */}
				<svg
					width="80"
					height="80"
					viewBox="0 0 80 80"
					style={{
						position: 'absolute',
						bottom: 0,
						left: '50%',
						transform: 'translateX(-50%)',
					}}
				>
					<line x1="40" y1="20" x2="40" y2="60" stroke="#ef4444" strokeWidth="3" />
					<polygon points="40,60 30,45 50,45" fill="#ef4444" />
				</svg>
			</div>

			{/* Explanation Text */}
			<div
				style={{
					position: 'absolute',
					bottom: 200,
					width: '100%',
					paddingX: 60,
					textAlign: 'center',
					fontSize: 36,
					fontWeight: 400,
					lineHeight: 1.4,
					color: '#ffffff',
					opacity: interpolate(
						frame,
						[60, 120],
						[0, 1],
						{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
					),
				}}
			>
				Every second, thousands of cyberattacks target businesses and individuals.
			</div>

			{/* Danger indicators */}
			<div
				style={{
					position: 'absolute',
					bottom: 120,
					width: '100%',
					display: 'flex',
					justifyContent: 'space-around',
					paddingX: 150,
					opacity: dangerOpacity,
				}}
			>
				{[0, 1, 2].map((i) => (
					<div
						key={i}
						style={{
							width: 16,
							height: 16,
							borderRadius: '50%',
							background: '#22c55e',
							animation: `pulse 1s ease-in-out ${i * 0.2}s infinite`,
						}}
					/>
				))}
			</div>
		</AbsoluteFill>
	);
};
