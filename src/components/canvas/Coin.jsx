import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Coin = () => {
	// const earth = useGLTF("/models/coin.glb");
	const coin = useGLTF("/models/coin.glb");

	return (
		<primitive
			castShadow
			object={coin.scene}
			scale={2.3}
			position-y={-0.2}
			position-x={0.05}
			rotation-y={0}
		/>
	);
};

const CoinCanvas = () => {
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
				position: [-4, 3, 6],
			}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
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

				<Coin />
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

export default CoinCanvas;

useGLTF.preload("/models/coin.glb");
// useGLTF.preload("/models/coin.glb");
