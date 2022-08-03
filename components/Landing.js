import Image from 'next/image';
import SocialLinks from '../components/SocialLinks';
export default function Landing() {
  return (
    <>
      <div className="flex sm:flex-row flex-col justify-center items-center  mt-[5rem] space-x-5 whitespace-nowrap">
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
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
}
