import "./Culture.css";

interface CultureComponentProps {
  href: string;
  src: string;
  title: string;
}

const CultureComponent: React.FC<CultureComponentProps> = ({
  href,
  src,
  title,
}) => {
  return (
    <a className="photo-item" href={href}>
      <img className="picture" src={src} />
      <span className="photo-block-item"></span>
      <span className="photo-item-title">{title}</span>
    </a>
  );
};

export { CultureComponent };
