import { IconButton, useToast } from '@chakra-ui/react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai'

export default function FilmComponentSaved({imgUrl, title, dateCreated, id}){

    const navigate = useNavigate()
    const toast = useToast()

    function handleFilm(){
        const filmsSavedLocalStorage = localStorage.getItem('@filmsSaved')
        let filmsSaved = JSON.parse(filmsSavedLocalStorage)

        let newListFilmsSaved = filmsSaved.filter(film => film.imdbID !== id)

        localStorage.setItem('@filmsSaved', JSON.stringify(newListFilmsSaved))

        toast({
            title: 'Deletado',
            description: 'Você deletou um video desta aba',
            status: 'success',
            isClosable: true            
        })

        location.reload()

    }

    return(
        <section className={style.containerFilm}>
            <div className={style.detais} onClick={()=>navigate(`/film/${id}`)}>
                <img src={imgUrl} alt="image"/>
                <h2>{title}</h2>
                <p>{dateCreated}</p>
                
            </div>

            <IconButton icon={<AiFillDelete color='white'/>} width={'100%'} background={'red.300'} onClick={handleFilm}/>
        </section>
    )
}