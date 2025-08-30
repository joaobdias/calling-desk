type ButtonProp = {
  textButton: string;
};

export function Button({ textButton }: ButtonProp) {
  return (
    <div className="flex mt-4">
      <button
        className="bg-black hover:bg-gray-500 text-white p-2 flex-1 rounded-lg"
        type="button"
      >
        {textButton}
      </button>
    </div>
  );
}
