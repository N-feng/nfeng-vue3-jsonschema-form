import { inject } from 'vue'
import { CommonFieldType, Theme } from './types'

export const SchemaFormContextKey = Symbol()

export function useVJSFConext() {
  const context: { SchemaItem: CommonFieldType } | undefined =
    inject(SchemaFormContextKey)

  if (!context) {
    throw Error('SchemaForm needed')
  }

  return context
}
