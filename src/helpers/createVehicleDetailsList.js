import {
  addSpaceBeforeUnit,
  camelCaseToSentenceCase,
  capitalizeFirstLetter,
} from './formatString';

const optionsForVehicleDetailsList = {
  form: 'form',
  length: 'length',
  width: 'width',
  height: 'height',
  tank: 'tank',
  consumption: 'consumption',
};
export const createVehicleDetailsList = (item) => {
  const vehicleDetailsList = [];
  for (const key in optionsForVehicleDetailsList) {
    const existingProperty = item[key];
    const vehicleDetailElem = { key: '', property: '' };
    if (key === optionsForVehicleDetailsList.form) {
      vehicleDetailElem.key = capitalizeFirstLetter(key);
      vehicleDetailElem.property = camelCaseToSentenceCase(existingProperty);
    } else if (key === optionsForVehicleDetailsList.consumption) {
      vehicleDetailElem.key = capitalizeFirstLetter(key);
      vehicleDetailElem.property = existingProperty;
    } else {
      vehicleDetailElem.key = capitalizeFirstLetter(key);
      vehicleDetailElem.property = addSpaceBeforeUnit(existingProperty);
    }
    vehicleDetailsList.push(vehicleDetailElem);
  }

  return vehicleDetailsList;
};
