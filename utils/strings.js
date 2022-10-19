function stripHTML(original) {
  if (!original) return
  else return original.replace(/(<([^>]+)>)/gi, '')
}

function truncateString(str, num) {
  if (!str) return
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

function slugify(str) {
  if (!str) return
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

function deslugify(str) {
  if (!str) return
  return str
    .trim()
    .toLowerCase()
    .replace(/[-_]+/g, ' ')
    .replace(/ +/g, ' ')
    .replace(/(^| )(\w)/g, (s) => s.toUpperCase())
}

function toTitleCase(str) {
  if (!str) return
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

export { stripHTML, truncateString, slugify, deslugify, toTitleCase }
