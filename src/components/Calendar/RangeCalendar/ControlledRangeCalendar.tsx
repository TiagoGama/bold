import { useEffect, useRef, useState } from 'react'
import React from 'react'

import { CalendarProps } from '../Calendar'

import { RangeCalendar } from './RangeCalendar'

export interface ControlledRangeCalendarProps extends CalendarProps {
  initialValues?: {
    initialDate: Date
    finalDate: Date
  }
  onChange?(initialDate: Date, finalDate: Date): void
}
export const ControlledRangeCalendar = ({ onChange, initialValues, ...rest }: ControlledRangeCalendarProps) => {
  const [initialDate, setInitialDate] = useState<Date>(initialValues ? initialValues.initialDate : undefined)
  const [finalDate, setFinalDate] = useState<Date>(initialValues ? initialValues.finalDate : undefined)
  const cmpMounted = useRef(false)

  // Call to onChange prop only after component has been mounted
  useEffect(() => {
    if (cmpMounted.current && onChange) {
      onChange(initialDate, finalDate)
      return
    }
    cmpMounted.current = true
  }, [initialDate, finalDate])

  const setFinalVerified = (start: Date, end: Date) => {
    if (!rest.modifiers || !rest.modifiers.disabled) {
      setFinalDate(end)
      return
    }
    const aux: Date = new Date(start)
    for (; aux < end; aux.setDate(aux.getDate() + 1)) {
      if (rest.modifiers.disabled(aux, rest)) {
        aux.setDate(aux.getDate() - 1)
        break
      }
    }
    setFinalDate(aux)
  }

  const controllDayClick = (day: Date) => {
    if (!initialDate) {
      setInitialDate(day)
      return
    }
    if (finalDate) {
      setInitialDate(day)
      setFinalDate(undefined)
      return
    }
    if (initialDate.getTime() === day.getTime()) {
      return
    }
    if (day < initialDate) {
      setFinalVerified(day, initialDate)
      setInitialDate(day)
      return
    }
    setFinalVerified(initialDate, day)
    return
  }

  return <RangeCalendar {...rest} initialDate={initialDate} finalDate={finalDate} onDayClick={controllDayClick} />
}
