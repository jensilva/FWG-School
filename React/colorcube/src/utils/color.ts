export const componentToHex = (component: number) => {
  const hex = component.toString(16);
  return `${hex.length == 1 ? "0" :""}${hex}`;
}

export const rgbToHex = (red: number, green: number, blue: number) => `#${componentToHex(red)}${componentToHex(green)}${componentToHex(blue)}`;

export const replaceHexToRGB = (m:string, r:string, g:string, b:string) => r + r + g + g + b + b

export const hexToRgb = (hex: any) => {
  var shorthandRegex = new RegExp("^#?([a-f\\d])([a-f\\d])([a-f\\d])$","i");
  const hexReplaced = hex.replace(shorthandRegex, replaceHexToRGB);
  var result = new RegExp("^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$","i").exec(hexReplaced);
  return result && [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ]
}
