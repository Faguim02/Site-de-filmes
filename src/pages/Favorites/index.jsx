import { useEffect, useState } from 'react'
import FilmComponentSaved from '../../components/FilmComponentSaved'
import { Header } from '../../components/Header'
import style from './style.module.css'

export function Favorites(){

    const [films, setFilms] = useState([])

    useEffect(()=>{
        const filmsSavedLocalStorage = localStorage.getItem('@filmsSaved') || []
        const filmsSaved = JSON.parse(filmsSavedLocalStorage)
        setFilms(filmsSaved)        
    },[])

    return(
        <>
            <Header route={'saveds'}/>

            <main className={style.container}>
                <section className={style.subTitle}>
                    <div></div>
                    <h3>Videos que você salvou</h3>
                </section>
                <article>
                    {films.map(film => (
                        <FilmComponentSaved title={film.Title} id={film.imdbID} key={film.imdbID} dateCreated={film.Year} imgUrl={film.Poster}/>
                    ))}
                </article>
            </main>
        </>
    )
}