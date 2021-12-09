import { has } from 'lodash-es';

export function hasIt() {
  return has({ a: { b: { c: 3 } } }, 'a');
}
