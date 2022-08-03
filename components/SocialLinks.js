import Image from 'next/image';

export default function SocialLinks() {
  return (
    <div className="flex justify-center  tracking-tight flex-wrap items-center mt-3 space-x-2 sm:space-x-3">
      <a
        href="https://www.linkedin.com/in/zokir-rakhimov/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:underline underline-offset-4 decoration-purple-500"
      >
        LinkedIn
      </a>

      <a
        href="https://www.youtube.com/c/ZokirRakhimov"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:underline underline-offset-4 decoration-purple-500"
      >
        YouTube
      </a>
      <a
        href="https://www.github.com/zrakhimov"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:underline underline-offset-4 decoration-purple-500"
      >
        GitHub
      </a>
      <a
        href="https://twitter.com/ZRakhimov/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:underline underline-offset-4 decoration-purple-500"
      >
        Twitter
      </a>
      <a
        href="https://www.instagram.com/zokir__rakhimov/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:underline underline-offset-4 decoration-purple-500"
      >
        Instagram
      </a>
    </div>
  );
}
