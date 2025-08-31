type InputProp = {
  title: string;
  placeholder: string;
};

export function Input({ title, placeholder }: InputProp) {
  return (
    <div className="flex flex-col pt-4">
      <h3 className="font-[Lato] font-bold text-gray-300">{title}</h3>
      <input
        className="border-b-1 border-gray-500 pl-1 font-[Lato]"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
