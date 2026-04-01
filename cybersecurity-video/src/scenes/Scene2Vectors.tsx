import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from 'remotion';

export const Scene2Vectors: React.FC = () => {
	const frame = useCurrentFrame();

	// Three attack vectors appear with stagger
	const vector1Scale = spring({
		frame: Math.max(0, frame - 0),
		fps: 30,
		config: { damping: 200 },
		from: 0,
		to: 1,
		durationInFrames: 50,
	});

	const vector2Scale = spring({
		frame: Math.max(0, frame - 20),
		fps: 30,
		config: { damping: 200 },
		from: 0,
		to: 1,
		durationInFrames: 50,
	});

	const vector3Scale = spring({
		frame: Math.max(0, frame - 40),
		fps: 30,
		config: { damping: 200 },
		from: 0,
		to: 1,
		durationInFrames: 50,
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
					marginBottom: 80,
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
				How Hackers Get In
			</div>

			{/* Three Attack Vectors */}
			<div
				style={{
					display: 'flex',
					gap: 40,
					justifyContent: 'center',
					alignItems: 'flex-start',
					marginBottom: 80,
				}}
			>
				{/* Vector 1: Brute Force */}
				<div
					style={{
						textAlign: 'center',
						transform: `scale(${vector1Scale})`,
						opacity: interpolate(
							frame,
							[0, 50],
							[0, 1],
							{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
						),
					}}
				>
					<svg width="100" height="100" viewBox="0 0 100 100">
						<g stroke="#6366f1" strokeWidth="2" fill="none">
							{/* Keyboard */}
							<rect x="10" y="40" width="80" height="40" rx="4" />
							{/* Keys */}
							{[15, 35, 55, 75].map((x) => (
								<rect key={x} x={x} y="50" width="12" height="12" rx="2" />
							))}
							{/* Arrow down */}
							<line x1="50" y1="25" x2="50" y2="40" stroke="#ef4444" strokeWidth="2" />
							<polygon
								points="50,40 45,30 55,30"
								fill="#ef4444"
								stroke="none"
							/>
						</g>
					</svg>
					<div
						style={{
							fontSize: 28,
							fontWeight: 600,
							marginTop: 20,
							color: '#ffffff',
						}}
					>
						Brute Force
					</div>
				</div>

				{/* Vector 2: Phishing */}
				<div
					style={{
						textAlign: 'center',
						transform: `scale(${vector2Scale})`,
						opacity: interpolate(
							frame,
							[20, 70],
							[0, 1],
							{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
						),
					}}
				>
					<svg width="100" height="100" viewBox="0 0 100 100">
						<g stroke="#6366f1" strokeWidth="2" fill="none">
							{/* Envelope */}
							<rect x="15" y="25" width="70" height="50" rx="4" />
							<polyline points="15,25 50,45 85,25" />
							{/* Explosion effect */}
							<circle cx="50" cy="50" r="25" stroke="#ef4444" strokeWidth="2" />
							<line x1="50" y1="20" x2="50" y2="5" stroke="#ef4444" strokeWidth="2" />
							<line x1="80" y1="50" x2="95" y2="50" stroke="#ef4444" strokeWidth="2" />
						</g>
					</svg>
					<div
						style={{
							fontSize: 28,
							fontWeight: 600,
							marginTop: 20,
							color: '#ffffff',
						}}
					>
						Phishing
					</div>
				</div>

				{/* Vector 3: Vulnerability */}
				<div
					style={{
						textAlign: 'center',
						transform: `scale(${vector3Scale})`,
						opacity: interpolate(
							frame,
							[40, 90],
							[0, 1],
							{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
						),
					}}
				>
					<svg width="100" height="100" viewBox="0 0 100 100">
						<g stroke="#6366f1" strokeWidth="2" fill="none">
							{/* Code brackets */}
							<path d="M 30 25 L 20 50 L 30 75" />
							<path d="M 70 25 L 80 50 L 70 75" />
							{/* Gap in middle */}
							<line x1="35" y1="50" x2="65" y2="50" stroke="#ef4444" strokeWidth="3" />
							<circle cx="50" cy="50" r="8" fill="none" stroke="#ef4444" strokeWidth="2" />
						</g>
					</svg>
					<div
						style={{
							fontSize: 28,
							fontWeight: 600,
							marginTop: 20,
							color: '#ffffff',
						}}
					>
						Vulnerability
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
						[60, 120],
						[0, 1],
						{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
					),
				}}
			>
				Attackers exploit weak passwords, trick users into revealing credentials, and target unpatched software.
			</div>
		</AbsoluteFill>
	);
};
