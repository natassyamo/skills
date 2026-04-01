import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from 'remotion';

export const Scene5Protected: React.FC = () => {
	const frame = useCurrentFrame();

	// Shield scale and rotation
	const shieldScale = spring({
		frame,
		fps: 30,
		config: { damping: 200 },
		from: 0,
		to: 1,
		durationInFrames: 60,
	});

	const shieldRotation = interpolate(frame, [0, 180], [0, 360]);

	// Particles for background effect
	const particles = Array.from({ length: 15 }).map((_, i) => ({
		id: i,
		startX: Math.random() * 100,
		startY: 120,
		duration: 120,
		delay: Math.random() * 40,
	}));

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
				overflow: 'hidden',
			}}
		>
			{/* Particle background */}
			{particles.map((particle) => {
				const particleFrame = Math.max(0, frame - particle.delay);
				const yPos = interpolate(
					particleFrame,
					[0, particle.duration],
					[particle.startY, -20],
					{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
				);

				const particleOpacity = interpolate(
					particleFrame,
					[0, particle.duration * 0.8],
					[0.6, 0],
					{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
				);

				return (
					<div
						key={particle.id}
						style={{
							position: 'absolute',
							left: `${particle.startX}%`,
							top: `${yPos}%`,
							width: 8,
							height: 8,
							borderRadius: '50%',
							background: '#6366f1',
							opacity: particleOpacity,
						}}
					/>
				);
			})}

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
				Security is Continuous
			</div>

			{/* Protected Shield with Glow */}
			<div
				style={{
					position: 'relative',
					width: 300,
					height: 300,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: 60,
				}}
			>
				{/* Glow effect */}
				<div
					style={{
						position: 'absolute',
						width: 280,
						height: 280,
						borderRadius: '50%',
						background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
						animation: 'pulse 2s ease-in-out infinite',
						opacity: interpolate(
							frame,
							[40, 100],
							[0, 1],
							{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
						),
					}}
				/>

				{/* Shield Icon */}
				<svg
					width="200"
					height="200"
					viewBox="0 0 200 200"
					style={{
						transform: `scale(${shieldScale}) rotateZ(${shieldRotation}deg)`,
						opacity: interpolate(frame, [0, 60], [0.5, 1]),
					}}
				>
					<defs>
						<filter id="glow">
							<feGaussianBlur stdDeviation="3" result="coloredBlur" />
							<feMerge>
								<feMergeNode in="coloredBlur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>

					{/* Shield */}
					<path
						d="M 100 20 L 160 50 L 160 110 C 160 160 100 180 100 180 C 100 180 40 160 40 110 L 40 50 Z"
						stroke="#22c55e"
						strokeWidth="3"
						fill="rgba(34, 197, 94, 0.1)"
						filter="url(#glow)"
					/>

					{/* Checkmark */}
					<polyline
						points="75,100 95,120 135,70"
						stroke="#22c55e"
						strokeWidth="4"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>

			{/* Success Indicator */}
			<div
				style={{
					fontSize: 24,
					fontWeight: 600,
					color: '#22c55e',
					marginBottom: 60,
					opacity: interpolate(
						frame,
						[60, 120],
						[0, 1],
						{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
					),
				}}
			>
				✓ Protected
			</div>

			{/* Explanation */}
			<div
				style={{
					fontSize: 32,
					fontWeight: 400,
					lineHeight: 1.6,
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
				Cybersecurity isn't a one-time fix—it requires ongoing awareness, updates, and vigilance.
			</div>
		</AbsoluteFill>
	);
};
