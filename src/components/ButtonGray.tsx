type ButtonProp = {
  textButton: string;
};

export function ButtonGray({ textButton }: ButtonProp) {
  return (
    <div className="flex mt-4">
      <button
        className="bg-gray-200 hover:bg-gray-500 text-black p-2 flex-1 rounded-lg"
        type="button"
      >
        {textButton}
      </button>
    </div>
  );
}
