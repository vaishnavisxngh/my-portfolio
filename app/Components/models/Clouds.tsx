'use client';

import { useEffect , useRef , useState } from "react";
import { useFrame , useThree } from "@react-three/fiber";

import { Cloud, Clouds } from "@react-three/drei";
import * as THREE from "three";

const CloudContainer = () => {
    const {camera} = useThree();
    const scrollRef = useRef(0);

    const [scrollY , setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            scrollRef.current = window.scrollY;
            setScrollY(scrollRef.current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useFrame(() => {
        const targetZ= 20 - scrollY * 0.01 ;
        camera.position.z += (targetZ - camera.position.z) * 0.1 ;
    });
  return (
    <Clouds material={THREE.MeshBasicMaterial}
      position={[0, -5, 0]}
      frustumCulled={false}>
      <Cloud seed={1}
        segments={1}
        concentrate="inside"
        bounds={[10, 10, 10]}
        growth={3}
        position={[-2, 0, 0]}
        smallestVolume={2}
        scale={1.9}
        volume={2}
        speed={0.2}
        fade={5}
        />
      <Cloud
        seed={5}
        segments={1}
        concentrate="outside"
        bounds={[14, 14, 14]}
        growth={3.5}
        position={[-14, -9, -2]}
        smallestVolume={2}
        scale={2}
        volume={3}
        fade={3}
        speed={0.2}/>

      <Cloud
        seed={5}
        segments={1}
        concentrate="outside"
        bounds={[10, 20, 10]}
        growth={4}
        position={[-7, 14, 5]}
        smallestVolume={2}
        scale={2}
        speed={0.2}
        volume={3}/>

      <Cloud
        seed={5}
        segments={1}
        concentrate="outside"
        bounds={[5, 5, 5]}
        growth={2}
        position={[6, -3, 8]}
        smallestVolume={2}
        scale={2}
        volume={2}
        fade={0.1}
        speed={0.1}/>

      <Cloud
        seed={6}
        segments={1}
        concentrate="outside"
        bounds={[5, 5, 5]}
        growth={2}
        position={[0, -20, 20]}
        smallestVolume={2}
        scale={4}
        volume={3}
        fade={0.1}
        speed={0.1}/>

      <Cloud
        seed={7}
        segments={1}
        concentrate="outside"
        bounds={[5, 5, 5]}
        growth={2}
        position={[10, -15, -5]}
        smallestVolume={2}
        scale={3}
        volume={3}
        fade={0.1}
        speed={0.1}/>
    </Clouds>);
}

export default CloudContainer;