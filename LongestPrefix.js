/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let strToCompare = strs[0];
  let result = '';
  do {
    for (let i = 0; i < strs.length; i++) {
      if (!strs[i].startsWith(strToCompare)) {
        break;
      }
      if (i == strs.length - 1) {
        result = strToCompare;
      }
    }
    strToCompare = strToCompare.substr(0, strToCompare.length - 1);
  } while (strToCompare.length > 0 && !result);

  console.log(result);
  return result;
};

longestCommonPrefix(['flower', 'flow', 'flight']); //"fl"
longestCommonPrefix(['a']); //"a"
longestCommonPrefix(['c', 'acc', 'cca']); //""
