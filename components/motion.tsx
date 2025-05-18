"use client"

import React from 'react'
import { useInView } from 'react-intersection-observer'

type MotionProps = {
  initial?: Record<string, any>
  animate?: Record<string, any>
  whileInView?: Record<string, any>
  transition?: Record<string, any>
  viewport?: Record<string, any>
  children: React.ReactNode
  className?: string
}

export const motion = {
  div: ({ 
    initial, 
    animate, 
    whileInView, 
    transition = { duration: 0.5 }, 
    viewport = { once: true },
    children,
    className = "",
    ...props
  }: MotionProps) => {
    const [ref, inView] = useInView({
      triggerOnce: viewport?.once,
      threshold: 0.1,
    })
    
    const [hasAnimated, setHasAnimated] = React.useState(false)
    
    React.useEffect(() => {
      if (inView && !hasAnimated) {
        setHasAnimated(true)
      }
    }, [inView, hasAnimated])
    
    const getStyle = () => {
      if (!hasAnimated) {
        return {
          opacity: initial?.opacity ?? 0,
          transform: `translate3d(${initial?.x ?? 0}px, ${initial?.y ?? 0}px, 0) 
                      scale(${initial?.scale ?? 1})
                      rotate(${initial?.rotate ?? 0}deg)`,
          transition: `opacity ${transition.duration}s ${transition.ease ?? 'ease-out'}, 
                      transform ${transition.duration}s ${transition.ease ?? 'ease-out'}`,
        }
      }
      
      return {
        opacity: whileInView?.opacity ?? animate?.opacity ?? 1,
        transform: `translate3d(${whileInView?.x ?? animate?.x ?? 0}px, ${whileInView?.y ?? animate?.y ?? 0}px, 0) 
                    scale(${whileInView?.scale ?? animate?.scale ?? 1})
                    rotate(${whileInView?.rotate ?? animate?.rotate ?? 0}deg)`,
        transition: `opacity ${transition.duration}s ${transition.delay ? transition.delay + 's' : '0s'} ${transition.ease ?? 'ease-out'}, 
                    transform ${transition.duration}s ${transition.delay ? transition.delay + 's' : '0s'} ${transition.ease ?? 'ease-out'}`,
      }
    }
    
    return (
      <div
        ref={ref}
        className={className}
        style={getStyle()}
        {...props}
      >
        {children}
      </div>
    )
  },
}