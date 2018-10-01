import * as React from 'react'
import { FormSpy } from 'react-final-form'

import { Button, ButtonProps } from '../../../elements/button/Button/Button'

export interface SubmitButtonProps extends ButtonProps {
    handleSubmit: (event?: React.SyntheticEvent<HTMLFormElement>) => void
}

export class SubmitButton extends React.PureComponent<SubmitButtonProps> {

    render() {
        const { handleSubmit, ...rest } = this.props
        return (
            <FormSpy
                subscription={{ submitting: true }}
            >
                {({ submitting }) => (
                    <Button
                        loading={submitting}
                        onClick={handleSubmit}
                        type='primary'
                        render={this.renderButton}
                        {...rest}
                    />
                )}
            </FormSpy>
        )
    }

    private renderButton = (props: any) => {
        return <button type='submit' {...props} />
    }

}