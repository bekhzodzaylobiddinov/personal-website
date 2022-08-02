import Image from 'next/image';

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
            <h1 className="text-[3rem]">Zokir Rakhimov</h1>
            <p className="">
              SOFTWARE DEVELOPER <span className="text-purple-500">&&</span> YOUTUBER
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10 text-xl">
        <button className="bg-black text-white dark:bg-white rounded py-3 px-5 transition duration-300 dark:text-black">
          Learn More
        </button>
      </div>
    </>
  );
}
