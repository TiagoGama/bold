import { keyframes } from 'emotion'

import { Breakpoints, createBreakpoints } from './createBreakpoints'
import { createGlobals, Global } from './createGlobals'
import { Color, createPallete, Pallete, TextColor, textColorMap } from './createPallete'
import { createTypography, Typography } from './createTypography'

export interface Theme {
    pallete: Pallete
    typography: Typography
    breakpoints: Breakpoints
    global: Global
    radius: { main: string | number, button: string | number }
    animation: any
}

export const createTheme = (): Theme => {
    const pallete = createPallete()
    const typography = createTypography()

    return {
        pallete,
        typography,
        breakpoints: createBreakpoints(),
        global: createGlobals(pallete, typography),
        radius: {
            main: 2,
            button: 4,
        },
        animation: {
            spinAround: keyframes({
                from: {
                    transform: 'rotate(0deg)',
                },
                to: {
                    transform: 'rotate(359deg)',
                },
            }),
        },
    }
}

export const getTextColor = (theme: Theme, color: TextColor): Color => {
    return textColorMap[color](theme.pallete)
}

type FocusBoxShadow = 'single' | 'double'

export const focusBoxShadow = (theme: Theme, color: TextColor = 'primary', type: FocusBoxShadow = 'double') => {
    const c = getTextColor(theme, color)

    if (type === 'single') {
        return `0 0 0 2px ${c}`
    } else {
        return `0 0 0 2px ${theme.pallete.surface.background}, 0 0 0 4px ${c}`
    }
}
