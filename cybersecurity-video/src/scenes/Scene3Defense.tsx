import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from 'remotion';

export const Scene3Defense: React.FC = () => {
	const frame = useCurrentFrame();

	// Three defense layers with stagger
	const layer1Scale = spring({
		frame: Math.max(0, frame - 0),
		fps: 30,
		config: { damping: 200 },
		from: 0,
		to: 1,
		durationInFrames: 40,
	});

	const layer2Scale = spring({
		frame: Math.max(0, frame - 20),
		fps: 30,
		config: { damping: 200 },
		from: 0,
		to: 1,
		durationInFrames: 40,
	});

	const layer3Scale = spring({
		frame: Math.max(0, frame - 40),
		fps: 30,
		config: { damping: 200 },
		from: 0,
		to: 1,
		durationInFrames: 40,
	});

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
				Your First Line of Defense
			</div>

			{/* Defense Layers - Stacked Shields */}
			<div
				style={{
					position: 'relative',
					width: 300,
					height: 300,
					marginBottom: 60,
				}}
			>
				{/* Layer 3 - Outermost */}
				<div
					style={{
						position: 'absolute',
						top: 20,
						left: '50%',
						transform: `translateX(-50%) scale(${layer3Scale})`,
						opacity: interpolate(
							frame,
							[40, 100],
							[0, 1],
							{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
						),
					}}
				>
					<svg width="260" height="260" viewBox="0 0 260 260">
						<path
							d="M 130 20 L 200 60 L 200 140 C 200 200 130 240 130 240 C 130 240 60 200 60 140 L 60 60 Z"
							stroke="#22c55e"
							strokeWidth="3"
							fill="none"
						/>
						<text
							x="130"
							y="130"
							textAnchor="middle"
							dominantBaseline="middle"
							fontSize="32"
							fontWeight="600"
							fill="#22c55e"
						>
							2FA
						</text>
					</svg>
				</div>

				{/* Layer 2 - Middle */}
				<div
					style={{
						position: 'absolute',
						top: 50,
						left: '50%',
						transform: `translateX(-50%) scale(${layer2Scale})`,
						opacity: interpolate(
							frame,
							[20, 80],
							[0, 1],
							{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
						),
					}}
				>
					<svg width="200" height="200" viewBox="0 0 200 200">
						<path
							d="M 100 10 L 160 45 L 160 110 C 160 160 100 190 100 190 C 100 190 40 160 40 110 L 40 45 Z"
							stroke="#6366f1"
							strokeWidth="3"
							fill="none"
						/>
						<text
							x="100"
							y="100"
							textAnchor="middle"
							dominantBaseline="middle"
							fontSize="28"
							fontWeight="600"
							fill="#6366f1"
						>
							Strong
						</text>
					</svg>
				</div>

				{/* Layer 1 - Innermost */}
				<div
					style={{
						position: 'absolute',
						top: 80,
						left: '50%',
						transform: `translateX(-50%) scale(${layer1Scale})`,
						opacity: interpolate(
							frame,
							[0, 60],
							[0, 1],
							{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
						),
					}}
				>
					<svg width="140" height="140" viewBox="0 0 140 140">
						<path
							d="M 70 5 L 120 30 L 120 75 C 120 115 70 135 70 135 C 70 135 20 115 20 75 L 20 30 Z"
							stroke="#ffffff"
							strokeWidth="3"
							fill="none"
						/>
						<text
							x="70"
							y="70"
							textAnchor="middle"
							dominantBaseline="middle"
							fontSize="24"
							fontWeight="600"
							fill="#ffffff"
						>
							Password
						</text>
					</svg>
				</div>
			</div>

			{/* Defense Items */}
			<div
				style={{
					display: 'flex',
					gap: 40,
					justifyContent: 'center',
					marginBottom: 80,
				}}
			>
				<div
					style={{
						textAlign: 'center',
						opacity: interpolate(
							frame,
							[40, 100],
							[0, 1],
							{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
						),
					}}
				>
					<div style={{ fontSize: 16, fontWeight: 400, color: '#22c55e' }}>
						✓ 12+ Characters
					</div>
				</div>
				<div
					style={{
						textAlign: 'center',
						opacity: interpolate(
							frame,
							[60, 120],
							[0, 1],
							{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
						),
					}}
				>
					<div style={{ fontSize: 16, fontWeight: 400, color: '#22c55e' }}>
						✓ 2FA Enabled
					</div>
				</div>
				<div
					style={{
						textAlign: 'center',
						opacity: interpolate(
							frame,
							[80, 140],
							[0, 1],
							{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
						),
					}}
				>
					<div style={{ fontSize: 16, fontWeight: 400, color: '#22c55e' }}>
						✓ Updates Applied
					</div>
				</div>
			</div>

			{/* Explanation */}
			<div
				style={{
					fontSize: 36,
					fontWeight: 400,
					lineHeight: 1.4,
					textAlign: 'center',
					maxWidth: 900,
					color: '#ffffff',
					opacity: interpolate(
						frame,
						[80, 140],
						[0, 1],
						{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
					),
				}}
			>
				Multiple barriers force hackers to work exponentially harder.
			</div>
		</AbsoluteFill>
	);
};
