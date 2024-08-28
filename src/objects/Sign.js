import React from 'react'
import { useRef } from 'react';
import { useGLTF, useScroll, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import Thruster from './Thruster';

export function Sign(props) {
  const { nodes, materials } = useGLTF('/sign.glb')
  const sign = useRef(null);
  const scroll = useScroll();

  useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime();
		
    const additional = scroll.range(0.23, 1) * 1000;
		sign.current.position.y = additional === 0 ? Math.sin(elapsedTime * Math.PI / 4) * 3 : additional;	
	});

  return (
    <group ref={sign} {...props} dispose={null}>
      <Text font={"/signfont.ttf.ttf"} scale={[2.5, 2.5, 2.5]} position={[-0.5, 7, 0]} rotation={[0, -Math.PI / 2, 0]}>
        { props.title }
      </Text>
      <Text font={"/signfont.ttf.ttf"} scale={[2.5, 2.5, 2.5]} position={[-0.5, 5, 0]} rotation={[0, -Math.PI / 2, 0]}>
      { props.text }
      </Text>
    <group position={[0, 2.171, 0]} rotation={[-Math.PI, 0.017, -Math.PI]} scale={3.44}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials['Material.007']}
        />
      </group>
      <group position={[0, 0.107, 0]} rotation={[Math.PI, -0.375, Math.PI]} scale={3.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_4.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_5.geometry}
          material={materials['Material.006']}
        />
      </group>
      <Thruster position={[0, -15, 17]} rotation={[Math.PI / 2, 0, 0]}count={25} radius={0.3} speed={100} scale={10} lifetime={20}/>
      <Thruster position={[0, -15, -17]} rotation={[Math.PI / 2, 0, 0]}count={25} radius={0.3} speed={100} scale={10} lifetime={20}/>
    </group>
  )
}

useGLTF.preload('/sign.glb')