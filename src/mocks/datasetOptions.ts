import { datasets } from './datasets';

export const datasetOptions = Object.keys(datasets[0].data[0]).map((fieldName) => ({
  label: fieldName,
  value: fieldName.toLowerCase(),
}));
