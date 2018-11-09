import { getNeutralVariant, getSoftVariant, getStrongVariant } from '@uifabric/variants';
import { IHorizontalStackComponent } from '@uifabric/experiments/lib/Stack';

import { createTheme, IPalette, ITheme, getTheme } from 'office-ui-fabric-react/lib/Styling';

export const regionStyles: IHorizontalStackComponent['styles'] = props => ({
  root: {
    backgroundColor: props.theme.semanticColors.bodyBackground,
    color: props.theme.semanticColors.bodyText
  }
});

// TODO: what is our story with ThemeGeneratorPage? right now it creates palettes, but we don't want to support
//        theming through different palette sets. ThemeGeneratorPage should probably be redone to create schemes
//        that fill semantic slots.

// TODO: consider how Philip's variants package will play into schemes and default theme.
//        * what are the default, fixed variants? neutral, soft, strong
//        * do we populate and pregenerate these variants by default? do we take on variants package as a dependency in OUFR?
//        * variants assume that palette will also be in scheme.
//        * what do we want to limit scheme to?
//        * what is the shape of ITheme vs. IScheme?

const invertedPrimaryPalette: IPalette = {
  themePrimary: '#ffffff',
  themeLighterAlt: '#767676',
  themeLighter: '#a6a6a6',
  themeLight: '#c8c8c8',
  themeTertiary: '#d0d0d0',
  themeSecondary: '#dadada',
  themeDarkAlt: '#eaeaea',
  themeDark: '#f4f4f4',
  themeDarker: '#f8f8f8',
  neutralLighterAlt: '#097dd6',
  neutralLighter: '#1282d7',
  neutralLight: '#2089da',
  neutralQuaternaryAlt: '#288edc',
  neutralQuaternary: '#3092dd',
  neutralTertiaryAlt: '#4fa3e3',
  neutralTertiary: '#c8c8c8',
  neutralSecondary: '#d0d0d0',
  neutralPrimaryAlt: '#dadada',
  neutralPrimary: '#ffffff',
  neutralDark: '#f4f4f4',
  black: '#f8f8f8',
  white: '#0078d4',

  // TODO: not generated by ThemeGeneratorPage:
  blackTranslucent40: 'rgba(0,0,0,.4)',
  neutralSecondaryAlt: '#767676',
  accent: '#0078d4',
  whiteTranslucent40: 'rgba(255,255,255,.4)',
  yellow: '#ffb900',
  yellowLight: '#fff100',
  orange: '#d83b01',
  orangeLight: '#ea4300',
  orangeLighter: '#ff8c00',
  redDark: '#a80000',
  red: '#e81123',
  magentaDark: '#5c005c',
  magenta: '#b4009e',
  magentaLight: '#e3008c',
  purpleDark: '#32145a',
  purple: '#5c2d91',
  purpleLight: '#b4a0ff',
  blueDark: '#002050',
  blueMid: '#00188f',
  blue: '#0078d4',
  blueLight: '#00bcf2',
  tealDark: '#004b50',
  teal: '#008272',
  tealLight: '#00b294',
  greenDark: '#004b1c',
  green: '#107c10',
  greenLight: '#bad80a'
};

const invertedDefaultPalette: IPalette = {
  themePrimary: '#ffffff',
  themeLighterAlt: '#767676',
  themeLighter: '#a6a6a6',
  themeLight: '#c8c8c8',
  themeTertiary: '#d0d0d0',
  themeSecondary: '#dadada',
  themeDarkAlt: '#eaeaea',
  themeDark: '#f4f4f4',
  themeDarker: '#f8f8f8',
  neutralLighterAlt: '#0b0b0b',
  neutralLighter: '#151515',
  neutralLight: '#252525',
  neutralQuaternaryAlt: '#2f2f2f',
  neutralQuaternary: '#373737',
  neutralTertiaryAlt: '#595959',
  neutralTertiary: '#c8c8c8',
  neutralSecondary: '#d0d0d0',
  neutralPrimaryAlt: '#dadada',
  neutralPrimary: '#ffffff',
  neutralDark: '#f4f4f4',
  black: '#f8f8f8',
  white: '#000000',
  blackTranslucent40: 'rgba(0,0,0,.4)',
  neutralSecondaryAlt: '#767676',
  accent: '#0078d4',
  whiteTranslucent40: 'rgba(255,255,255,.4)',
  yellow: '#ffb900',
  yellowLight: '#fff100',
  orange: '#d83b01',
  orangeLight: '#ea4300',
  orangeLighter: '#ff8c00',
  redDark: '#a80000',
  red: '#e81123',
  magentaDark: '#5c005c',
  magenta: '#b4009e',
  magentaLight: '#e3008c',
  purpleDark: '#32145a',
  purple: '#5c2d91',
  purpleLight: '#b4a0ff',
  blueDark: '#002050',
  blueMid: '#00188f',
  blue: '#0078d4',
  blueLight: '#00bcf2',
  tealDark: '#004b50',
  teal: '#008272',
  tealLight: '#00b294',
  greenDark: '#004b1c',
  green: '#107c10',
  greenLight: '#bad80a'
};

export const defaultTheme: ITheme = getTheme(true);

export const neutralTheme = getNeutralVariant(defaultTheme);
export const softTheme = getSoftVariant(defaultTheme);
export const strongTheme = getStrongVariant(defaultTheme);

export const invertedDefaultTheme: ITheme = createTheme({
  palette: invertedDefaultPalette,
  semanticColors: {
    bodyText: defaultTheme.palette.white,
    bodyBackground: defaultTheme.palette.neutralPrimary
  }
});

export const invertedPrimaryTheme: ITheme = createTheme({
  palette: invertedPrimaryPalette,
  semanticColors: {
    bodyText: defaultTheme.palette.white,
    bodyBackground: defaultTheme.palette.themePrimary
  }
});

export const schemeThemeVariants: ITheme = {
  ...defaultTheme,
  schemes: {
    default: defaultTheme,
    neutral: neutralTheme,
    soft: softTheme,
    strong: strongTheme
  }
};

export const schemeThemeCustom: ITheme = {
  ...defaultTheme,
  schemes: {
    default: defaultTheme,
    neutral: defaultTheme,
    soft: invertedPrimaryTheme,
    strong: invertedDefaultTheme
  }
};
