import { mount } from '@vue/test-utils'
import JsonSchemaForm, { NumberField } from '../../lib'
import TestComponent from './utils/TestComponent'

describe('JsonSchemaForm', () => {
  it('should render correct number field', async () => {
    let value = ''
    const wrapper = mount(TestComponent, {
      props: {
        schema: {
          type: 'number',
        },
        value: value,
        onChange: (v: any) => {
          value = v
        },
      },
    })

    const numberFiled = wrapper.findComponent(NumberField)
    expect(numberFiled.exists()).toBeTruthy()
    const input = numberFiled.find('input')
    input.element.value = '123'
    await input.trigger('input')
    expect(value).toBe(123)
  })
})
