import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from 'remotion';

export const Scene4Practices: React.FC = () => {
	const frame = useCurrentFrame();

	// Checklist items appear with stagger
	const checkItems = [
		{ label: 'Use Password Managers', delay: 0 },
		{ label: 'Enable 2FA', delay: 20 },
		{ label: 'Keep Systems Updated', delay: 40 },
		{ label: 'Verify Before Clicking', delay: 60 },
	];

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
					marginBottom: 60,
					textAlign: 'center',
					color: '#ffffff',
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
				Stay Protected
			</div>

			{/* Checklist */}
			<div
				style={{
					maxWidth: 600,
					marginBottom: 60,
				}}
			>
				{checkItems.map((item, index) => {
					const itemFrame = Math.max(0, frame - item.delay);
					const checkScale = spring({
						frame: itemFrame,
						fps: 30,
						config: { damping: 200 },
						from: 0,
						to: 1,
						durationInFrames: 40,
					});

					const checkOpacity = interpolate(
						frame,
						[item.delay, item.delay + 40],
						[0, 1],
						{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
					);

					return (
						<div
							key={index}
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: 20,
								marginBottom: 30,
								opacity: checkOpacity,
								transform: `scale(${checkScale})`,
								transformOrigin: 'left center',
							}}
						>
							{/* Checkbox */}
							<svg
								width="40"
								height="40"
								viewBox="0 0 40 40"
								style={{ flexShrink: 0 }}
							>
								<rect
									x="4"
									y="4"
									width="32"
									height="32"
									rx="4"
									stroke="#22c55e"
									strokeWidth="2"
									fill="none"
								/>
								{frame >= item.delay + 20 && (
									<polyline
										points="10,20 16,26 30,12"
										stroke="#22c55e"
										strokeWidth="3"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								)}
							</svg>

							{/* Text */}
							<div
								style={{
									fontSize: 28,
									fontWeight: 400,
									color: '#ffffff',
									flex: 1,
								}}
							>
								{item.label}
							</div>
						</div>
					);
				})}
			</div>

			{/* Progress bar */}
			<div
				style={{
					width: 400,
					height: 8,
					background: '#1f2937',
					borderRadius: 4,
					overflow: 'hidden',
					marginBottom: 60,
				}}
			>
				<div
					style={{
						height: '100%',
						background: '#22c55e',
						width: `${Math.min(100, (frame / 180) * 100)}%`,
						borderRadius: 4,
						transition: 'width 0.1s ease-out',
					}}
				/>
			</div>

			{/* Explanation */}
			<div
				style={{
					fontSize: 32,
					fontWeight: 400,
					lineHeight: 1.4,
					textAlign: 'center',
					maxWidth: 900,
					color: '#ffffff',
					opacity: interpolate(
						frame,
						[100, 160],
						[0, 1],
						{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
					),
				}}
			>
				Staying informed is your best defense against cyber threats.
			</div>
		</AbsoluteFill>
	);
};
