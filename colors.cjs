const pallete = {
  white: '#FFFFFF',
  // Gray
  'gray-95': '#1e1d29',
  'gray-90': '#292835',
  'gray-80': '#34333e',
  'gray-70': '#3f3e4a',
  'gray-60': '#4E5769',
  'gray-50': '#5E687E', // unused
  'gray-40': '#78839B',
  'gray-30': '#99A1B3',
  'gray-20': '#BCC1CD',
  'gray-10': '#EBECF0',
  'gray-5': '#F6F7F9',

  // Blue
  'blue-60': '#045974',
  'blue-50': '#087EA3',
  'blue-40': '#149EC9', // Brand Blue
  'blue-30': '#58C4DB', // unused
  'blue-20': '#ABE2EE',
  'blue-10': '#E6F7FD', // todo: doesn't match illustrations
  'blue-5': '#E6F6FB',

  // Yellow
  'yellow-60': '#A8390f',
  'yellow-50': '#b45309',
  'yellow-40': '#d97706', // unused
  'yellow-30': '#fbbf24', // unused
  'yellow-20': '#fde68a', // unused
  'yellow-10': '#FDE7C5',
  'yellow-5': '#fffbea',

  // Purple
  'purple-70': '#59188D', // unused
  'purple-70': '#AB61E5', // unused
  'purple-60': '#2B3491', // unused
  'purple-50': '#575FB7',
  'purple-40': '#6B75DB',
  'purple-30': '#8891EC',
  'purple-20': '#C3C8F5', // unused
  'purple-10': '#E7E9FB',
  'purple-5': '#F3F4FD',

  // Green
  'green-60': '#0f766e',
  'green-50': '#0d9488',
  'green-40': '#14b8a6',
  'green-30': '#5eead4',
  'green-20': '#99f6e4',
  'green-10': '#ccfbf1',
  'green-5': '#f0fdfa',

  // RED
  'red-60': '#712C2f',
  'red-50': '#A64240', // unused
  'red-40': '#C1574F',
  'red-30': '#D07D78',
  'red-20': '#E5B7B4', // unused
  'red-10': '#F2DBDA', // unused
  'red-5': '#FAF1F1',
};

module.exports = {
  // Text colors
  primary: pallete['gray-90'],
  'primary-dark': pallete['gray-5'],
  secondary: pallete['gray-70'],
  'secondary-dark': pallete['gray-10'],
  tertiary: pallete['gray-50'],
  'tertiary-dark': pallete['gray-30'],
  link: pallete['purple-70'],
  'link-dark': pallete['purple-65'],
  syntax: pallete['gray-10'],
  wash: pallete['white'],
  'wash-dark': pallete['gray-90'],
  card: pallete['gray-5'],
  'card-dark': pallete['gray-80'],
  highlight: pallete['blue-10'],
  'highlight-dark': '#58AFDF1A',
  border: pallete['gray-10'],
  'border-dark': pallete['gray-80'],
  'secondary-button': pallete['gray-10'],
  'secondary-button-dark': pallete['gray-70'],

  'gray-95': pallete['gray-95'],
  'gray-90': pallete['gray-90'],
  'gray-80': pallete['gray-80'],
  'gray-70': pallete['gray-70'],
  'gray-60': pallete['gray-60'],
  'gray-50': pallete['gray-50'], // unused
  'gray-40': pallete['gray-40'],
  'gray-30': pallete['gray-30'],
  'gray-20': pallete['gray-20'],
  'gray-10': pallete['gray-10'],
  'gray-5': pallete['gray-5'],

  'blue-60': pallete['blue-60'],
  'blue-50': pallete['blue-50'],
  'blue-40': pallete['blue-40'], // Brand Blue
  'blue-30': pallete['blue-30'], // unused
  'blue-20': pallete['blue-20'],
  'blue-10': pallete['blue-10'], // todo: doesn't match illustrations
  'blue-5': pallete['blue-5'],

  'yellow-60': pallete['yellow-60'],
  'yellow-50': pallete['yellow-50'],
  'yellow-40': pallete['yellow-40'], // unused
  'yellow-30': pallete['yellow-30'], // unused
  'yellow-20': pallete['yellow-20'], // unused
  'yellow-10': pallete['yellow-10'],
  'yellow-5': pallete['yellow-5'],

  'purple-60': pallete['purple-60'], // unused
  'purple-50': pallete['purple-50'],
  'purple-40': pallete['purple-40'],
  'purple-30': pallete['purple-30'],
  'purple-20': pallete['purple-20'], // unused
  'purple-10': pallete['purple-10'],
  'purple-5': pallete['purple-5'],

  'green-60': pallete['green-60'],
  'green-50': pallete['green-50'],
  'green-40': pallete['green-40'],
  'green-30': pallete['green-30'],
  'green-20': pallete['green-20'],
  'green-10': pallete['green-10'],
  'green-5': pallete['green-5'],

  'red-60': pallete['red-60'],
  'red-50': pallete['red-50'], // unused
  'red-40': pallete['red-40'],
  'red-30': pallete['red-30'],
  'red-20': pallete['red-20'], // unused
  'red-10': pallete['red-10'], // unused
  'red-5': pallete['red-5'],

  // MISC
  'code-block': '#99a1b30f', // gray-30 @ 6%
  'gradient-blue': pallete['blue-30'], // Only used for the landing gradient for now.
  github: {
    highlight: '#fffbdd',
  },
};
