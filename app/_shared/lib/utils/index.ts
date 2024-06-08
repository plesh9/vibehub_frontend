import type { KeysType, ValueByKeysType } from '../types'

export const generateId = (length: number = 32): string => {
    const characters = '-ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-'

    return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('')
}

export const getValueByKeys = <T extends Record<string, any>>(item: T, keys: KeysType<T>): ValueByKeysType<T, KeysType<T>> | undefined => {
    return keys.split('.').reduce((acc: any, currentKey) => acc && acc[currentKey], item as any) as ValueByKeysType<T, KeysType<T>>
}

export const filterBySearch = <T extends Record<string, any>>(array: Array<T>, search: string, keys: Array<KeysType<T>>) =>
    array
        ? array.filter((item) => {
              if (keys.length) {
                  return keys.map((key) => `${getValueByKeys(item, key)}`.toLowerCase().includes(search.toLowerCase())).filter((key) => key).length > 0
              } else {
                  return `${item}`.toLowerCase().includes(search.toLowerCase())
              }
          })
        : []

export * from './handleError'
export * from './date'
