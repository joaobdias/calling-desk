import { useNavigate } from "react-router";
import image from "../../assets/image.jpg";
import { ButtonBlack } from "../../components/ButtonBlack";
import { ButtonGray } from "../../components/ButtonGray";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { TitleField } from "../../components/TitleField";
import { Section } from "../../components/Section";

export function SignUp() {
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
            title="Crie sua conta"
            description="Informe seu nome, e-mail e senha"
          />
          <div className="mt-12 mb-8">
            <Input title="NOME" placeholder="Digite o nome completo" />
            <Input title="E-MAIL" placeholder="exemplo@email.com" />
            <Input title="SENHA" placeholder="senha" />
          </div>
          <ButtonBlack textButton="Cadastrar" />
        </Section>

        <Section>
          <TitleField
            title="Já tem uma conta?"
            description="Entre agora mesmo!"
          />
          <ButtonGray textButton="Acessar conta" onClick={() => nav("/")} />
        </Section>
      </div>
    </div>
  );
}
