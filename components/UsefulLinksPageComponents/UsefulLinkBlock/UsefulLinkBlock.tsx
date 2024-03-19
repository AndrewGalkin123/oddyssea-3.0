import "./UsefulLinkBlock.css";

interface UsefulLinkBlockProps {
  title: string;
  paragraph: string;
  href: string;
}

const UsefulLinkBlock: React.FC<UsefulLinkBlockProps> = ({
  title,
  paragraph,
  href
}) => {
  return (
    <a href={href}>
      <div className="usefulLink-block">
        <h3>{title}</h3>
        <br />
        <p>{paragraph}</p>
      </div>
    </a>
  );
};

export default UsefulLinkBlock;
