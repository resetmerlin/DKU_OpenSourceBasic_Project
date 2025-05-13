/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
import { motion } from 'framer-motion-3d'

export default function Fog({ args = ['black', 0, 0], ...props }) {
    return <motion.fog {...props} attach="fog" args={args} />
}
