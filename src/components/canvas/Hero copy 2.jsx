import React, { Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Hero = () => {
	// const hero = useGLTF("/models/kid.glb");

	const hero = useLoader(GLTFLoader, "/models/kid.glb");

	let mixer;
	if (hero.animations.length) {
		mixer = new THREE.AnimationMixer(hero.scene);
		hero.animations.forEach((clip) => {
			const action = mixer.clipAction(clip);
			action.play();
		});
	}

	useFrame((state, delta) => {
		mixer?.update(delta);
	});

	hero.scene.traverse((child) => {
		if (child.isMesh) {
			child.castShadow = true;
			child.receiveShadow = true;
			child.material.side = THREE.FrontSide;
		}
	});

	return (
		<primitive
			castShadow
			object={hero.scene}
			scale={6.3}
			position-y={-0.5}
			position-x={0.05}
			rotation-y={0}
		/>
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
				<OrbitControls
					autoRotate={false}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
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
					position={[0, -0.5, 0]}
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
