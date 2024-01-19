/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const EditLinkModal = ({setEditModalIsOpen, values}) => {

    const handleClick = () => {
        setEditModalIsOpen(false)
    }

    const navigate = useNavigate();

    const handleAddLink = (event) => {
        event.preventDefault();
        const titles = event.target.elements.title
        const links = event.target.elements.link

        let linksToUrl = []
        
        let newLinksArray = links
        let newTitlesArray = titles

        if (titles.length === undefined){
            newTitlesArray = [titles]
            newLinksArray = [links]
        }

        const cantidadLinks = titles.length || [titles].length

        for (let i = 0; i < cantidadLinks; i++) {
            const obj = {"title": newTitlesArray[i].value, "link": newLinksArray[i].value}
            linksToUrl.push(obj)
        }

        const encodedUrl = btoa(JSON.stringify(linksToUrl))
        navigate({search: `?links=${encodedUrl}`});

        setEditModalIsOpen(false)
    }
    return (
        <div className="fixed flex h-[100vh] w-full justify-center items-center bg-black bg-opacity-90">
            <dialog className="custom-modal" open>
                <header className="bg-c-accent border-black border-r-[2px] border-t-[2px] border-l-[2px] px-4 py-2 flex justify-between items-center gap-8">
                    <h3 className="text-xl font-medium">Edita Tu Perfil</h3>
                    <button onClick={handleClick} className="flex items-center">
                        <i className='bx bx-x bx-md'></i>
                    </button>
                </header>
                <form onSubmit={handleAddLink} className="border-black border-[2px] py-6 px-4 flex flex-col gap-2">
                    <section className="mb-4 flex flex-col gap-4">
                    {
                        values.map((item)=>{
                            return (
                                <Inputs title={item.title} link={item.link} key={crypto.randomUUID()}/>
                            )
                        })
                    }
                    </section>
                    <div className="w-full">
                        <button className='px-4 py-3 font-bold custom-container-without-border bg-c-dark hover:bg-c-primary text-c-light w-full'>Guardar</button>
                    </div>
                </form>
            </dialog>
        </div>

    )
}

export const Inputs = ({title, link}) => {

    const [isVisible, setIsVisible] = useState(true)
    const handleRemoveElement = () => {
        setIsVisible(false)
    }

    return (
        <>
            {
                isVisible && (
                    <div  className="mb-4 relative flex gap-4">
                        <input  type="text" name="title" className="w-full sm:w-[350px] focus:outline-none py-2 px-2 custom-container" placeholder="Titulo" defaultValue={title} required/>
                        <input type="text" name="link" className="w-full sm:w-[350px] focus:outline-none py-2 px-2 custom-container" placeholder="Link" defaultValue={link} required/>
                        <button type="button" onClick={handleRemoveElement} className="flex items-center hover:text-c-red">
                            <i className='bx bx-trash bx-md'></i>
                        </button>
                    </div>
                )
            }
        </>

    )
}