import React from 'react';
import { useVideoConfig, AbsoluteFill, Sequence, TransitionSeries } from 'remotion';
import { Scene1Threat } from './scenes/Scene1Threat';
import { Scene2Vectors } from './scenes/Scene2Vectors';
import { Scene3Defense } from './scenes/Scene3Defense';
import { Scene4Practices } from './scenes/Scene4Practices';
import { Scene5Protected } from './scenes/Scene5Protected';

export const CybersecurityVideo: React.FC = () => {
	const { durationInFrames } = useVideoConfig();

	return (
		<AbsoluteFill style={{ background: '#0a0a0a' }}>
			<TransitionSeries>
				{/* Scene 1: The Threat (0-180 frames) */}
				<TransitionSeries.Sequence durationInFrames={180}>
					<Scene1Threat />
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing="end"
					durationInFrames={12}
					presentation={(f) => {
						return {
							opacity: 1 - f.progress,
						};
					}}
				/>

				{/* Scene 2: Attack Vectors (180-360 frames) */}
				<TransitionSeries.Sequence durationInFrames={180}>
					<Scene2Vectors />
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing="end"
					durationInFrames={12}
					presentation={(f) => {
						return {
							opacity: 1 - f.progress,
						};
					}}
				/>

				{/* Scene 3: The Defense (360-540 frames) */}
				<TransitionSeries.Sequence durationInFrames={180}>
					<Scene3Defense />
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing="end"
					durationInFrames={12}
					presentation={(f) => {
						return {
							opacity: 1 - f.progress,
						};
					}}
				/>

				{/* Scene 4: Best Practices (540-720 frames) */}
				<TransitionSeries.Sequence durationInFrames={180}>
					<Scene4Practices />
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing="end"
					durationInFrames={12}
					presentation={(f) => {
						return {
							opacity: 1 - f.progress,
						};
					}}
				/>

				{/* Scene 5: You're Protected (720-900 frames) */}
				<TransitionSeries.Sequence durationInFrames={180}>
					<Scene5Protected />
				</TransitionSeries.Sequence>
			</TransitionSeries>
		</AbsoluteFill>
	);
};
