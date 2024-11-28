import { api } from '../api/github'
import { Repos } from '../types/types'

export const fetchRepos = async () => {
  const { data } = await api.get<Repos[]>('/users/diegocruzmo/repos')
  return data
}
