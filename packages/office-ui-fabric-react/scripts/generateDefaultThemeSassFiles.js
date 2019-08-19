/** Generates SASS files which list out theme slots and their defaults as SASS variables, used with the legacy version of loadTheme.
 */

const { getTheme } = require('@uifabric/styling');
const fs = require('fs');
const path = require('path');

const defaultTheme = getTheme(true);

const warningMessage =
  '/** THIS FILE IS AUTOGENERATED do not modify it manually. See generateDefaultThemeSassFiles.js. New slots should be added to the appropriate interfaces and defaults files. */';

// Font slots
const fonts = defaultTheme.fonts;
const lines = [warningMessage];
let fontSizeTokenName, fontWeightTokenName;
for (const fontName in fonts) {
  const font = fonts[fontName];
  for (const propName in font) {
    const titleCasePropName = propName.charAt(0).toUpperCase() + propName.slice(1);
    const slotName = fontName + titleCasePropName;
    const name = '$ms-font-' + slotName;
    lines.push(`${name}: "[theme:${slotName}, default: ${font[propName]}]";`);

    if (titleCasePropName === 'FontSize') {
      fontSizeTokenName = name;
    } else if (titleCasePropName === 'FontWeight') {
      fontWeightTokenName = name;
    }
  }
  lines.push(`@mixin ${fontName}FontBasic {`);
  lines.push(`    font-size: ${fontSizeTokenName};`);
  lines.push(`    font-weight: ${fontWeightTokenName};`);
  lines.push(`}`);
}

const srcRoot = './src/common';
const fontsOutputFilename = '_themeVariables.scss';
fs.writeFileSync(path.join(srcRoot, fontsOutputFilename), lines.join('\n'));

// Fabric palette slots
const palette = defaultTheme.palette;
const colorLines = [warningMessage];
for (const color in palette) {
  const name = 'ms-color-' + color;
  colorLines.push(`$${name}: "[theme:${color}, default: ${palette[color]}]";`);
}

const paletteOutputFilename = '_themeOverrides.scss';
fs.writeFileSync(path.join(srcRoot, paletteOutputFilename), colorLines.join('\n'));

// Semantic color slots
const semanticColors = defaultTheme.semanticColors;
const semanticLines = [warningMessage];
const deprecatedTag = ' /* @deprecated */';

for (const color in semanticColors) {
  const name = color + 'Color';
  if (semanticColors[color].indexOf(deprecatedTag) >= 0) {
    semanticLines.push(`$${name}: '[theme:${color}, default: ${semanticColors[color].replace(deprecatedTag, '')}]'; ${deprecatedTag}`);
  } else {
    semanticLines.push(`$${name}: '[theme:${color}, default: ${semanticColors[color]}]'; `);
  }
}

const semanticOutputFilename = '_semanticSlots.scss';
fs.writeFileSync(path.join(srcRoot, semanticOutputFilename), semanticLines.join('\n'));
