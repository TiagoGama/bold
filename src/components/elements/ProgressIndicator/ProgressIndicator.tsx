import { Interpolation } from 'emotion'
import React from 'react'

import { Styles, TextColor, withStyles, WithStylesProps } from '../../../styles'
import { getTextColor } from '../../../styles/theme/createTheme'

export interface ProgressIndicatorProps extends WithStylesProps {
    color?: TextColor
    max?: number
    value: number
    style?: Interpolation
}

@withStyles
export class ProgressIndicator extends React.PureComponent<ProgressIndicatorProps> {

    static defaultProps: Partial<ProgressIndicatorProps> = {
        color: 'primary',
        max: 100,
    }

    render() {
        const {
            color,
            css,
            value,
            max,
            theme,
            style,
        } = this.props

        const styles: Styles = {
            progress: {
                appearance: 'none',
                border: 'none',
                height: 4,
                width: '100%',
                '&::-webkit-progress-bar': {
                    backgroundColor: theme.pallete.gray.c90,
                    borderRadius: 4,
                },
                '&::-webkit-progress-value': {
                    backgroundColor: getTextColor(theme, color),
                    borderRadius: 4,
                    transition: 'all .3s',
                },
                '&::-moz-progress-bar': {
                    backgroundColor: getTextColor(theme, color),
                    borderRadius: 4,
                    transition: 'all .3s',
                },
            },
        }

        return (
            <progress className={css(styles.progress, style)} value={value} max={max} />
        )
    }

}