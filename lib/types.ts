import { DefineComponent, defineComponent, PropType } from 'vue'
import { ErrorSchema } from './validator'

export enum SchemaTypes {
  'NUMBER' = 'number',
  'INTEGER' = 'integer',
  'STRING' = 'string',
  'OBJECT' = 'object',
  'ARRAY' = 'array',
  'BOOLEAN' = 'boolean',
}

type SchemaRef = { $ref: string }

// type Schema = any
export interface Schema {
  type: SchemaTypes | string
  const?: any
  format?: string
  default?: any
  properties?: {
    [key: string]: Schema
  }
  items?: Schema | Schema[] | SchemaRef
  dependencies?: {
    [key: string]: string[] | Schema | SchemaRef
  }
  oneOf?: Schema[]
  anyOf?: Schema[]
  allOf?: Schema[]
  // TODO: uiSchema
  // vjsf?: VueJsonSchemaConfig
  required?: string[]
  enum?: any[]
  enumKeyValue?: any[]
  additionalProperties?: any
  additionalItems?: Schema

  minLength?: number
  maxLength?: number
  minimum?: number
  maximum?: number
  multipleOf?: number
  exclusiveMaximum?: number
  exclusiveMinimum?: number
  title?: string
}

export const FieldPropsDefine = {
  schema: {
    type: Object as PropType<Schema>,
    required: true,
  },
  uiSchema: {
    type: Object as PropType<UISchema>,
    required: true,
  },
  value: {
    required: true,
  },
  onChange: {
    type: Function as PropType<(v: any) => void>,
    required: true,
  },
  rootSchema: {
    type: Object as PropType<Schema>,
    required: true,
  },
  errorSchema: {
    type: Object as PropType<ErrorSchema>,
    required: true,
  },
} as const

export const TypeHelperComponent = defineComponent({
  props: FieldPropsDefine,
})

export type CommonFieldType = typeof TypeHelperComponent

export const CommonWidgetPropsDefine = {
  value: {},
  onChange: {
    type: Function as PropType<(v: any) => void>,
    required: true,
  },
  errors: {
    type: Array as PropType<string[]>,
  },
  schema: {
    type: Object as PropType<Schema>,
    required: true,
  },
  options: {
    type: Object as PropType<{ [keys: string]: any }>,
  },
} as const

export const SelectionWidgetPropsDefine = {
  ...CommonWidgetPropsDefine,
  options: {
    type: Array as PropType<
      {
        key: string
        value: any
      }[]
    >,
    required: true,
  },
} as const

export type CommonWidgetDefine = DefineComponent<typeof CommonWidgetPropsDefine>

export type SelectionWidgetDefine = DefineComponent<
  typeof SelectionWidgetPropsDefine
>

export enum SelectionWidgetNames {
  SelectionWidget = 'SelectionWidget',
}

export enum CommonWidgetNames {
  TextWidget = 'TextWidget',
  NumberWidget = 'NumberWidget',
}

export interface Theme {
  widgets: {
    [SelectionWidgetNames.SelectionWidget]: SelectionWidgetDefine
    [CommonWidgetNames.TextWidget]: CommonWidgetDefine
    [CommonWidgetNames.NumberWidget]: CommonWidgetDefine
  }
}

export type UISchema = {
  widget?: string | CommonWidgetDefine
  properties?: {
    [key: string]: UISchema
  }
  items?: UISchema | UISchema[]
} & {
  [key: string]: any // w:
}
