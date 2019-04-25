import React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { withForm } from '../../../../test/index'

import { NumberField, parse } from './NumberField'

describe('parse', () => {
  it('should accept numbers only', () => {
    expect(parse('abcdefgh999!@.a')).toEqual('999')
  })
})

describe('Field', () => {
  it('should render correctly', () => {
    const { container } = render(withForm(<NumberField name='number' />))
    expect(container).toMatchSnapshot()
  })

  it('should accept only numbers', () => {
    const { container } = render(withForm(<NumberField name='number' />))
    const input = container.querySelector('input')

    fireEvent.change(input, { target: { value: '\'"@#$*/+./ªºabc123a!' } })
    expect(input.getAttribute('value')).toEqual('123')
  })
})
