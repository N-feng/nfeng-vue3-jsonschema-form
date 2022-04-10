import { FieldPropsDefine } from '../types'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NumberField',
  props: FieldPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      const value = e.target.value

      const num = Number(value)

      if (Number.isNaN(num)) {
        props.onChange(undefined)
      } else {
        props.onChange(num)
      }
    }
    return () => (
      <input type="number" value={props.value} onInput={handleChange} />
    )
  },
})
