interface LogoParams {
    forceDark: boolean;
}

export default function Logo({ forceDark }: LogoParams)
{
    const fontColor = forceDark ? "text-white" : "text-secondary"
    const className = `${fontColor} font-bold`
    return(
        <h4 className={className}>Passonix</h4> 
    )
}