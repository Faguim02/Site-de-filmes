import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBookmarkHeart } from 'react-icons/bs'

import style from './style.module.css'
import { useNavigate } from "react-router-dom";

export function Header({route, onChange}){

    const navigate = useNavigate()

    return(
        <header className={style.headerContainer}>
            <h1 onClick={()=>navigate('/')}>Filmm</h1>
            <section className={style.sections}>
                {route == "home" && (
                    <>
                        <InputGroup>
                            <InputRightElement pointerEvents={'none'}>
                                <AiOutlineSearch/>
                            </InputRightElement>
                            <Input type="text" placeholder="Procurar por filmes" onChange={onChange}/>
                        </InputGroup>

                        <IconButton icon={<BsBookmarkHeart color="#FFFF"/>} backgroundColor={'#CE7DA5'} onClick={()=>navigate('/saveds')}/>
                    </>
                )}
                {route == "film" && (
                    <IconButton icon={<BsBookmarkHeart color="#FFFF"/>} backgroundColor={'#CE7DA5'} onClick={()=>navigate('/saveds')}/>
                )}
                {route == "saveds" && (
                    <div></div>
                )}
            </section>
        </header>
    )
}