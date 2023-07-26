import style from './style.module.css'
import { useNavigate } from 'react-router-dom'

export default function FilmComponent({imgUrl, title, dateCreated, id}){

    const navigate = useNavigate()

    return(
        <section className={style.containerFilm} onClick={()=>navigate(`/film/${id}`)}>
            <div className={style.detais}>
                <img src={imgUrl} alt="image"/>
                <h2>{title}</h2>
                <p>{dateCreated}</p>
            </div>

            <div className={style.tag}></div>
        </section>
    )
}