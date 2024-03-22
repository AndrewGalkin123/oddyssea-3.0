import Link from 'next/link';
import React from 'react';


const LanguageSwitcher: React.FC = () => {

  return (
    <div className='translator-buttons'>
      <Link className='language-switcher' href="/ru">RU</Link>
      <Link className='language-switcher' href="/ua">UA</Link>
      <Link className='language-switcher' href="/en">EN</Link>
    </div>
  );
};

export default LanguageSwitcher;




