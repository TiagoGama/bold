import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export interface ModalFooterProps extends WithStylesProps {
}

@withStyles
export class ModalFooter extends React.PureComponent<ModalFooterProps> {

    render() {
        const { css, theme } = this.props
        const styles = {
            footer: {
                backgroundColor: theme.pallete.surface.background,
                padding: '1rem',
                borderBottomLeftRadius: theme.radius.main,
                borderBottomRightRadius: theme.radius.main,
            },
        }
        return (
            <div className={css(styles.footer)}>
                {this.props.children}
            </div>
        )
    }
}