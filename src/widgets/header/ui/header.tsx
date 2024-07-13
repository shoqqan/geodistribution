import React from 'react';
import Link from 'next/link';
import { Logo } from '@/shared/ui/logo';

export function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <Link className="link" href="#what-is">
          Что это?
        </Link>
        <Link className="link" href="#advantages">
          Преимущества
        </Link>
        <Link className="link" href="#how-it-work">
          Как это работает
        </Link>
        <Link className="link" href="#news">
          Новости
        </Link>
        <Link className="link" href="#faq">
          FAQ
        </Link>
        <button type="button" className="lang">
          EN
        </button>

        <Link href="/catalog.html">
          Каталог
        </Link>
      </nav>
    </header>
  );
}
