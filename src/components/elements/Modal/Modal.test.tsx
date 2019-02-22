import React from 'react'
import { fireEvent, render } from 'react-testing-library'

import * as stringUtils from '../../../util/string'

import { Modal, ModalProps } from './Modal'
;(stringUtils as any).randomStr = jest.fn(() => 'abc')

describe('Modal', () => {
  it('should render correctly when closed', () => {
    render(<Modal open={false}>Testing.</Modal>)
    expect(document.body).toMatchSnapshot()
  })

  it('should render correctly when opened', () => {
    render(<Modal open={true}>Testing.</Modal>)
    expect(document.body).toMatchSnapshot()
  })

  it('should render on a portal', () => {
    const { container } = render(<Modal open={true}>Testing.</Modal>)
    expect(container.innerHTML).toBeFalsy()
    expect(document.body).toBeTruthy()
  })

  it('should override ModalContainer props and pass down props to it', () => {
    render(
      <Modal open={true} role='alertdialog'>
        Testing.
      </Modal>
    )
    expect(document.body.querySelector('[aria-modal="true"]').getAttribute('role')).toEqual('alertdialog')
  })

  describe('sizes', () => {
    it('should accept the "small" size and render accordingly', () => {
      render(
        <Modal open={true} size='small'>
          Testing.
        </Modal>
      )
      expect(document.body).toMatchSnapshot()
    })

    it('should accept the "large" size and render accordingly', () => {
      render(
        <Modal open={true} size='large'>
          Testing.
        </Modal>
      )
      expect(document.body).toMatchSnapshot()
    })

    it('should accept the "auto" size and render accordingly', () => {
      render(
        <Modal open={true} size='auto'>
          Testing.
        </Modal>
      )
      expect(document.body).toMatchSnapshot()
    })
  })
})

it('should call "onClose" when key "Escape" is pressed and modal is open', () => {
  const handleClose = jest.fn()
  const createComponent = (props: Partial<ModalProps> = {}) => (
    <Modal open={true} onClose={handleClose} {...props}>
      Modal
    </Modal>
  )

  const { rerender } = render(createComponent())
  expect(handleClose).not.toHaveBeenCalled()
  fireEvent.keyDown(document.body, { key: 'Escape' })
  expect(handleClose).toHaveBeenCalledTimes(1)

  rerender(createComponent({ open: false }))
  fireEvent.keyDown(document.body, { key: 'Escape' })
  expect(handleClose).toHaveBeenCalledTimes(1)
})
