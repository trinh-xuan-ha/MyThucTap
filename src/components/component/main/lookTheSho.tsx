import logo1 from '../../../../public/images/img-1-5_580x.webp'
import logo2 from '../../../../public/images/img-1-6_580x.webp'
import Image from 'next/image'
export default function LookShop() {
    return(
        <nav className='mt-16'>
            <div className='text-center my-6'>
                <h2 className='font-bold text-4xl my-3'>Shop The Look</h2>
                <p>Trending Outfits Of Summer</p>
            </div>
            <div className='max-w-7xl gap-x-2 flex justify-center items-center  my-0 mx-auto'>
                <div className='rounded-2xl w-1/2 overflow-hidden'>
                    
                        <Image className='w-full object-cover' src={logo1} alt="logo" width={500} height={190} />
                    
                </div>
                <div className='rounded-2xl w-1/2 overflow-hidden'>
                    <Image
                    className='w-full object-cover'
                    src={logo2} alt='logo' width={500}
                    height={190}/>
                </div>
            </div>
        </nav>
    )
}