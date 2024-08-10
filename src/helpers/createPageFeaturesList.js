import { capitalizeFirstLetter } from './formatString';

const optionsForPageFeaturesList = {
  adults: 'adults',
  transmission: 'transmission',
  engine: 'engine',
  kitchen: 'kitchen',
  beds: 'beds',
  airConditioner: 'airConditioner',
};

export const createPageFeaturesList = (item) => {
  const featuresList = [];

  for (const key in optionsForPageFeaturesList) {
    const existingProperty = item[key] ? item[key] : item.details[key];
    if (
      !existingProperty ||
      (typeof existingProperty === 'string' &&
        existingProperty.trim() === '') ||
      (typeof existingProperty === 'number' && existingProperty === 0)
    )
      continue;
    const featureElem = { iconId: '', label: '' };
    if (key === optionsForPageFeaturesList.airConditioner) {
      featureElem.iconId = `icon-AC`;
      featureElem.label = 'AC';
    } else if (
      key === optionsForPageFeaturesList.adults ||
      key === optionsForPageFeaturesList.beds
    ) {
      featureElem.iconId = `icon-${key}`;
      featureElem.label = `${existingProperty} ${key}`;
    } else if (typeof existingProperty === 'number') {
      featureElem.iconId = `icon-${key}`;
      featureElem.label = capitalizeFirstLetter(key);
    } else if (typeof existingProperty === 'string') {
      featureElem.iconId = `icon-${key}`;
      featureElem.label = capitalizeFirstLetter(existingProperty);
    }
    featuresList.push(featureElem);
  }
  return featuresList;
};
