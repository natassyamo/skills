import React from 'react';
import { Composition } from 'remotion';
import { CybersecurityVideo } from './CybersecurityVideo';

export const RemotionRoot: React.FC = () => {
	return (
		<Composition
			id="CybersecurityVideo"
			component={CybersecurityVideo}
			durationInFrames={900}
			fps={30}
			width={1080}
			height={1920}
			defaultProps={{}}
		/>
	);
};
