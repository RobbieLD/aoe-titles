import { defineStore } from 'pinia'
import { matches } from '@/data/matches'
import type { Match } from '@/models/match'

export const useGamesStore = defineStore('games', () => {

    const titles = (): { [K: string]: Match } => {
        return matches.reduce((group: { [k: string]: Match }, match: Match) => {
            const { title } = match
            
            if (group[title]) {
                if (group[title].date < match.date) {
                    group[title] = match
                }
            }
            else {
                group[title] = match
            }
            
            return group
        },{})
    }

    const gamesForPlayer = (name: string): Match[] => {
        return matches.filter(m => m.winner === name).sort((a,b) => a.date.getTime() - b.date.getTime())
    }

    const gamesByTitle = (title: string): Match[] => {
        return matches.filter(m => m.title === title).sort((a,b) => a.date.getTime() - b.date.getTime())
    }

  return { titles, gamesForPlayer, gamesByTitle  }
})
