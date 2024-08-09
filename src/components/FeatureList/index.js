const optionsForPageFeaturesList = {
  adults: 'adults',
  transmission: 'transmission',
  engine: 'engine',
  kitchen: 'kitchen',
  beds: 'beds',
  airConditioner: 'airConditioner',
};

export const getDataForPageFeaturesList = (obj) => {
  const data = [];
  for (const key in optionsForPageFeaturesList) {
    const property = obj[key] ? obj[key] : obj.details[key];
    if (!property) return;
    if (key === optionsForPageFeaturesList.airConditioner) {
      const newObj = {
        iconId: `icon-AC`,
        label: 'AC',
      };
      data.push(newObj);
    } else if (
      key === optionsForPageFeaturesList.adults ||
      key === optionsForPageFeaturesList.beds
    ) {
      const newObj = { iconId: `icon-${key}`, label: `${property} ${key}` };
      data.push(newObj);
    } else if (typeof property === 'number') {
      const newObj = {
        iconId: `icon-${key}`,
        label: `${key.replace(key[0], key[0].toUpperCase())}`,
      };
      data.push(newObj);
    } else if (typeof property === 'string') {
      const newObj = {
        iconId: `icon-${key}`,
        label: `${property.replace(property[0], property[0].toUpperCase())}`,
      };
      data.push(newObj);
    }
  }
  return data;
};
