import React, { useState } from 'react'

const ProductPage = () => {


    const [images ,setImages] = useState({
        img1: "https://m.media-amazon.com/images/I/71Ffy6My4-L._AC_UX522_.jpg",
        img2: "https://m.media-amazon.com/images/I/71Xa5VB67-L._AC_UX522_.jpg",
        img3: "https://m.media-amazon.com/images/I/61eCSyejCuL._AC_UX522_.jpg",
        img4: "https://m.media-amazon.com/images/I/61uCMkUcWAL._AC_UX522_.jpg",
        img5: "https://m.media-amazon.com/images/I/61s3vlQ44ML._AC_UX522_.jpg"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [incr, setIncr] = useState(1);


    return (
        <div className='flex flex-col justify-between m-10 lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-6 '>
                <img src={activeImg} alt="" className='w-1/2 flex justify-center m-auto items-center h-full mt-20 aspect-square object-cover rounded-xl' />
                <div className='flex flex-row justify-between h-20'>
                    <img src={images.img1} alt="not found" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)} />
                    <img src={images.img2} alt="not found" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)} />
                    <img src={images.img3} alt="not found" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)} />
                    <img src={images.img4} alt="not found" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)} />
                    <img src={images.img5} alt="not found" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img5)} />
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4 mt-20'>
                <div>
                    <span className=' text-blue-600 font-semibold'>Visit the Gildan Store</span>
                    <h1 className='text-2xl font-bold'>Gildan Hammer Adult Crew Sweatshirt</h1>
                </div>
                <p className='text-gray-700'>
                    Say hello to new Gildan Hammer adult fleece. With a soft blend of ring spun cotton and polyester, these, comfortable pieces make a strong statement fit for anyone. Made to last with twin needle stitching, these unique layering pieces feature innovative details, like their half-moon back patch. The cuffs and waistband hold their shape over time, thanks to the stretch and recovery of their ribbed spandex finish.
                </p>
                <h6 className='text-2xl font-semibold'>$ 15.00</h6>
                <div className='flex flex-row justify-center items-center gap-5'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-blue-800   text-3xl' onClick={() => setIncr((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 text-2xl rounded-lg'>{incr}</span>
                        <button className='bg-gray-200 py-2 px-4 rounded-lg text-blue-800  text-3xl' onClick={() => setIncr((prev) => prev + 1)}>+</button>
                    </div>
                    <button className='bg-yellow-600 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage