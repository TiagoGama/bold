import { Button, Icon, TextInput, Theme, Tooltip, useStyles } from '../../lib'

import { BoldLogo } from './BoldLogo'
import { SIDE_NAV_WIDTH } from './SideNav'
import { lightTheme } from './useThemeSwitch'

export interface AppHeaderProps {
  currentTheme: Theme
  onThemeSwitch(): void
}

export const AppHeader = (props: AppHeaderProps) => {
  const { currentTheme, onThemeSwitch } = props
  const { classes } = useStyles(createStyles)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <BoldLogo height='2.5rem' aria-label='Bold Logo' />
      </div>

      <div className={classes.search}>
        <TextInput
          style={classes.searchInput}
          type='search'
          icon='zoomOutline'
          iconPosition='left'
          placeholder='Search in bold design system...'
        />
      </div>

      <div>
        <Tooltip text={currentTheme === lightTheme ? 'Switch to dark mode' : 'Switch to light mode'}>
          <Button skin='ghost' size='small' onClick={onThemeSwitch}>
            <Icon icon='lightbulbFilled' />
          </Button>
        </Tooltip>
      </div>
    </header>
  )
}

export const APP_HEADER_HEIGHT = 77

const createStyles = (theme: Theme) => ({
  header: {
    background: theme.pallete.surface.main,
    padding: '1rem 2rem',
    boxShadow: theme.shadows.outer[60],
    display: 'flex',
    alignItems: 'center',
    zIndex: 20,
    position: 'fixed',
    width: '100%',
  } as React.CSSProperties,
  logo: {
    borderRight: `1px solid ${theme.pallete.divider}`,
    width: `calc(${SIDE_NAV_WIDTH}px - 2rem)`,
    padding: '0 1rem 0 2.75rem',
  } as React.CSSProperties,
  search: {
    flex: 1,
    padding: '0 1rem',
  } as React.CSSProperties,
  searchInput: {
    border: 'none',
    '~ span': {
      background: theme.pallete.surface.main,
    },
    '&::-webkit-search-decoration': {
      WebkitAppearance: 'none',
    } as React.CSSProperties,
  } as React.CSSProperties,
})