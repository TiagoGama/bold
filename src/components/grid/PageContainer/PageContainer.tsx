import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export interface PageContainerProps extends WithStylesProps {

}

@withStyles
export class PageContainer extends React.PureComponent<PageContainerProps> {
    render() {
        const { theme } = this.props
        const styles = {
            container: {
                width: '960px',
                margin: '0 auto',
                padding: '0.75rem 1rem',

                [theme.breakpoint.small]: {
                    width: '768px',
                    padding: '0.25rem 0.5rem',
                },
            },
        }

        return (
            <div className={this.props.css(styles.container)}>{this.props.children}</div>
        )
    }
}
