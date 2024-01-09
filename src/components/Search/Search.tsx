interface Search {
    link : string,
    text: string

}

interface Props {
    category : Search[]
}


// компонент поиска
export default function Search({category}: Props) {

    return (
        <div className="search__wrapper">
            <img src="https://davydov.in/wp-content/uploads/2019/12/IMG_20191225_170123.jpg" alt="" style={{width:"200px"}} />
            <div className="search">
                <div className="search__category">

                    {category.map( element => <a href={element.link}>{element.text}</a>)}
                </div>
                <input type="text" />
            </div>
        </div>
    )

}