import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ethereum = () => {
	// const eth = useGLTF("./eth/scene.gltf");
	const eth = useGLTF("./scene.glb");

	return (
		<mesh>
			{/* <hemisphereLight intensity={10} groundColor="white" /> */}
			<ambientLight />

			{/* <spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1000}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight position={[10, 10, 10]} intensity={1} /> */}
			<primitive object={eth.scene} scale={2.5} position-y={0} rotation-y={0} />
		</mesh>
	);
};

const EthereumCanvas = () => {
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
			{/* <spotLight
				intensity={0.5}
				angle={0.1}
				penumbra={1}
				position={[10, 15, 10]}
				castShadow
			/> */}
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>

				<Ethereum />

				<Preload all />
			</Suspense>
		</Canvas>
	);
};

export default EthereumCanvas;
