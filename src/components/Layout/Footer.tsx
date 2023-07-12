import * as React from 'react';
import NextLink from 'next/link';
import cn from 'classnames';
import {ExternalLink} from 'components/ExternalLink';

import {IconYoutube} from 'components/Icon/IconYoutube';

function LogoText(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="-10.5 -10.5 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <ellipse
        rx="2"
        ry="3.8"
        transform="translate(0,-0.3)"
        fill="currentColor"
      />
      <ellipse rx="2.8" ry="2" fill="currentColor" />
      <circle cx="0" cy="0" r="1" transform="translate(0,-2)" fill="#CFD4D9" />
      <path
        d="M1 0L1.86603 1.5H0.133975L1 0Z"
        fill="currentColor"
        transform="translate(0.2,2.4)"
      />
      <path
        d="M1 0L1.86603 1.5H0.133975L1 0Z"
        fill="currentColor"
        transform="translate(-2.2,2.4)"
      />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5" transform="rotate(90)" />
        <ellipse rx="10" ry="4.5" transform="rotate(0)" />
        <ellipse rx="10" ry="4.5" transform="rotate(135)" />
      </g>
    </svg>
  );
}

export function Footer() {
  const socialLinkClasses = 'hover:text-primary dark:text-primary-dark';
  return (
    <footer className={cn('text-secondary dark:text-secondary-dark')}>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-8 max-w-7xl mx-auto">
        <div className="col-span-2 md:col-span-1 justify-items-start mt-3.5 text-left">
          <FooterLink href="/" aria-label="Home">
            <div className="flex flex-nowrap items-center">
              <LogoText
                width="30"
                height="21"
                fill="none"
                className="text-link"
              />
              OK ENGLISH
            </div>
          </FooterLink>
          <p className="text-xs text-left mt-0.5 pr-0.5">
            &copy;{new Date().getFullYear()}
          </p>
        </div>
        <div className="md:col-start-2 xl:col-start-4 flex flex-col">
          <FooterLink href="/about" isHeader={true}>
            About
          </FooterLink>
        </div>
        <div className="flex flex-col">
          <FooterLink isHeader={true}>More</FooterLink>
          <div className="flex flex-row mt-2 gap-x-2">
            {/* <ExternalLink
              aria-label="Domscript on LinkedIn"
              href="https://www.linkedin.com/in/domscript"
              className={socialLinkClasses}>
              <IconFacebookCircle />
            </ExternalLink>
            <ExternalLink
              aria-label="Domscript on Twitter"
              href="https://twitter.com/domscript"
              className={socialLinkClasses}>
              <IconTwitter />
            </ExternalLink> */}
            <ExternalLink
              aria-label="Ok English on Youtube"
              href="https://www.youtube.com/@OkEnglish-888"
              className={socialLinkClasses}>
              <IconYoutube />
            </ExternalLink>
            {/* <ExternalLink
              aria-label="Domscript on Github"
              href="https://github.com/domscript"
              className={socialLinkClasses}>
              <IconGitHub />
            </ExternalLink> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  isHeader = false,
}: {
  href?: string;
  children: React.ReactNode;
  isHeader?: boolean;
}) {
  const classes = cn('border-b inline-block border-transparent', {
    'text-sm text-primary dark:text-primary-dark': !isHeader,
    'text-md text-secondary dark:text-secondary-dark my-2 font-bold': isHeader,
    'hover:border-gray-10': href,
  });

  if (!href) {
    return <div className={classes}>{children}</div>;
  }

  if (href.startsWith('https://')) {
    return (
      <div>
        <ExternalLink href={href} className={classes}>
          {children}
        </ExternalLink>
      </div>
    );
  }

  return (
    <div>
      <NextLink href={href} className={classes}>
        {children}
      </NextLink>
    </div>
  );
}
