import { Options as PopperOptions } from '@popperjs/core'
import React, { useEffect, useRef, useState } from 'react'

import { usePopper } from 'react-popper'
import { Theme, useStyles } from '../../styles'

import { disableByRange } from '../DateField/DateField'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { Icons } from '../Icon'

import {
  ControlledDateRangeCalendarProps,
  ControlledDateRangeCalendar,
} from '../Calendar/RangeCalendar/DateRangeCalendar/ControlledDateRangeCalendar'
import { DateRange } from './BaseDateRangeInput'
import { DateRangeInput, DateRangeInputProps } from './DateRangeInput'

export interface DateRangeFieldProps extends DateRangeInputProps {
  minDate?: Date
  maxDate?: Date
  icon?: Icons
  calendarProps?: Partial<ControlledDateRangeCalendarProps>
  popperProps?: PopperOptions
}

export function DateRangeField(props: DateRangeFieldProps) {
  const { onChange, popperProps, minDate, maxDate, value, icon, calendarProps, ...rest } = props

  const [dateRangeInputFocus, setDateRangeInputFocus] = useState(1)
  const [visibleDate, setVisibleDate] = useState<Date>(new Date())
  const [open, setOpen] = useState(false)

  const { classes, css } = useStyles(createStyles)

  const finalInputRef = useRef<HTMLInputElement>()
  const [anchorRef, setAnchorRef] = useState<HTMLDivElement>()
  const [popupRef, setPopupRef] = useState<HTMLDivElement>()

  useEffect(() => {
    const point = (): Date => {
      if (dateRangeInputFocus === 1 && value?.startDate) {
        return value.startDate
      } else if (dateRangeInputFocus === 2 && value?.endDate) {
        return value.endDate
      } else if (value?.startDate && !value?.endDate) {
        return value.startDate
      } else if (!value?.startDate && value?.endDate) {
        return value.endDate
      } else {
        return new Date()
      }
    }

    setVisibleDate(point)
  }, [dateRangeInputFocus, value])

  const {
    styles: { popper: popperStyle },
    attributes: { placement },
  } = usePopper(anchorRef, popupRef, { ...popperProps, placement: 'bottom' })

  const handleInputFocus = (inputOnFocus: number) => setDateRangeInputFocus(inputOnFocus)

  const handleOnDayClick = (dayClicked: Date) => finalInputRef.current.focus()

  const handleFocusIn = () => setOpen(true)

  const handleFocusOut = () => setOpen(false)

  const handleDateRangeChanged = (rangeDateFromBaseInput: DateRange) => {
    onChange(rangeDateFromBaseInput)
  }

  const handleCalendarDateRangeChanged = (dateRange: DateRange) => {
    const { startDate, endDate } = dateRange
    startDate && endDate
      ? startDate <= endDate
        ? onChange({ startDate: startDate, endDate: endDate } as DateRange)
        : onChange({ startDate: endDate, endDate: startDate } as DateRange)
      : onChange({ startDate: startDate, endDate: endDate } as DateRange)
  }

  const handleOnVisibleDateChange = (vDate: Date): void => setVisibleDate(vDate)

  return (
    <FocusManagerContainer onFocusIn={handleFocusIn} onFocusOut={handleFocusOut}>
      <DateRangeInput
        value={value}
        onChange={handleDateRangeChanged}
        divRef={setAnchorRef}
        minDate={minDate}
        maxDate={maxDate}
        icon={icon}
        finalInputRef={finalInputRef}
        onInputOnFocus={handleInputFocus}
        {...rest}
      />

      {open && (
        <div
          ref={setPopupRef}
          className={css(classes.root, popperStyle as any)}
          data-placement={placement}
          tabIndex={-1}
        >
          <ControlledDateRangeCalendar
            value={value}
            onChange={handleCalendarDateRangeChanged}
            onDayClick={handleOnDayClick}
            inputOnFocus={dateRangeInputFocus}
            visibleDate={visibleDate}
            onVisibleDateChange={handleOnVisibleDateChange}
            minDate={minDate}
            maxDate={maxDate}
            modifiers={{
              disabled: disableByRange(minDate, maxDate),
            }}
            {...calendarProps}
          />
        </div>
      )}
    </FocusManagerContainer>
  )
}

export const createStyles = (theme: Theme) => ({
  root: {
    zIndex: theme.zIndex.popper,
    background: theme.pallete.surface.main,
    boxShadow: theme.shadows.outer[40],
    borderRadius: theme.radius.popper,
    padding: '0.5rem .25rem .25rem .25rem',
    outline: 'none',
  },
})
