type InputProp = {
  title: string;
  placeholder: string;
};

export function Input({ title, placeholder }: InputProp) {
  return (
    <div className="flex flex-col pt-4">
      <h2>{title}</h2>
      <input
        className="border-b-1 border-gray-200 pl-1"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
