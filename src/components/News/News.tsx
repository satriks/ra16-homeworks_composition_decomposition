import Item from "../Item"

interface News {
    logo: string,
    text: string       
}

interface Props {
    newsList : News[]
}



//Новостной блок сверху 
export default function News({newsList}:Props) {
    const dateTime = new Date()
    
    return (
        <div className="news__wrapper">
            <div className="news__header" style={{color:"Blue"}}>
                <span>Сейчас в СМИ</span>
                <span> в Location </span>    
                <span>Рекомендуем </span>
                <span style={{color:"GrayText"}}>{dateTime.toDateString()}</span>
            </div>
            <div className="news">
                {newsList.map((news) => {return (<Item
                                                    before={<img src={news.logo} style={{width:"30px"}}></img>}
                                                    text={news.text}
                                                    />)})}
            </div>
            <div className="news__exchange">
                <div className="news_usd">
                    <span>USD</span>
                    <span> 100</span>  
                </div>
                <div className="news_eur">
                    <span>EUR</span>
                    <span> 100</span>  
                </div>
                <div className="news_oil">
                    <span>Нефть</span>
                    <span> 100</span>  
                </div>

            </div>
        </div>
    )
}