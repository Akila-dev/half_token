import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
	OrbitControls,
	Preload,
	useGLTF,
	useAnimations,
} from "@react-three/drei";
// import HeroModel from "./models/HeroModel";
import Hero from "./models/Hero";
import CanvasLoader from "../Loader";

// const HeroModel = (props) => {
// 	const group = useRef(null);
// 	const { nodes, materials, animations } = useGLTF("/models/hero.glb");
// 	const { actions, names } = useAnimations(animations, group);
// 	console.log(names);

// 	useEffect(() => {
// 		actions[names[0]].reset().fadeIn(0.5).play();
// 	}, []);

// 	return (
// 		<group ref={group} {...props} dispose={null}>
// 			<group name="Scene">
// 				<group name="kid" rotation={[Math.PI / 2, 0, 0]} scale={0.011}>
// 					<group name="body001" position={[0, 0, 3.516]} scale={4.861}>
// 						<mesh
// 							name="Mesh"
// 							geometry={nodes.Mesh.geometry}
// 							material={materials["Material #15"]}
// 						/>
// 						<mesh
// 							name="Mesh_1"
// 							geometry={nodes.Mesh_1.geometry}
// 							material={materials["Material #47"]}
// 						/>
// 						<mesh
// 							name="Mesh_2"
// 							geometry={nodes.Mesh_2.geometry}
// 							material={materials["Material #29"]}
// 						/>
// 						<mesh
// 							name="Mesh_3"
// 							geometry={nodes.Mesh_3.geometry}
// 							material={materials["Material #16"]}
// 						/>
// 						<mesh
// 							name="Mesh_4"
// 							geometry={nodes.Mesh_4.geometry}
// 							material={materials["Material #17"]}
// 						/>
// 						<mesh
// 							name="Mesh_5"
// 							geometry={nodes.Mesh_5.geometry}
// 							material={materials["Material #41"]}
// 						/>
// 						<mesh
// 							name="Mesh_6"
// 							geometry={nodes.Mesh_6.geometry}
// 							material={materials["Material #44"]}
// 						/>
// 						<mesh
// 							name="Mesh_7"
// 							geometry={nodes.Mesh_7.geometry}
// 							material={materials["Material #60"]}
// 						/>
// 					</group>
// 				</group>
// 			</group>
// 		</group>
// 	);
// };

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

				<group position={[0.2, -0.5, 1]} rotation={[-0, 0.5, 0]}>
					{/* <Hero /> */}
					{/* <HeroModel /> */}
				</group>

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

useGLTF.preload("/models/hero.glb");
// useGLTF.preload("/models/hero.glb");
