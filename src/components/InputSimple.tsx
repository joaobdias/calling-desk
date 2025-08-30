import { ButtonGray } from "./ButtonGray";

export function InputBaseSimple() {
  return (
    <div className="flex flex-col border-1 border-gray-200 rounded-2xl mt-8 ml-36 mr-36 p-8 ">
      <h1 className="font-bold text-2xl">Ainda sem conta?</h1>
      <p className="text-gray-500">Crie agora mesmo!</p>
      <ButtonGray textButton="Criar conta" />
    </div>
  );
}
