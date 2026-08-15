export const CQ = {
  phone: '(max-width: 619px)',
  tablet: '(max-width: 959px)',
};

export function R(prop, values) {
  const arr = values.length === 2 ? [values[0], values[1], values[1]] : values;
  const phone = arr[0];
  const tablet = arr[1] == null ? phone : arr[1];
  const desktop = arr[2] == null ? tablet : arr[2];
  return {
    [prop]: desktop,
    [`@container (max-width: 959px)`]: { [prop]: tablet },
    [`@container (max-width: 619px)`]: { [prop]: phone },
  };
}
