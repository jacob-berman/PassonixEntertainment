interface NewsParams {
    img: string;
    headline: string;
    text: string;
}

export default function NewsBlock({ img, headline, text }: NewsParams) {
    return(
        <div className="flex-col justify-center mr-5 ml-5">
            <img src={img} alt="aaa" width={480} height={270}/>
            <h6 className='text-secondary font-bold pt-2 uppercase'>{headline}</h6>
            <a href="" ><h4 className='pt-2 news-link'>{text}</h4></a>
        </div>
    )
}