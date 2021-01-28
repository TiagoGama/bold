import React, { useCallback } from 'react'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'
import { MaskedTextField, MaskedTextFieldProps } from '../MaskedTextField'
import { ReferenceMonth } from '../MonthPicker'

export interface MonthInputProps extends Omit<MaskedTextFieldProps, 'value' | 'onChange'> {
  value?: ReferenceMonth
  onChange?(refMonth: ReferenceMonth | null): void
}

export const format = (value: ReferenceMonth) => {
  if (!value || !value.year || value.month == null) {
    return null
  }

  if (value.month < 9) {
    return `0${value.month + 1}/${value.year}`
  } else {
    return `${value.month + 1}/${value.year}`
  }
}

export function MonthInput(props: MonthInputProps) {
  const { value, onChange, ...rest } = props

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e || !e.target || !e.target.value) {
        onChange(null)
        return
      }

      const targetValue = e.target.value
      const match: RegExpMatchArray = targetValue.match(/^(\d{2})(\d{4})$/)
      if (match) {
        const refMonth: ReferenceMonth = { month: parseInt(match[2], 10) - 1, year: parseInt(match[1], 10) }
        onChange(refMonth)
      }
    },
    [onChange]
  )

  return (
    <MaskedTextField
      value={value ? format(value) : null}
      mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      pipe={createAutoCorrectedDatePipe('mm/yyyy')}
      placeholder='mm/yyyy'
      onChange={handleChange}
      {...rest}
    />
  )
}
