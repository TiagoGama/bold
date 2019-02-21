import React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { withTheme } from '../../../../test/index'

import { TextInput } from './TextInput'

it('should render correctly', () => {
    const { container } = render(withTheme(<TextInput />))
    expect(container).toMatchSnapshot()
})

it('should accept "type" prop', () => {
    const { container } = render(withTheme(<TextInput type='password' />))
    expect(container.querySelector('input').type).toEqual('password')
})

describe('icon', () => {
    it('should render correctly with icon', () => {
        const { container } = render(withTheme(<TextInput icon='adjust' iconPosition='left' onIconClick={jest.fn()} />))
        expect(container).toMatchSnapshot()
    })
    it('should call "onIconClick" when icon is clicked', () => {
        const handleIconClick = jest.fn()
        const { container } = render(withTheme(<TextInput icon='adjust' onIconClick={handleIconClick} />))
        const button = container.querySelector('button')
        expect(handleIconClick).not.toHaveBeenCalled()
        fireEvent.click(button)
        expect(handleIconClick).toHaveBeenCalledWith(expect.anything())
    })
    it('should disable icon when input is disabled', () => {
        const handleIconClick = jest.fn()
        const { container } = render(withTheme(<TextInput icon='adjust' onIconClick={handleIconClick} disabled />))
        const button = container.querySelector('button')
        expect(button.disabled).toEqual(true)
        fireEvent.click(button)
        expect(handleIconClick).not.toHaveBeenCalled()
    })
    it('should disable icon when "iconDisabled" is true', () => {
        const handleIconClick = jest.fn()
        const { container } = render(withTheme(<TextInput icon='adjust' onIconClick={handleIconClick} iconDisabled />))
        const button = container.querySelector('button')
        expect(button.disabled).toEqual(true)
    })
})

describe('clear icon', () => {
    it('should not render clear icon when clearable prop is false', () => {
        const { queryByTitle, rerender } = render(withTheme(<TextInput defaultValue='Test' clearable={true} />))
        expect(queryByTitle('Limpar')).toBeTruthy()

        rerender(withTheme(<TextInput defaultValue='Test' clearable={false} />))
        expect(queryByTitle('Limpar')).toBeFalsy()
    })
})
