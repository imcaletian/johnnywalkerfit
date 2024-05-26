'use client'

import { AnimatePresence, motion } from "framer-motion"

export default function Template ({children}) {
    return (
        <AnimatePresence >
        <motion.div
            initial={{ opacity: 0 }}
            animate = {{ opacity: 1}}
            exit = {{opacity: 0}}
            transition={{ type:"tween", ease:"easeInOut", duration: 0.5}}
        >
            {children}
        </motion.div>
        </AnimatePresence>
    )
}