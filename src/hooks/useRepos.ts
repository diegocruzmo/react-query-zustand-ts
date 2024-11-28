import { fetchRepos } from '../services/fetchRepos'
import { useQuery } from '@tanstack/react-query'

export const useRepos = () => {
  return useQuery({ queryKey: ['repos'], queryFn: fetchRepos })
}
