import { useCombobox, UseComboboxState, UseComboboxStateChangeOptions, useMultipleSelection } from 'downshift'
import matchSorter from 'match-sorter'
import React, { CSSProperties, useCallback, useEffect, useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import { Theme, useStyles } from '../../styles'
import { composeHandlers, composeRefs } from '../../util/react'
import { FormControl } from '../FormControl'
import { useFormControl } from '../../hooks/useFormControl'
import { TextInput } from '../TextField'
import { createStyleParts } from '../TextField/TextInputBase'
import { ComboboxMultiselectComponents, defaultComboboxMultiselectComponents } from './ComboboxMenuComponents'
import { useComboboxItemsLoader } from './useComboboxItemsLoader'
import { ComboboxProps, DefaultComboboxItemType } from './Combobox'

export interface ComboboxMultiselectProps<T> extends Omit<ComboboxProps<T>, 'value' | 'onChange' | 'components'> {
  value: T[]
  onChange?: (newValue: T[]) => void
  itemIsEqual(a: T, b: T): boolean
  components: ComboboxMultiselectComponents<T>
}

export function ComboboxMultiselect<T = DefaultComboboxItemType>(props: ComboboxMultiselectProps<T>) {
  const {
    value,
    items,
    disabled,
    loading: externalLoading,
    debounceMilliseconds,
    createNewItem,
    components = {},
    itemToString,
    menuMinWidth,
    openOnFocus,
    onClear,
    onChange,
    onFocus,
    onFilterChange,
    itemIsEqual,
    filter = (items, filter) => matchSorter(items, filter, { keys: [itemToString] }),
    ...rest
  } = props

  const [itemsLoaded, setItemsLoaded] = useState(false)
  const { classes, css } = useStyles(createStyles, props)

  const isAsync = typeof items === 'function'
  const getItems = useCallback((query: string) => (typeof items === 'function' ? items(query) : filter(items, query)), [
    items,
    filter,
  ])
  const { loading: loadingItems, items: loadedItems, loadItems } = useComboboxItemsLoader(
    getItems,
    debounceMilliseconds
  )
  const isLoading = externalLoading || (isAsync && loadingItems)

  // Reload items when changed
  useEffect(() => setItemsLoaded(false), [items])

  const inputRef = useRef<HTMLInputElement>()
  const [menuRef, setMenuRef] = useState<HTMLDivElement>()

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection({
    initialSelectedItems: value,
    onSelectedItemsChange: ({ selectedItems }) => {
      onChange?.(selectedItems)
    },
  })

  const {
    isOpen,
    highlightedIndex,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    openMenu,
    reset,
  } = useCombobox<T>({
    defaultHighlightedIndex: 0, // after selection, highlight the first item.
    selectedItem: null,
    items: loadedItems,

    stateReducer: comboboxMultiselectStateReducer(createNewItem),
    itemToString,
    onInputValueChange: ({ inputValue }) => composeHandlers(loadItems, onFilterChange)(inputValue),
    onIsOpenChange: ({ isOpen, inputValue }) => {
      isOpen && !itemsLoaded && loadItems(inputValue)
      setItemsLoaded(true)
    },
  })

  const downshiftComboboxProps = getComboboxProps()
  const { getFormControlProps, getInputProps: getFromControlInputProps } = useFormControl(props)
  const { ref: downshiftInputRef, ...downshiftInputProps } = getInputProps(
    getDropdownProps({
      onFocus: composeHandlers(onFocus, () => openOnFocus && openMenu()),
    })
  )
  const { id: labelId, ...downshiftLabelProps } = getLabelProps()
  const downshiftMenuProps = getMenuProps()

  const {
    styles: { popper: popperStyles },
    attributes: { popper: popperAttributes },
  } = usePopper(inputRef.current, menuRef, {
    placement: 'bottom-start',
  })

  const formControlInputProps = getFromControlInputProps()
  const formControlProps = getFormControlProps()
  const invalid = !!formControlProps.error

  const handleWrapperClick = () => inputRef.current.focus()
  const wrapperClasses = css(classes.wrapper, invalid && classes.invalid, props.disabled && classes.disabled)

  const { AppendItem, CreateItem, EmptyItem, Item, LoadingItem, PrependItem, SelectedItem } = {
    ...defaultComboboxMultiselectComponents,
    ...components,
  }
  return (
    <div {...downshiftComboboxProps}>
      <FormControl {...formControlProps} labelId={labelId} {...downshiftLabelProps}>
        <div className={wrapperClasses} onClick={handleWrapperClick}>
          {selectedItems.map((selectedItem, index) => (
            <SelectedItem
              style={classes.item}
              onRemove={() => removeSelectedItem(selectedItem)}
              disabled={disabled}
              {...getSelectedItemProps({ selectedItem, index })}
            >
              {itemToString(selectedItem)}
            </SelectedItem>
          ))}
          <TextInput
            inputRef={composeRefs(inputRef, downshiftInputRef)}
            className={classes.input}
            disabled={disabled}
            onClear={composeHandlers(reset, onClear)}
            invalid={invalid}
            {...formControlInputProps}
            {...downshiftInputProps}
            {...rest}
          />
        </div>
      </FormControl>

      {/*By the ARIA definition, the menu element should always be in the DOM*/}
      <div aria-busy={isLoading} {...downshiftMenuProps}>
        {isOpen && (
          <div
            data-testid='menu'
            className={classes.menu}
            style={{ ...popperStyles, width: inputRef.current?.clientWidth, minWidth: menuMinWidth }}
            {...popperAttributes}
            ref={setMenuRef}
          >
            <ul className={classes.list}>
              {PrependItem && <PrependItem />}
              {isLoading && <LoadingItem />}
              {!isLoading && createNewItem && !loadedItems?.length && <CreateItem />}
              {!isLoading && !createNewItem && !loadedItems?.length && <EmptyItem />}
              {loadedItems.map((item, index) => (
                <Item
                  key={`${item}${index}`}
                  item={item}
                  index={index}
                  selected={selectedItems.some((selectedItem) => itemIsEqual(item, selectedItem))}
                  highlighted={highlightedIndex === index}
                  onClick={() => addSelectedItem(item)}
                  {...getItemProps({ item, index })}
                  {...props}
                />
              ))}
              {AppendItem && <AppendItem />}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

ComboboxMultiselect.defaultProps = {
  openOnFocus: true,
  loading: false,
  debounceMilliseconds: 350,
  itemIsEqual: (a, b) => a === b,
} as Partial<ComboboxProps<any>>

const comboboxMultiselectStateReducer = <T,>(createNewItem: (inputValue: string) => T) => (
  state: UseComboboxState<T>,
  actionAndChanges: UseComboboxStateChangeOptions<T>
): Partial<UseComboboxState<T>> => {
  const { type, changes } = actionAndChanges
  switch (type) {
    case useCombobox.stateChangeTypes.InputKeyDownEnter:
    case useCombobox.stateChangeTypes.ItemClick:
      return {
        ...changes,
        isOpen: true, // keep the menu open after selection.
      }
    case useCombobox.stateChangeTypes.InputBlur:
      return {
        ...changes,
        ...(!changes.selectedItem &&
          (createNewItem
            ? { selectedItem: createNewItem(state.inputValue) }
            : {
                inputValue: '',
              })),
      }
    default:
      return changes
  }
}

export const createStyles = (theme: Theme, { items, disabled }: ComboboxMultiselectProps<any>) => {
  const parts = createStyleParts(theme)
  return {
    wrapper: {
      ...parts.base,
      cursor: 'text',

      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',

      padding: items.length > 0 ? 'calc(0.25rem - 1px) 0.25rem' : 'calc(0.5rem - 1px) 0.5rem',
      '&:hover': !disabled && parts.hover,
      '&:active': !disabled && parts.active,
      '&:focus-within': !disabled && parts.focus,
    } as CSSProperties,
    disabled: parts.disabled,
    invalid: {
      ...parts.invalid,
      '&:focus-within': parts.invalid[':not(:disabled):focus'],
    } as CSSProperties,
    item: {
      marginRight: '0.25rem',
    } as CSSProperties,
    input: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.sizes.text,
      color: theme.pallete.text.main,
      lineHeight: '1rem',
      background: theme.pallete.surface.main,
      padding: 0,
      flex: 1,
      border: 0,
      outline: 0,
      '::placeholder': parts.placeholder,
      ':disabled': parts.disabled,
    } as CSSProperties,
    menu: {
      display: 'flex',
      flexDirection: 'column',
      zIndex: theme.zIndex.dropdown,
      border: `1px solid ${theme.pallete.divider}`,
      borderRadius: theme.radius.popper,
      backgroundColor: theme.pallete.surface.main,
      boxShadow: theme.shadows.outer['40'],
      maxHeight: '20rem',
    } as CSSProperties,

    list: {
      zIndex: 'auto',
      border: 0,
      borderRadius: 0,
      boxShadow: 'none',
      maxHeight: 'auto',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      backgroundColor: theme.pallete.surface.main,
      overflowY: 'auto',
      overflowX: 'hidden',
      width: '100%',
    } as CSSProperties,
  }
}
