import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Logo() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const logo_src = theme === "dark" ? "/logo.png" : "/logo_light.png";
  return (
    <div className="mr-auto pt-2">
      <Image
        className="!cursor-pointer"
        onClick={() => router.push("/")}
        src={logo_src}
        objectFit="contain"
        width={200}
        height={60}
        alt="google image"
      />
    </div>
  );
}
