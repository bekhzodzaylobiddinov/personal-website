import Image from 'next/image';
import LogoGithub from '../public/social/github.svg';
import LogoLinkedIn from '../public/social/linkedin.svg';
import LogoYoutube from '../public/social/youtube.svg';
import LogoTwitter from '../public/social/twitter.svg';
import LogoInsta from '../public/social/instagram.svg';

export default function SocialLinks() {
  return (
    <div className="flex justify-center flex-wrap items-center mt-4 space-x-5 sm:space-x-10 md:space-x-15">
      <a
        href="https://www.linkedin.com/in/zokir-rakhimov/"
        target="_blank"
        rel="noopener noreferrer"
        className=" cursor-pointer hover:underline underline-offset-4 decoration-purple-500"
      >
        {/*https://github.com/vercel/next.js/discussions/20993*/}
        <LogoLinkedIn
          className="fill-[#0A66C2]"
          src="/social/linkedin.svg"
          width={32}
          height={32}
          alt="linkedin icon"
        />
      </a>

      <a
        href="https://www.github.com/zrakhimov"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:underline underline-offset-4 decoration-purple-500"
      >
        <LogoGithub
          className="fill-[#181717] dark:fill-white"
          src="/social/github.svg"
          width={32}
          height={32}
          alt="github icon"
        />
      </a>
      <a
        href="https://www.instagram.com/zokir__rakhimov/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:underline underline-offset-4 decoration-purple-500"
      >
        <LogoInsta
          className="fill-[#E4405F]"
          src="/social/instagram.svg"
          width={32}
          height={32}
          alt="instagram icon"
        />
      </a>
      <a
        href="https://twitter.com/ZRakhimov/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:underline underline-offset-4 decoration-purple-500"
      >
        <LogoTwitter
          className="fill-[#1DA1F2]"
          src="/social/twitter.svg"
          width={32}
          height={32}
          alt="twitter icon"
        />
      </a>
      <a
        href="https://www.youtube.com/c/ZokirRakhimov"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:underline underline-offset-4 decoration-purple-500"
      >
        <LogoYoutube
          className="fill-[#FF0000]"
          src="/social/youtube.svg"
          width={32}
          height={32}
          alt="youtube icon"
        />
      </a>
    </div>
  );
}
