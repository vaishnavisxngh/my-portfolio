'use client';

import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';

const CloudContainer = dynamic(() => import('./Components/models/Clouds'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-screen w-screen bg-cloudBlue bg-noise  overflow-hidden">
      {/* Canvas for 3D Clouds */}
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight />
          <OrbitControls enableZoom={false} />
          <CloudContainer />
        </Suspense>
      </Canvas>

<div className="h-[300vh] w-full bg-transparent z-0 relative" />
      {/* Text Overlay */}
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold text-center">
         Hello! My Name is Vaishnavi
        </h1>
      </div>
    </main>
  );
}
