import React,{useState} from 'react'
import { BsChevronCompactRight, BsChevronCompactLeft, BsFillPlayFill } from 'react-icons/bs'

export default function Carousel() {

    const slides = [
        {
            url: 'https://free4kwallpapers.com/uploads/originals/2019/11/20/bladerunner--movie-scene-wallpaper.jpg',
        },
        {
            url: 'https://www.pixel4k.com/wp-content/uploads/2018/12/mortal-engines-movie-4k_1544286382.jpg',
        },
        {
            url: 'https://wallpapercave.com/wp/wp5003206.jpg',
        },

        {
            url: 'https://images.hdqwalls.com/wallpapers/it-2017-movie-4k-34.jpg',
        },
        {
            url: 'https://wallpapershome.com/images/pages/pic_h/24449.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(2);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

  return (
    <div className='w-[1200px] m-auto'>
        <div
    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    className='w-full h-full rounded-2xl p-16 bg-center bg-cover duration-200 flex justify-end  place-items-center'
>
    <div className='w-[500px] h-[300px]'>
        <h1 className='text-5xl text-white font-abc ' >Blade Runner</h1> <br />
        <p className='text-white text-justify hidden sm:block'>Blade Runner is a 1982 science fiction film directed by Ridley Scott, and written by Hampton Fancher and David Peoples. Starring Harrison Ford, Rutger Hauer, Sean Young, and Edward James Olmos, it is an adaptation of Philip K. Dick's 1968 novel Do Androids Dream of Electric Sheep?</p>
        <button className='bg-green-300 hover:bg-green-800 duration-200 rounded-2xl px-8 py-2 my-3 text-white'><BsFillPlayFill size={20} /></button>
    </div>

</div>

<div className='hidden group-hover:block absolute top-[260px] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactLeft onClick={prevSlide} size={30} />
</div>

<div className='hidden group-hover:block absolute top-[260px] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactRight onClick={nextSlide} size={30} />
</div>
</div>
  )
}
