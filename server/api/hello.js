import { useQuery } from 'h3'

export default async (req, res) => {
  const query = useQuery(req)
  return {
    data: `Hello ${query.name} 👋`,
  }
}
