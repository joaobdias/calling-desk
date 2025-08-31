type ButtonProp = React.ComponentProps<"button"> & {
  textButton: string;
  onClick?: () => void;
  bgColor: string;
  hoverColor: string;
  textColor: string;
};

export function Button({
  textButton,
  onClick,
  bgColor,
  hoverColor,
  textColor,
}: ButtonProp) {
  return (
    <div className="flex mt-4">
      <button
        className={`${bgColor} hover:${hoverColor} ${textColor} p-2 flex-1 rounded-lg font-[Lato] font-bold `}
        type="button"
        onClick={onClick}
      >
        {textButton}
      </button>
    </div>
  );
}
