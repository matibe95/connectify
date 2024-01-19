import { GithubIcon } from "./Icons"

export const NavBar = () => {
  return (
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
  )
}
