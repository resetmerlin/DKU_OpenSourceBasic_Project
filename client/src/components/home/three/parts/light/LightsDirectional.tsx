/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-props-no-spreading */
import { motion } from 'framer-motion-3d'

export default function LightsDirectional({ ...props }) {
    return (
        <motion.directionalLight
            {...props}
            position={[-5, 1, 1.3]}
            intensity={0}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
        />
    )
}
