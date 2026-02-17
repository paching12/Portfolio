import type { FC } from "react"
import { ArrowTypes, type ArrowProps } from "./Arrow.types"

const Arrow: FC<ArrowProps> = ({ onClick, type }) => {

    const path = type === ArrowTypes.LEFT ? "M15.75 19.5L8.25 12l7.5-7.5" : "M8.25 4.5l7.5 7.5-7.5 7.5"
    const styles = type === ArrowTypes.LEFT ? "left-4" : "right-4"
    return (
        <button
        onClick={onClick}
        className={`absolute ${styles} top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-110 group-hover:opacity-100`}
        aria-label={`Scroll ${type}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={path}
          />
        </svg>
      </button>
    )
}

export default Arrow
