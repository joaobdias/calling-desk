import image from "../../assets/image.jpg";
import { Logo } from "../../components/Logo";
import { TitleField } from "../../components/TitleField";
import { Input } from "../../components/Input";
import { ButtonBlack } from "../../components/ButtonBlack";
import { ButtonGray } from "../../components/ButtonGray";
import { useNavigate } from "react-router";
import { Section } from "../../components/Section";

export function SignIn() {
  const nav = useNavigate();

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
        <Section>
          <TitleField
            title="Acesse o Portal"
            description="Entre usando seu e-mail e senha"
          />
          <div className="mt-12 mb-8">
            <Input title="E-MAIL" placeholder="exemplo@email.com" />
            <Input title="SENHA" placeholder="senha" />
          </div>
          <ButtonBlack textButton="Entrar" />
        </Section>
        <Section>
          <TitleField
            title="Ainda sem conta?"
            description="Crie agora mesmo!"
          />
          <ButtonGray
            textButton="Criar conta"
            onClick={() => nav("/criar-conta")}
          />
        </Section>
      </div>
    </div>
  );
}
