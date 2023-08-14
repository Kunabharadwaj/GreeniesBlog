
import React, {useContext} from 'react'
import Link from 'next/link'

const Categories = [
    {
        name: 'react',
        slug: 'react'
    },
    {
        name: 'Web development',
        slug: 'web-dev'
    }
]

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
           <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>
                CMS Blog
            </span>
           </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
            {Categories.map((Category)=>(
                <Link key={Category.slug} href={`/Category/${Category.slug}`}>
                    <span className='md:float-right mt-2 align-middle text-white ml-4 text-white font-semibold cursor-pointer'>
                        {Category.name}
                    </span>
                </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Header
