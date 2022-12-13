export default defineEventHandler((event) => {
  const query = getQuery(event)
  return {
    data: `Hello ${query.name} 👋`,
  }
})
