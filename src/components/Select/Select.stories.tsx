import { action } from '@storybook/addon-actions'
import { boolean, text, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { HFlow } from '../HFlow'
import { Text } from '../Text'
import { Button } from '../Button'
import { SelectHelperMenuItem } from './SelectMenu'
import { SelectAsync } from './SelectAsync'
import { DefaultItemType, defaultSelectFilter, Select, SelectMenu, SelectMenuItem } from './'

const fruits: DefaultItemType[] = [
  { value: 1, label: 'Apple' },
  { value: 2, label: 'Avocado' },
  { value: 3, label: 'Banana' },
  { value: 4, label: 'Blueberry' },
  { value: 5, label: 'Coconut' },
  { value: 6, label: 'Grape' },
  { value: 7, label: 'Lemon' },
  { value: 8, label: 'Mango' },
  { value: 9, label: 'Melon' },
  { value: 10, label: 'Orange' },
  { value: 11, label: 'Peach' },
  { value: 12, label: 'Pear' },
]

const loadFruits = (query: string): Promise<DefaultItemType[]> => {
  action('items loaded')()
  return new Promise(resolve => {
    setTimeout(() => resolve(defaultSelectFilter([...fruits], query, item => item.label)), 1000)
  })
}

storiesOf('Components|Select', module)
  .add('default', () => (
    <Select<DefaultItemType>
      label='Fruit'
      name='fruit'
      items={fruits}
      error={text('error', '')}
      menuMinWidth={number('menuMinWidth (px)', undefined)}
      itemToString={item => item && item.label}
      itemIsEqual={(a, b) => a.value === b.value}
      placeholder='Select a value...'
      multiple={boolean('multiple', false)}
      clearable={boolean('clearable', true)}
      disabled={boolean('disabled', false)}
      openOnFocus={boolean('openOnFocus', true)}
      loading={boolean('loading', false)}
      onChange={action('changed')}
      onBlur={action('blur')}
      onFocus={action('focus')}
    />
  ))
  .add('suggestion', () => (
    <Select<DefaultItemType>
      label='Fruit'
      name='fruit'
      items={fruits}
      error={text('error', '')}
      icon={null}
      createNewItem={str => ({ value: str, label: str })}
      itemToString={item => item && item.label}
      itemIsEqual={(a, b) => a.value === b.value}
      placeholder='Select a value...'
      multiple={boolean('multiple', false)}
      clearable={boolean('clearable', true)}
      disabled={boolean('disabled', false)}
      openOnFocus={boolean('openOnFocus', false)}
      loading={boolean('loading', false)}
      onChange={action('changed')}
      onBlur={action('blur')}
      onFocus={action('focus')}
    />
  ))
  .add('async', () => (
    <SelectAsync<DefaultItemType>
      label='Repository'
      name='repository'
      loadItems={loadFruits}
      error={text('error', '')}
      itemToString={item => item && item.label}
      itemIsEqual={(a, b) => a.value === b.value}
      placeholder='Select a value...'
      multiple={boolean('multiple', false)}
      clearable={boolean('clearable', true)}
      disabled={boolean('disabled', false)}
      openOnFocus={boolean('openOnFocus', true)}
      onChange={action('changed')}
      onBlur={action('blur')}
      onFocus={action('focus')}
    />
  ))
  .add('custom menu item', () => (
    <Select<DefaultItemType>
      renderItem={item => (
        <>
          <p>
            <strong>{item.label}</strong>
          </p>
          <p>yummy</p>
        </>
      )}
      label='Fruit'
      name='fruit'
      items={fruits}
      error={text('error', '')}
      itemToString={item => item && item.label}
      itemIsEqual={(a, b) => a.value === b.value}
      placeholder='Select a value...'
      multiple={boolean('multiple', false)}
      clearable={boolean('clearable', true)}
      disabled={boolean('disabled', false)}
      openOnFocus={boolean('openOnFocus', true)}
      loading={boolean('loading', false)}
      onChange={action('changed')}
      onBlur={action('blur')}
      onFocus={action('focus')}
    />
  ))
  .add('select menu', () => (
    <SelectMenu style={{ position: 'static' }}>
      <SelectMenuItem>Item 1</SelectMenuItem>
      <SelectMenuItem selected>Item 2 (selected)</SelectMenuItem>
      <SelectMenuItem>Item 3</SelectMenuItem>
      <SelectMenuItem>Item 4</SelectMenuItem>
      <SelectMenuItem>Item 5</SelectMenuItem>
    </SelectMenu>
  ))
  .add('custom components', () => (
    <Select<DefaultItemType>
      label='Fruit'
      name='fruit'
      items={fruits.slice(0, 4)}
      itemToString={item => item && item.label}
      components={{
        PrependItem: props => <SelectHelperMenuItem>Prepend item</SelectHelperMenuItem>,
        AppendItem: props => (
          <SelectHelperMenuItem>
            <HFlow alignItems='center' justifyContent='space-between'>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quod modi, inventore quasi aut sed
                beatae corrupti repellendus minima voluptatem debitis, quibusdam repudiandae totam voluptatum odit.
              </Text>
              <Button kind='primary' size='small' onClick={action('New item click')}>
                New item
              </Button>
            </HFlow>
          </SelectHelperMenuItem>
        ),
      }}
    />
  ))
