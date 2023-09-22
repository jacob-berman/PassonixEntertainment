interface Params {
    text: string;
    onClick: any;
    fullWidth: boolean;
    margin: number;
    padding: number;
}

export default function CircleButton({ text, onClick, fullWidth, margin, padding }: Params)
{
    let className = ""
    if(fullWidth){
        className = "rounded-full bg-transparent px-10 py-5 text-lg font-semibold text-secondary shadow-sm ring-2 ring-inset ring-gray-300 hover:ring-gray-600 uppercase w-full"
    } else {
        className = "rounded-full bg-transparent px-10 py-5 text-lg font-semibold text-secondary shadow-sm ring-2 ring-inset ring-gray-300 hover:ring-gray-600 uppercase"
    }
    return(
      <div className={`mt-${margin} mb-${margin} pt-${padding} pb-${padding}`}>
        <button className={className} onClick={onClick}>{text}</button>
      </div>
    )
}