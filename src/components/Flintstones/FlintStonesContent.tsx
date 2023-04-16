'use client';

import styles from './Home.module.css';
import Canvas from './Canvas';

export function FlintStonesContent(): JSX.Element {
  return (
    <section className={`flex h-[10rem]`} key="room">
      <Canvas className={`${styles.canvas}`} width={1200} height={720} />
    </section>
  );
}
