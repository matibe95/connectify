import { GithubIcon } from "./Icons"

export const CreateLink = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] p-[2rem]">
        <nav className='w-full custom-container py-4 px-4 mb-6 bg-white'>
        <ul className='flex justify-between items-center'>
          <li>
            <a className='flex items-center gap-2' href="/">
              <h1 className='md:text-3xl font-semibold tracking-tightest'>Connectify</h1>
              <i className='bx bx-link bx-md'></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/matibe95/connectify" target='__blank' className='flex items-center gap-2 font-medium md:text-xl hover:underline underline-offset-4'>
              <GithubIcon/>
              <span className='hidden sm:block'>GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
      <section className='bg-c-yellow relative custom-container py-8 px-4 flex flex-col gap-8 items-center mb-6'>
        <h1 className='font-bold md:text-6xl text-4xl text-center tracking-tightest'>Enlaza Tu <br />Mundo al Instante</h1>
      </section>
    </div>
  )
}

export default CreateLink