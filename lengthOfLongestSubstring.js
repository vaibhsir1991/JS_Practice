/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s || s === null) return 0;

  var subString = "",
    maxLength = 0;

  s.split("").forEach((char) => {
    if (!subString.includes(char)) {
      subString = subString + char;
      if (maxLength < subString.length) maxLength = subString.length;
    } else {
      subString = subString + char;
      subString = subString.substring(
        subString.indexOf(char) + 1,
        subString.length
      );
    }
  });

  return maxLength;
};

//TestCases
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("dfde"));
console.log(lengthOfLongestSubstring("abcabcabcbb"));
