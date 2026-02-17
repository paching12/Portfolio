export const ArrowTypes = {
    LEFT: "left",
    RIGHT: "right"
} as const

export type ArrowProps = {
    onClick: () => void
    type: typeof ArrowTypes[keyof typeof ArrowTypes]
}
    