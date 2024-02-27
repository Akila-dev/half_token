import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
	Preload,
	useGLTF,
	useAnimations,
	OrbitControls,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Hero = () => {
	const group = useRef();
	const { scene, animations } = useGLTF("/models/kid.glb");
	const { actions, mixer } = useAnimations(animations, group);

	useEffect(() => {
		actions.Animation.play();
	}, [mixer]);

	return (
		<group ref={group} dispose={null}>
			<primitive
				ref={group}
				object={scene}
				dispose={null}
				castShadow
				scale={7.5}
				position-y={-0.65}
				position-x={-0.28}
				rotation-y={0.5}
			/>
		</group>
	);
};

const HeroCanvas = () => {
	return (
		<Canvas
			shadows
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [1, 0, 2.5],
			}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate={false}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<ambientLight intensity={0.1} />
				<directionalLight
					position={[-5, 5, 5]}
					castShadow
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
					intensity={0.1}
				/>

				<Hero />
				<mesh
					rotation={[-0.5 * Math.PI, 0, 0]}
					position={[-0.28, -0.5, 0]}
					receiveShadow
				>
					<planeGeometry args={[10, 10, 1, 1]} />
					<shadowMaterial transparent opacity={0.5} />
				</mesh>

				<Preload all />
			</Suspense>
		</Canvas>
	);
};

export default HeroCanvas;

useGLTF.preload("/models/kid.glb");
