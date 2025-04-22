
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import AnimatedObject from "./animated-object"
import React from "react"

export default function Scene() {
  return (
    <Canvas style={{ height: "80vh", width: "80vw" }}>
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <AnimatedObject />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <gridHelper args={[10, 10, "#404040", "#202020"]} />
      <axesHelper args={[5]} />
    </Canvas>
  )
}