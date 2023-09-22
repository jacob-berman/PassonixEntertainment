import CircleButton from "./circle_button"

interface GameLogoParams {
    imgMain: string;
    imgTitle: string;
}


function GameLogo({ imgMain, imgTitle }: GameLogoParams) {
    return(
        <div className="relative flex flex-col items-center justify-center mx-auto">
            <img src={imgMain} alt="Background Image" className="w-full h-full object-cover" />
            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2">
                <img src={imgTitle} alt="Logo Image" className="w-[desiredWidth] h-[desiredHeight]" />
            </div>
        </div>
    )

}

interface GameInfoParams {
    gameName: string;
    description: string;
    onClick: any;
}

function GameInfo({ gameName, description, onClick } : GameInfoParams) {
    return (
        <div className="flex flex-col mx-auto">
            <h2>{gameName}</h2>
            <h5 className="text-gray">{description}</h5>
            <CircleButton padding={0} margin={20} fullWidth={false} text="View Game" onClick={onClick}/>
        </div>
    )
}

export default function GameBlock({ imgLeft, imgMain, imgTitle, gameName, description, onClick } : any) {
    return(
        <div className="flex place-content-evenly mb-20">
            {
                imgLeft ? (
                    <>
                    <GameLogo imgMain={imgMain} imgTitle={imgTitle}/>
                    <GameInfo gameName={gameName} description={description} onClick={onClick}/>
                    </>
                ) : (
                    <>
                    <GameInfo gameName={gameName} description={description} onClick={onClick}/>
                    <GameLogo imgMain={imgMain} imgTitle={imgTitle}/>
                    </>
                )
            }

        </div>
    )
}