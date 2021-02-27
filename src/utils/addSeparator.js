/**
 * add thousand separator (.) on number
 * @param {number} n
 */

const addSeparator = n => {
  let regex = /(\d+)(\d{3})/
  return String(n).replace(/^\d+/, function (x) {
    while (regex.test(x)) {
      x = x.replace(regex, '$1.$2')
    }
    return x
  })
}

export default addSeparator
