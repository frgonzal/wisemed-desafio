interface DetailRowProps {
  title: string;
  content: string;
}

function DetailRow({ title, content }: DetailRowProps) {
  return (
    <div className="flex items-start gap-1 text-sm">
      <div className="text-primary">{title}:</div>
      <div>{content}</div>
    </div>
  );

}

export default DetailRow;