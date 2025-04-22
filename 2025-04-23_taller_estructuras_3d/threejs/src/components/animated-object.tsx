import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"
import React from "react"

export default function AnimatedObject() {
  // Referencias para el objeto y su material
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<any>(null)

  // Animación usando useFrame
  useFrame((state, delta) => {
    if (!meshRef.current) return

    const time = state.clock.elapsedTime

    // Trayectoria circular
    const radius = 3
    meshRef.current.position.x = Math.sin(time * 0.5) * radius
    meshRef.current.position.z = Math.cos(time * 0.5) * radius

    // Rotación sobre su propio eje
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 0.2
    meshRef.current.rotation.z += delta * 0.3

    // Escalado suave usando Math.sin
    const scale = 0.75 + Math.sin(time * 2) * 0.25
    meshRef.current.scale.set(scale, scale, scale)

    // Cambio de color basado en el tiempo
    if (materialRef.current) {
      const hue = (time * 0.1) % 1
      materialRef.current.color.setHSL(hue, 0.8, 0.5)
    }
  })

  return (
    <Sphere args={[1, 32, 32]} ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
      <MeshDistortMaterial ref={materialRef} color="#ff9500" speed={2} distort={0.3} roughness={0.2} metalness={0.8} />
    </Sphere>
  )
}
