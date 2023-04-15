import {
  createContext,
  memo,
  useState,
  useContext,
  useId,
  Suspense,
  useEffect,
  useRef,
  useTransition,
  useReducer,
} from 'react';
import cn from 'classnames';
import NextLink from 'next/link';
import NextImage from 'next/image';

import ButtonLink from '../ButtonLink';
import {IconRestart} from '../Icon/IconRestart';
import BlogCard from 'components/MDX/BlogCard';
import {IconChevron} from 'components/Icon/IconChevron';
import {IconSearch} from 'components/Icon/IconSearch';
import {Logo} from 'components/Logo';
import Link from 'components/MDX/Link';
import CodeBlock from 'components/MDX/CodeBlock';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {IconNavArrow} from 'components/Icon/IconNavArrow';
import {ExternalLink} from 'components/ExternalLink';
import sidebarBlog from '../../sidebarBlog.json';

function Section({children, background = null}) {
  return (
    <div
      className={cn(
        'mx-auto flex flex-col w-full',
        background === null && 'max-w-7xl',
        background === 'left-card' &&
          'bg-gradient-left dark:bg-gradient-left-dark border-t border-primary/10 dark:border-primary-dark/10 ',
        background === 'right-card' &&
          'bg-gradient-right dark:bg-gradient-right-dark border-t border-primary/5 dark:border-primary-dark/5'
      )}
      style={{
        contain: 'content',
      }}>
      <div className="flex-col gap-2 flex grow w-full my-20 lg:my-32 mx-auto items-center">
        {children}
      </div>
    </div>
  );
}

function Header({children}) {
  return (
    <h2 className="leading-xl font-display text-primary dark:text-primary-dark font-semibold text-5xl lg:text-6xl -mt-4 mb-7 w-full max-w-3xl lg:max-w-xl">
      {children}
    </h2>
  );
}

function Para({children}) {
  return (
    <p className="max-w-3xl mx-auto text-lg lg:text-xl text-secondary dark:text-secondary-dark leading-normal">
      {children}
    </p>
  );
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Left({children}) {
  return (
    <div className="px-5 lg:px-0 max-w-4xl lg:text-left text-white text-opacity-80">
      {children}
    </div>
  );
}

function Center({children}) {
  return (
    <div className="px-5 lg:px-0 max-w-4xl lg:text-center text-white text-opacity-80 flex flex-col items-center justify-center">
      {children}
    </div>
  );
}

function FullBleed({children}) {
  return (
    <div className="max-w-7xl mx-auto flex flex-col w-full">{children}</div>
  );
}

function CurrentTime() {
  const msPerMinute = 60 * 1000;
  const date = new Date();
  let nextMinute = Math.floor(+date / msPerMinute + 1) * msPerMinute;

  const currentTime = date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: 'numeric',
  });
  let [, forceUpdate] = useReducer((n) => n + 1, 0);
  useEffect(() => {
    const timeout = setTimeout(forceUpdate, nextMinute - Date.now());
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);
  return <span suppressHydrationWarning>{currentTime}</span>;
}

const blogSidebar = sidebarBlog.routes[1];
if (blogSidebar.path !== '/blog') {
  throw Error('Could not find the blog route in sidebarBlog.json');
}
const recentPosts = blogSidebar.routes.slice(0, 4).map((entry) => ({
  title: entry.titleForHomepage,
  icon: entry.icon,
  date: entry.date,
  url: entry.path,
}));

export function HomeContent() {
  return (
    <>
      <div className="pl-0">
        <div className="mx-5 mt-12 lg:mt-24 mb-20 lg:mb-32 flex flex-col justify-center">
          <Logo
            className={cn(
              'mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm mr-0 flex origin-center transition-all ease-in-out'
            )}
          />
          <h1 className="text-5xl font-display lg:text-6xl self-center flex font-semibold leading-snug text-primary dark:text-primary-dark">
            Domscript.pro
          </h1>
          <p className="text-4xl font-display max-w-lg md:max-w-full py-1 text-center text-secondary dark:text-primary-dark leading-snug self-center">
            My main site
          </p>
          <div className="mt-5 self-center flex gap-2 w-full sm:w-auto flex-col sm:flex-row">
            <ButtonLink
              href={'/learn'}
              type="primary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              label="Learn">
              Learn
            </ButtonLink>
            <ButtonLink
              href={'/links/react'}
              type="secondary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              label="Links">
              Links
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}
