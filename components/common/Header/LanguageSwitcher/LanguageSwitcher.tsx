"use client"
import Link from "next/link";

const LanguageSwitcher: React.FC = () => {


  return (
    <div>
       <Link href="/uk">Switch to UK</Link>
       <Link href="/ru">Switch to RU</Link>
       <Link href="/en">Switch to EN</Link>
    </div>
  );
};

export default LanguageSwitcher;
