import React, { useRef, useState } from 'react';
import {useFrame } from '@react-three/fiber';
import {Canvas} from "@react-three/fiber";

class Box1 extends React.Component {
    render() {
        return <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[0, 0, 0]} />
        </Canvas>
    }
}

function Box(props) {
    // This reference will give us direct access to the THREE.Mesh object
    const ref = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.y += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default Box;
