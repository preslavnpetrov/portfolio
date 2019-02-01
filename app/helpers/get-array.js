import { helper } from '@ember/component/helper';

export function getArray(params/*, hash*/) {
  return params[1][params[2]];
}

export default helper(getArray);
