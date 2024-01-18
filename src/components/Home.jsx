import { GithubIcon } from '../components/Icons'
import './Home.css'

export const Home = () => {
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
        <div className='text-center flex flex-col text-sm sm:text-base'>
          <p className='text-center text-balance'>Eleva tu perfil personal o empresarial en cuestión de segundos. Simplifica, conecta y cautiva con Connectify.</p>
          <p className='text-pretty sm:text-balance'><span className='font-semibold'>Sin cuentas, solo enlaces.</span> Instantáneo. Fácil. Tuyo.</p>
        </div>
        <div className='flex gap-4 main-buttons-container text-center'>
          <a href="/" className='px-4 py-3 font-bold custom-container-without-border primary-animation bg-c-primary text-c-light'>Comenzar</a>
          <a href="/" className='px-4 py-3 font-bold custom-container-without-border primary-animation animation text-c-dark bg-c-light'>Documentación</a>
        </div>
        <svg className='main-icon fill-c-red hover:scale-105 hover:rotate-6 transition-all' width="120" height="120" viewBox="0 0 197 195" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M115.721 47.179L147.77 22.3581L138.505 61.8215L137.715 65.1863L141.158 64.8833L181.538 61.3294L152.409 89.5194L149.926 91.9229L152.986 93.5294L188.877 112.371L149.131 120.337L145.743 121.017L147.448 124.022L167.456 159.277L129.712 144.491L126.494 143.23L126.304 146.681L124.075 187.156L100.318 154.311L98.2921 151.511L96.2665 154.311L72.5089 187.156L70.28 146.681L70.0899 143.23L66.8718 144.491L29.1286 159.277L49.1359 124.022L50.8417 121.017L47.4529 120.337L7.70716 112.371L43.5985 93.5294L46.6587 91.9229L44.1751 89.5194L15.0458 61.3294L55.426 64.8833L58.8689 65.1863L58.079 61.8215L48.8146 22.3581L80.8632 47.179L83.5957 49.2953L84.7503 46.0377L98.2921 7.83023L111.834 46.0377L112.989 49.2953L115.721 47.179Z" stroke="black" strokeWidth="5"/>
        </svg>
        <svg className='absolute main-icon-triangle fill-c-blue hover:scale-105 hover:rotate-6 transition-all' width="189" height="180" viewBox="0 0 189 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M94.2921 8.43685L114.141 69.5265L114.703 71.254H116.519H180.753L128.786 109.009L127.317 110.077L127.878 111.805L147.728 172.894L95.7616 135.139L94.2921 134.071L92.8227 135.139L40.8567 172.894L60.7059 111.805L61.2672 110.077L59.7977 109.009L7.83173 71.254H72.0652H73.8816L74.4429 69.5265L94.2921 8.43685Z" stroke="black" strokeWidth="5"/>
        </svg>
      </section>
      <section className='custom-container py-8 px-4 bg-c-purple mb-6'>
        <h1 className='font-bold md:text-4xl text-2xl tracking-tightest'>Ejemplos:</h1>
      </section>
      <footer className='custom-container py-8 px-4 bg-[#222] text-c-light '>
        <section className='flex flex-col gap-4 text-xs'>
          <p className='tracking-tightest'>Hecho con ❤ y mucha 🎵 por <a href='https://www.instagram.com/__matibe/' target='__blank' className='underline underline-offset-4'>Matias Bellini</a>.</p>
        </section>
      </footer>
    </div>
  )
}
