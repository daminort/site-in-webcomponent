const colors = {
  // absolute
  gray: '#57717C',
  pureGray: '#B9CBDB',
  lightGray: '#D8DCEA',
  lighterGray: '#F5F8FA',
  lightestGray: '#F5F6FA',
  darkGray: '#27292F',
  darkestGray: '#0C0C0D',
  white: '#FFFFFF',
  transparentWhite: 'rgba(255, 255, 255, 0.8)',
  black: '#000000',
  darkViolet: '#965FEF',
  violet: '#A67CEB',
  lightViolet: '#EFDBFF',
  lightnessViolet: '#D3ADF7',
  paleGray: '#d9d9d9',
  ghostViolet: '#F7F2FF',
  red: '#FC4E77',
  solitude: '#f0f2f5',
  transparentRed: 'rgba(252, 78, 119, 0.3)',
  green: '#8BEA12',
  darkGreen: '#81a16f',
  transparentGreen: 'rgba(139, 234, 18, 0.15)',
  blue: '#9CDAF0',
  darkBlue: '#78A5F3',
  transparentBlue: 'rgba(156, 218, 240, 0.15)',
  yellow: '#FCE04E',
  transparentYellow: 'rgba(252, 224, 78, 0.30)',
  // named
  night: '#41434C',
  dark: '#676A75',
  ghost: '#96A3AA',
  inactive: '#9A9DA9',
  milk: '#FBFCFF',
  disabledBackground: '#F5F5F5',
  cancel: '#96A3AA',
  label: '#9A9DA9',
  antdBlue: '#40a9ff',
  keyword: '#ffc676',
};

const defaults = {
  color: colors.night,
  bgColor: colors.lightestGray,
  borderColor: colors.lightGray,
  borderRadius: '4px',
  fontSize: 'inherit',
  fontFamily: 'inherit', // "IBM Plex Sans", sans-serif
};

export const THEME = {
  colors: {
    ...colors,
  },
  defaults: {
    ...defaults,
  },
  text: {
    ...defaults,
    second: colors.ghost,
    inactive: colors.inactive,
    darkText: colors.dark,
  },
  jsonTree: {
    scheme: 'monokai',
    base00: '#000000',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633',
  },
  button: {
    ...defaults,
    hoverColor: colors.violet,
    hoverBorderColor: colors.violet,
    primaryColor: colors.white,
    primaryBorder: colors.antdBlue,
    secondaryBorder: colors.paleGray,
    primaryBg: colors.antdBlue,
    hoverPrimaryColor: colors.white,
    hoverPrimaryBorder: colors.violet,
    hoverPrimaryBg: colors.violet,
    mainBg: colors.white,
    color: colors.violet,
    disabledBg: colors.lighterGray,
    disabledBorder: colors.lighterGray,
    disabledColor: colors.inactive,
    defaultBorder: colors.antdBlue,
    defaultColor: colors.antdBlue,
  },
  checkbox: {
    bgColor: colors.darkViolet,
    borderColor: colors.darkViolet,
  },
  datepicker: {
    ...defaults,
    inputBorderColor: colors.violet,
    inputBoxShadow: `0 0 5px ${colors.violet}`,
    pickerActiveBarColor: colors.darkViolet,
    pickerCellTodayColor: colors.darkViolet,
    rangeStartEndColor: colors.darkViolet,
    cellInRangeBeforeColor: colors.lightViolet,
    rangeHover: colors.violet,
    rangeHoverFirstChild: colors.violet,
    rangeHoverLastChild: colors.violet,
    rangeStartEndBefore: colors.lightViolet,
    rangeHoverStartEndBefore: colors.lightnessViolet,
    pickerCellInnerAfter: colors.violet,
  },
  switch: {
    activeBg: colors.lighterGray,
    activeColor: colors.ghost,
    activeCircleColor: colors.antdBlue,
    inactiveBg: colors.antdBlue,
    inactiveColor: colors.white,
    inactiveCircleColor: colors.white,
  },
  icon: {
    color: colors.darkViolet,
    borderColor: colors.darkViolet,
  },
  input: {
    borderColor: colors.darkViolet,
    boxShadow: `0 0 5px ${colors.violet}`,
    backgroundColor: colors.ghostViolet,
  },
  menu: {
    color: colors.darkViolet,
    borderColor: colors.darkViolet,
  },
  radioBtn: {
    color: colors.darkViolet,
    bgColor: colors.darkViolet,
    borderColor: colors.darkViolet,
    hoverColor: colors.violet,
    hoverBorderColor: colors.violet,
  },
  section: {
    primaryColor: colors.white,
  },
  select: {
    borderColor: colors.darkViolet,
    boxShadow: `0 0 5px ${colors.violet}`,
  },
  table: {
    iconColor: colors.violet,
  },
  height: {
    header: 64,
    breadcrumbs: 38,
    footer: 32,
  },
  tabs: {
    activeColor: colors.dodgerBlue,
  },
  tab: {
    color: colors.darkViolet,
    borderColor: colors.darkViolet,
    backgroundColor: colors.darkViolet,
  },
  toggle: {
    bgColor: colors.darkViolet,
  },
};
