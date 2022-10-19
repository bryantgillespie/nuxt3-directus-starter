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

export { stripHTML, truncateString }
