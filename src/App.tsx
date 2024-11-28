import { useRepos } from './hooks/useRepos'
import Card from './components/Card'
import { favoritesStore } from './store/favoritesRepos'

const App = () => {
  const { data, isLoading } = useRepos()
  const { favoritesReposIds } = favoritesStore()

  if (isLoading) return <div>isLoading...</div>

  console.log(favoritesReposIds)

  return (
    <main>
      {data?.map((repo) => (
        <Card
          key={repo.id}
          id={repo.id}
          name={repo.name}
          isFavorite={favoritesReposIds.includes(repo.id)}
        />
      ))}
    </main>
  )
}

export default App
