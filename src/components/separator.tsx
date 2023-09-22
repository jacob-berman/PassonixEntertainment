interface Params {
    height: number;
    bgColor: string;
}

export default function Separator({ height = 1, bgColor }: Params) {
    const className = `theme-bar bar-separator w-full ${bgColor}`
    return(
        <div className={className} style={{height: `${height}px` }}></div>
    )
}