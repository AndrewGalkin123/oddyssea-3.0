import Link from "next/link";

interface HistoryComponentProps {
  href: string;
  src: string;
  title: string;
  info: string;
}

const HistoryComponent: React.FC<HistoryComponentProps> = ({
  href,
  src,
  title,
  info,
}) => {
  return (
    <Link href={href}>
      <img src={src}></img>
      <h2>{title}</h2>
      <p>{info}</p>
    </Link>
  );
};

export { HistoryComponent };
