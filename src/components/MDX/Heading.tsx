import cn from 'classnames';
import * as React from 'react';
import {forwardRefWithAs} from 'utils/forwardRefWithAs';
export interface HeadingProps {
  className?: string;
  isPageAnchor?: boolean;
  children: React.ReactNode;
  id?: string;
  as?: any;
}

const Heading = forwardRefWithAs<HeadingProps, 'div'>(function Heading(
  {as: Comp = 'div', className, children, id, isPageAnchor = true, ...props},
  ref
) {
  let label = 'Link for this heading';
  if (typeof children === 'string') {
    label = 'Link for ' + children;
  }

  return (
    <Comp id={id} {...props} ref={ref} className={cn('mdx-heading', className)}>
      {children}
      {isPageAnchor && (
        <a
          href={`#${id}`}
          aria-label={label}
          title={label}
          className={cn(
            'mdx-header-anchor',
            Comp === 'h1' ? 'hidden' : 'inline-block'
          )}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.95 4.3L7.14 2.12C7.69 1.57 8.58 1.57 9.12 2.12L9.19 2.19C9.74 2.74 9.74 3.63 9.19 4.17L8.18 5.18C8.32 5.48 8.38 5.8 8.36 6.14L9.76 4.74C10.62 3.88 10.62 2.49 9.77 1.63L9.7 1.56C8.8 0.7 7.44 0.7 6.58 1.56L4.38 3.75C3.53 4.6 3.53 6 4.38 6.86L4.4 6.9C4.63 7.1 4.82 7.24 5.03 7.34L5.65 6.73C5.42 6.66 5.2 6.54 5.02 6.36L4.95 6.29C4.4 5.75 4.4 4.86 4.95 4.31Z"
              fill="black"
            />
            <path
              d="M5.67 4.59C5.9 4.65 6.11 4.77 6.29 4.95L6.36 5C6.9 5.57 6.9 6.45 6.36 7L4.17 9.19C3.63 9.74 2.74 9.74 2.19 9.19L2.12 9.12C1.57 8.57 1.57 7.69 2.12 7.14L3.13 6.13C2.99 5.83 2.93 5.5 2.95 5.18L1.56 6.58C0.7 7.43 0.7 8.83 1.56 9.69L1.63 9.76C2.49 10.62 3.88 10.62 4.74 9.76L6.93 7.56C7.79 6.7 7.79 5.31 6.93 4.45L6.86 4.38C6.69 4.2 6.49 4.07 6.28 3.97L5.67 4.59Z"
              fill="black"
            />
          </svg>
        </a>
      )}
    </Comp>
  );
});

export const H1 = ({className, ...props}: HeadingProps) => (
  <Heading
    as="h1"
    className={cn(className, 'text-5xl font-display font-bold leading-tight')}
    {...props}
  />
);

export const H2 = ({className, ...props}: HeadingProps) => (
  <Heading
    as="h2"
    className={cn(
      'text-3xl font-display leading-10 text-primary dark:text-primary-dark font-bold my-6',
      className
    )}
    {...props}
  />
);

export const H3 = ({className, ...props}: HeadingProps) => (
  <Heading
    as="h3"
    className={cn(
      className,
      'text-2xl font-display leading-9 text-primary dark:text-primary-dark font-bold my-6'
    )}
    {...props}
  />
);

export const H4 = ({className, ...props}: HeadingProps) => (
  <Heading
    as="h4"
    className={cn(className, 'text-xl font-display font-bold leading-9 my-4')}
    {...props}
  />
);
