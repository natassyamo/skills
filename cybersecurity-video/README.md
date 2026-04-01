# Cybersecurity Explainer Video

An educational explainer video about cybersecurity created with Remotion and the Remotion Best Practices skill.

## Video Specifications

- **Resolution**: 1080x1920 (vertical video format)
- **Duration**: 30 seconds
- **Frame Rate**: 30 fps
- **Total Frames**: 900

## Content

5-scene educational video about cybersecurity:

1. **Scene 1 - Why Cybersecurity Matters** (0-180 frames)
   - Introduces the threat of cyberattacks
   - Visual: Animated lock icon under attack

2. **Scene 2 - How Hackers Get In** (180-360 frames)
   - Three main attack vectors: Brute Force, Phishing, Vulnerability
   - Visual: Three pathway icons with attack arrows

3. **Scene 3 - Your First Line of Defense** (360-540 frames)
   - Three defense layers: Strong passwords, 2FA, Updates
   - Visual: Layered shields building up

4. **Scene 4 - Stay Protected** (540-720 frames)
   - Best practices checklist
   - Visual: Animated checklist with progress bar

5. **Scene 5 - Security is Continuous** (720-900 frames)
   - Emphasizes ongoing security importance
   - Visual: Protected shield with particle background effects

## Design System

- **Background**: #0a0a0a (dark)
- **Primary Text**: White (#ffffff)
- **Accent Color**: Indigo (#6366f1)
- **Success Color**: Green (#22c55e)
- **Font**: Inter (weights: 400, 600, 800)

## Animation Specifications

- Spring animations with damping: 200
- Stagger delays: 8-12 frames between related items
- Scene transitions: 12-frame fade transitions using TransitionSeries
- Custom SVG animations for diagrams and icons
- Particle effects for background depth

## Project Structure

```
cybersecurity-video/
├── src/
│   ├── index.tsx           # Root registration
│   ├── Root.tsx            # Composition setup
│   ├── CybersecurityVideo.tsx # Main video component
│   └── scenes/
│       ├── Scene1Threat.tsx
│       ├── Scene2Vectors.tsx
│       ├── Scene3Defense.tsx
│       ├── Scene4Practices.tsx
│       └── Scene5Protected.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Installation

```bash
npm install
```

### Preview

```bash
npm start
```

This launches Remotion Studio where you can:
- Preview the video in real-time
- Scrub through individual frames
- Inspect component props
- Test animations

### Build

```bash
npm run build
```

This renders the video to `out/video.mp4`.

## Using the Remotion Best Practices Skill

This project follows the Remotion best practices:

- ✓ **Safe Zone**: All content stays within 150px top, 170px bottom margins
- ✓ **Minimum Font Sizes**: Headlines 56px+, body text 36px+
- ✓ **SVG Icons**: All icons built as SVG components
- ✓ **Spring Animations**: Natural motion with damping
- ✓ **Staggered Timing**: Related items animate in sequence
- ✓ **Scene Transitions**: Smooth 12-frame fades between scenes
- ✓ **Kurtzgesagt Style**: Dense information with beautiful motion and fast pacing

## Notes

All scenes use SVG-based graphics with no external assets, ensuring fast load times and easy customization.
