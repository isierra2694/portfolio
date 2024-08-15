import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Earth(props) {
  const { nodes, materials } = useGLTF('/earth.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={17.092}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_1.geometry}
          material={materials.Earth}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_2.geometry}
          material={materials.Ocean}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/earth.glb');
