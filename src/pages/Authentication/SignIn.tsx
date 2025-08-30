import image from "../../assets/image.jpg";
import { Logo } from "../../components/Logo";
import { InputBase } from "../../components/InputBase";
import { InputBaseSimple } from "../../components/InputSimple";

export function SignIn() {
  return (
    <div>
      <img
        className="relative w-screen h-screen"
        src={image}
        alt="Imagem de fundo"
      />

      <div className="bg-amber-50 absolute bottom-0 right-0 w-1/2 h-47/48 rounded-tl-4xl">
        <div className="flex justify-center mt-16">
          <Logo />
        </div>
        <InputBase />
        <InputBaseSimple />
      </div>
    </div>
  );
}
