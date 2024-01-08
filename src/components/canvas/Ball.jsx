import React , {Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import { OrbitControls,Float,useTexture,Decal } from '@react-three/drei'
 import CanvasLoader from '../Loader'
const Ball = (props) => {
  const [decal] = useTexture([`${props.imgUrl}`])
  return (
    <Float  speed={1.75} rotationIntensity={1} floatIntensity={2}>
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.5}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
           color="#abc1d5"
           flatShading
           polygonOffsetFactor={-2}
           plygonOffset
          />
          <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
          />
          

      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {

  return (
    <Canvas
    
    frameloop='always'
    // dpr={[1,2]}
    gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls  enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
    </Canvas>
  )
}

export default BallCanvas