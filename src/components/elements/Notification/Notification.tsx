import { Interpolation } from 'emotion'
import * as React from 'react'

import { PageContainer } from '../../..'
import { Styles, Theme, withStyles, WithStylesProps } from '../../../styles'
import { Button } from '../button/Button/Button'
import { Icon } from '../Icon/Icon'

export type NotificationType =
    | 'info'
    | 'success'
    | 'alert'
    | 'error'

export const createTypesStyles = (theme: Theme): { [key in NotificationType]: any } => {
    return {
        'info': {
            icon: 'informationCircle',
            style: {
                background: theme.pallete.status.info.background,
                color: theme.pallete.status.info.main,
                borderColor: theme.pallete.status.info.main,
            },
        },
        'success': {
            icon: 'checkCircle',
            style: {
                background: theme.pallete.status.success.background,
                color: theme.pallete.status.success.main,
                borderColor: theme.pallete.status.success.main,
            },
        },
        'alert': {
            icon: 'exclamationTriangle',
            style: {
                background: theme.pallete.status.alert.background,
                color: theme.pallete.status.alert.main,
                borderColor: theme.pallete.status.alert.main,
            },
        },
        'error': {
            icon: 'ban',
            style: {
                background: theme.pallete.status.danger.background,
                color: theme.pallete.status.danger.main,
                borderColor: theme.pallete.status.danger.main,
            },
        },
    }
}

export interface NotificationProps extends WithStylesProps {
    type: NotificationType
    animated?: boolean
    onCloseClick?: any
    onMouseEnter?: any
    onMouseLeave?: any
    contentContainer?: boolean
    style?: Interpolation
}

@withStyles
export class Notification extends React.PureComponent<NotificationProps> {
    render() {
        const { theme, css, style, type, animated,
            onCloseClick, onMouseEnter, onMouseLeave, contentContainer } = this.props
        const typeStyle = createTypesStyles(theme)
        const defaultStyles: Styles = {
            notification: {
                animation: animated ? `${theme.animation.fadeInFromTop} 400ms linear` : 'none',
                padding: '0 3rem',
                minHeight: 40,
                borderRadius: '2px',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                borderStyle: 'solid',
                borderWidth: '1px',
            },
            children: {
                verticalAlign: 'super',
            },
            icon: {
                marginRight: '0.5rem',
            },
            closeButton: {
                float: 'right',
                marginLeft: 'auto',
            },
        }

        const contentProps = {
            icon: typeStyle[type].icon,
            iconStyle: defaultStyles.icon,
            children: this.props.children,
            childrenStyle: css(defaultStyles.children),
            onCloseClick,
            closeButtonStyle: css(defaultStyles.closeButton),
        }

        return (
            <div
                className={css(defaultStyles.notification, typeStyle[type].style, style)}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {contentContainer ? (
                    <ContainerContent {...contentProps} />
                ) : (
                        <SimpleContent {...contentProps} />
                    )}
            </div>
        )
    }
}

const SimpleContent = ({ icon, iconStyle, children, childrenStyle, onCloseClick, closeButtonStyle }) => {
    return (
        <>
            <Icon icon={icon} style={iconStyle} />
            <span className={childrenStyle}>{children}</span>
            {onCloseClick && <span className={closeButtonStyle}>
                <Button size='small' skin='ghost' icon='times' onClick={onCloseClick} />
            </span>}
        </>
    )
}

const ContainerContent = ({ icon, iconStyle, children, childrenStyle, onCloseClick, closeButtonStyle }) => {
    return (
        <PageContainer style={{ paddingTop: '0', paddingBottom: '0' }}>
            <SimpleContent
                icon={icon}
                iconStyle={iconStyle}
                children={children}
                childrenStyle={childrenStyle}
                onCloseClick={onCloseClick}
                closeButtonStyle={closeButtonStyle}
            />
        </PageContainer>
    )
}
