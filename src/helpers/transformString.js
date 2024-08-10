export const capitalizeFirstLetter = (string) => {
  return string.replace(string[0], string[0].toUpperCase());
};

export const addSpaceBeforeUnit = (string) => {
  return string.replace(/(\d)([a-zA-Z])/g, '$1 $2');
};

export const camelCaseToSentenceCase = (string) => {
  return string
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^./, (str) => str.toUpperCase())
    .replace(/ [A-Z]/g, (str) => str.toLowerCase());
};
