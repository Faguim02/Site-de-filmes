import { useEffect, useState } from 'react'
import FilmComponent from '../../components/FilmComponent'
import { Header } from '../../components/Header'
import style from './style.module.css'
import { search } from 'https://arquivos.workdoc.com.br/estagio/movieData.js'

export function Home(){

    const [films, setFilms] = useState([])

    const [searchFilter, setSearchFilter] = useState("")

    useEffect(()=>{
        search[0] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDnDH4nBpREQqcfIgSAuZQ1n4N31hGZo-Dn2jZH3pga-xuo0q"
        setFilms(search) 
    },[])

    return(
        <>
            <Header route={"home"} onChange={e => setSearchFilter(e.target.value.toLowerCase())}/>

            <main className={style.container}>
                <section className={style.subtitle}>
                    <div></div>
                    <p>Veja os filmes a seguir</p>
                </section>
                <article className={style.containerFilms}>
                    
                    {films.map(film => {
                        
                        if(film.Type == "movie"){

                            let filmTitle = film.Title.toLowerCase()

                            if(filmTitle.includes(searchFilter)){

                                return (
                                    <FilmComponent
                                    key={film.imdbID}
                                    id={film.imdbID}
                                    title={film.Title}
                                    dateCreated={film.Year}
                                    imgUrl={film.Poster}
                                    />
                                )
                            }
                        }
                    })}
                </article>
            </main>
        </>
    )
}