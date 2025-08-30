import { Input } from "./Input";
import { Button } from "./Button";

export function InputBase() {
  return (
    <div className="flex flex-col border-1 border-gray-200 rounded-2xl mt-8 ml-36 mr-36 p-8 ">
      <h1 className="font-bold text-2xl">Acesse o Portal</h1>
      <p className="text-gray-500">Entre usando seu e-mail e senha</p>
      <div className="mt-12 mb-8">
        <Input title="E-MAIL" placeholder="exemplo@email.com" />
        <Input title="SENHA" placeholder="senha" />
      </div>
      <Button textButton="Entrar" />
    </div>
  );
}
