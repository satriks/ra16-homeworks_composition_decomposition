
interface AsideAdd {
    img: string,
    link: string,
    title: string,
    text : string
}


interface Props {
    asideAdd : AsideAdd
}


//компонент бокового рекламного блока
export default function AsideAdd({asideAdd}:Props) {

    return (
        <div className="add__wrapper-aside">
            <img src={asideAdd.img} alt="" style={{width:"150px"}}/>
            <a href={asideAdd.link}>{asideAdd.title}</a>
            <span>{asideAdd.text}</span>
        </div>
    )
    
}