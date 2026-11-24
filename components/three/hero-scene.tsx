'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Center, Float, Sparkles, Text3D } from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'

const BLUE = '#2340b0'
const BLUE_LIGHT = '#5b7bff'
const AMBER = '#f5a623'
const LOGO_FONT = '/fonts/comfortaa_bold.typeface.json'
const TAGLINE_FONT = '/fonts/montserrat_semibold.typeface.json'

function MftLetters() {
  const group = useRef<THREE.Group>(null)
  const beam = useRef<THREE.PointLight>(null)
  const scan = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.45, 0.05)
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.25, 0.05)
    }
    const sweep = Math.sin(t * 0.9) * 2.4
    if (beam.current) beam.current.position.set(sweep, 0.4, 1.4)
    if (scan.current) {
      scan.current.position.x = ((t * 1.6) % 6) - 3
      const mat = scan.current.material as THREE.MeshBasicMaterial
      mat.opacity = 0.35 * Math.sin(((t * 1.6) % 6) / 6 * Math.PI)
    }
  })

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.6}>
        <Center position={[0, 0.35, 0]}>
          <Text3D
            font={LOGO_FONT}
            size={1.05}
            height={0.32}
            curveSegments={10}
            bevelEnabled
            bevelThickness={0.04}
            bevelSize={0.025}
            bevelSegments={5}
            letterSpacing={0.04}
          >
            MFT
            <meshPhysicalMaterial
              color={BLUE}
              metalness={0.65}
              roughness={0.18}
              clearcoat={1}
              clearcoatRoughness={0.1}
              emissive={BLUE}
              emissiveIntensity={0.15}
            />
          </Text3D>
        </Center>
        <Center position={[0, -0.75, 0.1]}>
          <Text3D font={TAGLINE_FONT} size={0.2} height={0.04} letterSpacing={0.09} curveSegments={6}>
            MUAZZAM FUTURE TECH
            <meshStandardMaterial color={BLUE} emissive={BLUE} emissiveIntensity={0.25} metalness={0.4} roughness={0.3} />
          </Text3D>
        </Center>
      </Float>

      <mesh ref={scan} position={[0, 0.2, 0.25]}>
        <planeGeometry args={[0.08, 2.6]} />
        <meshBasicMaterial color={AMBER} transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <pointLight ref={beam} intensity={14} distance={5} color={AMBER} />
    </group>
  )
}

function DataStreams({ count = 520 }: { count?: number }) {
  const points = useRef<THREE.Points>(null)
  const span = 9

  const { positions, colors, seeds } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const seeds = new Float32Array(count * 4)
    for (let i = 0; i < count; i++) {
      const lane = Math.floor(Math.random() * 5)
      seeds[i * 4] = Math.random() * span
      seeds[i * 4 + 1] = (lane - 2) * 0.42 + (Math.random() - 0.5) * 0.12
      seeds[i * 4 + 2] = 0.6 + Math.random() * 0.9
      seeds[i * 4 + 3] = (Math.random() - 0.5) * 0.8
    }
    return { positions, colors, seeds }
  }, [count])

  const blue = useMemo(() => new THREE.Color(BLUE_LIGHT), [])
  const amber = useMemo(() => new THREE.Color(AMBER), [])
  const tmp = useMemo(() => new THREE.Color(), [])

  useFrame((state) => {
    if (!points.current) return
    const t = state.clock.elapsedTime
    for (let i = 0; i < count; i++) {
      const phase = seeds[i * 4]
      const laneY = seeds[i * 4 + 1]
      const speed = seeds[i * 4 + 2]
      const laneZ = seeds[i * 4 + 3]
      const x = ((phase + t * speed) % span) - span / 2
      positions[i * 3] = x
      positions[i * 3 + 1] = laneY + 0.35 + Math.sin(x * 1.3 + t + laneY * 4) * 0.22
      positions[i * 3 + 2] = laneZ + Math.cos(x * 0.9 + t * 0.7) * 0.25
      tmp.copy(blue).lerp(amber, (x + span / 2) / span)
      colors[i * 3] = tmp.r
      colors[i * 3 + 1] = tmp.g
      colors[i * 3 + 2] = tmp.b
    }
    const geo = points.current.geometry
    geo.attributes.position.needsUpdate = true
    geo.attributes.color.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.9} sizeAttenuation depthWrite={false} />
    </points>
  )
}

function Rings() {
  const a = useRef<THREE.Mesh>(null)
  const b = useRef<THREE.Mesh>(null)
  const c = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (a.current) a.current.rotation.z += delta * 0.25
    if (b.current) {
      b.current.rotation.x += delta * 0.18
      b.current.rotation.y += delta * 0.12
    }
    if (c.current) c.current.rotation.y -= delta * 0.3
  })
  return (
    <group position={[0, 0.1, -0.6]}>
      <mesh ref={a} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.6, 0.012, 16, 160]} />
        <meshBasicMaterial color={BLUE_LIGHT} transparent opacity={0.45} />
      </mesh>
      <mesh ref={b} rotation={[0.4, 0.6, 0]}>
        <torusGeometry args={[2.95, 0.01, 16, 160]} />
        <meshBasicMaterial color={AMBER} transparent opacity={0.4} />
      </mesh>
      <mesh ref={c} rotation={[Math.PI / 2, 0.3, 0]}>
        <torusGeometry args={[2.25, 0.008, 16, 160]} />
        <meshBasicMaterial color={BLUE} transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

function Orbiter({ radius, speed, color, tilt, size = 0.12 }: { radius: number; speed: number; color: string; tilt: number; size?: number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * speed
    ref.current.position.set(Math.cos(t) * radius, Math.sin(t) * radius * tilt * 0.5, Math.sin(t) * radius * 0.6)
    ref.current.rotation.x = t * 2
    ref.current.rotation.y = t * 1.5
  })
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.7} metalness={0.3} roughness={0.3} />
    </mesh>
  )
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 6]} intensity={1.8} />
      <pointLight position={[-4, -2, 3]} intensity={25} color={BLUE_LIGHT} />
      <DataStreams />
      <Rings />
      <Orbiter radius={2.6} speed={0.7} color={AMBER} tilt={0.6} />
      <Orbiter radius={2.95} speed={-0.45} color={BLUE_LIGHT} tilt={-0.8} size={0.1} />
      <Orbiter radius={2.25} speed={0.55} color={AMBER} tilt={1} size={0.08} />
      <Sparkles count={60} scale={[7, 5, 3]} size={2.5} speed={0.4} color={AMBER} opacity={0.7} />
    </Canvas>
  )
}
