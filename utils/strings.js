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

// Slugify a string
function slugify(str) {
  if (!str) return
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

// Deslugify a string for hyphens and underscores and capitalize each word
function deslugify(str) {
  if (!str) return
  return str
    .trim()
    .toLowerCase()
    .replace(/[-_]+/g, ' ')
    .replace(/ +/g, ' ')
    .replace(/(^| )(\w)/g, (s) => s.toUpperCase())
}

export { stripHTML, truncateString, slugify, deslugify }
