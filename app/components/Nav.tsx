'use client'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Nav(){

  const pathname= usePathname()
  console.log(pathname);
  return(
    <nav className='shadow sticky top-0 bg-white z-10 h-10 flex justify-center'>
      <div className='flex flex-row container mx-auto justify-between items-center px-2 py-2'>
        <a href='../'>
          <Image src={'/logo-text.png'} height={10} width={90} alt="logo" className='h-7 md:h-full'/>
        </a>
        <ul className='hidden md:flex md:flex-row md:[&>li]:mx-2'>
          <li><a href="../" className={pathname==='/'? "text-[#a9256b] font-bold":""}>Home</a></li>
          <li><a href="../technologies" className={pathname.startsWith("/technologies")? "text-[#a9256b] font-bold":""}>Technologies</a></li>
          <li><a href="../projects" className={pathname==='/projects'? "text-[#a9256b] font-bold":""}>Projects</a></li>
          <li><a href="../about" className={pathname==='/about'? "text-[#a9256b] font-bold":""}>About</a></li>
          <li><a href="../contact" className={pathname==='/contact'? "text-[#a9256b] font-bold":""}>Contact</a></li>
        </ul>
        <div>
          <button className='px-2 text-xs md:text-md'>Sign In</button>
          <button className='bg-[#ff03a7] text-white text-xs md:text-md rounded-full px-3 py-1'>Sign Up</button>
        </div>
      </div>
    </nav>
  )
}
