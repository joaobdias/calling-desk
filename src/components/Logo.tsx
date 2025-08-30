import logoImg from "../assets/Logo_IconDark.svg";

export function Logo() {
  return (
    <div className="flex">
      <img src={logoImg} alt="Logo" />
      <h1 className="m-2 text-2xl text-blue-900">HelpDesk</h1>
    </div>
  );
}
