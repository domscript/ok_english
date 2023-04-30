import {readFileSync, writeFileSync} from 'fs';

const regex = /\[[^)]+\]\([^)]+\)/;
const regexImg = /\!\[.+\]\(.+\)/;
const regexSVG = /(http|https):\/\/(?:www\.)?([^.]+)\./;

const dataMap = new Map();
let [count, totalLinks] = [0, 0];
const imgSizePx = 25;

const data = readFileSync(
  process.cwd() + '/../design-resources-for-developers/readme.md',
  {
    encoding: 'utf-8',
  }
).split('\n');

const svgArray = readFileSync(
  process.cwd() + '/public/images/help/svg/icons.svg',
  {
    encoding: 'utf-8',
  }
)
  .split('\n')
  .filter((el) => el.includes(' id="'))
  .map((el) => el.slice(el.indexOf(' id=') + 5).split('"')[0]);

const fullSize = data.length;

let group = '';
const dataNew = data.map((el, i) => {
  let others = '';
  if (el.startsWith('##'))
    group = el
      .toLowerCase()
      .replaceAll('#', '')
      .replaceAll('&', '')
      .trim()
      .replaceAll(' ', '-');

  if (regexImg.test(el)) return '';

  if (!regex.test(el)) {
    el = el.replaceAll('|', '').replaceAll('&nbsp;', '');

    const newEl = el.replaceAll(' ', '');
    if (
      newEl.toLowerCase().includes('websitedescription') ||
      newEl.toLowerCase().includes('extensiondescription') ||
      !newEl.replaceAll('-', '').trim()
    )
      return '';
    return el;
  }

  el = el
    .replaceAll('|', '')
    .replaceAll("'", '')
    .replaceAll('{', '')
    .replaceAll('}', '');

  const url = el?.match(regex)[0];

  let description = el.replace(url, '').replaceAll('-', '').trim();

  const extraLink = description?.match(regex)?.at(0);

  if (extraLink) {
    ++totalLinks;
    description = description.replace(extraLink, '');
    console.log(i, fullSize, el);
  }

  const temp = url.slice(url.indexOf('](') + 2);

  const newUrl = temp.slice(0, temp.indexOf(')'));
  if (newUrl === './contributing.md') return '';

  dataMap.get(newUrl);
  if (dataMap.get(newUrl)) {
    ++count;
    return '';
  }

  dataMap.set(newUrl, newUrl);

  const match = newUrl.match(regexSVG);

  if (match) {
    ++totalLinks;
    if (svgArray.includes(match[1])) {
      others = match[1];
    } else if (svgArray.includes(match[2])) {
      others = match[2];
    } else {
      others = group;
    }
  } else if (newUrl.startsWith('#')) {
    if (svgArray.includes(newUrl.slice(1))) {
      others = newUrl.slice(1);
    } else if (svgArray.includes(newUrl.slice(1).split('-')[0])) {
      others = newUrl.slice(1).split('-')[0];
    } else {
      console.error(el);
    }
  }

  return `\n<LogoLink src='help/svg/icons.svg#${others}' width={${imgSizePx}} height={${imgSizePx}} dark={false} description='${description}' >\n${url}\n</LogoLink>\n ${
    extraLink ? extraLink : ''
  }`;
});

const header = `---
title: "Design resources for developers"
---\n\n
<Intro>
Copy of original Brad Traversy [design-resources-for-developers](https://github.com/bradtraversy/design-resources-for-developers). If you want contribute - do it to original [repo](https://github.com/bradtraversy/design-resources-for-developers) this page updates automatically.\n
</Intro>
Found ${totalLinks - count} unique links and ${count} duplicates\n
---\n
`;

writeFileSync(
  'src/content/links/help/index.md',
  [header, ...dataNew].join('\n'),
  {
    encoding: 'utf-8',
  }
);
