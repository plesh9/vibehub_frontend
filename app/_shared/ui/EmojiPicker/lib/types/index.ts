export type EmojiTabType = 'RECENT' | 'SMILES_AND_PEOPLE' | 'ANIMALS_AND_NATURE' | 'FOOD_AND_DRINK' | 'TRAVEL_AND_PLACES' | 'ACTIVITIES' | 'OBJECTS' | 'SYMBOLS' | 'FLAGS'

export interface EmojiType {
    type: EmojiTabType
    emoji: string
    names: Array<string>
    unified: string
}
