import Image from "next/image";
import { useRouter } from "next/router";
export default function Logo() {
  const router = useRouter();
  return (
    <div className="mr-auto pt-2">
      <Image
        className="cursor-pointer"
        onClick={() => router.push("/")}
        src={"/logo.png"}
        objectFit="contain"
        width={200}
        height={60}
        alt="google image"
      />
    </div>
  );
}
