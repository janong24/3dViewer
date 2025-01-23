// src/app/viewer/page.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box() {
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function ViewerPage() {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <OrbitControls />
      </Canvas>
    </div>
  )
}