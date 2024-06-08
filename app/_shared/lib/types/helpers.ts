export type KeysType<T> = T extends object
    ? {
          [K in keyof T]: T[K] extends Date ? `${string & keyof T}` : `${Exclude<K, symbol>}${KeysType<T[K]> extends never ? '' : `.${KeysType<T[K]>}`}`
      }[keyof T]
    : never

export type ValueByKeysType<T extends Record<string, any>, K extends string> = K extends `${infer FirstKey}.${infer RestKeys}` ? (FirstKey extends keyof T ? ValueByKeysType<T[FirstKey], RestKeys> : never) : K extends keyof T ? T[K] : never
