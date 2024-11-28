import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type FavoriteReposId = {
  favoritesReposIds: number[]
  addFavoriteRepo: (id: number) => void
  removeFavoriteRepo: (id: number) => void
}

export const favoritesStore = create(
  persist<FavoriteReposId>(
    (set) => ({
      favoritesReposIds: [],

      addFavoriteRepo: (id: number) =>
        set((state) => ({
          favoritesReposIds: [...state.favoritesReposIds, id]
        })),

      removeFavoriteRepo: (id: number) =>
        set((state) => ({
          favoritesReposIds: state.favoritesReposIds.filter(
            (favoriteId) => favoriteId !== id
          )
        }))
    }),
    {
      name: 'favorite-repos'
    }
  )
)
