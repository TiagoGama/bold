import { Interpolation } from 'emotion'
import React, { CSSProperties, Fragment } from 'react'
import { Grid, HFlow } from '..'

import { useLocale } from '../../i18n'
import { Theme, useStyles } from '../../styles'
import { Button } from '../Button'
import { Icons } from '../Icon'
import { Icon } from '../Icon/Icon'
import { Tooltip } from '../Tooltip'

export type AlertType = 'info' | 'success' | 'warning' | 'danger'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type: AlertType
  onCloseClick?: any
  inline?: boolean
  styles?: {
    wrapper?: Interpolation
    container?: Interpolation
    inlineContainer?: Interpolation
  }
}

export function Alert(props: AlertProps) {
  const { styles, type, children, onCloseClick, inline, ...rest } = props
  const { classes, css, theme } = useStyles(createStyles, props)
  const typeStyle = createTypesStyles(theme)[type]
  const locale = useLocale()

  const alertContent = (
    <Fragment>
      <Icon icon={typeStyle.icon} style={classes.icon} size={inline ? 1 : undefined} />
      <div className={classes.content}>{children}</div>
    </Fragment>
  )

  return (
    <div className={css(classes.wrapper, typeStyle.style, styles && styles.wrapper)} role='alert' {...rest}>
      <div className={css(classes.container, styles && styles.container)}>
        {inline ? (
          <div className={css(classes.inlineContainer, styles && styles.inlineContainer)}>{alertContent}</div>
        ) : (
          alertContent
        )}

        {onCloseClick && (
          <span className={classes.closeButtonWrapper}>
            <Tooltip text={locale.alert.close}>
              <Button
                aria-label={locale.alert.close}
                size='small'
                skin='ghost'
                style={classes.closeButton}
                onClick={onCloseClick}
              >
                <Icon icon='timesDefault' />
              </Button>
            </Tooltip>
          </span>
        )}
      </div>
    </div>
  )
}

export const createStyles = (theme: Theme, { inline }: AlertProps) => ({
  wrapper: {
    padding: inline ? '0.375rem 0.5rem' : '0 1rem',
    minHeight: inline ? '2rem' : '2.5rem',
    borderRadius: '2px',
    borderStyle: 'solid',
    borderWidth: '1px',
    display: inline ? 'inline-flex' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1.25rem',
  } as CSSProperties,
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  } as CSSProperties,
  inlineContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'top',
  } as CSSProperties,
  icon: {
    marginTop: inline && '0.125rem',
    marginRight: '0.5rem',
  } as CSSProperties,
  content: {
    flex: 1,
  } as CSSProperties,
  closeButtonWrapper: {
    marginLeft: 'auto',
    paddingLeft: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
  } as CSSProperties,
  closeButton: {
    padding: inline && 0,
  } as CSSProperties,
})

export const createTypesStyles = (
  theme: Theme
): {
  [key in AlertType]: {
    icon: Icons
    style: Interpolation
  }
} => {
  return {
    info: {
      icon: 'infoCircleFilled',
      style: {
        background: theme.pallete.status.info.background,
        color: theme.pallete.status.info.main,
        borderColor: theme.pallete.status.info.main,
      },
    },
    success: {
      icon: 'checkCircleFilled',
      style: {
        background: theme.pallete.status.success.background,
        color: theme.pallete.status.success.main,
        borderColor: theme.pallete.status.success.main,
      },
    },
    warning: {
      icon: 'exclamationTriangleFilled',
      style: {
        background: theme.pallete.status.alert.background,
        color: theme.pallete.status.alert.main,
        borderColor: theme.pallete.status.alert.main,
      },
    },
    danger: {
      icon: 'banOutline',
      style: {
        background: theme.pallete.status.danger.background,
        color: theme.pallete.status.danger.main,
        borderColor: theme.pallete.status.danger.main,
      },
    },
  }
}
