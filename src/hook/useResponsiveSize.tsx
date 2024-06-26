import {useEffect, useState} from 'react';

export const useResponsiveSize = (breakpoint: number | string) => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)

        window.addEventListener('resize', handleWindowResize)

        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return width <= +breakpoint
}