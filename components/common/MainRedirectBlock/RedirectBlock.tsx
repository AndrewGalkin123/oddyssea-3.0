import "./RedirectBlock.css";

interface RedirectBlockProps {
  href: string;
  src: string;
  title: string;
  onClick?: void
}

const RedirectBlock: React.FC<RedirectBlockProps> = ({
  href,
  src,
  title
}) => {
  return (
    <a className="photo-item" href={href}>
      <img className="picture" src={src} />
      <span className="photo-block-item"></span>
      <span className="photo-item-title">{title}</span>
    </a>
  );
};

export { RedirectBlock };
