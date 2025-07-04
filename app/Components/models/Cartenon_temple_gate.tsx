/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/cartenon_temple_gate.glb --transform --shadows --types --keepmeshes 
Files: public/cartenon_temple_gate.glb [8.51MB] > C:\Users\KIIT0001\my-portfolio\cartenon_temple_gate-transformed.glb [745.91KB] (91%)
Author: divineeromo (https://sketchfab.com/divineeromo)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cartenon-temple-gate-ae9b6237c16a47a9a030348d494eb8fe
Title: Cartenon Temple Gate
*/

import * as THREE from 'three'
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    M_Cartenon_Temple_Gates: THREE.MeshStandardMaterial
  }
  // animations: GLTFAction[] // Removed because GLTFAction is not defined and not used
}

export function Model(props: React.ComponentProps<'group'>) {
  const { scene } = useGLTF('/cartenon_temple_gate-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.M_Cartenon_Temple_Gates} skeleton={nodes.Object_7.skeleton} rotation={[-Math.PI / 2, 0, 2.159]} />
    </group>
  )
}

useGLTF.preload('/cartenon_temple_gate-transformed.glb')
