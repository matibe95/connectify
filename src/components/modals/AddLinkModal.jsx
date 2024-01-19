/* eslint-disable react/prop-types */


import { useNavigate } from "react-router-dom";

export const AddLinkModal = ({setModalIsOpen, values}) => {

    const handleClick = () => {
        setModalIsOpen(false)
    }

    const navigate = useNavigate();

    const handleAddLink = (event) => {
        event.preventDefault();
        const title = event.target.elements.title.value
        const link = event.target.elements.link.value

        values.push({title, link})
        const encodedUrl = btoa(JSON.stringify(values))
        navigate({search: `?links=${encodedUrl}`});

        setModalIsOpen(false)
    }
    return (
        <div className="fixed flex h-[100vh] w-full justify-center items-center bg-black bg-opacity-90">
            <dialog className="custom-modal" open>
                <header className="bg-c-accent border-black border-r-[2px] border-t-[2px] border-l-[2px] px-8 py-2 flex justify-between items-center gap-8">
                    <h3 className="text-xl font-medium">Crea tu link</h3>
                    <button onClick={handleClick} className="flex items-center">
                        <i className='bx bx-x bx-md'></i>
                    </button>
                </header>
                <form onSubmit={handleAddLink} className="border-black border-[2px] py-6 px-4 flex flex-col gap-2">
                    <div className="mb-4 flex flex-col gap-4">
                        <input type="text" name="title" className="w-full sm:w-[350px] focus:outline-none py-2 px-2 custom-container" placeholder="Nombre" />
                        <input type="text" name="link" className="w-full sm:w-[350px] focus:outline-none py-2 px-2 custom-container" placeholder="Link" />
                    </div>
                    <div className="w-full">
                        <button className='px-4 py-3 font-bold custom-container-without-border bg-c-dark hover:bg-c-primary text-c-light w-full'>Añadir</button>
                    </div>
                </form>
            </dialog>
        </div>

    )
}