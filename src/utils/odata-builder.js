/**
 * Any
 * @param {String} field
 * @param {String} value
 */
const any = (field, value) => {
  return `${field}/any(a: a eq '${value}')`;
};

/**
 * Any Deep
 * @param {String} field
 * @param {String} value
 * @param {String} property
 */
const anyDeep = (field, value, property) => {
  // gt: Greater than
  return `${field}/any(a: a/${property} eq '${value}')`;
};

/**
 * Between
 * @param {String} field
 * @param {String} value1
 * @param {String} value2
 */
const between = (field, value1, value2) => {
  // ge : Greater than or equal
  // le : Less than or equal
  return `${field} ge ${value1} and ${field} le ${value2}`;
};

/**
 * Contains
 * @param {String} field
 * @param {String} value
 */
const contains = (field, value) => {
  return `contains(${field}, '${value}')`;
};

/**
 * Equal
 * @param {string} field
 * @param {string|number} value
 */
const equal = (field, value) => {
  return `${field} eq ${value}`;
};

/**
 * Not Equal
 * @param {string} field
 * @param {string|number} value
 */
const notEqual = (field, value) => {
  return `${field} ne ${value}`;
};

/**
 * Greater Than
 * @param {string} field
 * @param {string|number} value
 */
const greaterThan = (field, value) => {
  // gt: Greater than
  return `${field} gt ${value}`;
};

export default {
  any,
  anyDeep,
  between,
  contains,
  equal,
  greaterThan,
  notEqual,
};
