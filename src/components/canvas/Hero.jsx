import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import HeroModel from "./models/HeroModel.jsx";
import CanvasLoader from "../Loader";

const HeroCanvas = () => {
	return (
		<Canvas shadows camera={{ position: [1, 0, 2.5], fov: 50 }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} enabled={false} />

				<ambientLight />
				<directionalLight
					position={[-5, 5, 5]}
					castShadow
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
				/>

				{/* <group position={[0.2, -0.5, 1]} rotation={[-0, 0.5, 0]}>
					<HeroModel />
				</group> */}

				<mesh
					rotation={[-0.5 * Math.PI, 0, 0]}
					position={[0, -0.5, 0]}
					receiveShadow
				>
					<planeBufferGeometry args={[10, 10, 1, 1]} />
					<shadowMaterial transparent opacity={0.2} />
				</mesh>

				<Preload all />
			</Suspense>
		</Canvas>
	);
};

export default HeroCanvas;
