type TitleField = {
  title: string;
  description: string;
};

export function TitleField({ title, description }: TitleField) {
  return (
    <div>
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
