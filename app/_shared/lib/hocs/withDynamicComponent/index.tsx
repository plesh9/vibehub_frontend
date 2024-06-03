import type { ComponentPropsWithoutRef, ComponentType } from 'react'

export type AllElements<T extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements> = T | ComponentType<any>
export type AdditionalPropsType<T extends keyof JSX.IntrinsicElements | ComponentType<any>> = T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : ComponentPropsWithoutRef<T>
export type DynamicTagPropsType<PropsType extends Record<string, any>, ElementType extends keyof JSX.IntrinsicElements | ComponentType<any> = 'div'> = PropsType & { as?: ElementType } & AdditionalPropsType<ElementType>

export const withDynamicComponent = <T extends Record<string, any>, S extends AllElements = 'div'>(Func: (props: T & { as?: AllElements }) => JSX.Element) => {
    const ComponentWithDynamicProps = <E extends AllElements = S>(props: DynamicTagPropsType<T, E>) => {
        return <Func {...props} />
    }

    return ComponentWithDynamicProps
}

export default withDynamicComponent
