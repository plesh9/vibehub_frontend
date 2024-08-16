import type { IconsType } from '@shared/const/icons'
import type { EmojiTabType } from '../types'

export const EMOJI_TABS: Array<{
    type: EmojiTabType
    icon: IconsType
}> = [
    {
        type: 'RECENT',
        icon: 'clock'
    },
    {
        type: 'SMILES_AND_PEOPLE',
        icon: 'smile'
    },
    {
        type: 'ANIMALS_AND_NATURE',
        icon: 'tree'
    },
    {
        type: 'FOOD_AND_DRINK',
        icon: 'pizza'
    },
    {
        type: 'ACTIVITIES',
        icon: 'soccer-ball'
    },
    {
        type: 'TRAVEL_AND_PLACES',
        icon: 'plane'
    },
    {
        type: 'OBJECTS',
        icon: 'bulb'
    },
    {
        type: 'SYMBOLS',
        icon: 'symbols'
    },
    {
        type: 'FLAGS',
        icon: 'flag'
    }
] as const

export const EMOJI_TAB_TITLES: Record<EmojiTabType, string> = {
    RECENT: 'Recent',
    SMILES_AND_PEOPLE: 'Smiles & People',
    ANIMALS_AND_NATURE: 'Animals & Nature',
    FOOD_AND_DRINK: 'Food & Drink',
    TRAVEL_AND_PLACES: 'Travel & Places',
    ACTIVITIES: 'Activities',
    OBJECTS: 'Objects',
    SYMBOLS: 'Symbols',
    FLAGS: 'Flags'
}
