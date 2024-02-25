import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useTexture } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Hero = () => {
	// const hero = useLoader(GLTFLoader, "/models/kid.glb");

	const [mixer] = useState(() => new THREE.AnimationMixer());

	const group = useRef();
	const actions = useRef();
	const model = useGLTF("/models/kid.glb");
	const { nodes, scene, materials, animations } = model;

	useFrame((state, delta) => mixer.update(delta));
	useEffect(() => {
		actions.current = { idle: mixer.clipAction(animations[0], group.current) };
		actions.current.idle.play();
		return () => animations.forEach((clip) => mixer.uncacheClip(clip));
	}, []);

	const texture = useTexture("/textures/kid2.jpg");

	return (
		<group ref={group} dispose={null}>
			<primitive
				ref={group}
				object={nodes["body001"]}
				castShadow
				scale={0.07}
				position-y={-0.7}
				position-x={-0.05}
				rotation-y={0}
			/>
			{/* <meshBasicMaterial map={texture} /> */}
		</group>
	);
};

const HeroCanvas = () => {
	return (
		<Canvas
			shadows
			frameloop="demand"
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
				{/* <OrbitControls
					autoRotate={false}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/> */}
				<ambientLight />
				<directionalLight
					position={[-5, 5, 5]}
					castShadow
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
				/>

				<Hero />
				<mesh
					rotation={[-0.5 * Math.PI, 0, 0]}
					position={[-0.05, -0.7, 0]}
					receiveShadow
				>
					<planeGeometry args={[10, 10, 1, 1]} />
					<shadowMaterial transparent opacity={0.2} />
				</mesh>

				<Preload all />
			</Suspense>
		</Canvas>
	);
};

export default HeroCanvas;

useGLTF.preload("/models/kid.glb");
