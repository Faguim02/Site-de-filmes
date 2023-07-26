import { BsBookmarkHeart } from 'react-icons/bs'
import { Header } from '../../components/Header'
import style from './style.module.css'
import { Button, IconButton, Spinner, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { movieDetail } from 'https://arquivos.workdoc.com.br/estagio/movieData.js'

export function Film(){
    
    const { id } = useParams()

    const [film, setFilm] = useState()

    const navigate = useNavigate()

    const toast = useToast()

    useEffect(()=>{

        let filmFiltered = movieDetail.filter(filme => {
            return filme.imdbID == id
        })

        setFilm(filmFiltered[0])

    },[])

    function handleSavaFilm(){
        const filmsSavedLocalStorage = localStorage.getItem('@filmsSaved')
        let filmsSaved = JSON.parse(filmsSavedLocalStorage) || []
        const hashFilm = filmsSaved.some(filmSaved => filmSaved.imdbID == id)

        if(hashFilm){
            toast({
                title:"Já está salvo",
                description: "Este filme já está na lista de salvos",
                status: 'info',
                isClosable: true
            })
        }
        else{
            filmsSaved.push(film)
            localStorage.setItem('@filmsSaved', JSON.stringify(filmsSaved))
            toast({
                title:"Salvo com sucesso!",
                description: "Acesse o canto superior direito da tela para acessar aos filmes salvos",
                status: 'success',
                isClosable: true
            })
        }
    }

    if(!film){

        return (
            <>
                <Header route={"film"}/>

                <main style={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginTop: 100,
                    gap: 10
                 }}>
                    <Spinner size={'xl'}/>
                    <span>Ops... não acha que está demorando? acho melhor você sair e enviar um feedback caso não abra.</span>
                    <Button onClick={()=> navigate('/')}>Voltar</Button>
                </main>
            </>
        )
    }
    
    return(
        <>
            <Header route={"film"}/>
            
            <main className={style.container}>
                <img src={film.Poster} alt="banner" className={style.banner}/>
                <article className={style.detais}>
                    <section className={style.division}>
                        <div className={style.timerLangue}>
                            <span>{film.Language}</span>
                            <span>{film.Runtime}</span>
                        </div>
                        <IconButton icon={<BsBookmarkHeart color="#FFFF" onClick={handleSavaFilm}/>} backgroundColor={'#CE7DA5'}/>
                    </section>
                    <h1>{film.Title}</h1>
                    <p>Gênero: {film.Genre}</p>
                    <section className={style.creation}>
                        <p>Criado por: {film.Director}</p>
                        <p>em {film.Released}</p>
                    </section>

                    <p>Autores: {film.Actors}</p>

                    <p>
                        {film.Plot}
                    </p>

                    <span>Filme faturou mais de {film.BoxOffice}</span>
                    <span>Nota media: {film.imdbRating}</span>
                    <span>{film.imdbVotes} pessoa votou</span>
                    
                </article>
            </main>
        </>
    )
}