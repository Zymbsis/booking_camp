import { capitalizeFirstLetter } from './formatString';

const optionsForModalFeaturesList = {
  adults: 'adults',
  transmission: 'transmission',
  airConditioner: 'airConditioner',
  engine: 'engine',
  kitchen: 'kitchen',
  beds: 'beds',
  CD: 'CD',
  radio: 'radio',
  hob: 'hob',
  microwave: 'microwave',
  freezer: 'freezer',
  toilet: 'toilet',
  shower: 'shower',
  gas: 'gas',
  water: 'water',
};

export const createModalFeaturesList = (item) => {
  const featuresList = [];

  for (const key in optionsForModalFeaturesList) {
    const existingProperty = item[key] ? item[key] : item.details[key];
    if (
      !existingProperty ||
      (typeof existingProperty === 'string' &&
        existingProperty.trim() === '') ||
      (typeof existingProperty === 'number' && existingProperty === 0)
    )
      continue;
    const featureElem = { iconId: '', label: '' };
    if (key === optionsForModalFeaturesList.airConditioner) {
      featureElem.iconId = `icon-AC`;
      featureElem.label = 'AC';
    } else if (
      key === optionsForModalFeaturesList.adults ||
      key === optionsForModalFeaturesList.beds ||
      key === optionsForModalFeaturesList.hob
    ) {
      featureElem.iconId = `icon-${key}`;
      featureElem.label = `${existingProperty} ${key}`;
    } else if (typeof existingProperty === 'number') {
      featureElem.iconId = `icon-${key}`;
      featureElem.label = capitalizeFirstLetter(key);
    } else if (
      typeof existingProperty === 'string' &&
      !parseInt(existingProperty)
    ) {
      featureElem.iconId = `icon-${key}`;
      featureElem.label = capitalizeFirstLetter(existingProperty);
    } else if (
      typeof existingProperty === 'string' &&
      parseInt(existingProperty)
    ) {
      featureElem.iconId = `icon-${key}`;
      featureElem.label = capitalizeFirstLetter(key);
    }
    featuresList.push(featureElem);
  }
  if (item.details.airConditioner > 0) {
    const featureElem = {
      iconId: 'icon-airConditioner',
      label: `${item.details.airConditioner} air conditioner `,
    };
    featuresList.splice(6, 0, featureElem);
  }
  return featuresList;
};
