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
import {CarAnime} from 'components/CarAnime';
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
    <div className="max-w-7xl mx-auto flex flex-col w-full my-4">
      {children}
    </div>
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
              href={'/links/help'}
              type="secondary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              label="Links">
              Links
            </ButtonLink>
          </div>
        </div>

        <Section background="right-card">
          <Center>
            <Header>Hey-Hey-Hey my new site is ready</Header>
            <Para>Thanks React and React team!</Para>
          </Center>
          <FullBleed>
            <iframe
              className="h-[25em] mx-0 lg:mx-7 lg:h-[45em]"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title="YouTube video player"
              src="https://www.youtube.com/embed/nQElpSLJ5mY"
            />
          </FullBleed>
          <Center>
            <ExternalLink
              className="ml-0 sm:ml-1 text-link dark:text-link-dark hover:underline"
              aria-label="Domscript Game"
              href="https://flintstones.netlify.app/">
              Play Game!
            </ExternalLink>
            <Para>
              I have a high level of proficiency in working with the HTML Canvas
              API. However, when incorporating it into React, I've encountered
              significant challenges stemming from persistent bugs related to
              the useRef and useEffect hooks. Despite my ongoing efforts to
              address these issues, it has been a complex problem to solve, and
              even The React team has struggled to find a definitive solution
              for this issue, and it has surprisingly received little attention
              or discussion within the development community.
            </Para>
          </Center>
        </Section>

        <Section background="left-card">
          <Center>
            <Header>SVG Animation!</Header>
          </Center>
          <FullBleed>
            <CarAnime width="max-w-xl" height="max-w-xl" />
          </FullBleed>
          <Center>
            <Para>
              I'm proficient in SVG and SVG animation, as well as well-known
              programs like Figma, Adobe Illustrator, Sketch, and similar tools.
              Moreover, I'm also proficient in SolidWorks, if you know what I
              mean ;)
            </Para>
          </Center>
        </Section>

        <Section background="right-card">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-5">
            <div className="max-w-3xl lg:max-w-7xl gap-5 flex flex-col lg:flex-row lg:px-5">
              <div className="w-full lg:w-6/12 max-w-3xl flex flex-col items-start justify-start lg:pl-5 lg:pr-10">
                <Header>Info</Header>
                <Para></Para>
                <div className="order-last pt-5">
                  <Para>
                    Some of the technologies and more that I work with.
                  </Para>
                  <NextImage
                    className="w-full my-4"
                    width={100}
                    height={100}
                    src="images/home/skills.svg"
                    alt="The technologies I work with."
                  />
                  <div className="hidden lg:flex justify-start w-full">
                    <CTA color="gray" icon="news" href="/blog">
                      Read more Domscript.pro news
                    </CTA>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12">
                <p className="uppercase tracking-wide font-bold text-sm text-tertiary dark:text-tertiary-dark flex flex-row gap-2 items-center mt-5 lg:-mt-2 w-full">
                  <IconChevron />
                  Latest Domscript.pro News
                </p>
                <div className="flex-col sm:flex-row flex-wrap flex gap-5 text-left my-5">
                  <div className="flex-1 min-w-[40%]">
                    <BlogCard {...recentPosts[0]} />
                  </div>
                  {/* <div className="flex-1 min-w-[40%]">
                    <BlogCard {...recentPosts[1]} />
                  </div>
                  <div className="flex-1 min-w-[40%]">
                    <BlogCard {...recentPosts[2]} />
                  </div>
                  <div className="hidden sm:flex-1 sm:inline">
                    <BlogCard {...recentPosts[3]} />
                  </div> */}
                </div>
                <div className="flex lg:hidden justify-start w-full">
                  <CTA color="gray" icon="news" href="/blog">
                    Read more Domscript.pro news
                  </CTA>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section background="left-card">
          <div className="w-full">
            <div className="mx-auto flex flex-col max-w-4xl">
              <Center>
                <Header>
                  Find more about <br className="hidden lg:inline" />
                  of me
                </Header>
              </Center>
            </div>
            {/* <AboutGallery /> */}
          </div>

          <div className="mt-20 px-5 lg:px-0 mb-6 max-w-4xl text-center text-opacity-80">
            <Logo className="text-link dark:text-link-dark w-24 lg:w-28 mb-10 lg:mb-8 mt-12 h-auto mx-auto self-start" />
            <Header>
              Welcome to the <br className="" />
              Domscript about
            </Header>
            <ButtonLink
              href={'/about/team'}
              type="primary"
              size="lg"
              label="Take the Tutorial">
              Get Started
            </ButtonLink>
          </div>
        </Section>
      </div>
    </>
  );
}

function CTA({children, icon, href}) {
  let Tag;
  let extraProps;
  if (href.startsWith('https://')) {
    Tag = ExternalLink;
  } else {
    Tag = NextLink;
    extraProps = {legacyBehavior: false};
  }
  return (
    <Tag
      {...extraProps}
      href={href}
      className="focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 focus-visible:dark:focus:outline-link-dark group cursor-pointer w-auto justify-center inline-flex font-bold items-center mt-10 outline-none hover:bg-gray-40/5 active:bg-gray-40/10 hover:dark:bg-gray-60/5 active:dark:bg-gray-60/10 leading-tight hover:bg-opacity-80 text-lg py-2.5 rounded-full px-4 sm:px-6 ease-in-out shadow-secondary-button-stroke dark:shadow-secondary-button-stroke-dark text-primary dark:text-primary-dark">
      {icon === 'native' && (
        <svg
          className="mr-2.5 text-primary dark:text-primary-dark"
          fill="none"
          width="24"
          height="24"
          viewBox="0 0 72 72"
          aria-hidden="true">
          <g clipPath="url(#clip0_8_10998)">
            <path
              d="M54.0001 15H18.0001C16.3432 15 15.0001 16.3431 15.0001 18V42H33V48H12.9567L9.10021 57L24.0006 57C24.0006 55.3431 25.3437 54 27.0006 54H33V57.473C33 59.3786 33.3699 61.2582 34.0652 63H9.10021C4.79287 63 1.88869 58.596 3.5852 54.6368L9.0001 42V18C9.0001 13.0294 13.0295 9 18.0001 9H54.0001C58.9707 9 63.0001 13.0294 63.0001 18V25.4411C62.0602 25.0753 61.0589 24.8052 60.0021 24.6458C59.0567 24.5032 58.0429 24.3681 57.0001 24.2587V18C57.0001 16.3431 55.6569 15 54.0001 15Z"
              fill="currentColor"
            />
            <path
              d="M48 42C48 40.3431 49.3431 39 51 39H54C55.6569 39 57 40.3431 57 42C57 43.6569 55.6569 45 54 45H51C49.3431 45 48 43.6569 48 42Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M45.8929 30.5787C41.8093 31.1947 39 34.8257 39 38.9556V57.473C39 61.6028 41.8093 65.2339 45.8929 65.8499C48.0416 66.174 50.3981 66.4286 52.5 66.4286C54.6019 66.4286 56.9584 66.174 59.1071 65.8499C63.1907 65.2339 66 61.6028 66 57.473V38.9556C66 34.8258 63.1907 31.1947 59.1071 30.5787C56.9584 30.2545 54.6019 30 52.5 30C50.3981 30 48.0416 30.2545 45.8929 30.5787ZM60 57.473V38.9556C60 37.4615 59.0438 36.637 58.2121 36.5116C56.2014 36.2082 54.1763 36 52.5 36C50.8237 36 48.7986 36.2082 46.7879 36.5116C45.9562 36.637 45 37.4615 45 38.9556V57.473C45 58.9671 45.9562 59.7916 46.7879 59.917C48.7986 60.2203 50.8237 60.4286 52.5 60.4286C54.1763 60.4286 56.2014 60.2203 58.2121 59.917C59.0438 59.7916 60 58.9671 60 57.473Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_10998">
              <rect width="72" height="72" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {icon === 'framework' && (
        <svg
          className="mr-2.5 text-primary dark:text-primary-dark"
          fill="none"
          width="24"
          height="24"
          viewBox="0 0 72 72"
          aria-hidden="true">
          <g clipPath="url(#clip0_10_21081)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M44.9136 29.0343C46.8321 26.9072 48 24.09 48 21C48 14.3726 42.6274 9 36 9C29.3726 9 24 14.3726 24 21C24 24.0904 25.1682 26.9079 27.0871 29.0351L21.0026 39.3787C20.0429 39.1315 19.0368 39 18 39C11.3726 39 6 44.3726 6 51C6 57.6274 11.3726 63 18 63C23.5915 63 28.2898 59.1757 29.6219 54H42.3781C43.7102 59.1757 48.4085 63 54 63C60.6274 63 66 57.6274 66 51C66 44.3726 60.6274 39 54 39C52.9614 39 51.9537 39.1319 50.9926 39.38L44.9136 29.0343ZM42 21C42 24.3137 39.3137 27 36 27C32.6863 27 30 24.3137 30 21C30 17.6863 32.6863 15 36 15C39.3137 15 42 17.6863 42 21ZM39.9033 32.3509C38.6796 32.7716 37.3665 33 36 33C34.6338 33 33.321 32.7717 32.0975 32.3512L26.2523 42.288C27.8635 43.8146 29.0514 45.7834 29.6219 48H42.3781C42.9482 45.785 44.1348 43.8175 45.7441 42.2913L39.9033 32.3509ZM54 57C50.6863 57 48 54.3137 48 51C48 47.6863 50.6863 45 54 45C57.3137 45 60 47.6863 60 51C60 54.3137 57.3137 57 54 57ZM24 51C24 47.6863 21.3137 45 18 45C14.6863 45 12 47.6863 12 51C12 54.3137 14.6863 57 18 57C21.3137 57 24 54.3137 24 51Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_10_21081">
              <rect width="72" height="72" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {icon === 'code' && (
        <svg
          className="mr-2.5 text-primary dark:text-primary-dark"
          fill="none"
          width="24"
          height="24"
          viewBox="0 0 72 72"
          aria-hidden="true">
          <g clipPath="url(#clip0_8_9064)">
            <path
              d="M44.7854 22.1142C45.4008 20.5759 44.6525 18.83 43.1142 18.2146C41.5758 17.5993 39.8299 18.3475 39.2146 19.8859L27.2146 49.8859C26.5992 51.4242 27.3475 53.1702 28.8858 53.7855C30.4242 54.4008 32.1701 53.6526 32.7854 52.1142L44.7854 22.1142Z"
              fill="currentColor"
            />
            <path
              d="M9.87868 38.1214C8.70711 36.9498 8.70711 35.0503 9.87868 33.8787L18.8787 24.8787C20.0503 23.7072 21.9497 23.7072 23.1213 24.8787C24.2929 26.0503 24.2929 27.9498 23.1213 29.1214L16.2426 36.0001L23.1213 42.8787C24.2929 44.0503 24.2929 45.9498 23.1213 47.1214C21.9497 48.293 20.0503 48.293 18.8787 47.1214L9.87868 38.1214Z"
              fill="currentColor"
            />
            <path
              d="M62.1213 33.8787L53.1213 24.8787C51.9497 23.7072 50.0503 23.7072 48.8787 24.8787C47.7071 26.0503 47.7071 27.9498 48.8787 29.1214L55.7574 36.0001L48.8787 42.8787C47.7071 44.0503 47.7071 45.9498 48.8787 47.1214C50.0503 48.293 51.9497 48.293 53.1213 47.1214L62.1213 38.1214C63.2929 36.9498 63.2929 35.0503 62.1213 33.8787Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_9064">
              <rect width="72" height="72" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {icon === 'news' && (
        <svg
          className="mr-2.5 text-primary dark:text-primary-dark"
          fill="none"
          width="24"
          height="24"
          viewBox="0 0 72 72"
          aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7101 56.3758C13.0724 56.7251 13.6324 57 14.3887 57H57.6113C58.3676 57 58.9276 56.7251 59.2899 56.3758C59.6438 56.0346 59.8987 55.5407 59.9086 54.864C59.9354 53.022 59.9591 50.7633 59.9756 48H12.0244C12.0409 50.7633 12.0645 53.022 12.0914 54.864C12.1013 55.5407 12.3562 56.0346 12.7101 56.3758ZM12.0024 42H59.9976C59.9992 41.0437 60 40.0444 60 39C60 29.5762 59.9327 22.5857 59.8589 17.7547C59.8359 16.2516 58.6168 15 56.9938 15L15.0062 15C13.3832 15 12.1641 16.2516 12.1411 17.7547C12.0673 22.5857 12 29.5762 12 39C12 40.0444 12.0008 41.0437 12.0024 42ZM65.8582 17.6631C65.7843 12.8227 61.8348 9 56.9938 9H15.0062C10.1652 9 6.21572 12.8227 6.1418 17.6631C6.06753 22.5266 6 29.5477 6 39C6 46.2639 6.03988 51.3741 6.09205 54.9515C6.15893 59.537 9.80278 63 14.3887 63H57.6113C62.1972 63 65.8411 59.537 65.9079 54.9515C65.9601 51.3741 66 46.2639 66 39C66 29.5477 65.9325 22.5266 65.8582 17.6631ZM39 21C37.3431 21 36 22.3431 36 24C36 25.6569 37.3431 27 39 27H51C52.6569 27 54 25.6569 54 24C54 22.3431 52.6569 21 51 21H39ZM36 33C36 31.3431 37.3431 30 39 30H51C52.6569 30 54 31.3431 54 33C54 34.6569 52.6569 36 51 36H39C37.3431 36 36 34.6569 36 33ZM24 33C27.3137 33 30 30.3137 30 27C30 23.6863 27.3137 21 24 21C20.6863 21 18 23.6863 18 27C18 30.3137 20.6863 33 24 33Z"
            fill="currentColor"
          />
        </svg>
      )}
      {children}
      <svg
        className="text-primary dark:text-primary-dark"
        fill="none"
        width="24"
        height="24"
        viewBox="0 0 72 72"
        aria-hidden="true">
        <path
          className="transition-transform ease-in-out translate-x-[-8px] group-hover:translate-x-[8px]"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40.0001 19.0245C41.0912 17.7776 42.9864 17.6513 44.2334 18.7423L58.9758 33.768C59.6268 34.3377 60.0002 35.1607 60.0002 36.0257C60.0002 36.8908 59.6268 37.7138 58.9758 38.2835L44.2335 53.3078C42.9865 54.3988 41.0913 54.2725 40.0002 53.0256C38.9092 51.7786 39.0355 49.8835 40.2824 48.7924L52.4445 36.0257L40.2823 23.2578C39.0354 22.1667 38.9091 20.2714 40.0001 19.0245Z"
          fill="currentColor"
        />
        <path
          className="opacity-0 ease-in-out transition-opacity group-hover:opacity-100"
          d="M60 36.0273C60 37.6842 58.6569 39.0273 57 39.0273H15C13.3431 39.0273 12 37.6842 12 36.0273C12 34.3704 13.3431 33.0273 15 33.0273H57C58.6569 33.0273 60 34.3704 60 36.0273Z"
          fill="currentColor"
        />
      </svg>
    </Tag>
  );
}
