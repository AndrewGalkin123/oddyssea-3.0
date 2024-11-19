"use client";
import { MouseEventHandler } from "react";
import "./RedirectBlock.css";

interface RedirectBlockProps {
  href: string;
  src: string;
  title: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const RedirectBlock: React.FC<RedirectBlockProps> = ({
  href,
  src,
  title,
  onClick,
}) => {
  return (
    <a onClick={onClick} className="photo-item" href={href}>
      <img className="picture" src={src} />
      <span className="photo-block-item"></span>
      <span className="photo-item-title">{title}</span>
    </a>
  );
};

export { RedirectBlock };
