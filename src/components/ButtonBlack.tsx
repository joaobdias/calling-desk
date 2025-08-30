type ButtonProp = React.ComponentProps<"button"> & {
  textButton: string;
  onClick?: () => void;
};

export function ButtonBlack({ textButton, onClick }: ButtonProp) {
  return (
    <div className="flex mt-4">
      <button
        className="bg-black hover:bg-gray-500 text-white p-2 flex-1 rounded-lg"
        type="button"
        onClick={onClick}
      >
        {textButton}
      </button>
    </div>
  );
}
