import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'
import { withPropTypes } from '../../../../stories-addons/withPropTypes/index'
import { withTheme } from '../../../../stories-addons/withTheme'

import { NumberField } from './NumberField'

storiesOf('Form', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .addDecorator(withForm())
    .add('NumberField', () =>
        <NumberField name='quantidade' label='Quantidade' placeholder='Quantidade' />
    )