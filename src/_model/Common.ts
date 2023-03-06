export type Complate<T> = {
    [P in keyof T]-?: T[P]
}