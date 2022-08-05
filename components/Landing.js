import Image from 'next/image';
import SocialLinks from '../components/SocialLinks';
export default function Landing() {
  return (
    <div className="px-10 sm:px-12 md:px-16 lg:px-[150px] xl:px-[256px] 2xl:px-[400px]">
      {/* <div className="relative group"> */}
      {/* <div className="animate-tilt absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 blur-xl rounded-lg opacity-50 group-hover:opacity-100 transition group-hover:duration-300 duration-1000"></div> */}
      <div>
        <div className="z-30 mx-auto py-20 flex sm:flex-row flex-col justify-center items-center  mt-[5rem] space-x-5 whitespace-nowrap bg-slate-100/30 backdrop-blur-md rounded-lg border border-gray-200 shadow-md dark:bg-zinc-600/30 dark:border-zinc-700">
          <div className="">
            <Image
              className="object-cover rounded-full "
              src={'/portrait.png'}
              width={150}
              height={150}
              alt={'portrait of Zokir'}
            />
          </div>
          <div>
            <div className="flex flex-col justify-center items-center rounded dark:text-white transition duration-300">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Zokir Rakhimov
              </h1>
              <p className="text-base text-gray-500 sm:mx-auto sm:max-w-xl sm:text-lg md:text-xl lg:mx-0">
                Software Developer <span className="text-purple-500">&&</span> Youtuber
              </p>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
