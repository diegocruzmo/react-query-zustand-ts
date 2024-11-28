import { favoritesStore } from '../store/favoritesRepos'

interface Props {
  name: string
  isFavorite: boolean
  id: number
}

const Card = ({ name, isFavorite, id }: Props) => {
  const addFavoriteRepo = favoritesStore((state) => state.addFavoriteRepo)
  const removeFavoriteRepo = favoritesStore((state) => state.removeFavoriteRepo)

  return (
    <div className='card-repo'>
      <h3>{name}</h3>
      <button
        onClick={() =>
          isFavorite ? removeFavoriteRepo(id) : addFavoriteRepo(id)
        }
      >
        {isFavorite ? 'Dislike' : 'Like'}
      </button>
    </div>
  )
}

export default Card
