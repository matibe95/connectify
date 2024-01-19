/* eslint-disable react/prop-types */

import { NavBar } from "./NavBar"
import { useGetUrlParams } from "../hooks/useGetUrlParams";
import { decodeUrl } from "../utils/decodeUrl";
import { useState } from "react";
import { AddLinkModal } from "./modals/AddLinkModal";
import { EditLinkModal } from "./modals/EditLinkModal";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export const CreateLink = () => {
    const {profileName, encodedLinks } = useGetUrlParams();
    const { links } = decodeUrl(encodedLinks)

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [editModalIsOpen, setEditModalIsOpen] = useState(false)


    const openModal = (type) => {
        if (type === 'add'){
            return setModalIsOpen(!modalIsOpen)
        }
        setEditModalIsOpen(!editModalIsOpen)
    }

    const handleShareLink = () => {
      
        toast.success('Texto copiado al portapapeles', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnFocusLoss: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
      
        navigator.clipboard.writeText(window.location.href)
    }

    return (
        <>
            {
                editModalIsOpen && (
                    <EditLinkModal values={links} setEditModalIsOpen={setEditModalIsOpen}/>
                )
            }
            {
                modalIsOpen && (
                    <AddLinkModal values={links} setModalIsOpen={setModalIsOpen}/>
                )
            }
            <section className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] p-[2rem]">
                <NavBar/>
            <header className='bg-c-purple relative custom-container py-8 px-4 flex flex-col gap-8 items-center mb-6'>
                <h1 className='font-bold md:text-6xl text-4xl text-center tracking-tightest'>{profileName}</h1>
            </header>
            {
                links.map((item)=>{
                    return (
                        <a target="__blank" href={item.link} key={crypto.randomUUID()} className='bg-c-yellow relative custom-container-without-border primary-animation py-8 px-4 flex justify-center gap-4 items-center mb-6'>
                            <span className="text-2xl font-medium">{item.title}</span>
                            <div className="flex items-center rounded-full">
                                <i className='bx bx-right-arrow-alt bx-md'></i>
                            </div>
                        </a>
                    )
                })
            }
            <div className="flex justify-center flex-col sm:flex-row w-full gap-4">
                <button onClick={()=>openModal('add')} className='px-4 py-3 font-bold custom-container-without-border primary-animation bg-c-primary text-c-light'>Añadir Links</button>
                <button onClick={()=>openModal('edit')} className='px-4 py-3 font-bold custom-container-without-border primary-animation bg-c-light text-c-dark'>Editar Perfil</button>
                <button onClick={handleShareLink} className='px-4 py-3 font-bold custom-container-without-border primary-animation bg-c-light text-c-dark flex items-center gap-2 justify-center'>
                    Compartir Perfil
                    <i className='bx bxs-share-alt bx-sm'></i>
                </button>
                <ToastContainer />
            </div>
            </section>
        </>
    )
}


export default CreateLink