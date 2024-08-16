import type { EmojiTabType, EmojiType } from '../types'

export const EMOJIES: Record<EmojiTabType, Array<EmojiType>> = {
    RECENT: [],
    SMILES_AND_PEOPLE: [
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😀',
            names: ['grinning face', 'happy face', 'smile', 'cheerful'],
            unified: '1F600'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😁',
            names: ['beaming face with smiling eyes', 'grin', 'big smile', 'broad smile'],
            unified: '1F601'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😂',
            names: ['face with tears of joy', 'laughing', 'crying laughing', 'lol'],
            unified: '1F602'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤣',
            names: ['rolling on the floor laughing', 'rofl', 'lmao', 'hilarious'],
            unified: '1F923'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😃',
            names: ['grinning face with big eyes', 'excited', 'eager', 'enthusiastic'],
            unified: '1F603'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😄',
            names: ['grinning face with smiling eyes', 'happy', 'joyful', 'delighted'],
            unified: '1F604'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😅',
            names: ['grinning face with sweat', 'nervous laughter', 'relief', 'awkward'],
            unified: '1F605'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😆',
            names: ['grinning squinting face', 'laughing hard', 'giggling', 'amused'],
            unified: '1F606'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😉',
            names: ['winking face', 'flirting', 'playful', 'suggestive'],
            unified: '1F609'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😊',
            names: ['smiling face with smiling eyes', 'blushing', 'content', 'pleased'],
            unified: '1F60A'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😇',
            names: ['smiling face with halo', 'angelic', 'innocent', 'pure'],
            unified: '1F607'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🙂',
            names: ['slightly smiling face', 'content', 'mildly happy', 'satisfied'],
            unified: '1F642'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🙃',
            names: ['upside-down face', 'sarcastic', 'playful', 'silly'],
            unified: '1F643'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😌',
            names: ['relieved face', 'content', 'peaceful', 'satisfied'],
            unified: '1F60C'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😍',
            names: ['smiling face with heart-eyes', 'in love', 'adoring', 'infatuated'],
            unified: '1F60D'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😘',
            names: ['face blowing a kiss', 'sending love', 'flirty kiss', 'affectionate'],
            unified: '1F618'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😗',
            names: ['kissing face', 'peck', 'gentle kiss', 'polite kiss'],
            unified: '1F617'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😙',
            names: ['kissing face with smiling eyes', 'happy kiss', 'content kiss', 'sweet kiss'],
            unified: '1F619'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😚',
            names: ['kissing face with closed eyes', 'shy kiss', 'adoring kiss', 'affectionate kiss'],
            unified: '1F61A'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😋',
            names: ['face savoring food', 'yum', 'delicious', 'tasty'],
            unified: '1F60B'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😜',
            names: ['winking face with tongue', 'playful', 'teasing', 'silly'],
            unified: '1F61C'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😝',
            names: ['squinting face with tongue', 'playful', 'teasing', 'mocking'],
            unified: '1F61D'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😛',
            names: ['face with tongue', 'goofy', 'playful', 'teasing'],
            unified: '1F61B'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤑',
            names: ['money-mouth face', 'greedy', 'wealthy', 'rich'],
            unified: '1F911'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤗',
            names: ['hugging face', 'hug', 'affectionate', 'embrace'],
            unified: '1F917'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤔',
            names: ['thinking face', 'pondering', 'considering', 'wondering'],
            unified: '1F914'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤨',
            names: ['face with raised eyebrow', 'skeptical', 'disbelieving', 'curious'],
            unified: '1F928'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😐',
            names: ['neutral face', 'indifferent', 'unimpressed', 'meh'],
            unified: '1F610'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😑',
            names: ['expressionless face', 'blank face', 'unemotional', 'stoic'],
            unified: '1F611'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😶',
            names: ['face without mouth', 'speechless', 'silent', 'mute'],
            unified: '1F636'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🙄',
            names: ['face with rolling eyes', 'sarcasm', 'dismissive', 'annoyed'],
            unified: '1F644'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😏',
            names: ['smirking face', 'smug', 'sly', 'self-satisfied'],
            unified: '1F60F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😣',
            names: ['persevering face', 'struggling', 'trying hard', 'enduring'],
            unified: '1F623'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😥',
            names: ['sad but relieved face', 'sigh of relief', 'disappointed', 'regretful'],
            unified: '1F625'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😮',
            names: ['face with open mouth', 'surprised', 'shocked', 'amazed'],
            unified: '1F62E'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤐',
            names: ['zipper-mouth face', 'secretive', 'keeping quiet', 'sealed lips'],
            unified: '1F910'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😯',
            names: ['hushed face', 'quiet', 'astonished', 'awed'],
            unified: '1F62F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😪',
            names: ['sleepy face', 'drowsy', 'tired', 'exhausted'],
            unified: '1F62A'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😫',
            names: ['tired face', 'fatigued', 'weary', 'overworked'],
            unified: '1F62B'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😴',
            names: ['sleeping face', 'asleep', 'dreaming', 'resting'],
            unified: '1F634'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤤',
            names: ['drooling face', 'hungry', 'sleepy', 'desire'],
            unified: '1F924'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😒',
            names: ['unamused face', 'bored', 'displeased', 'unimpressed'],
            unified: '1F612'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😓',
            names: ['downcast face with sweat', 'disappointed', 'tired', 'exhausted'],
            unified: '1F613'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😔',
            names: ['pensive face', 'thoughtful', 'sad', 'reflective'],
            unified: '1F614'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😕',
            names: ['confused face', 'perplexed', 'unsure', 'uncertain'],
            unified: '1F615'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😟',
            names: ['worried face', 'concerned', 'anxious', 'troubled'],
            unified: '1F61F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😧',
            names: ['anguished face', 'distressed', 'upset', 'shocked'],
            unified: '1F627'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😨',
            names: ['fearful face', 'scared', 'frightened', 'alarmed'],
            unified: '1F628'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😩',
            names: ['weary face', 'exhausted', 'tired', 'drained'],
            unified: '1F629'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😬',
            names: ['grimacing face', 'awkward', 'nervous', 'uncomfortable'],
            unified: '1F62C'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😭',
            names: ['loudly crying face', 'sobbing', 'wailing', 'heartbroken'],
            unified: '1F62D'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😵',
            names: ['dizzy face', 'disoriented', 'confused', 'dazed'],
            unified: '1F635'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😡',
            names: ['pouting face', 'angry', 'mad', 'furious'],
            unified: '1F621'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😠',
            names: ['angry face', 'mad', 'upset', 'furious'],
            unified: '1F620'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤬',
            names: ['face with symbols on mouth', 'swearing', 'cursing', 'angry'],
            unified: '1F92C'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😷',
            names: ['face with medical mask', 'sick', 'ill', 'infected'],
            unified: '1F637'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤒',
            names: ['face with thermometer', 'fever', 'sick', 'unwell'],
            unified: '1F912'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤕',
            names: ['face with head-bandage', 'injured', 'hurt', 'wounded'],
            unified: '1F915'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤢',
            names: ['nauseated face', 'sick', 'vomit', 'gross'],
            unified: '1F922'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤮',
            names: ['face vomiting', 'sick', 'throwing up', 'disgusting'],
            unified: '1F92E'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤧',
            names: ['sneezing face', 'sick', 'sneeze', 'allergy'],
            unified: '1F927'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🥳',
            names: ['partying face', 'celebration', 'fun', 'party'],
            unified: '1F973'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤠',
            names: ['cowboy hat face', 'western', 'cowboy', 'cheerful'],
            unified: '1F920'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤡',
            names: ['clown face', 'joker', 'funny', 'entertainer'],
            unified: '1F921'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😈',
            names: ['smiling face with horns', 'evil', 'mischievous', 'devilish'],
            unified: '1F608'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👿',
            names: ['angry face with horns', 'devil', 'evil', 'furious'],
            unified: '1F47F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '💀',
            names: ['skull', 'death', 'danger', 'morbid'],
            unified: '1F480'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '☠️',
            names: ['skull and crossbones', 'danger', 'deadly', 'pirate'],
            unified: '2620-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👽',
            names: ['alien', 'extraterrestrial', 'UFO', 'space'],
            unified: '1F47D'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👾',
            names: ['alien monster', 'video game', 'space invader', 'arcade'],
            unified: '1F47E'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤖',
            names: ['robot face', 'robotic', 'AI', 'automation'],
            unified: '1F916'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👻',
            names: ['ghost', 'spooky', 'haunted', 'boo'],
            unified: '1F47B'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '💩',
            names: ['pile of poo', 'poop', 'crap', 'smelly'],
            unified: '1F4A9'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😺',
            names: ['grinning cat face', 'happy cat', 'smiling cat', 'cheerful cat'],
            unified: '1F63A'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😸',
            names: ['grinning cat face with smiling eyes', 'happy cat', 'smiling cat', 'joyful cat'],
            unified: '1F638'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😹',
            names: ['cat face with tears of joy', 'laughing cat', 'crying laughing cat', 'lol cat'],
            unified: '1F639'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😻',
            names: ['smiling cat face with heart-eyes', 'in love cat', 'adoring cat', 'infatuated cat'],
            unified: '1F63B'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😼',
            names: ['cat face with wry smile', 'smirking cat', 'sly cat', 'cheeky cat'],
            unified: '1F63C'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😽',
            names: ['kissing cat face', 'peck cat', 'gentle kiss cat', 'polite kiss cat'],
            unified: '1F63D'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🙀',
            names: ['weary cat face', 'tired cat', 'exhausted cat', 'overworked cat'],
            unified: '1F640'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😿',
            names: ['crying cat face', 'sad cat', 'tearful cat', 'mournful cat'],
            unified: '1F63F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '😾',
            names: ['pouting cat face', 'angry cat', 'mad cat', 'furious cat'],
            unified: '1F63E'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🙌',
            names: ['raising hands', 'praise', 'celebration', 'hallelujah'],
            unified: '1F64C'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👏',
            names: ['clapping hands', 'applause', 'congratulations', 'well done'],
            unified: '1F44F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👍',
            names: ['thumbs up', 'approve', 'good job', 'like'],
            unified: '1F44D'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👎',
            names: ['thumbs down', 'disapprove', 'bad job', 'dislike'],
            unified: '1F44E'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👊',
            names: ['oncoming fist', 'punch', 'fist bump', 'attack'],
            unified: '1F44A'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '✊',
            names: ['raised fist', 'power', 'solidarity', 'resistance'],
            unified: '270A'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤛',
            names: ['left-facing fist', 'fist bump', 'punch', 'attack'],
            unified: '1F91B'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤜',
            names: ['right-facing fist', 'fist bump', 'punch', 'attack'],
            unified: '1F91C'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '✌️',
            names: ['victory hand', 'peace', 'two fingers', 'v sign'],
            unified: '270C-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤞',
            names: ['crossed fingers', 'luck', 'hope', 'wish'],
            unified: '1F91E'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤟',
            names: ['love-you gesture', 'i love you', 'hand sign', 'gesture'],
            unified: '1F91F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤘',
            names: ['sign of the horns', 'rock on', 'heavy metal', 'horns'],
            unified: '1F918'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👌',
            names: ['ok hand', 'perfect', 'good', 'approval'],
            unified: '1F44C'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤏',
            names: ['pinching hand', 'small', 'tiny', 'minuscule'],
            unified: '1F90F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '✋',
            names: ['raised hand', 'stop', 'halt', 'high five'],
            unified: '270B'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤚',
            names: ['raised back of hand', 'stop', 'halt', 'high five'],
            unified: '1F91A'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🖐️',
            names: ['hand with fingers splayed', 'high five', 'stop', 'halt'],
            unified: '1F590-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🖖',
            names: ['vulcan salute', 'live long and prosper', 'star trek', 'spock'],
            unified: '1F596'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👋',
            names: ['waving hand', 'hello', 'goodbye', 'hi'],
            unified: '1F44B'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤙',
            names: ['call me hand', 'shaka', 'hang loose', 'phone hand'],
            unified: '1F919'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '💪',
            names: ['flexed biceps', 'strong', 'muscle', 'power'],
            unified: '1F4AA'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🦵',
            names: ['leg', 'limb', 'thigh', 'calf'],
            unified: '1F9B5'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🦶',
            names: ['foot', 'feet', 'sole', 'toe'],
            unified: '1F9B6'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👂',
            names: ['ear', 'hear', 'listen', 'hearing'],
            unified: '1F442'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👃',
            names: ['nose', 'smell', 'scent', 'breathe'],
            unified: '1F443'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👀',
            names: ['eyes', 'look', 'see', 'watch'],
            unified: '1F440'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👁️',
            names: ['eye', 'vision', 'look', 'see'],
            unified: '1F441-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧠',
            names: ['brain', 'thinking', 'intelligent', 'mind'],
            unified: '1F9E0'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👅',
            names: ['tongue', 'taste', 'lick', 'mouth'],
            unified: '1F445'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👄',
            names: ['mouth', 'lips', 'smile', 'talk'],
            unified: '1F444'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧑‍⚕️',
            names: ['health worker', 'doctor', 'nurse', 'medic'],
            unified: '1F9D1-200D-2695-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👨‍⚕️',
            names: ['man health worker', 'doctor', 'nurse', 'medic'],
            unified: '1F468-200D-2695-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👩‍⚕️',
            names: ['woman health worker', 'doctor', 'nurse', 'medic'],
            unified: '1F469-200D-2695-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧑‍🎓',
            names: ['student', 'graduate', 'scholar', 'pupil'],
            unified: '1F9D1-200D-1F393'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👨‍🎓',
            names: ['man student', 'graduate', 'scholar', 'pupil'],
            unified: '1F468-200D-1F393'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👩‍🎓',
            names: ['woman student', 'graduate', 'scholar', 'pupil'],
            unified: '1F469-200D-1F393'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧑‍🏫',
            names: ['teacher', 'instructor', 'educator', 'professor'],
            unified: '1F9D1-200D-1F3EB'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👨‍🏫',
            names: ['man teacher', 'instructor', 'educator', 'professor'],
            unified: '1F468-200D-1F3EB'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👩‍🏫',
            names: ['woman teacher', 'instructor', 'educator', 'professor'],
            unified: '1F469-200D-1F3EB'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧑‍⚖️',
            names: ['judge', 'justice', 'court', 'legal'],
            unified: '1F9D1-200D-2696-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👨‍⚖️',
            names: ['man judge', 'justice', 'court', 'legal'],
            unified: '1F468-200D-2696-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👩‍⚖️',
            names: ['woman judge', 'justice', 'court', 'legal'],
            unified: '1F469-200D-2696-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧑‍🌾',
            names: ['farmer', 'gardener', 'agriculture', 'horticulture'],
            unified: '1F9D1-200D-1F33E'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👨‍🌾',
            names: ['man farmer', 'gardener', 'agriculture', 'horticulture'],
            unified: '1F468-200D-1F33E'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👩‍🌾',
            names: ['woman farmer', 'gardener', 'agriculture', 'horticulture'],
            unified: '1F469-200D-1F33E'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧑‍🍳',
            names: ['cook', 'chef', 'culinary', 'kitchen'],
            unified: '1F9D1-200D-1F373'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👨‍🍳',
            names: ['man cook', 'chef', 'culinary', 'kitchen'],
            unified: '1F468-200D-1F373'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👩‍🍳',
            names: ['woman cook', 'chef', 'culinary', 'kitchen'],
            unified: '1F469-200D-1F373'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧑‍🔧',
            names: ['mechanic', 'repair', 'technician', 'engineer'],
            unified: '1F9D1-200D-1F527'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👨‍🔧',
            names: ['man mechanic', 'repair', 'technician', 'engineer'],
            unified: '1F468-200D-1F527'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👩‍🔧',
            names: ['woman mechanic', 'repair', 'technician', 'engineer'],
            unified: '1F469-200D-1F527'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧑‍🏭',
            names: ['factory worker', 'industrial', 'manufacturing', 'assembly'],
            unified: '1F9D1-200D-1F3ED'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👨‍🏭',
            names: ['man factory worker', 'industrial', 'manufacturing', 'assembly'],
            unified: '1F468-200D-1F3ED'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👩‍🏭',
            names: ['woman factory worker', 'industrial', 'manufacturing', 'assembly'],
            unified: '1F469-200D-1F3ED'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧑‍💼',
            names: ['office worker', 'business', 'corporate', 'employee'],
            unified: '1F9D1-200D-1F4BC'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👨‍💼',
            names: ['man office worker', 'business', 'corporate', 'employee'],
            unified: '1F468-200D-1F4BC'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👩‍💼',
            names: ['woman office worker', 'business', 'corporate', 'employee'],
            unified: '1F469-200D-1F4BC'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧑‍🔬',
            names: ['scientist', 'researcher', 'lab', 'experiment'],
            unified: '1F9D1-200D-1F52C'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👨‍🔬',
            names: ['man scientist', 'researcher', 'lab', 'experiment'],
            unified: '1F468-200D-1F52C'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👩‍🔬',
            names: ['woman scientist', 'researcher', 'lab', 'experiment'],
            unified: '1F469-200D-1F52C'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧑‍🎨',
            names: ['artist', 'painter', 'creative', 'artistic'],
            unified: '1F9D1-200D-1F3A8'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👨‍🎨',
            names: ['man artist', 'painter', 'creative', 'artistic'],
            unified: '1F468-200D-1F3A8'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👩‍🎨',
            names: ['woman artist', 'painter', 'creative', 'artistic'],
            unified: '1F469-200D-1F3A8'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧑‍🚀',
            names: ['astronaut', 'space', 'cosmonaut', 'exploration'],
            unified: '1F9D1-200D-1F680'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👨‍🚀',
            names: ['man astronaut', 'space', 'cosmonaut', 'exploration'],
            unified: '1F468-200D-1F680'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👩‍🚀',
            names: ['woman astronaut', 'space', 'cosmonaut', 'exploration'],
            unified: '1F469-200D-1F680'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧑‍🚒',
            names: ['firefighter', 'rescue', 'emergency', 'hero'],
            unified: '1F9D1-200D-1F692'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👨‍🚒',
            names: ['man firefighter', 'rescue', 'emergency', 'hero'],
            unified: '1F468-200D-1F692'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👩‍🚒',
            names: ['woman firefighter', 'rescue', 'emergency', 'hero'],
            unified: '1F469-200D-1F692'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👮',
            names: ['police officer', 'cop', 'law enforcement', 'security'],
            unified: '1F46E'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👮‍♂️',
            names: ['man police officer', 'cop', 'law enforcement', 'security'],
            unified: '1F46E-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👮‍♀️',
            names: ['woman police officer', 'cop', 'law enforcement', 'security'],
            unified: '1F46E-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🕵️',
            names: ['detective', 'spy', 'sleuth', 'private eye'],
            unified: '1F575-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🕵️‍♂️',
            names: ['man detective', 'spy', 'sleuth', 'private eye'],
            unified: '1F575-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🕵️‍♀️',
            names: ['woman detective', 'spy', 'sleuth', 'private eye'],
            unified: '1F575-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👷',
            names: ['construction worker', 'builder', 'contractor', 'engineer'],
            unified: '1F477'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👷‍♂️',
            names: ['man construction worker', 'builder', 'contractor', 'engineer'],
            unified: '1F477-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👷‍♀️',
            names: ['woman construction worker', 'builder', 'contractor', 'engineer'],
            unified: '1F477-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '💂',
            names: ['guard', 'sentry', 'watchman', 'sentinel'],
            unified: '1F482'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '💂‍♂️',
            names: ['man guard', 'sentry', 'watchman', 'sentinel'],
            unified: '1F482-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '💂‍♀️',
            names: ['woman guard', 'sentry', 'watchwoman', 'sentinel'],
            unified: '1F482-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🕴️',
            names: ['man in suit levitating', 'jumping', 'floating', 'suit'],
            unified: '1F574-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧖',
            names: ['person in steamy room', 'sauna', 'steam', 'bath'],
            unified: '1F9D6'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧖‍♂️',
            names: ['man in steamy room', 'sauna', 'steam', 'bath'],
            unified: '1F9D6-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧖‍♀️',
            names: ['woman in steamy room', 'sauna', 'steam', 'bath'],
            unified: '1F9D6-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧗',
            names: ['person climbing', 'rock climbing', 'climber', 'mountain'],
            unified: '1F9D7'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧗‍♂️',
            names: ['man climbing', 'rock climbing', 'climber', 'mountain'],
            unified: '1F9D7-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧗‍♀️',
            names: ['woman climbing', 'rock climbing', 'climber', 'mountain'],
            unified: '1F9D7-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤺',
            names: ['person fencing', 'fencer', 'sword fighting', 'duel'],
            unified: '1F93A'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🏇',
            names: ['horse racing', 'jockey', 'equestrian', 'rider'],
            unified: '1F3C7'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '⛷️',
            names: ['skier', 'skiing', 'snow', 'mountain'],
            unified: '26F7-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🏂',
            names: ['snowboarder', 'snowboarding', 'snow', 'mountain'],
            unified: '1F3C2'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🏌️',
            names: ['person golfing', 'golf', 'golfer', 'club'],
            unified: '1F3CC-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🏌️‍♂️',
            names: ['man golfing', 'golf', 'golfer', 'club'],
            unified: '1F3CC-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🏌️‍♀️',
            names: ['woman golfing', 'golf', 'golfer', 'club'],
            unified: '1F3CC-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🏄',
            names: ['person surfing', 'surfing', 'surfer', 'wave'],
            unified: '1F3C4'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🏄‍♂️',
            names: ['man surfing', 'surfing', 'surfer', 'wave'],
            unified: '1F3C4-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🏄‍♀️',
            names: ['woman surfing', 'surfing', 'surfer', 'wave'],
            unified: '1F3C4-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🚣',
            names: ['person rowing boat', 'rowing', 'boating', 'canoe'],
            unified: '1F6A3'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🚣‍♂️',
            names: ['man rowing boat', 'rowing', 'boating', 'canoe'],
            unified: '1F6A3-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🚣‍♀️',
            names: ['woman rowing boat', 'rowing', 'boating', 'canoe'],
            unified: '1F6A3-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🏊',
            names: ['person swimming', 'swimming', 'swimmer', 'pool'],
            unified: '1F3CA'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🏊‍♂️',
            names: ['man swimming', 'swimming', 'swimmer', 'pool'],
            unified: '1F3CA-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🏊‍♀️',
            names: ['woman swimming', 'swimming', 'swimmer', 'pool'],
            unified: '1F3CA-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '⛹️',
            names: ['person bouncing ball', 'basketball', 'bouncing', 'ball'],
            unified: '26F9-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '⛹️‍♂️',
            names: ['man bouncing ball', 'basketball', 'bouncing', 'ball'],
            unified: '26F9-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '⛹️‍♀️',
            names: ['woman bouncing ball', 'basketball', 'bouncing', 'ball'],
            unified: '26F9-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🏋️',
            names: ['person lifting weights', 'weightlifting', 'lifting', 'gym'],
            unified: '1F3CB-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🏋️‍♂️',
            names: ['man lifting weights', 'weightlifting', 'lifting', 'gym'],
            unified: '1F3CB-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🏋️‍♀️',
            names: ['woman lifting weights', 'weightlifting', 'lifting', 'gym'],
            unified: '1F3CB-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🚴',
            names: ['person biking', 'biking', 'cycling', 'bike'],
            unified: '1F6B4'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🚴‍♂️',
            names: ['man biking', 'biking', 'cycling', 'bike'],
            unified: '1F6B4-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🚴‍♀️',
            names: ['woman biking', 'biking', 'cycling', 'bike'],
            unified: '1F6B4-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🚵',
            names: ['person mountain biking', 'mountain biking', 'cycling', 'mountain'],
            unified: '1F6B5'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🚵‍♂️',
            names: ['man mountain biking', 'mountain biking', 'cycling', 'mountain'],
            unified: '1F6B5-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🚵‍♀️',
            names: ['woman mountain biking', 'mountain biking', 'cycling', 'mountain'],
            unified: '1F6B5-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤸',
            names: ['person cartwheeling', 'cartwheel', 'gymnast', 'gymnastics'],
            unified: '1F938'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤸‍♂️',
            names: ['man cartwheeling', 'cartwheel', 'gymnast', 'gymnastics'],
            unified: '1F938-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤸‍♀️',
            names: ['woman cartwheeling', 'cartwheel', 'gymnast', 'gymnastics'],
            unified: '1F938-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤼',
            names: ['people wrestling', 'wrestling', 'grappling', 'sport'],
            unified: '1F93C'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤼‍♂️',
            names: ['men wrestling', 'wrestling', 'grappling', 'sport'],
            unified: '1F93C-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤼‍♀️',
            names: ['women wrestling', 'wrestling', 'grappling', 'sport'],
            unified: '1F93C-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤽',
            names: ['person playing water polo', 'water polo', 'polo', 'ball'],
            unified: '1F93D'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤽‍♂️',
            names: ['man playing water polo', 'water polo', 'polo', 'ball'],
            unified: '1F93D-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤽‍♀️',
            names: ['woman playing water polo', 'water polo', 'polo', 'ball'],
            unified: '1F93D-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤾',
            names: ['person playing handball', 'handball', 'ball', 'throwing'],
            unified: '1F93E'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤾‍♂️',
            names: ['man playing handball', 'handball', 'ball', 'throwing'],
            unified: '1F93E-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤾‍♀️',
            names: ['woman playing handball', 'handball', 'ball', 'throwing'],
            unified: '1F93E-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤹',
            names: ['person juggling', 'juggling', 'juggler', 'balls'],
            unified: '1F939'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤹‍♂️',
            names: ['man juggling', 'juggling', 'juggler', 'balls'],
            unified: '1F939-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🤹‍♀️',
            names: ['woman juggling', 'juggling', 'juggler', 'balls'],
            unified: '1F939-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧘',
            names: ['person in lotus position', 'meditation', 'yoga', 'zen'],
            unified: '1F9D8'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧘‍♂️',
            names: ['man in lotus position', 'meditation', 'yoga', 'zen'],
            unified: '1F9D8-200D-2642-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧘‍♀️',
            names: ['woman in lotus position', 'meditation', 'yoga', 'zen'],
            unified: '1F9D8-200D-2640-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🛀',
            names: ['person taking bath', 'bathtub', 'bath', 'clean'],
            unified: '1F6C0'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🛌',
            names: ['person in bed', 'sleeping', 'resting', 'in bed'],
            unified: '1F6CC'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👥',
            names: ['busts in silhouette', 'group', 'people', 'crowd'],
            unified: '1F465'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👤',
            names: ['bust in silhouette', 'person', 'individual', 'profile'],
            unified: '1F464'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👣',
            names: ['footprints', 'steps', 'feet', 'tracks'],
            unified: '1F463'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧳',
            names: ['luggage', 'suitcase', 'travel', 'bag'],
            unified: '1F9F3'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🌂',
            names: ['closed umbrella', 'rain', 'weather', 'wet'],
            unified: '1F302'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '☂️',
            names: ['umbrella', 'rain', 'weather', 'wet'],
            unified: '2602-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '☔',
            names: ['umbrella with rain drops', 'rain', 'weather', 'wet'],
            unified: '2614'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🎃',
            names: ['jack-o-lantern', 'halloween', 'pumpkin', 'scary'],
            unified: '1F383'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧵',
            names: ['thread', 'sewing', 'fabric', 'string'],
            unified: '1F9F5'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧶',
            names: ['yarn', 'knitting', 'crochet', 'ball'],
            unified: '1F9F6'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👓',
            names: ['glasses', 'spectacles', 'vision', 'sight'],
            unified: '1F453'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🕶️',
            names: ['sunglasses', 'shades', 'cool', 'summer'],
            unified: '1F576-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🥽',
            names: ['goggles', 'protective eyewear', 'swimming', 'scuba'],
            unified: '1F97D'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🥼',
            names: ['lab coat', 'scientist', 'doctor', 'research'],
            unified: '1F97C'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👔',
            names: ['necktie', 'tie', 'business', 'formal'],
            unified: '1F454'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👕',
            names: ['t-shirt', 'shirt', 'clothing', 'top'],
            unified: '1F455'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👖',
            names: ['jeans', 'pants', 'denim', 'trousers'],
            unified: '1F456'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧣',
            names: ['scarf', 'cold', 'winter', 'neck'],
            unified: '1F9E3'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧤',
            names: ['gloves', 'cold', 'winter', 'hands'],
            unified: '1F9E4'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧥',
            names: ['coat', 'jacket', 'cold', 'winter'],
            unified: '1F9E5'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧦',
            names: ['socks', 'footwear', 'clothing', 'warm'],
            unified: '1F9E6'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👗',
            names: ['dress', 'clothing', 'fashion', 'garment'],
            unified: '1F457'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👘',
            names: ['kimono', 'japanese', 'clothing', 'garment'],
            unified: '1F458'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🥻',
            names: ['sari', 'clothing', 'dress', 'garment'],
            unified: '1F97B'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🩱',
            names: ['one-piece swimsuit', 'swimming', 'clothing', 'bathing'],
            unified: '1FA71'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🩲',
            names: ['briefs', 'underwear', 'clothing', 'boxers'],
            unified: '1FA72'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🩳',
            names: ['shorts', 'clothing', 'bathing', 'swimming'],
            unified: '1FA73'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👙',
            names: ['bikini', 'swimsuit', 'clothing', 'beach'],
            unified: '1F459'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👚',
            names: ['woman’s clothes', 'blouse', 'clothing', 'top'],
            unified: '1F45A'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👛',
            names: ['purse', 'bag', 'clutch', 'accessory'],
            unified: '1F45B'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👜',
            names: ['handbag', 'bag', 'purse', 'fashion'],
            unified: '1F45C'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👝',
            names: ['clutch bag', 'purse', 'bag', 'accessory'],
            unified: '1F45D'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🛍️',
            names: ['shopping bags', 'shopping', 'bags', 'purchases'],
            unified: '1F6CD-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🎒',
            names: ['backpack', 'school', 'bag', 'rucksack'],
            unified: '1F392'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👞',
            names: ['man’s shoe', 'shoe', 'footwear', 'loafer'],
            unified: '1F45E'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👟',
            names: ['running shoe', 'sneaker', 'footwear', 'trainer'],
            unified: '1F45F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🥾',
            names: ['hiking boot', 'boot', 'footwear', 'outdoor'],
            unified: '1F97E'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🥿',
            names: ['flat shoe', 'ballet flat', 'footwear', 'shoe'],
            unified: '1F97F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👠',
            names: ['high-heeled shoe', 'shoe', 'stiletto', 'footwear'],
            unified: '1F460'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👡',
            names: ['woman’s sandal', 'sandal', 'footwear', 'shoe'],
            unified: '1F461'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🩰',
            names: ['ballet shoes', 'footwear', 'dancing', 'ballet'],
            unified: '1FA70'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👢',
            names: ['woman’s boot', 'boot', 'footwear', 'shoe'],
            unified: '1F462'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👑',
            names: ['crown', 'royalty', 'king', 'queen'],
            unified: '1F451'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '👒',
            names: ['woman’s hat', 'hat', 'accessory', 'fashion'],
            unified: '1F452'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🎩',
            names: ['top hat', 'hat', 'gentleman', 'formal'],
            unified: '1F3A9'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🎓',
            names: ['graduation cap', 'cap', 'hat', 'education'],
            unified: '1F393'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🧢',
            names: ['billed cap', 'cap', 'hat', 'baseball cap'],
            unified: '1F9E2'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '⛑️',
            names: ['rescue worker’s helmet', 'helmet', 'rescue', 'worker'],
            unified: '26D1-FE0F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '📿',
            names: ['prayer beads', 'beads', 'prayer', 'rosary'],
            unified: '1F4FF'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '💄',
            names: ['lipstick', 'makeup', 'cosmetics', 'lip color'],
            unified: '1F484'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '💍',
            names: ['ring', 'jewelry', 'diamond', 'engagement'],
            unified: '1F48D'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '💎',
            names: ['gem stone', 'diamond', 'jewel', 'wealth'],
            unified: '1F48E'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🔇',
            names: ['muted speaker', 'sound off', 'silence', 'quiet'],
            unified: '1F507'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🔈',
            names: ['speaker low volume', 'sound on', 'low volume', 'quiet'],
            unified: '1F508'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🔉',
            names: ['speaker medium volume', 'sound on', 'medium volume', 'sound'],
            unified: '1F509'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🔊',
            names: ['speaker high volume', 'sound on', 'high volume', 'loud'],
            unified: '1F50A'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🔔',
            names: ['bell', 'alert', 'notification', 'sound'],
            unified: '1F514'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🔕',
            names: ['bell with slash', 'silent', 'mute', 'no sound'],
            unified: '1F515'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '📢',
            names: ['loudspeaker', 'announcement', 'megaphone', 'public address'],
            unified: '1F4E3'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '📣',
            names: ['megaphone', 'announcement', 'cheer', 'shout'],
            unified: '1F4E2'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '📯',
            names: ['postal horn', 'horn', 'announcement', 'mail'],
            unified: '1F4EF'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🔗',
            names: ['link', 'connection', 'chain', 'url'],
            unified: '1F517'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🔎',
            names: ['magnifying glass tilted left', 'search', 'magnify', 'zoom'],
            unified: '1F50E'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🔍',
            names: ['magnifying glass tilted right', 'search', 'magnify', 'zoom'],
            unified: '1F50D'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🔏',
            names: ['locked with pen', 'lock', 'security', 'encryption'],
            unified: '1F50F'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🔐',
            names: ['locked with key', 'lock', 'security', 'safety'],
            unified: '1F510'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🔒',
            names: ['locked', 'lock', 'security', 'safety'],
            unified: '1F512'
        },
        {
            type: 'SMILES_AND_PEOPLE',
            emoji: '🔓',
            names: ['unlocked', 'unlock', 'security', 'safety'],
            unified: '1F513'
        }
    ],
    ANIMALS_AND_NATURE: [
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐶',
            names: ['dog face', 'puppy', 'pet', 'canine'],
            unified: '1F436'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐱',
            names: ['cat face', 'kitten', 'pet', 'feline'],
            unified: '1F431'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐭',
            names: ['mouse face', 'rodent', 'small', 'cute'],
            unified: '1F42D'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐹',
            names: ['hamster face', 'pet', 'rodent', 'small'],
            unified: '1F439'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐰',
            names: ['rabbit face', 'bunny', 'cute', 'small'],
            unified: '1F430'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦊',
            names: ['fox face', 'sly', 'clever', 'wild'],
            unified: '1F98A'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐻',
            names: ['bear face', 'grizzly', 'wild', 'forest'],
            unified: '1F43B'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐼',
            names: ['panda face', 'cute', 'bamboo', 'wild'],
            unified: '1F43C'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦁',
            names: ['lion face', 'king', 'jungle', 'wild'],
            unified: '1F981'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐨',
            names: ['koala', 'cute', 'australia', 'wild'],
            unified: '1F428'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐯',
            names: ['tiger face', 'striped', 'wild', 'jungle'],
            unified: '1F42F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦄',
            names: ['unicorn', 'mythical', 'magical', 'fantasy'],
            unified: '1F984'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐮',
            names: ['cow face', 'bovine', 'farm', 'milk'],
            unified: '1F42E'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐷',
            names: ['pig face', 'oink', 'farm', 'pork'],
            unified: '1F437'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐽',
            names: ['pig nose', 'oink', 'snout', 'farm'],
            unified: '1F43D'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐸',
            names: ['frog face', 'amphibian', 'ribbit', 'pond'],
            unified: '1F438'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐵',
            names: ['monkey face', 'ape', 'primate', 'jungle'],
            unified: '1F435'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🙈',
            names: ['see-no-evil monkey', 'blind', 'monkey', 'no see'],
            unified: '1F648'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🙉',
            names: ['hear-no-evil monkey', 'deaf', 'monkey', 'no hear'],
            unified: '1F649'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🙊',
            names: ['speak-no-evil monkey', 'mute', 'monkey', 'no speak'],
            unified: '1F64A'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐒',
            names: ['monkey', 'ape', 'primate', 'jungle'],
            unified: '1F412'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐔',
            names: ['chicken', 'bird', 'cluck', 'poultry'],
            unified: '1F414'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐧',
            names: ['penguin', 'bird', 'arctic', 'cold'],
            unified: '1F427'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐦',
            names: ['bird', 'tweet', 'flying', 'feather'],
            unified: '1F426'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐤',
            names: ['baby chick', 'bird', 'yellow', 'cute'],
            unified: '1F424'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐣',
            names: ['hatching chick', 'bird', 'egg', 'spring'],
            unified: '1F423'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐥',
            names: ['front-facing baby chick', 'bird', 'cute', 'yellow'],
            unified: '1F425'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦆',
            names: ['duck', 'bird', 'quack', 'pond'],
            unified: '1F986'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦅',
            names: ['eagle', 'bird', 'freedom', 'america'],
            unified: '1F985'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦉',
            names: ['owl', 'bird', 'wise', 'night'],
            unified: '1F989'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦇',
            names: ['bat', 'vampire', 'night', 'flying'],
            unified: '1F987'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐺',
            names: ['wolf', 'howl', 'wild', 'forest'],
            unified: '1F43A'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐗',
            names: ['boar', 'wild pig', 'forest', 'wild'],
            unified: '1F417'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐴',
            names: ['horse', 'pony', 'riding', 'stable'],
            unified: '1F434'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐝',
            names: ['honeybee', 'insect', 'buzz', 'honey'],
            unified: '1F41D'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐛',
            names: ['bug', 'insect', 'creepy', 'caterpillar'],
            unified: '1F41B'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦋',
            names: ['butterfly', 'insect', 'colorful', 'flutter'],
            unified: '1F98B'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐌',
            names: ['snail', 'slow', 'shell', 'slimy'],
            unified: '1F40C'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐞',
            names: ['lady beetle', 'insect', 'bug', 'red'],
            unified: '1F41E'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐜',
            names: ['ant', 'insect', 'bug', 'small'],
            unified: '1F41C'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦗',
            names: ['cricket', 'insect', 'chirp', 'jump'],
            unified: '1F997'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🕷️',
            names: ['spider', 'insect', 'arachnid', 'web'],
            unified: '1F577-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🕸️',
            names: ['spider web', 'web', 'arachnid', 'insect'],
            unified: '1F578-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦂',
            names: ['scorpion', 'arachnid', 'sting', 'desert'],
            unified: '1F982'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐢',
            names: ['turtle', 'reptile', 'slow', 'shell'],
            unified: '1F422'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐍',
            names: ['snake', 'reptile', 'serpent', 'slither'],
            unified: '1F40D'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦎',
            names: ['lizard', 'reptile', 'gecko', 'scaly'],
            unified: '1F98E'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐙',
            names: ['octopus', 'sea', 'tentacles', 'marine'],
            unified: '1F419'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦑',
            names: ['squid', 'sea', 'tentacles', 'marine'],
            unified: '1F991'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦐',
            names: ['shrimp', 'sea', 'prawn', 'marine'],
            unified: '1F990'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦞',
            names: ['lobster', 'sea', 'crustacean', 'marine'],
            unified: '1F99E'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦀',
            names: ['crab', 'sea', 'crustacean', 'marine'],
            unified: '1F980'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐡',
            names: ['blowfish', 'sea', 'fish', 'puffer'],
            unified: '1F421'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐠',
            names: ['tropical fish', 'sea', 'colorful', 'marine'],
            unified: '1F420'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐟',
            names: ['fish', 'sea', 'swim', 'marine'],
            unified: '1F41F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐬',
            names: ['dolphin', 'sea', 'swim', 'marine'],
            unified: '1F42C'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐳',
            names: ['spouting whale', 'sea', 'swim', 'marine'],
            unified: '1F433'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐋',
            names: ['whale', 'sea', 'swim', 'marine'],
            unified: '1F40B'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦈',
            names: ['shark', 'sea', 'fish', 'marine'],
            unified: '1F988'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐊',
            names: ['crocodile', 'reptile', 'swamp', 'wild'],
            unified: '1F40A'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐅',
            names: ['tiger', 'wild', 'big cat', 'jungle'],
            unified: '1F405'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐆',
            names: ['leopard', 'wild', 'big cat', 'jungle'],
            unified: '1F406'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦓',
            names: ['zebra', 'stripe', 'wild', 'safari'],
            unified: '1F993'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦍',
            names: ['gorilla', 'ape', 'jungle', 'wild'],
            unified: '1F98D'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦧',
            names: ['orangutan', 'ape', 'jungle', 'wild'],
            unified: '1F9A7'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐘',
            names: ['elephant', 'large', 'trunk', 'wild'],
            unified: '1F418'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦛',
            names: ['hippopotamus', 'hippo', 'large', 'wild'],
            unified: '1F99B'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦏',
            names: ['rhinoceros', 'rhino', 'horn', 'wild'],
            unified: '1F98F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐪',
            names: ['dromedary camel', 'camel', 'desert', 'hump'],
            unified: '1F42A'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐫',
            names: ['bactrian camel', 'camel', 'desert', 'humps'],
            unified: '1F42B'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦒',
            names: ['giraffe', 'tall', 'wild', 'safari'],
            unified: '1F992'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐃',
            names: ['water buffalo', 'buffalo', 'horns', 'wild'],
            unified: '1F403'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐂',
            names: ['ox', 'bull', 'horns', 'farm'],
            unified: '1F402'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐄',
            names: ['cow', 'farm', 'milk', 'bovine'],
            unified: '1F404'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐎',
            names: ['horse', 'riding', 'stable', 'gallop'],
            unified: '1F40E'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐖',
            names: ['pig', 'farm', 'pork', 'oink'],
            unified: '1F416'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐏',
            names: ['ram', 'sheep', 'horns', 'wool'],
            unified: '1F40F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐑',
            names: ['ewe', 'sheep', 'wool', 'farm'],
            unified: '1F411'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦙',
            names: ['llama', 'alpaca', 'wool', 'farm'],
            unified: '1F999'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐐',
            names: ['goat', 'farm', 'beard', 'horns'],
            unified: '1F410'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦌',
            names: ['deer', 'antlers', 'wild', 'forest'],
            unified: '1F98C'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐕',
            names: ['dog', 'puppy', 'pet', 'canine'],
            unified: '1F415'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐩',
            names: ['poodle', 'dog', 'pet', 'canine'],
            unified: '1F429'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦮',
            names: ['guide dog', 'service dog', 'blind', 'helper'],
            unified: '1F9AE'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐕‍🦺',
            names: ['service dog', 'helper dog', 'assistant dog', 'aid'],
            unified: '1F415-200D-1F9BA'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐈',
            names: ['cat', 'feline', 'pet', 'kitten'],
            unified: '1F408'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐈‍⬛',
            names: ['black cat', 'halloween', 'feline', 'spooky'],
            unified: '1F408-200D-2B1B'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦢',
            names: ['swan', 'bird', 'graceful', 'water'],
            unified: '1F9A2'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦜',
            names: ['parrot', 'bird', 'colorful', 'talking'],
            unified: '1F99C'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦩',
            names: ['flamingo', 'bird', 'pink', 'tropical'],
            unified: '1F9A9'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦚',
            names: ['peacock', 'bird', 'colorful', 'feathers'],
            unified: '1F99A'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦤',
            names: ['dodo', 'bird', 'extinct', 'prehistoric'],
            unified: '1F9A4'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦨',
            names: ['skunk', 'animal', 'stink', 'smelly'],
            unified: '1F9A8'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦡',
            names: ['badger', 'animal', 'burrow', 'wild'],
            unified: '1F9A1'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦦',
            names: ['otter', 'animal', 'river', 'cute'],
            unified: '1F9A6'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦥',
            names: ['sloth', 'animal', 'slow', 'lazy'],
            unified: '1F9A5'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐇',
            names: ['rabbit', 'bunny', 'cute', 'small'],
            unified: '1F407'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐁',
            names: ['mouse', 'rodent', 'small', 'cute'],
            unified: '1F401'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐀',
            names: ['rat', 'rodent', 'small', 'pest'],
            unified: '1F400'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦝',
            names: ['raccoon', 'animal', 'wild', 'nocturnal'],
            unified: '1F99D'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🦫',
            names: ['beaver', 'animal', 'dam', 'wild'],
            unified: '1F9AB'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐉',
            names: ['dragon', 'mythical', 'fantasy', 'fire'],
            unified: '1F409'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🐲',
            names: ['dragon face', 'mythical', 'fantasy', 'fire'],
            unified: '1F432'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌵',
            names: ['cactus', 'plant', 'desert', 'spiky'],
            unified: '1F335'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🎄',
            names: ['christmas tree', 'holiday', 'festive', 'decorated'],
            unified: '1F384'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌲',
            names: ['evergreen tree', 'tree', 'forest', 'nature'],
            unified: '1F332'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌳',
            names: ['deciduous tree', 'tree', 'forest', 'nature'],
            unified: '1F333'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌴',
            names: ['palm tree', 'beach', 'tropical', 'vacation'],
            unified: '1F334'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌱',
            names: ['seedling', 'plant', 'growth', 'nature'],
            unified: '1F331'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌿',
            names: ['herb', 'plant', 'leaf', 'nature'],
            unified: '1F33F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '☘️',
            names: ['shamrock', 'plant', 'luck', 'irish'],
            unified: '2618-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🍀',
            names: ['four leaf clover', 'luck', 'irish', 'plant'],
            unified: '1F340'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🎍',
            names: ['pine decoration', 'bamboo', 'new year', 'japanese'],
            unified: '1F38D'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🍃',
            names: ['leaf fluttering in wind', 'nature', 'plant', 'breeze'],
            unified: '1F343'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🍂',
            names: ['fallen leaf', 'autumn', 'nature', 'season'],
            unified: '1F342'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🍁',
            names: ['maple leaf', 'canada', 'autumn', 'nature'],
            unified: '1F341'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🍄',
            names: ['mushroom', 'fungus', 'nature', 'toadstool'],
            unified: '1F344'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌾',
            names: ['sheaf of rice', 'plant', 'agriculture', 'grain'],
            unified: '1F33E'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '💐',
            names: ['bouquet', 'flowers', 'gift', 'romantic'],
            unified: '1F490'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌷',
            names: ['tulip', 'flower', 'spring', 'nature'],
            unified: '1F337'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌹',
            names: ['rose', 'flower', 'love', 'romance'],
            unified: '1F339'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌺',
            names: ['hibiscus', 'flower', 'tropical', 'nature'],
            unified: '1F33A'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌸',
            names: ['cherry blossom', 'flower', 'spring', 'nature'],
            unified: '1F338'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌼',
            names: ['blossom', 'flower', 'nature', 'spring'],
            unified: '1F33C'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌻',
            names: ['sunflower', 'flower', 'summer', 'nature'],
            unified: '1F33B'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌞',
            names: ['sun with face', 'sun', 'daytime', 'sunny'],
            unified: '1F31E'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌝',
            names: ['full moon with face', 'moon', 'night', 'sky'],
            unified: '1F31D'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌛',
            names: ['first quarter moon with face', 'moon', 'night', 'sky'],
            unified: '1F31B'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌜',
            names: ['last quarter moon with face', 'moon', 'night', 'sky'],
            unified: '1F31C'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌚',
            names: ['new moon with face', 'moon', 'night', 'sky'],
            unified: '1F31A'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌕',
            names: ['full moon', 'moon', 'night', 'sky'],
            unified: '1F315'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌖',
            names: ['waning gibbous moon', 'moon', 'night', 'sky'],
            unified: '1F316'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌗',
            names: ['last quarter moon', 'moon', 'night', 'sky'],
            unified: '1F317'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌘',
            names: ['waning crescent moon', 'moon', 'night', 'sky'],
            unified: '1F318'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌑',
            names: ['new moon', 'moon', 'night', 'sky'],
            unified: '1F311'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌒',
            names: ['waxing crescent moon', 'moon', 'night', 'sky'],
            unified: '1F312'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌓',
            names: ['first quarter moon', 'moon', 'night', 'sky'],
            unified: '1F313'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌔',
            names: ['waxing gibbous moon', 'moon', 'night', 'sky'],
            unified: '1F314'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌙',
            names: ['crescent moon', 'moon', 'night', 'sky'],
            unified: '1F319'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌎',
            names: ['globe showing Americas', 'earth', 'planet', 'world'],
            unified: '1F30E'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌍',
            names: ['globe showing Europe-Africa', 'earth', 'planet', 'world'],
            unified: '1F30D'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌏',
            names: ['globe showing Asia-Australia', 'earth', 'planet', 'world'],
            unified: '1F30F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🪐',
            names: ['ringed planet', 'planet', 'saturn', 'space'],
            unified: '1FA90'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '💫',
            names: ['dizzy', 'stars', 'disoriented', 'confused'],
            unified: '1F4AB'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '⭐',
            names: ['star', 'night', 'sky', 'shine'],
            unified: '2B50'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌟',
            names: ['glowing star', 'night', 'shine', 'bright'],
            unified: '1F31F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌠',
            names: ['shooting star', 'wish', 'night', 'sky'],
            unified: '1F320'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌌',
            names: ['milky way', 'galaxy', 'space', 'universe'],
            unified: '1F30C'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '☁️',
            names: ['cloud', 'sky', 'weather', 'overcast'],
            unified: '2601-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '⛅',
            names: ['sun behind cloud', 'partly cloudy', 'weather', 'overcast'],
            unified: '26C5'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '⛈️',
            names: ['cloud with lightning and rain', 'storm', 'thunderstorm', 'weather'],
            unified: '26C8-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌤️',
            names: ['sun behind small cloud', 'partly cloudy', 'weather', 'sky'],
            unified: '1F324-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌥️',
            names: ['sun behind large cloud', 'partly cloudy', 'weather', 'sky'],
            unified: '1F325-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌦️',
            names: ['sun behind rain cloud', 'showers', 'weather', 'rain'],
            unified: '1F326-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌧️',
            names: ['cloud with rain', 'rainy', 'weather', 'downpour'],
            unified: '1F327-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌨️',
            names: ['cloud with snow', 'snowy', 'weather', 'snowfall'],
            unified: '1F328-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌩️',
            names: ['cloud with lightning', 'storm', 'thunderstorm', 'weather'],
            unified: '1F329-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌪️',
            names: ['tornado', 'twister', 'cyclone', 'weather'],
            unified: '1F32A-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌫️',
            names: ['fog', 'mist', 'haze', 'weather'],
            unified: '1F32B-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌬️',
            names: ['wind face', 'windy', 'blustery', 'gusty'],
            unified: '1F32C-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌀',
            names: ['cyclone', 'swirl', 'twister', 'hurricane'],
            unified: '1F300'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌈',
            names: ['rainbow', 'colorful', 'arc', 'weather'],
            unified: '1F308'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌂',
            names: ['closed umbrella', 'rain', 'weather', 'wet'],
            unified: '1F302'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '☂️',
            names: ['umbrella', 'rain', 'weather', 'wet'],
            unified: '2602-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '☔',
            names: ['umbrella with rain drops', 'rain', 'weather', 'wet'],
            unified: '2614'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '⚡',
            names: ['high voltage', 'lightning', 'electric', 'zap'],
            unified: '26A1'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '❄️',
            names: ['snowflake', 'cold', 'winter', 'frozen'],
            unified: '2744-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '☃️',
            names: ['snowman', 'winter', 'frosty', 'snow'],
            unified: '2603-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '⛄',
            names: ['snowman without snow', 'winter', 'frosty', 'snow'],
            unified: '26C4'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '☄️',
            names: ['comet', 'space', 'asteroid', 'meteor'],
            unified: '2604-FE0F'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🔥',
            names: ['fire', 'flame', 'hot', 'burn'],
            unified: '1F525'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '💧',
            names: ['droplet', 'water', 'liquid', 'drip'],
            unified: '1F4A7'
        },
        {
            type: 'ANIMALS_AND_NATURE',
            emoji: '🌊',
            names: ['water wave', 'ocean', 'sea', 'wave'],
            unified: '1F30A'
        }
    ],
    FOOD_AND_DRINK: [
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍏',
            names: ['green apple', 'fruit', 'healthy', 'granny smith'],
            unified: '1F34F'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍎',
            names: ['red apple', 'fruit', 'healthy', 'fresh'],
            unified: '1F34E'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍐',
            names: ['pear', 'fruit', 'juicy', 'sweet'],
            unified: '1F350'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍊',
            names: ['tangerine', 'orange', 'fruit', 'citrus'],
            unified: '1F34A'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍋',
            names: ['lemon', 'fruit', 'citrus', 'sour'],
            unified: '1F34B'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍌',
            names: ['banana', 'fruit', 'yellow', 'tropical'],
            unified: '1F34C'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍉',
            names: ['watermelon', 'fruit', 'summer', 'refreshing'],
            unified: '1F349'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍇',
            names: ['grapes', 'fruit', 'vine', 'bunch'],
            unified: '1F347'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍓',
            names: ['strawberry', 'fruit', 'red', 'sweet'],
            unified: '1F353'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🫐',
            names: ['blueberries', 'fruit', 'berries', 'blue'],
            unified: '1FAD0'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍈',
            names: ['melon', 'fruit', 'sweet', 'refreshing'],
            unified: '1F348'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍒',
            names: ['cherries', 'fruit', 'red', 'sweet'],
            unified: '1F352'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍑',
            names: ['peach', 'fruit', 'juicy', 'sweet'],
            unified: '1F351'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍍',
            names: ['pineapple', 'fruit', 'tropical', 'juicy'],
            unified: '1F34D'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥭',
            names: ['mango', 'fruit', 'tropical', 'juicy'],
            unified: '1F96D'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥥',
            names: ['coconut', 'fruit', 'tropical', 'nut'],
            unified: '1F965'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥝',
            names: ['kiwi fruit', 'fruit', 'green', 'tropical'],
            unified: '1F95D'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍅',
            names: ['tomato', 'vegetable', 'fruit', 'red'],
            unified: '1F345'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍆',
            names: ['eggplant', 'vegetable', 'aubergine', 'purple'],
            unified: '1F346'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥑',
            names: ['avocado', 'fruit', 'green', 'healthy'],
            unified: '1F951'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥦',
            names: ['broccoli', 'vegetable', 'green', 'healthy'],
            unified: '1F966'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥬',
            names: ['leafy green', 'vegetable', 'salad', 'spinach'],
            unified: '1F96C'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥒',
            names: ['cucumber', 'vegetable', 'green', 'fresh'],
            unified: '1F952'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🌶️',
            names: ['hot pepper', 'spicy', 'red', 'vegetable'],
            unified: '1F336-FE0F'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🌽',
            names: ['ear of corn', 'vegetable', 'grain', 'yellow'],
            unified: '1F33D'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥕',
            names: ['carrot', 'vegetable', 'orange', 'root'],
            unified: '1F955'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🧄',
            names: ['garlic', 'vegetable', 'spice', 'bulb'],
            unified: '1F9C4'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🧅',
            names: ['onion', 'vegetable', 'spice', 'bulb'],
            unified: '1F9C5'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥔',
            names: ['potato', 'vegetable', 'root', 'starch'],
            unified: '1F954'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍠',
            names: ['roasted sweet potato', 'vegetable', 'root', 'starch'],
            unified: '1F360'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥐',
            names: ['croissant', 'bread', 'french', 'pastry'],
            unified: '1F950'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥯',
            names: ['bagel', 'bread', 'breakfast', 'pastry'],
            unified: '1F96F'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍞',
            names: ['bread', 'loaf', 'bakery', 'toast'],
            unified: '1F35E'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥖',
            names: ['baguette bread', 'french', 'bread', 'loaf'],
            unified: '1F956'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥨',
            names: ['pretzel', 'snack', 'bread', 'salty'],
            unified: '1F968'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🧀',
            names: ['cheese wedge', 'dairy', 'cheese', 'snack'],
            unified: '1F9C0'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥚',
            names: ['egg', 'breakfast', 'protein', 'chicken'],
            unified: '1F95A'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍳',
            names: ['cooking', 'egg', 'breakfast', 'fry'],
            unified: '1F373'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥞',
            names: ['pancakes', 'breakfast', 'maple syrup', 'stack'],
            unified: '1F95E'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥓',
            names: ['bacon', 'breakfast', 'pork', 'crispy'],
            unified: '1F953'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥩',
            names: ['cut of meat', 'steak', 'beef', 'protein'],
            unified: '1F969'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍗',
            names: ['poultry leg', 'chicken', 'meat', 'drumstick'],
            unified: '1F357'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍖',
            names: ['meat on bone', 'rib', 'protein', 'barbecue'],
            unified: '1F356'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🌭',
            names: ['hot dog', 'food', 'snack', 'sausage'],
            unified: '1F32D'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍔',
            names: ['hamburger', 'burger', 'fast food', 'snack'],
            unified: '1F354'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍟',
            names: ['french fries', 'potato', 'fast food', 'snack'],
            unified: '1F35F'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍕',
            names: ['pizza', 'fast food', 'cheese', 'slice'],
            unified: '1F355'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥪',
            names: ['sandwich', 'food', 'snack', 'lunch'],
            unified: '1F96A'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥙',
            names: ['stuffed flatbread', 'food', 'snack', 'pita'],
            unified: '1F959'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🌮',
            names: ['taco', 'food', 'snack', 'mexican'],
            unified: '1F32E'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🌯',
            names: ['burrito', 'food', 'snack', 'mexican'],
            unified: '1F32F'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥗',
            names: ['green salad', 'food', 'healthy', 'vegetarian'],
            unified: '1F957'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥘',
            names: ['shallow pan of food', 'cooking', 'paella', 'stew'],
            unified: '1F958'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍲',
            names: ['pot of food', 'cooking', 'stew', 'hotpot'],
            unified: '1F372'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍝',
            names: ['spaghetti', 'pasta', 'italian', 'noodles'],
            unified: '1F35D'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍜',
            names: ['steaming bowl', 'ramen', 'noodles', 'soup'],
            unified: '1F35C'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍛',
            names: ['curry rice', 'japanese', 'food', 'spicy'],
            unified: '1F35B'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍣',
            names: ['sushi', 'japanese', 'food', 'fish'],
            unified: '1F363'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍱',
            names: ['bento box', 'japanese', 'food', 'lunch'],
            unified: '1F371'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥟',
            names: ['dumpling', 'asian', 'food', 'gyoza'],
            unified: '1F95F'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥠',
            names: ['fortune cookie', 'asian', 'dessert', 'sweet'],
            unified: '1F960'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥡',
            names: ['takeout box', 'asian', 'food', 'chinese'],
            unified: '1F961'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍦',
            names: ['soft ice cream', 'dessert', 'sweet', 'cone'],
            unified: '1F366'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍧',
            names: ['shaved ice', 'dessert', 'sweet', 'cold'],
            unified: '1F367'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍨',
            names: ['ice cream', 'dessert', 'sweet', 'sundae'],
            unified: '1F368'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍩',
            names: ['doughnut', 'dessert', 'sweet', 'pastry'],
            unified: '1F369'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍪',
            names: ['cookie', 'dessert', 'sweet', 'biscuit'],
            unified: '1F36A'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🎂',
            names: ['birthday cake', 'dessert', 'sweet', 'celebration'],
            unified: '1F382'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍰',
            names: ['shortcake', 'dessert', 'sweet', 'strawberry'],
            unified: '1F370'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🧁',
            names: ['cupcake', 'dessert', 'sweet', 'frosting'],
            unified: '1F9C1'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥧',
            names: ['pie', 'dessert', 'sweet', 'baked'],
            unified: '1F967'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍫',
            names: ['chocolate bar', 'dessert', 'sweet', 'candy'],
            unified: '1F36B'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍬',
            names: ['candy', 'sweet', 'dessert', 'wrapper'],
            unified: '1F36C'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍭',
            names: ['lollipop', 'candy', 'sweet', 'dessert'],
            unified: '1F36D'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍮',
            names: ['custard', 'dessert', 'sweet', 'flan'],
            unified: '1F36E'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍯',
            names: ['honey pot', 'sweet', 'bees', 'honey'],
            unified: '1F36F'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍼',
            names: ['baby bottle', 'milk', 'drink', 'infant'],
            unified: '1F37C'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥛',
            names: ['glass of milk', 'dairy', 'drink', 'white'],
            unified: '1F95B'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '☕',
            names: ['hot beverage', 'coffee', 'tea', 'drink'],
            unified: '2615'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍵',
            names: ['teacup without handle', 'tea', 'drink', 'ceremony'],
            unified: '1F375'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍶',
            names: ['sake', 'japanese', 'drink', 'rice'],
            unified: '1F376'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍾',
            names: ['bottle with popping cork', 'champagne', 'celebration', 'drink'],
            unified: '1F37E'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍷',
            names: ['wine glass', 'drink', 'alcohol', 'red'],
            unified: '1F377'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍸',
            names: ['cocktail glass', 'drink', 'alcohol', 'martini'],
            unified: '1F378'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍹',
            names: ['tropical drink', 'cocktail', 'drink', 'beach'],
            unified: '1F379'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍺',
            names: ['beer mug', 'drink', 'alcohol', 'brew'],
            unified: '1F37A'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍻',
            names: ['clinking beer mugs', 'drink', 'alcohol', 'cheers'],
            unified: '1F37B'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥂',
            names: ['clinking glasses', 'toast', 'celebration', 'cheers'],
            unified: '1F942'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥃',
            names: ['tumbler glass', 'whiskey', 'drink', 'alcohol'],
            unified: '1F943'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥤',
            names: ['cup with straw', 'soda', 'drink', 'beverage'],
            unified: '1F964'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥢',
            names: ['chopsticks', 'asian', 'eating', 'utensil'],
            unified: '1F962'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🍴',
            names: ['fork and knife', 'utensils', 'cutlery', 'eating'],
            unified: '1F374'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🥄',
            names: ['spoon', 'utensil', 'eating', 'cutlery'],
            unified: '1F944'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🔪',
            names: ['kitchen knife', 'cooking', 'cutting', 'utensil'],
            unified: '1F52A'
        },
        {
            type: 'FOOD_AND_DRINK',
            emoji: '🏺',
            names: ['amphora', 'vase', 'jar', 'ancient'],
            unified: '1F3FA'
        }
    ],
    ACTIVITIES: [
        {
            type: 'ACTIVITIES',
            emoji: '🎃',
            names: ['jack-o-lantern', 'halloween', 'pumpkin', 'spooky'],
            unified: '1F383'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎄',
            names: ['christmas tree', 'holiday', 'festive', 'decorated'],
            unified: '1F384'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎆',
            names: ['fireworks', 'celebration', 'explosion', 'pyrotechnics'],
            unified: '1F386'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎇',
            names: ['sparkler', 'celebration', 'fireworks', 'sparkle'],
            unified: '1F387'
        },
        {
            type: 'ACTIVITIES',
            emoji: '✨',
            names: ['sparkles', 'glitter', 'shine', 'twinkle'],
            unified: '2728'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎈',
            names: ['balloon', 'party', 'celebration', 'floating'],
            unified: '1F388'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎉',
            names: ['party popper', 'celebration', 'congratulations', 'confetti'],
            unified: '1F389'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎊',
            names: ['confetti ball', 'celebration', 'party', 'festive'],
            unified: '1F38A'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎋',
            names: ['tanabata tree', 'festival', 'japan', 'bamboo'],
            unified: '1F38B'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎍',
            names: ['pine decoration', 'new year', 'japan', 'festive'],
            unified: '1F38D'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎎',
            names: ['japanese dolls', 'festival', 'japan', 'girls day'],
            unified: '1F38E'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎏',
            names: ['carp streamer', 'festival', 'japan', 'childrens day'],
            unified: '1F38F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎐',
            names: ['wind chime', 'japan', 'summer', 'breeze'],
            unified: '1F390'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎑',
            names: ['moon viewing ceremony', 'festival', 'japan', 'autumn'],
            unified: '1F391'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎀',
            names: ['ribbon', 'bow', 'gift', 'present'],
            unified: '1F380'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎁',
            names: ['wrapped gift', 'present', 'birthday', 'celebration'],
            unified: '1F381'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎗️',
            names: ['reminder ribbon', 'awareness', 'support', 'cause'],
            unified: '1F397-FE0F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎟️',
            names: ['admission tickets', 'tickets', 'entry', 'event'],
            unified: '1F39F-FE0F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎫',
            names: ['ticket', 'entry', 'event', 'admission'],
            unified: '1F3AB'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎖️',
            names: ['military medal', 'award', 'honor', 'decoration'],
            unified: '1F396-FE0F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🏆',
            names: ['trophy', 'award', 'winner', 'competition'],
            unified: '1F3C6'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🏅',
            names: ['sports medal', 'award', 'winner', 'achievement'],
            unified: '1F3C5'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🥇',
            names: ['1st place medal', 'gold', 'winner', 'competition'],
            unified: '1F947'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🥈',
            names: ['2nd place medal', 'silver', 'winner', 'competition'],
            unified: '1F948'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🥉',
            names: ['3rd place medal', 'bronze', 'winner', 'competition'],
            unified: '1F949'
        },
        {
            type: 'ACTIVITIES',
            emoji: '⚽',
            names: ['soccer ball', 'football', 'sport', 'game'],
            unified: '26BD'
        },
        {
            type: 'ACTIVITIES',
            emoji: '⚾',
            names: ['baseball', 'sport', 'game', 'ball'],
            unified: '26BE'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🥎',
            names: ['softball', 'sport', 'game', 'ball'],
            unified: '1F94E'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🏀',
            names: ['basketball', 'sport', 'game', 'ball'],
            unified: '1F3C0'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🏐',
            names: ['volleyball', 'sport', 'game', 'ball'],
            unified: '1F3D0'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🏈',
            names: ['american football', 'sport', 'game', 'ball'],
            unified: '1F3C8'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🏉',
            names: ['rugby football', 'sport', 'game', 'ball'],
            unified: '1F3C9'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎾',
            names: ['tennis', 'sport', 'game', 'ball'],
            unified: '1F3BE'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🥏',
            names: ['flying disc', 'frisbee', 'sport', 'game'],
            unified: '1F94F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎳',
            names: ['bowling', 'sport', 'game', 'pins'],
            unified: '1F3B3'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🏏',
            names: ['cricket game', 'sport', 'bat', 'ball'],
            unified: '1F3CF'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🏑',
            names: ['field hockey', 'sport', 'game', 'ball'],
            unified: '1F3D1'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🏒',
            names: ['ice hockey', 'sport', 'game', 'puck'],
            unified: '1F3D2'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🥍',
            names: ['lacrosse', 'sport', 'game', 'stick'],
            unified: '1F94D'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🏓',
            names: ['ping pong', 'table tennis', 'sport', 'game'],
            unified: '1F3D3'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🏸',
            names: ['badminton', 'shuttlecock', 'sport', 'game'],
            unified: '1F3F8'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🥊',
            names: ['boxing glove', 'fight', 'sport', 'boxing'],
            unified: '1F94A'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🥋',
            names: ['martial arts uniform', 'karate', 'judo', 'jiu jitsu'],
            unified: '1F94B'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🥅',
            names: ['goal net', 'sport', 'game', 'goal'],
            unified: '1F945'
        },
        {
            type: 'ACTIVITIES',
            emoji: '⛳',
            names: ['flag in hole', 'golf', 'sport', 'game'],
            unified: '26F3'
        },
        {
            type: 'ACTIVITIES',
            emoji: '⛸️',
            names: ['ice skate', 'skating', 'sport', 'winter'],
            unified: '26F8-FE0F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎣',
            names: ['fishing pole', 'fish', 'sport', 'bait'],
            unified: '1F3A3'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🤿',
            names: ['diving mask', 'scuba', 'snorkeling', 'underwater'],
            unified: '1F93F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎽',
            names: ['running shirt', 'sport', 'race', 'bib'],
            unified: '1F3BD'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎿',
            names: ['skis', 'sport', 'winter', 'snow'],
            unified: '1F3BF'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🛷',
            names: ['sled', 'winter', 'sport', 'snow'],
            unified: '1F6F7'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🥌',
            names: ['curling stone', 'sport', 'game', 'winter'],
            unified: '1F94C'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎯',
            names: ['bullseye', 'target', 'dart', 'game'],
            unified: '1F3AF'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎱',
            names: ['pool 8 ball', 'billiards', 'game', 'ball'],
            unified: '1F3B1'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎮',
            names: ['video game', 'controller', 'gaming', 'play'],
            unified: '1F3AE'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🕹️',
            names: ['joystick', 'video game', 'controller', 'arcade'],
            unified: '1F579-FE0F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎰',
            names: ['slot machine', 'casino', 'gambling', 'jackpot'],
            unified: '1F3B0'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎲',
            names: ['game die', 'dice', 'gambling', 'game'],
            unified: '1F3B2'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🧩',
            names: ['puzzle piece', 'puzzle', 'game', 'jigsaw'],
            unified: '1F9E9'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🧸',
            names: ['teddy bear', 'toy', 'plush', 'cute'],
            unified: '1F9F8'
        },
        {
            type: 'ACTIVITIES',
            emoji: '♠️',
            names: ['spade suit', 'card', 'poker', 'spades'],
            unified: '2660-FE0F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '♥️',
            names: ['heart suit', 'card', 'poker', 'hearts'],
            unified: '2665-FE0F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '♦️',
            names: ['diamond suit', 'card', 'poker', 'diamonds'],
            unified: '2666-FE0F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '♣️',
            names: ['club suit', 'card', 'poker', 'clubs'],
            unified: '2663-FE0F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '♟️',
            names: ['chess pawn', 'chess', 'game', 'strategy'],
            unified: '265F-FE0F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🃏',
            names: ['joker', 'card', 'playing cards', 'game'],
            unified: '1F0CF'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🀄',
            names: ['mahjong red dragon', 'mahjong', 'game', 'tile'],
            unified: '1F004'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎴',
            names: ['flower playing cards', 'cards', 'game', 'hanafuda'],
            unified: '1F3B4'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎭',
            names: ['performing arts', 'theater', 'drama', 'masks'],
            unified: '1F3AD'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🖼️',
            names: ['framed picture', 'art', 'painting', 'frame'],
            unified: '1F5BC-FE0F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎨',
            names: ['artist palette', 'art', 'painting', 'creativity'],
            unified: '1F3A8'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🧵',
            names: ['thread', 'sewing', 'textile', 'craft'],
            unified: '1F9F5'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🧶',
            names: ['yarn', 'knitting', 'craft', 'crochet'],
            unified: '1F9F6'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎼',
            names: ['musical score', 'music', 'notes', 'sheet music'],
            unified: '1F3BC'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎤',
            names: ['microphone', 'music', 'singing', 'karaoke'],
            unified: '1F3A4'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎧',
            names: ['headphone', 'music', 'audio', 'sound'],
            unified: '1F3A7'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎷',
            names: ['saxophone', 'music', 'instrument', 'jazz'],
            unified: '1F3B7'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎸',
            names: ['guitar', 'music', 'instrument', 'rock'],
            unified: '1F3B8'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎹',
            names: ['musical keyboard', 'piano', 'music', 'instrument'],
            unified: '1F3B9'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎺',
            names: ['trumpet', 'music', 'instrument', 'brass'],
            unified: '1F3BA'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎻',
            names: ['violin', 'music', 'instrument', 'string'],
            unified: '1F3BB'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🥁',
            names: ['drum', 'music', 'instrument', 'percussion'],
            unified: '1F941'
        },
        {
            type: 'ACTIVITIES',
            emoji: '📯',
            names: ['postal horn', 'music', 'instrument', 'brass'],
            unified: '1F4EF'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎵',
            names: ['musical note', 'music', 'melody', 'song'],
            unified: '1F3B5'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎶',
            names: ['musical notes', 'music', 'melody', 'song'],
            unified: '1F3B6'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎙️',
            names: ['studio microphone', 'recording', 'music', 'podcast'],
            unified: '1F399-FE0F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎚️',
            names: ['level slider', 'control', 'audio', 'music'],
            unified: '1F39A-FE0F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎛️',
            names: ['control knobs', 'settings', 'audio', 'music'],
            unified: '1F39B-FE0F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎬',
            names: ['clapper board', 'movie', 'film', 'production'],
            unified: '1F3AC'
        },
        {
            type: 'ACTIVITIES',
            emoji: '📽️',
            names: ['film projector', 'movie', 'cinema', 'projection'],
            unified: '1F4FD-FE0F'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🎥',
            names: ['movie camera', 'film', 'cinema', 'recording'],
            unified: '1F3A5'
        },
        {
            type: 'ACTIVITIES',
            emoji: '📺',
            names: ['television', 'TV', 'screen', 'broadcast'],
            unified: '1F4FA'
        },
        {
            type: 'ACTIVITIES',
            emoji: '📷',
            names: ['camera', 'photography', 'picture', 'photo'],
            unified: '1F4F7'
        },
        {
            type: 'ACTIVITIES',
            emoji: '📸',
            names: ['camera with flash', 'photography', 'picture', 'flash'],
            unified: '1F4F8'
        },
        {
            type: 'ACTIVITIES',
            emoji: '📹',
            names: ['video camera', 'recording', 'film', 'capture'],
            unified: '1F4F9'
        },
        {
            type: 'ACTIVITIES',
            emoji: '📼',
            names: ['videocassette', 'video', 'recording', 'tape'],
            unified: '1F4FC'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🔍',
            names: ['magnifying glass tilted left', 'search', 'zoom', 'investigate'],
            unified: '1F50D'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🔎',
            names: ['magnifying glass tilted right', 'search', 'zoom', 'investigate'],
            unified: '1F50E'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🔬',
            names: ['microscope', 'science', 'lab', 'experiment'],
            unified: '1F52C'
        },
        {
            type: 'ACTIVITIES',
            emoji: '🔭',
            names: ['telescope', 'astronomy', 'space', 'stargazing'],
            unified: '1F52D'
        },
        {
            type: 'ACTIVITIES',
            emoji: '📡',
            names: ['satellite antenna', 'communication', 'signal', 'broadcast'],
            unified: '1F4E1'
        }
    ],
    TRAVEL_AND_PLACES: [
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🌍',
            names: ['globe showing Europe-Africa', 'earth', 'planet', 'world'],
            unified: '1F30D'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🌎',
            names: ['globe showing Americas', 'earth', 'planet', 'world'],
            unified: '1F30E'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🌏',
            names: ['globe showing Asia-Australia', 'earth', 'planet', 'world'],
            unified: '1F30F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🗺️',
            names: ['world map', 'map', 'travel', 'geography'],
            unified: '1F5FA-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🗾',
            names: ['map of Japan', 'japan', 'map', 'geography'],
            unified: '1F5FE'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🧭',
            names: ['compass', 'navigation', 'direction', 'travel'],
            unified: '1F9ED'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏔️',
            names: ['snow-capped mountain', 'mountain', 'snow', 'peak'],
            unified: '1F3D4-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '⛰️',
            names: ['mountain', 'peak', 'rocky', 'terrain'],
            unified: '26F0-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🌋',
            names: ['volcano', 'lava', 'eruption', 'mountain'],
            unified: '1F30B'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🗻',
            names: ['mount fuji', 'japan', 'mountain', 'peak'],
            unified: '1F5FB'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏕️',
            names: ['camping', 'tent', 'outdoor', 'nature'],
            unified: '1F3D5-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏖️',
            names: ['beach with umbrella', 'beach', 'umbrella', 'sand'],
            unified: '1F3D6-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏜️',
            names: ['desert', 'sand', 'hot', 'arid'],
            unified: '1F3DC-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏝️',
            names: ['desert island', 'island', 'beach', 'tropical'],
            unified: '1F3DD-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏞️',
            names: ['national park', 'park', 'nature', 'outdoor'],
            unified: '1F3DE-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏟️',
            names: ['stadium', 'arena', 'sports', 'events'],
            unified: '1F3DF-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏛️',
            names: ['classical building', 'museum', 'architecture', 'history'],
            unified: '1F3DB-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏗️',
            names: ['building construction', 'construction', 'building', 'crane'],
            unified: '1F3D7-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🧱',
            names: ['brick', 'building', 'construction', 'wall'],
            unified: '1F9F1'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏘️',
            names: ['houses', 'homes', 'neighborhood', 'residential'],
            unified: '1F3D8-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏚️',
            names: ['derelict house', 'abandoned', 'building', 'ruins'],
            unified: '1F3DA-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏠',
            names: ['house', 'home', 'building', 'residential'],
            unified: '1F3E0'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏡',
            names: ['house with garden', 'home', 'building', 'residential'],
            unified: '1F3E1'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏢',
            names: ['office building', 'office', 'corporate', 'workplace'],
            unified: '1F3E2'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏣',
            names: ['japanese post office', 'post office', 'building', 'mail'],
            unified: '1F3E3'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏤',
            names: ['post office', 'mail', 'building', 'postal'],
            unified: '1F3E4'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏥',
            names: ['hospital', 'medical', 'healthcare', 'building'],
            unified: '1F3E5'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏦',
            names: ['bank', 'money', 'finance', 'building'],
            unified: '1F3E6'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏨',
            names: ['hotel', 'accommodation', 'building', 'hospitality'],
            unified: '1F3E8'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏪',
            names: ['convenience store', 'shop', 'retail', 'store'],
            unified: '1F3EA'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏫',
            names: ['school', 'education', 'building', 'learning'],
            unified: '1F3EB'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏩',
            names: ['love hotel', 'hotel', 'romance', 'accommodation'],
            unified: '1F3E9'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '💒',
            names: ['wedding', 'chapel', 'marriage', 'ceremony'],
            unified: '1F492'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🕌',
            names: ['mosque', 'religion', 'islam', 'building'],
            unified: '1F54C'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🛕',
            names: ['hindu temple', 'religion', 'hinduism', 'building'],
            unified: '1F6D5'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🕍',
            names: ['synagogue', 'religion', 'judaism', 'building'],
            unified: '1F54D'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '⛪',
            names: ['church', 'religion', 'christianity', 'building'],
            unified: '26EA'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🕋',
            names: ['kaaba', 'islam', 'mecca', 'building'],
            unified: '1F54B'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🛖',
            names: ['hut', 'house', 'building', 'primitive'],
            unified: '1F6D6'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '⛩️',
            names: ['shinto shrine', 'religion', 'japan', 'temple'],
            unified: '26E9-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🗽',
            names: ['statue of liberty', 'liberty', 'america', 'new york'],
            unified: '1F5FD'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🛤️',
            names: ['railway track', 'railroad', 'train', 'tracks'],
            unified: '1F6E4-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🛣️',
            names: ['motorway', 'highway', 'road', 'travel'],
            unified: '1F6E3-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🛳️',
            names: ['passenger ship', 'cruise', 'boat', 'ocean'],
            unified: '1F6F3-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '⛴️',
            names: ['ferry', 'boat', 'ship', 'water'],
            unified: '26F4-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚢',
            names: ['ship', 'boat', 'cruise', 'ocean'],
            unified: '1F6A2'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '⚓',
            names: ['anchor', 'boat', 'ship', 'ocean'],
            unified: '2693'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '⛵',
            names: ['sailboat', 'boat', 'sailing', 'water'],
            unified: '26F5'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🛶',
            names: ['canoe', 'boat', 'paddle', 'water'],
            unified: '1F6F6'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚤',
            names: ['speedboat', 'boat', 'fast', 'water'],
            unified: '1F6A4'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🛥️',
            names: ['motor boat', 'boat', 'water', 'speed'],
            unified: '1F6E5-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🛩️',
            names: ['small airplane', 'aircraft', 'plane', 'flight'],
            unified: '1F6E9-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '✈️',
            names: ['airplane', 'aircraft', 'flight', 'travel'],
            unified: '2708-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🛫',
            names: ['airplane departure', 'takeoff', 'flight', 'travel'],
            unified: '1F6EB'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🛬',
            names: ['airplane arrival', 'landing', 'flight', 'travel'],
            unified: '1F6EC'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '💺',
            names: ['seat', 'airplane', 'bus', 'chair'],
            unified: '1F4BA'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚁',
            names: ['helicopter', 'aircraft', 'flight', 'chopper'],
            unified: '1F681'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚟',
            names: ['suspension railway', 'train', 'railway', 'cable'],
            unified: '1F69F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚠',
            names: ['mountain cableway', 'train', 'railway', 'cable'],
            unified: '1F6A0'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚡',
            names: ['aerial tramway', 'train', 'railway', 'cable'],
            unified: '1F6A1'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚂',
            names: ['locomotive', 'train', 'railway', 'steam'],
            unified: '1F682'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚋',
            names: ['tram car', 'train', 'railway', 'streetcar'],
            unified: '1F68B'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚆',
            names: ['train', 'railway', 'transport', 'commuter'],
            unified: '1F686'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚊',
            names: ['tram', 'train', 'railway', 'streetcar'],
            unified: '1F68A'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚉',
            names: ['station', 'train', 'railway', 'platform'],
            unified: '1F689'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚝',
            names: ['monorail', 'train', 'railway', 'elevated'],
            unified: '1F69D'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚄',
            names: ['high-speed train', 'railway', 'bullet train', 'fast'],
            unified: '1F684'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚅',
            names: ['bullet train', 'railway', 'fast', 'shinkansen'],
            unified: '1F685'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚈',
            names: ['light rail', 'train', 'railway', 'commuter'],
            unified: '1F688'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚞',
            names: ['mountain railway', 'train', 'railway', 'mountain'],
            unified: '1F69E'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🛸',
            names: ['flying saucer', 'UFO', 'spacecraft', 'alien'],
            unified: '1F6F8'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚀',
            names: ['rocket', 'space', 'launch', 'NASA'],
            unified: '1F680'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚗',
            names: ['automobile', 'car', 'vehicle', 'sedan'],
            unified: '1F697'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚕',
            names: ['taxi', 'cab', 'vehicle', 'yellow'],
            unified: '1F695'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚙',
            names: ['sport utility vehicle', 'SUV', 'vehicle', 'jeep'],
            unified: '1F699'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚌',
            names: ['bus', 'vehicle', 'transport', 'commuter'],
            unified: '1F68C'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚎',
            names: ['trolleybus', 'bus', 'electric', 'vehicle'],
            unified: '1F68E'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏎️',
            names: ['racing car', 'vehicle', 'speed', 'race'],
            unified: '1F3CE-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚓',
            names: ['police car', 'vehicle', 'law enforcement', 'police'],
            unified: '1F693'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚑',
            names: ['ambulance', 'emergency', 'vehicle', 'medical'],
            unified: '1F691'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚒',
            names: ['fire engine', 'vehicle', 'emergency', 'fire truck'],
            unified: '1F692'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚐',
            names: ['minivan', 'vehicle', 'transport', 'van'],
            unified: '1F690'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚚',
            names: ['delivery truck', 'vehicle', 'transport', 'shipping'],
            unified: '1F69A'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚛',
            names: ['articulated lorry', 'vehicle', 'transport', 'truck'],
            unified: '1F69B'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚜',
            names: ['tractor', 'vehicle', 'farm', 'agriculture'],
            unified: '1F69C'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏍️',
            names: ['motorcycle', 'bike', 'vehicle', 'speed'],
            unified: '1F3CD-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🛵',
            names: ['motor scooter', 'vehicle', 'scooter', 'moped'],
            unified: '1F6F5'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚲',
            names: ['bicycle', 'bike', 'vehicle', 'pedal'],
            unified: '1F6B2'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🛴',
            names: ['kick scooter', 'vehicle', 'scooter', 'manual'],
            unified: '1F6F4'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚏',
            names: ['bus stop', 'transport', 'commuter', 'sign'],
            unified: '1F68F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '⛽',
            names: ['fuel pump', 'gas', 'station', 'petrol'],
            unified: '26FD'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚨',
            names: ['police car light', 'emergency', 'alert', 'siren'],
            unified: '1F6A8'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚥',
            names: ['horizontal traffic light', 'stoplight', 'traffic', 'signal'],
            unified: '1F6A5'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚦',
            names: ['vertical traffic light', 'stoplight', 'traffic', 'signal'],
            unified: '1F6A6'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🛑',
            names: ['stop sign', 'stop', 'traffic', 'signal'],
            unified: '1F6D1'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚧',
            names: ['construction', 'road', 'barrier', 'detour'],
            unified: '1F6A7'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '⚠️',
            names: ['warning', 'caution', 'alert', 'triangle'],
            unified: '26A0-FE0F'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚘',
            names: ['oncoming automobile', 'car', 'vehicle', 'driving'],
            unified: '1F698'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚍',
            names: ['oncoming bus', 'bus', 'vehicle', 'transport'],
            unified: '1F68D'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚔',
            names: ['oncoming police car', 'police', 'vehicle', 'law'],
            unified: '1F694'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🚖',
            names: ['oncoming taxi', 'taxi', 'vehicle', 'driving'],
            unified: '1F696'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🗿',
            names: ['moai', 'statue', 'easter island', 'monument'],
            unified: '1F5FF'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🗼',
            names: ['tokyo tower', 'japan', 'landmark', 'monument'],
            unified: '1F5FC'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏰',
            names: ['castle', 'medieval', 'fortress', 'building'],
            unified: '1F3F0'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🏯',
            names: ['japanese castle', 'japan', 'fortress', 'building'],
            unified: '1F3EF'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🎢',
            names: ['roller coaster', 'amusement park', 'ride', 'thrill'],
            unified: '1F3A2'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🎡',
            names: ['ferris wheel', 'amusement park', 'ride', 'wheel'],
            unified: '1F3A1'
        },
        {
            type: 'TRAVEL_AND_PLACES',
            emoji: '🎠',
            names: ['carousel horse', 'amusement park', 'ride', 'horse'],
            unified: '1F3A0'
        }
    ],
    OBJECTS: [
        {
            type: 'OBJECTS',
            emoji: '⌚',
            names: ['watch', 'timepiece', 'wristwatch', 'accessory'],
            unified: '231A'
        },
        {
            type: 'OBJECTS',
            emoji: '📱',
            names: ['mobile phone', 'cell phone', 'smartphone', 'device'],
            unified: '1F4F1'
        },
        {
            type: 'OBJECTS',
            emoji: '📲',
            names: ['mobile phone with arrow', 'sending', 'receiving', 'message'],
            unified: '1F4F2'
        },
        {
            type: 'OBJECTS',
            emoji: '💻',
            names: ['laptop', 'computer', 'notebook', 'device'],
            unified: '1F4BB'
        },
        {
            type: 'OBJECTS',
            emoji: '⌨️',
            names: ['keyboard', 'typing', 'input', 'computer'],
            unified: '2328-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🖥️',
            names: ['desktop computer', 'monitor', 'screen', 'device'],
            unified: '1F5A5-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🖨️',
            names: ['printer', 'print', 'device', 'office'],
            unified: '1F5A8-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🖱️',
            names: ['computer mouse', 'cursor', 'device', 'input'],
            unified: '1F5B1-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🖲️',
            names: ['trackball', 'input', 'device', 'computer'],
            unified: '1F5B2-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '💽',
            names: ['computer disk', 'floppy disk', 'data', 'storage'],
            unified: '1F4BD'
        },
        {
            type: 'OBJECTS',
            emoji: '💾',
            names: ['floppy disk', 'save', 'data', 'storage'],
            unified: '1F4BE'
        },
        {
            type: 'OBJECTS',
            emoji: '💿',
            names: ['optical disk', 'CD', 'data', 'storage'],
            unified: '1F4BF'
        },
        {
            type: 'OBJECTS',
            emoji: '📀',
            names: ['DVD', 'optical disk', 'video', 'data'],
            unified: '1F4C0'
        },
        {
            type: 'OBJECTS',
            emoji: '📼',
            names: ['videocassette', 'video', 'recording', 'tape'],
            unified: '1F4FC'
        },
        {
            type: 'OBJECTS',
            emoji: '📷',
            names: ['camera', 'photography', 'picture', 'photo'],
            unified: '1F4F7'
        },
        {
            type: 'OBJECTS',
            emoji: '📸',
            names: ['camera with flash', 'photography', 'picture', 'flash'],
            unified: '1F4F8'
        },
        {
            type: 'OBJECTS',
            emoji: '📹',
            names: ['video camera', 'recording', 'film', 'capture'],
            unified: '1F4F9'
        },
        {
            type: 'OBJECTS',
            emoji: '🎥',
            names: ['movie camera', 'film', 'cinema', 'recording'],
            unified: '1F3A5'
        },
        {
            type: 'OBJECTS',
            emoji: '📽️',
            names: ['film projector', 'movie', 'cinema', 'projection'],
            unified: '1F4FD-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🎞️',
            names: ['film frames', 'cinema', 'movie', 'film'],
            unified: '1F39E-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '📞',
            names: ['telephone receiver', 'phone', 'communication', 'call'],
            unified: '1F4DE'
        },
        {
            type: 'OBJECTS',
            emoji: '☎️',
            names: ['telephone', 'landline', 'communication', 'call'],
            unified: '260E-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '📟',
            names: ['pager', 'communication', 'device', 'beeper'],
            unified: '1F4DF'
        },
        {
            type: 'OBJECTS',
            emoji: '📠',
            names: ['fax machine', 'fax', 'communication', 'office'],
            unified: '1F4E0'
        },
        {
            type: 'OBJECTS',
            emoji: '📺',
            names: ['television', 'TV', 'screen', 'broadcast'],
            unified: '1F4FA'
        },
        {
            type: 'OBJECTS',
            emoji: '📻',
            names: ['radio', 'broadcast', 'audio', 'sound'],
            unified: '1F4FB'
        },
        {
            type: 'OBJECTS',
            emoji: '🎙️',
            names: ['studio microphone', 'recording', 'music', 'podcast'],
            unified: '1F399-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🎚️',
            names: ['level slider', 'control', 'audio', 'music'],
            unified: '1F39A-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🎛️',
            names: ['control knobs', 'settings', 'audio', 'music'],
            unified: '1F39B-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '⏱️',
            names: ['stopwatch', 'timer', 'time', 'clock'],
            unified: '23F1-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '⏲️',
            names: ['timer clock', 'kitchen timer', 'time', 'countdown'],
            unified: '23F2-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '⏰',
            names: ['alarm clock', 'wake up', 'time', 'morning'],
            unified: '23F0'
        },
        {
            type: 'OBJECTS',
            emoji: '🕰️',
            names: ['mantelpiece clock', 'time', 'clock', 'antique'],
            unified: '1F570-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '⏳',
            names: ['hourglass not done', 'time', 'sand', 'countdown'],
            unified: '23F3'
        },
        {
            type: 'OBJECTS',
            emoji: '⌛',
            names: ['hourglass done', 'time', 'sand', 'finished'],
            unified: '231B'
        },
        {
            type: 'OBJECTS',
            emoji: '📡',
            names: ['satellite antenna', 'communication', 'signal', 'broadcast'],
            unified: '1F4E1'
        },
        {
            type: 'OBJECTS',
            emoji: '🔋',
            names: ['battery', 'power', 'charge', 'energy'],
            unified: '1F50B'
        },
        {
            type: 'OBJECTS',
            emoji: '🔌',
            names: ['electric plug', 'power', 'socket', 'cord'],
            unified: '1F50C'
        },
        {
            type: 'OBJECTS',
            emoji: '💡',
            names: ['light bulb', 'idea', 'light', 'bright'],
            unified: '1F4A1'
        },
        {
            type: 'OBJECTS',
            emoji: '🔦',
            names: ['flashlight', 'light', 'torch', 'bright'],
            unified: '1F526'
        },
        {
            type: 'OBJECTS',
            emoji: '🕯️',
            names: ['candle', 'light', 'flame', 'wax'],
            unified: '1F56F-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🪔',
            names: ['diya lamp', 'light', 'oil', 'hindu'],
            unified: '1FA94'
        },
        {
            type: 'OBJECTS',
            emoji: '📔',
            names: ['notebook with decorative cover', 'journal', 'diary', 'book'],
            unified: '1F4D4'
        },
        {
            type: 'OBJECTS',
            emoji: '📕',
            names: ['closed book', 'book', 'read', 'cover'],
            unified: '1F4D5'
        },
        {
            type: 'OBJECTS',
            emoji: '📖',
            names: ['open book', 'reading', 'literature', 'pages'],
            unified: '1F4D6'
        },
        {
            type: 'OBJECTS',
            emoji: '📗',
            names: ['green book', 'book', 'read', 'cover'],
            unified: '1F4D7'
        },
        {
            type: 'OBJECTS',
            emoji: '📘',
            names: ['blue book', 'book', 'read', 'cover'],
            unified: '1F4D8'
        },
        {
            type: 'OBJECTS',
            emoji: '📙',
            names: ['orange book', 'book', 'read', 'cover'],
            unified: '1F4D9'
        },
        {
            type: 'OBJECTS',
            emoji: '📚',
            names: ['books', 'reading', 'literature', 'library'],
            unified: '1F4DA'
        },
        {
            type: 'OBJECTS',
            emoji: '📓',
            names: ['notebook', 'journal', 'diary', 'book'],
            unified: '1F4D3'
        },
        {
            type: 'OBJECTS',
            emoji: '📒',
            names: ['ledger', 'bookkeeping', 'accounting', 'records'],
            unified: '1F4D2'
        },
        {
            type: 'OBJECTS',
            emoji: '📃',
            names: ['page with curl', 'document', 'paper', 'print'],
            unified: '1F4C3'
        },
        {
            type: 'OBJECTS',
            emoji: '📜',
            names: ['scroll', 'document', 'paper', 'ancient'],
            unified: '1F4DC'
        },
        {
            type: 'OBJECTS',
            emoji: '📄',
            names: ['page facing up', 'document', 'paper', 'print'],
            unified: '1F4C4'
        },
        {
            type: 'OBJECTS',
            emoji: '📰',
            names: ['newspaper', 'news', 'press', 'media'],
            unified: '1F4F0'
        },
        {
            type: 'OBJECTS',
            emoji: '🗞️',
            names: ['rolled-up newspaper', 'news', 'press', 'media'],
            unified: '1F5DE-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '📑',
            names: ['bookmark tabs', 'organize', 'pages', 'tabs'],
            unified: '1F4D1'
        },
        {
            type: 'OBJECTS',
            emoji: '🔖',
            names: ['bookmark', 'reading', 'mark', 'save'],
            unified: '1F516'
        },
        {
            type: 'OBJECTS',
            emoji: '🏷️',
            names: ['label', 'tag', 'identification', 'price'],
            unified: '1F3F7-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '💰',
            names: ['money bag', 'cash', 'wealth', 'currency'],
            unified: '1F4B0'
        },
        {
            type: 'OBJECTS',
            emoji: '🪙',
            names: ['coin', 'money', 'currency', 'metal'],
            unified: '1FA99'
        },
        {
            type: 'OBJECTS',
            emoji: '💴',
            names: ['yen banknote', 'money', 'currency', 'japanese'],
            unified: '1F4B4'
        },
        {
            type: 'OBJECTS',
            emoji: '💵',
            names: ['dollar banknote', 'money', 'currency', 'cash'],
            unified: '1F4B5'
        },
        {
            type: 'OBJECTS',
            emoji: '💶',
            names: ['euro banknote', 'money', 'currency', 'europe'],
            unified: '1F4B6'
        },
        {
            type: 'OBJECTS',
            emoji: '💷',
            names: ['pound banknote', 'money', 'currency', 'british'],
            unified: '1F4B7'
        },
        {
            type: 'OBJECTS',
            emoji: '💸',
            names: ['money with wings', 'cash', 'currency', 'wealth'],
            unified: '1F4B8'
        },
        {
            type: 'OBJECTS',
            emoji: '💳',
            names: ['credit card', 'payment', 'bank', 'money'],
            unified: '1F4B3'
        },
        {
            type: 'OBJECTS',
            emoji: '🧾',
            names: ['receipt', 'payment', 'bill', 'invoice'],
            unified: '1F9FE'
        },
        {
            type: 'OBJECTS',
            emoji: '💹',
            names: ['chart increasing with yen', 'graph', 'money', 'growth'],
            unified: '1F4B9'
        },
        {
            type: 'OBJECTS',
            emoji: '✉️',
            names: ['envelope', 'mail', 'message', 'letter'],
            unified: '2709-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '📧',
            names: ['e-mail', 'message', 'communication', 'electronic'],
            unified: '1F4E7'
        },
        {
            type: 'OBJECTS',
            emoji: '📨',
            names: ['incoming envelope', 'mail', 'message', 'letter'],
            unified: '1F4E8'
        },
        {
            type: 'OBJECTS',
            emoji: '📩',
            names: ['envelope with arrow', 'mail', 'message', 'send'],
            unified: '1F4E9'
        },
        {
            type: 'OBJECTS',
            emoji: '📤',
            names: ['outbox tray', 'mail', 'send', 'message'],
            unified: '1F4E4'
        },
        {
            type: 'OBJECTS',
            emoji: '📥',
            names: ['inbox tray', 'mail', 'receive', 'message'],
            unified: '1F4E5'
        },
        {
            type: 'OBJECTS',
            emoji: '📦',
            names: ['package', 'box', 'parcel', 'delivery'],
            unified: '1F4E6'
        },
        {
            type: 'OBJECTS',
            emoji: '📫',
            names: ['closed mailbox with raised flag', 'mail', 'post', 'message'],
            unified: '1F4EB'
        },
        {
            type: 'OBJECTS',
            emoji: '📪',
            names: ['closed mailbox with lowered flag', 'mail', 'post', 'message'],
            unified: '1F4EA'
        },
        {
            type: 'OBJECTS',
            emoji: '📬',
            names: ['open mailbox with raised flag', 'mail', 'post', 'message'],
            unified: '1F4EC'
        },
        {
            type: 'OBJECTS',
            emoji: '📭',
            names: ['open mailbox with lowered flag', 'mail', 'post', 'message'],
            unified: '1F4ED'
        },
        {
            type: 'OBJECTS',
            emoji: '📮',
            names: ['postbox', 'mail', 'letter', 'send'],
            unified: '1F4EE'
        },
        {
            type: 'OBJECTS',
            emoji: '📯',
            names: ['postal horn', 'mail', 'trumpet', 'instrument'],
            unified: '1F4EF'
        },
        {
            type: 'OBJECTS',
            emoji: '📋',
            names: ['clipboard', 'note', 'document', 'write'],
            unified: '1F4CB'
        },
        {
            type: 'OBJECTS',
            emoji: '📁',
            names: ['file folder', 'folder', 'document', 'organize'],
            unified: '1F4C1'
        },
        {
            type: 'OBJECTS',
            emoji: '📂',
            names: ['open file folder', 'folder', 'document', 'organize'],
            unified: '1F4C2'
        },
        {
            type: 'OBJECTS',
            emoji: '🗂️',
            names: ['card index dividers', 'organize', 'tabs', 'document'],
            unified: '1F5C2-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🗃️',
            names: ['card file box', 'organize', 'storage', 'document'],
            unified: '1F5C3-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🗄️',
            names: ['file cabinet', 'storage', 'organize', 'documents'],
            unified: '1F5C4-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🗑️',
            names: ['wastebasket', 'trash', 'garbage', 'bin'],
            unified: '1F5D1-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🗒️',
            names: ['spiral notepad', 'notes', 'writing', 'organize'],
            unified: '1F5D2-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🗓️',
            names: ['spiral calendar', 'calendar', 'date', 'schedule'],
            unified: '1F5D3-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '📅',
            names: ['calendar', 'date', 'schedule', 'month'],
            unified: '1F4C5'
        },
        {
            type: 'OBJECTS',
            emoji: '📆',
            names: ['tear-off calendar', 'date', 'schedule', 'month'],
            unified: '1F4C6'
        },
        {
            type: 'OBJECTS',
            emoji: '📇',
            names: ['card index', 'contacts', 'organize', 'file'],
            unified: '1F4C7'
        },
        {
            type: 'OBJECTS',
            emoji: '📈',
            names: ['chart increasing', 'graph', 'growth', 'data'],
            unified: '1F4C8'
        },
        {
            type: 'OBJECTS',
            emoji: '📉',
            names: ['chart decreasing', 'graph', 'decline', 'data'],
            unified: '1F4C9'
        },
        {
            type: 'OBJECTS',
            emoji: '📊',
            names: ['bar chart', 'graph', 'data', 'statistics'],
            unified: '1F4CA'
        },
        {
            type: 'OBJECTS',
            emoji: '📌',
            names: ['pushpin', 'pin', 'location', 'point'],
            unified: '1F4CC'
        },
        {
            type: 'OBJECTS',
            emoji: '📍',
            names: ['round pushpin', 'pin', 'location', 'point'],
            unified: '1F4CD'
        },
        {
            type: 'OBJECTS',
            emoji: '📎',
            names: ['paperclip', 'attachment', 'office', 'clip'],
            unified: '1F4CE'
        },
        {
            type: 'OBJECTS',
            emoji: '🖇️',
            names: ['linked paperclips', 'attachment', 'office', 'clip'],
            unified: '1F587-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '📏',
            names: ['straight ruler', 'measure', 'length', 'tool'],
            unified: '1F4CF'
        },
        {
            type: 'OBJECTS',
            emoji: '📐',
            names: ['triangular ruler', 'measure', 'angle', 'tool'],
            unified: '1F4D0'
        },
        {
            type: 'OBJECTS',
            emoji: '✂️',
            names: ['scissors', 'cut', 'tool', 'clip'],
            unified: '2702-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🔒',
            names: ['locked', 'security', 'closed', 'secure'],
            unified: '1F512'
        },
        {
            type: 'OBJECTS',
            emoji: '🔓',
            names: ['unlocked', 'open', 'security', 'unlock'],
            unified: '1F513'
        },
        {
            type: 'OBJECTS',
            emoji: '🔏',
            names: ['locked with pen', 'security', 'privacy', 'write'],
            unified: '1F50F'
        },
        {
            type: 'OBJECTS',
            emoji: '🔐',
            names: ['locked with key', 'security', 'privacy', 'unlock'],
            unified: '1F510'
        },
        {
            type: 'OBJECTS',
            emoji: '🔑',
            names: ['key', 'lock', 'unlock', 'security'],
            unified: '1F511'
        },
        {
            type: 'OBJECTS',
            emoji: '🗝️',
            names: ['old key', 'vintage', 'lock', 'unlock'],
            unified: '1F5DD-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🔨',
            names: ['hammer', 'tool', 'build', 'fix'],
            unified: '1F528'
        },
        {
            type: 'OBJECTS',
            emoji: '⛏️',
            names: ['pick', 'tool', 'mining', 'dig'],
            unified: '26CF-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '⚒️',
            names: ['hammer and pick', 'tool', 'build', 'fix'],
            unified: '2692-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🛠️',
            names: ['hammer and wrench', 'tool', 'build', 'fix'],
            unified: '1F6E0-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🗡️',
            names: ['dagger', 'knife', 'weapon', 'fight'],
            unified: '1F5E1-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '⚔️',
            names: ['crossed swords', 'weapon', 'fight', 'battle'],
            unified: '2694-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🔫',
            names: ['water pistol', 'toy gun', 'weapon', 'water'],
            unified: '1F52B'
        },
        {
            type: 'OBJECTS',
            emoji: '🪓',
            names: ['axe', 'tool', 'woodcutting', 'chop'],
            unified: '1FA93'
        },
        {
            type: 'OBJECTS',
            emoji: '🔧',
            names: ['wrench', 'tool', 'fix', 'mechanic'],
            unified: '1F527'
        },
        {
            type: 'OBJECTS',
            emoji: '🔩',
            names: ['nut and bolt', 'tool', 'hardware', 'construction'],
            unified: '1F529'
        },
        {
            type: 'OBJECTS',
            emoji: '⚙️',
            names: ['gear', 'settings', 'tool', 'mechanics'],
            unified: '2699-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🗜️',
            names: ['clamp', 'tool', 'compress', 'hold'],
            unified: '1F5DC-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '⚖️',
            names: ['balance scale', 'justice', 'weighing', 'law'],
            unified: '2696-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🔗',
            names: ['link', 'chain', 'connection', 'bond'],
            unified: '1F517'
        },
        {
            type: 'OBJECTS',
            emoji: '⛓️',
            names: ['chains', 'link', 'connection', 'bond'],
            unified: '26D3-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '💉',
            names: ['syringe', 'needle', 'injection', 'medical'],
            unified: '1F489'
        },
        {
            type: 'OBJECTS',
            emoji: '💊',
            names: ['pill', 'medicine', 'drug', 'pharmacy'],
            unified: '1F48A'
        },
        {
            type: 'OBJECTS',
            emoji: '🩸',
            names: ['drop of blood', 'donation', 'medical', 'health'],
            unified: '1FA78'
        },
        {
            type: 'OBJECTS',
            emoji: '🩹',
            names: ['adhesive bandage', 'band-aid', 'medical', 'health'],
            unified: '1FA79'
        },
        {
            type: 'OBJECTS',
            emoji: '🩺',
            names: ['stethoscope', 'medical', 'health', 'doctor'],
            unified: '1FA7A'
        },
        {
            type: 'OBJECTS',
            emoji: '🚪',
            names: ['door', 'entry', 'exit', 'house'],
            unified: '1F6AA'
        },
        {
            type: 'OBJECTS',
            emoji: '🛏️',
            names: ['bed', 'sleep', 'rest', 'bedroom'],
            unified: '1F6CF-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🛋️',
            names: ['couch and lamp', 'furniture', 'living room', 'relax'],
            unified: '1F6CB-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🪑',
            names: ['chair', 'furniture', 'seat', 'sit'],
            unified: '1FA91'
        },
        {
            type: 'OBJECTS',
            emoji: '🚽',
            names: ['toilet', 'bathroom', 'restroom', 'wc'],
            unified: '1F6BD'
        },
        {
            type: 'OBJECTS',
            emoji: '🚿',
            names: ['shower', 'bathroom', 'clean', 'water'],
            unified: '1F6BF'
        },
        {
            type: 'OBJECTS',
            emoji: '🛁',
            names: ['bathtub', 'bathroom', 'clean', 'water'],
            unified: '1F6C1'
        },
        {
            type: 'OBJECTS',
            emoji: '🪒',
            names: ['razor', 'shave', 'grooming', 'tool'],
            unified: '1FA92'
        },
        {
            type: 'OBJECTS',
            emoji: '🧴',
            names: ['lotion bottle', 'skincare', 'cosmetic', 'moisturizer'],
            unified: '1F9F4'
        },
        {
            type: 'OBJECTS',
            emoji: '🧷',
            names: ['safety pin', 'pin', 'fasten', 'secure'],
            unified: '1F9F7'
        },
        {
            type: 'OBJECTS',
            emoji: '🧹',
            names: ['broom', 'clean', 'sweep', 'housekeeping'],
            unified: '1F9F9'
        },
        {
            type: 'OBJECTS',
            emoji: '🧺',
            names: ['basket', 'laundry', 'shopping', 'container'],
            unified: '1F9FA'
        },
        {
            type: 'OBJECTS',
            emoji: '🧻',
            names: ['roll of paper', 'toilet paper', 'bathroom', 'restroom'],
            unified: '1F9FB'
        },
        {
            type: 'OBJECTS',
            emoji: '🧼',
            names: ['soap', 'clean', 'hygiene', 'sanitation'],
            unified: '1F9FC'
        },
        {
            type: 'OBJECTS',
            emoji: '🧽',
            names: ['sponge', 'clean', 'absorb', 'scrub'],
            unified: '1F9FD'
        },
        {
            type: 'OBJECTS',
            emoji: '🧯',
            names: ['fire extinguisher', 'fire safety', 'emergency', 'firefighting'],
            unified: '1F9EF'
        },
        {
            type: 'OBJECTS',
            emoji: '🛒',
            names: ['shopping cart', 'cart', 'groceries', 'shopping'],
            unified: '1F6D2'
        },
        {
            type: 'OBJECTS',
            emoji: '🚬',
            names: ['cigarette', 'smoking', 'tobacco', 'cancer'],
            unified: '1F6AC'
        },
        {
            type: 'OBJECTS',
            emoji: '⚰️',
            names: ['coffin', 'death', 'funeral', 'grave'],
            unified: '26B0-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '⚱️',
            names: ['funeral urn', 'death', 'ashes', 'memorial'],
            unified: '26B1-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🏺',
            names: ['amphora', 'vase', 'jar', 'ancient'],
            unified: '1F3FA'
        },
        {
            type: 'OBJECTS',
            emoji: '🛍️',
            names: ['shopping bags', 'bags', 'retail', 'shopping'],
            unified: '1F6CD-FE0F'
        },
        {
            type: 'OBJECTS',
            emoji: '🎈',
            names: ['balloon', 'party', 'celebration', 'floating'],
            unified: '1F388'
        },
        {
            type: 'OBJECTS',
            emoji: '🎏',
            names: ['carp streamer', 'festival', 'japan', 'childrens day'],
            unified: '1F38F'
        },
        {
            type: 'OBJECTS',
            emoji: '🎀',
            names: ['ribbon', 'bow', 'gift', 'present'],
            unified: '1F380'
        },
        {
            type: 'OBJECTS',
            emoji: '🎁',
            names: ['wrapped gift', 'present', 'birthday', 'celebration'],
            unified: '1F381'
        },
        {
            type: 'OBJECTS',
            emoji: '🎇',
            names: ['sparkler', 'celebration', 'fireworks', 'sparkle'],
            unified: '1F387'
        },
        {
            type: 'OBJECTS',
            emoji: '🎆',
            names: ['fireworks', 'celebration', 'explosion', 'pyrotechnics'],
            unified: '1F386'
        },
        {
            type: 'OBJECTS',
            emoji: '🎐',
            names: ['wind chime', 'japan', 'summer', 'breeze'],
            unified: '1F390'
        },
        {
            type: 'OBJECTS',
            emoji: '🧧',
            names: ['red envelope', 'gift', 'money', 'chinese'],
            unified: '1F9E7'
        }
    ],
    SYMBOLS: [
        {
            type: 'SYMBOLS',
            emoji: '❤️',
            names: ['red heart', 'love', 'affection', 'romance'],
            unified: '2764-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '🧡',
            names: ['orange heart', 'love', 'affection', 'friendship'],
            unified: '1F9E1'
        },
        {
            type: 'SYMBOLS',
            emoji: '💛',
            names: ['yellow heart', 'love', 'affection', 'happiness'],
            unified: '1F49B'
        },
        {
            type: 'SYMBOLS',
            emoji: '💚',
            names: ['green heart', 'love', 'affection', 'envy'],
            unified: '1F49A'
        },
        {
            type: 'SYMBOLS',
            emoji: '💙',
            names: ['blue heart', 'love', 'affection', 'trust'],
            unified: '1F499'
        },
        {
            type: 'SYMBOLS',
            emoji: '💜',
            names: ['purple heart', 'love', 'affection', 'admiration'],
            unified: '1F49C'
        },
        {
            type: 'SYMBOLS',
            emoji: '🖤',
            names: ['black heart', 'love', 'affection', 'grief'],
            unified: '1F5A4'
        },
        {
            type: 'SYMBOLS',
            emoji: '🤍',
            names: ['white heart', 'love', 'affection', 'purity'],
            unified: '1F90D'
        },
        {
            type: 'SYMBOLS',
            emoji: '💔',
            names: ['broken heart', 'heartbreak', 'sadness', 'loss'],
            unified: '1F494'
        },
        {
            type: 'SYMBOLS',
            emoji: '❣️',
            names: ['heart exclamation', 'love', 'affection', 'passion'],
            unified: '2763-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '💕',
            names: ['two hearts', 'love', 'affection', 'together'],
            unified: '1F495'
        },
        {
            type: 'SYMBOLS',
            emoji: '💞',
            names: ['revolving hearts', 'love', 'affection', 'romance'],
            unified: '1F49E'
        },
        {
            type: 'SYMBOLS',
            emoji: '💓',
            names: ['beating heart', 'love', 'affection', 'heartbeat'],
            unified: '1F493'
        },
        {
            type: 'SYMBOLS',
            emoji: '💗',
            names: ['growing heart', 'love', 'affection', 'expanding'],
            unified: '1F497'
        },
        {
            type: 'SYMBOLS',
            emoji: '💖',
            names: ['sparkling heart', 'love', 'affection', 'shine'],
            unified: '1F496'
        },
        {
            type: 'SYMBOLS',
            emoji: '💘',
            names: ['heart with arrow', 'love', 'cupid', 'valentine'],
            unified: '1F498'
        },
        {
            type: 'SYMBOLS',
            emoji: '💝',
            names: ['heart with ribbon', 'love', 'gift', 'romance'],
            unified: '1F49D'
        },
        {
            type: 'SYMBOLS',
            emoji: '💟',
            names: ['heart decoration', 'love', 'ornament', 'design'],
            unified: '1F49F'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔯',
            names: ['six pointed star with dot', 'star', 'religion', 'symbol'],
            unified: '1F52F'
        },
        {
            type: 'SYMBOLS',
            emoji: '☯️',
            names: ['yin yang', 'balance', 'harmony', 'duality'],
            unified: '262F-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '☮️',
            names: ['peace symbol', 'peace', 'harmony', 'nonviolence'],
            unified: '262E-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '✝️',
            names: ['latin cross', 'cross', 'christianity', 'religion'],
            unified: '271D-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '☪️',
            names: ['star and crescent', 'islam', 'religion', 'muslim'],
            unified: '262A-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '☸️',
            names: ['wheel of dharma', 'buddhism', 'religion', 'spirituality'],
            unified: '2638-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '✡️',
            names: ['star of david', 'judaism', 'religion', 'jewish'],
            unified: '2721-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔱',
            names: ['trident emblem', 'trident', 'weapon', 'poseidon'],
            unified: '1F531'
        },
        {
            type: 'SYMBOLS',
            emoji: '⚛️',
            names: ['atom symbol', 'atom', 'science', 'physics'],
            unified: '269B-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '🕉️',
            names: ['om', 'hinduism', 'religion', 'spirituality'],
            unified: '1F549-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '☦️',
            names: ['orthodox cross', 'cross', 'christianity', 'religion'],
            unified: '2626-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '🛐',
            names: ['place of worship', 'religion', 'prayer', 'worship'],
            unified: '1F6D0'
        },
        {
            type: 'SYMBOLS',
            emoji: '⛎',
            names: ['ophiuchus', 'zodiac', 'astrology', 'horoscope'],
            unified: '26CE'
        },
        {
            type: 'SYMBOLS',
            emoji: '♈',
            names: ['aries', 'zodiac', 'astrology', 'horoscope'],
            unified: '2648'
        },
        {
            type: 'SYMBOLS',
            emoji: '♉',
            names: ['taurus', 'zodiac', 'astrology', 'horoscope'],
            unified: '2649'
        },
        {
            type: 'SYMBOLS',
            emoji: '♊',
            names: ['gemini', 'zodiac', 'astrology', 'horoscope'],
            unified: '264A'
        },
        {
            type: 'SYMBOLS',
            emoji: '♋',
            names: ['cancer', 'zodiac', 'astrology', 'horoscope'],
            unified: '264B'
        },
        {
            type: 'SYMBOLS',
            emoji: '♌',
            names: ['leo', 'zodiac', 'astrology', 'horoscope'],
            unified: '264C'
        },
        {
            type: 'SYMBOLS',
            emoji: '♍',
            names: ['virgo', 'zodiac', 'astrology', 'horoscope'],
            unified: '264D'
        },
        {
            type: 'SYMBOLS',
            emoji: '♎',
            names: ['libra', 'zodiac', 'astrology', 'horoscope'],
            unified: '264E'
        },
        {
            type: 'SYMBOLS',
            emoji: '♏',
            names: ['scorpio', 'zodiac', 'astrology', 'horoscope'],
            unified: '264F'
        },
        {
            type: 'SYMBOLS',
            emoji: '♐',
            names: ['sagittarius', 'zodiac', 'astrology', 'horoscope'],
            unified: '2650'
        },
        {
            type: 'SYMBOLS',
            emoji: '♑',
            names: ['capricorn', 'zodiac', 'astrology', 'horoscope'],
            unified: '2651'
        },
        {
            type: 'SYMBOLS',
            emoji: '♒',
            names: ['aquarius', 'zodiac', 'astrology', 'horoscope'],
            unified: '2652'
        },
        {
            type: 'SYMBOLS',
            emoji: '♓',
            names: ['pisces', 'zodiac', 'astrology', 'horoscope'],
            unified: '2653'
        },
        {
            type: 'SYMBOLS',
            emoji: '🆔',
            names: ['ID button', 'identity', 'identification', 'badge'],
            unified: '1F194'
        },
        {
            type: 'SYMBOLS',
            emoji: '⚜️',
            names: ['fleur-de-lis', 'symbol', 'french', 'emblem'],
            unified: '269C-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔰',
            names: ['japanese symbol for beginner', 'new', 'beginner', 'japan'],
            unified: '1F530'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔶',
            names: ['large orange diamond', 'shape', 'geometric', 'orange'],
            unified: '1F536'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔷',
            names: ['large blue diamond', 'shape', 'geometric', 'blue'],
            unified: '1F537'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔸',
            names: ['small orange diamond', 'shape', 'geometric', 'orange'],
            unified: '1F538'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔹',
            names: ['small blue diamond', 'shape', 'geometric', 'blue'],
            unified: '1F539'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔺',
            names: ['red triangle pointed up', 'shape', 'geometric', 'triangle'],
            unified: '1F53A'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔻',
            names: ['red triangle pointed down', 'shape', 'geometric', 'triangle'],
            unified: '1F53B'
        },
        {
            type: 'SYMBOLS',
            emoji: '💠',
            names: ['diamond with a dot', 'shape', 'geometric', 'diamond'],
            unified: '1F4A0'
        },
        {
            type: 'SYMBOLS',
            emoji: '⭕',
            names: ['hollow red circle', 'circle', 'shape', 'geometric'],
            unified: '2B55'
        },
        {
            type: 'SYMBOLS',
            emoji: '❌',
            names: ['cross mark', 'x', 'wrong', 'cancel'],
            unified: '274C'
        },
        {
            type: 'SYMBOLS',
            emoji: '❎',
            names: ['cross mark button', 'x', 'wrong', 'cancel'],
            unified: '274E'
        },
        {
            type: 'SYMBOLS',
            emoji: '⚪',
            names: ['white circle', 'shape', 'geometric', 'circle'],
            unified: '26AA'
        },
        {
            type: 'SYMBOLS',
            emoji: '⚫',
            names: ['black circle', 'shape', 'geometric', 'circle'],
            unified: '26AB'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔘',
            names: ['radio button', 'input', 'option', 'selection'],
            unified: '1F518'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔲',
            names: ['black square button', 'shape', 'geometric', 'square'],
            unified: '1F532'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔳',
            names: ['white square button', 'shape', 'geometric', 'square'],
            unified: '1F533'
        },
        {
            type: 'SYMBOLS',
            emoji: '⬛',
            names: ['black large square', 'shape', 'geometric', 'square'],
            unified: '2B1B'
        },
        {
            type: 'SYMBOLS',
            emoji: '⬜',
            names: ['white large square', 'shape', 'geometric', 'square'],
            unified: '2B1C'
        },
        {
            type: 'SYMBOLS',
            emoji: '◼️',
            names: ['black medium square', 'shape', 'geometric', 'square'],
            unified: '25FC-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '◻️',
            names: ['white medium square', 'shape', 'geometric', 'square'],
            unified: '25FB-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '◾',
            names: ['black medium-small square', 'shape', 'geometric', 'square'],
            unified: '25FE'
        },
        {
            type: 'SYMBOLS',
            emoji: '◽',
            names: ['white medium-small square', 'shape', 'geometric', 'square'],
            unified: '25FD'
        },
        {
            type: 'SYMBOLS',
            emoji: '▪️',
            names: ['black small square', 'shape', 'geometric', 'square'],
            unified: '25AA-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '▫️',
            names: ['white small square', 'shape', 'geometric', 'square'],
            unified: '25AB-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '▰',
            names: ['black medium-small square', 'shape', 'geometric', 'square'],
            unified: '25B0'
        },
        {
            type: 'SYMBOLS',
            emoji: '▱',
            names: ['white medium-small square', 'shape', 'geometric', 'square'],
            unified: '25B1'
        },
        {
            type: 'SYMBOLS',
            emoji: '▪',
            names: ['black small square', 'shape', 'geometric', 'square'],
            unified: '25AA'
        },
        {
            type: 'SYMBOLS',
            emoji: '▫',
            names: ['white small square', 'shape', 'geometric', 'square'],
            unified: '25AB'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔠',
            names: ['input latin uppercase', 'letters', 'typing', 'alphabet'],
            unified: '1F520'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔡',
            names: ['input latin lowercase', 'letters', 'typing', 'alphabet'],
            unified: '1F521'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔢',
            names: ['input numbers', 'numbers', 'input', 'typing'],
            unified: '1F522'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔣',
            names: ['input symbols', 'symbols', 'input', 'typing'],
            unified: '1F523'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔤',
            names: ['input latin letters', 'letters', 'typing', 'alphabet'],
            unified: '1F524'
        },
        {
            type: 'SYMBOLS',
            emoji: '🅰️',
            names: ['A button (blood type)', 'letter', 'blood type', 'alphabet'],
            unified: '1F170-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '🆎',
            names: ['AB button (blood type)', 'letter', 'blood type', 'alphabet'],
            unified: '1F18E'
        },
        {
            type: 'SYMBOLS',
            emoji: '🅱️',
            names: ['B button (blood type)', 'letter', 'blood type', 'alphabet'],
            unified: '1F171-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '🆑',
            names: ['CL button', 'clear', 'delete', 'alphabet'],
            unified: '1F191'
        },
        {
            type: 'SYMBOLS',
            emoji: '🆒',
            names: ['COOL button', 'cool', 'awesome', 'alphabet'],
            unified: '1F192'
        },
        {
            type: 'SYMBOLS',
            emoji: '🆓',
            names: ['FREE button', 'free', 'gratis', 'alphabet'],
            unified: '1F193'
        },
        {
            type: 'SYMBOLS',
            emoji: 'ℹ️',
            names: ['information', 'info', 'details', 'alphabet'],
            unified: '2139-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '🆕',
            names: ['NEW button', 'new', 'recent', 'alphabet'],
            unified: '1F195'
        },
        {
            type: 'SYMBOLS',
            emoji: '🆖',
            names: ['NG button', 'no good', 'negative', 'alphabet'],
            unified: '1F196'
        },
        {
            type: 'SYMBOLS',
            emoji: '🅾️',
            names: ['O button (blood type)', 'letter', 'blood type', 'alphabet'],
            unified: '1F17E-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '🆗',
            names: ['OK button', 'okay', 'approval', 'alphabet'],
            unified: '1F197'
        },
        {
            type: 'SYMBOLS',
            emoji: 'Ⓜ️',
            names: ['circled M', 'letter', 'm', 'alphabet'],
            unified: '24C2-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '🆘',
            names: ['SOS button', 'emergency', 'help', 'alphabet'],
            unified: '1F198'
        },
        {
            type: 'SYMBOLS',
            emoji: '🆙',
            names: ['UP! button', 'up', 'increase', 'alphabet'],
            unified: '1F199'
        },
        {
            type: 'SYMBOLS',
            emoji: '🆚',
            names: ['VS button', 'versus', 'against', 'alphabet'],
            unified: '1F19A'
        },
        {
            type: 'SYMBOLS',
            emoji: '🈁',
            names: ['Japanese “here” button', 'kanji', 'alphabet', 'japanese'],
            unified: '1F201'
        },
        {
            type: 'SYMBOLS',
            emoji: '🈂️',
            names: ['Japanese “service charge” button', 'kanji', 'alphabet', 'japanese'],
            unified: '1F202-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '🈷️',
            names: ['Japanese “monthly amount” button', 'kanji', 'alphabet', 'japanese'],
            unified: '1F237-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '🈶',
            names: ['Japanese “not free of charge” button', 'kanji', 'alphabet', 'japanese'],
            unified: '1F236'
        },
        {
            type: 'SYMBOLS',
            emoji: '🉑',
            names: ['Japanese “acceptable” button', 'kanji', 'alphabet', 'japanese'],
            unified: '1F251'
        },
        {
            type: 'SYMBOLS',
            emoji: '㊗️',
            names: ['Japanese “congratulations” button', 'kanji', 'alphabet', 'japanese'],
            unified: '3297-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '㊙️',
            names: ['Japanese “secret” button', 'kanji', 'alphabet', 'japanese'],
            unified: '3299-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '🈺',
            names: ['Japanese “open for business” button', 'kanji', 'alphabet', 'japanese'],
            unified: '1F23A'
        },
        {
            type: 'SYMBOLS',
            emoji: '🈵',
            names: ['Japanese “no vacancy” button', 'kanji', 'alphabet', 'japanese'],
            unified: '1F235'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔴',
            names: ['red circle', 'shape', 'geometric', 'red'],
            unified: '1F534'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔵',
            names: ['blue circle', 'shape', 'geometric', 'blue'],
            unified: '1F535'
        },
        {
            type: 'SYMBOLS',
            emoji: '✅',
            names: ['white check mark', 'check', 'yes', 'approve'],
            unified: '2705'
        },
        {
            type: 'SYMBOLS',
            emoji: '✔️',
            names: ['heavy check mark', 'check', 'yes', 'approve'],
            unified: '2714-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '☑️',
            names: ['ballot box with check', 'check', 'vote', 'approve'],
            unified: '2611-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '⚠️',
            names: ['warning', 'caution', 'alert', 'danger'],
            unified: '26A0-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '🚸',
            names: ['children crossing', 'school', 'warning', 'safety'],
            unified: '1F6B8'
        },
        {
            type: 'SYMBOLS',
            emoji: '⛔',
            names: ['no entry', 'stop', 'prohibited', 'sign'],
            unified: '26D4'
        },
        {
            type: 'SYMBOLS',
            emoji: '🚫',
            names: ['prohibited', 'no', 'forbidden', 'ban'],
            unified: '1F6AB'
        },
        {
            type: 'SYMBOLS',
            emoji: '🚷',
            names: ['no pedestrians', 'prohibited', 'sign', 'ban'],
            unified: '1F6B7'
        },
        {
            type: 'SYMBOLS',
            emoji: '🚯',
            names: ['no littering', 'prohibited', 'sign', 'ban'],
            unified: '1F6AF'
        },
        {
            type: 'SYMBOLS',
            emoji: '🚳',
            names: ['no bicycles', 'prohibited', 'sign', 'ban'],
            unified: '1F6B3'
        },
        {
            type: 'SYMBOLS',
            emoji: '🚱',
            names: ['non-potable water', 'prohibited', 'sign', 'ban'],
            unified: '1F6B1'
        },
        {
            type: 'SYMBOLS',
            emoji: '🚭',
            names: ['no smoking', 'prohibited', 'sign', 'ban'],
            unified: '1F6AD'
        },
        {
            type: 'SYMBOLS',
            emoji: '📵',
            names: ['no mobile phones', 'prohibited', 'sign', 'ban'],
            unified: '1F4F5'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔞',
            names: ['no one under eighteen', 'prohibited', 'age', 'restriction'],
            unified: '1F51E'
        },
        {
            type: 'SYMBOLS',
            emoji: '☢️',
            names: ['radioactive', 'hazard', 'danger', 'radiation'],
            unified: '2622-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '☣️',
            names: ['biohazard', 'hazard', 'danger', 'infection'],
            unified: '2623-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '⬆️',
            names: ['up arrow', 'up', 'north', 'direction'],
            unified: '2B06-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '↗️',
            names: ['up-right arrow', 'direction', 'diagonal', 'north-east'],
            unified: '2197-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '➡️',
            names: ['right arrow', 'east', 'direction', 'right'],
            unified: '27A1-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '↘️',
            names: ['down-right arrow', 'south-east', 'diagonal', 'direction'],
            unified: '2198-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '⬇️',
            names: ['down arrow', 'south', 'direction', 'down'],
            unified: '2B07-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '↙️',
            names: ['down-left arrow', 'south-west', 'diagonal', 'direction'],
            unified: '2199-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '⬅️',
            names: ['left arrow', 'west', 'direction', 'left'],
            unified: '2B05-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '↖️',
            names: ['up-left arrow', 'north-west', 'diagonal', 'direction'],
            unified: '2196-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '↕️',
            names: ['up-down arrow', 'vertical', 'direction', 'updown'],
            unified: '2195-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '↔️',
            names: ['left-right arrow', 'horizontal', 'direction', 'leftright'],
            unified: '2194-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '↩️',
            names: ['right arrow curving left', 'reply', 'direction', 'return'],
            unified: '21A9-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '↪️',
            names: ['left arrow curving right', 'reply', 'direction', 'return'],
            unified: '21AA-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '⤴️',
            names: ['right arrow curving up', 'arrow', 'direction', 'return'],
            unified: '2934-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '⤵️',
            names: ['right arrow curving down', 'arrow', 'direction', 'return'],
            unified: '2935-FE0F'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔃',
            names: ['clockwise vertical arrows', 'sync', 'rotation', 'repeat'],
            unified: '1F503'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔄',
            names: ['counterclockwise arrows button', 'sync', 'rotation', 'repeat'],
            unified: '1F504'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔙',
            names: ['BACK arrow', 'arrow', 'return', 'direction'],
            unified: '1F519'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔚',
            names: ['END arrow', 'arrow', 'finish', 'direction'],
            unified: '1F51A'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔛',
            names: ['ON! arrow', 'arrow', 'direction', 'continue'],
            unified: '1F51B'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔜',
            names: ['SOON arrow', 'arrow', 'direction', 'imminent'],
            unified: '1F51C'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔝',
            names: ['TOP arrow', 'arrow', 'direction', 'up'],
            unified: '1F51D'
        },
        {
            type: 'SYMBOLS',
            emoji: '🛑',
            names: ['stop sign', 'stop', 'sign', 'halt'],
            unified: '1F6D1'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔔',
            names: ['bell', 'notification', 'alert', 'chime'],
            unified: '1F514'
        },
        {
            type: 'SYMBOLS',
            emoji: '🔕',
            names: ['bell with slash', 'mute', 'notification', 'silence'],
            unified: '1F515'
        }
    ],
    FLAGS: [
        {
            type: 'FLAGS',
            emoji: '🏳️',
            names: ['white flag', 'peace', 'surrender', 'truce'],
            unified: '1F3F3-FE0F'
        },
        {
            type: 'FLAGS',
            emoji: '🏴',
            names: ['black flag', 'pirate', 'protest', 'anarchy'],
            unified: '1F3F4'
        },
        {
            type: 'FLAGS',
            emoji: '🏁',
            names: ['chequered flag', 'race', 'finish', 'victory'],
            unified: '1F3C1'
        },
        {
            type: 'FLAGS',
            emoji: '🚩',
            names: ['triangular flag', 'mark', 'warning', 'location'],
            unified: '1F6A9'
        },
        {
            type: 'FLAGS',
            emoji: '🏳️‍🌈',
            names: ['rainbow flag', 'pride', 'LGBTQ', 'equality'],
            unified: '1F3F3-FE0F-200D-1F308'
        },
        {
            type: 'FLAGS',
            emoji: '🏳️‍⚧️',
            names: ['transgender flag', 'trans pride', 'LGBTQ', 'equality'],
            unified: '1F3F3-FE0F-200D-26A7-FE0F'
        },
        {
            type: 'FLAGS',
            emoji: '🇦🇫',
            names: ['flag: Afghanistan', 'Afghanistan', 'country', 'national flag'],
            unified: '1F1E6-1F1EB'
        },
        {
            type: 'FLAGS',
            emoji: '🇦🇱',
            names: ['flag: Albania', 'Albania', 'country', 'national flag'],
            unified: '1F1E6-1F1F1'
        },
        {
            type: 'FLAGS',
            emoji: '🇩🇿',
            names: ['flag: Algeria', 'Algeria', 'country', 'national flag'],
            unified: '1F1E9-1F1FF'
        },
        {
            type: 'FLAGS',
            emoji: '🇦🇸',
            names: ['flag: American Samoa', 'American Samoa', 'territory', 'national flag'],
            unified: '1F1E6-1F1F8'
        },
        {
            type: 'FLAGS',
            emoji: '🇦🇩',
            names: ['flag: Andorra', 'Andorra', 'country', 'national flag'],
            unified: '1F1E6-1F1E9'
        },
        {
            type: 'FLAGS',
            emoji: '🇦🇴',
            names: ['flag: Angola', 'Angola', 'country', 'national flag'],
            unified: '1F1E6-1F1F4'
        },
        {
            type: 'FLAGS',
            emoji: '🇦🇮',
            names: ['flag: Anguilla', 'Anguilla', 'territory', 'national flag'],
            unified: '1F1E6-1F1EE'
        },
        {
            type: 'FLAGS',
            emoji: '🇦🇶',
            names: ['flag: Antarctica', 'Antarctica', 'continent', 'national flag'],
            unified: '1F1E6-1F1F6'
        },
        {
            type: 'FLAGS',
            emoji: '🇦🇬',
            names: ['flag: Antigua & Barbuda', 'Antigua & Barbuda', 'country', 'national flag'],
            unified: '1F1E6-1F1EC'
        },
        {
            type: 'FLAGS',
            emoji: '🇦🇷',
            names: ['flag: Argentina', 'Argentina', 'country', 'national flag'],
            unified: '1F1E6-1F1F7'
        },
        {
            type: 'FLAGS',
            emoji: '🇦🇲',
            names: ['flag: Armenia', 'Armenia', 'country', 'national flag'],
            unified: '1F1E6-1F1F2'
        },
        {
            type: 'FLAGS',
            emoji: '🇦🇼',
            names: ['flag: Aruba', 'Aruba', 'territory', 'national flag'],
            unified: '1F1E6-1F1FC'
        },
        {
            type: 'FLAGS',
            emoji: '🇦🇺',
            names: ['flag: Australia', 'Australia', 'country', 'national flag'],
            unified: '1F1E6-1F1FA'
        },
        {
            type: 'FLAGS',
            emoji: '🇦🇹',
            names: ['flag: Austria', 'Austria', 'country', 'national flag'],
            unified: '1F1E6-1F1F9'
        },
        {
            type: 'FLAGS',
            emoji: '🇦🇿',
            names: ['flag: Azerbaijan', 'Azerbaijan', 'country', 'national flag'],
            unified: '1F1E6-1F1FF'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇸',
            names: ['flag: Bahamas', 'Bahamas', 'country', 'national flag'],
            unified: '1F1E7-1F1F8'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇭',
            names: ['flag: Bahrain', 'Bahrain', 'country', 'national flag'],
            unified: '1F1E7-1F1ED'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇩',
            names: ['flag: Bangladesh', 'Bangladesh', 'country', 'national flag'],
            unified: '1F1E7-1F1E9'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇧',
            names: ['flag: Barbados', 'Barbados', 'country', 'national flag'],
            unified: '1F1E7-1F1E7'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇾',
            names: ['flag: Belarus', 'Belarus', 'country', 'national flag'],
            unified: '1F1E7-1F1FE'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇪',
            names: ['flag: Belgium', 'Belgium', 'country', 'national flag'],
            unified: '1F1E7-1F1EA'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇿',
            names: ['flag: Belize', 'Belize', 'country', 'national flag'],
            unified: '1F1E7-1F1FF'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇯',
            names: ['flag: Benin', 'Benin', 'country', 'national flag'],
            unified: '1F1E7-1F1EF'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇲',
            names: ['flag: Bermuda', 'Bermuda', 'territory', 'national flag'],
            unified: '1F1E7-1F1F2'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇹',
            names: ['flag: Bhutan', 'Bhutan', 'country', 'national flag'],
            unified: '1F1E7-1F1F9'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇴',
            names: ['flag: Bolivia', 'Bolivia', 'country', 'national flag'],
            unified: '1F1E7-1F1F4'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇦',
            names: ['flag: Bosnia & Herzegovina', 'Bosnia & Herzegovina', 'country', 'national flag'],
            unified: '1F1E7-1F1E6'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇼',
            names: ['flag: Botswana', 'Botswana', 'country', 'national flag'],
            unified: '1F1E7-1F1FC'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇷',
            names: ['flag: Brazil', 'Brazil', 'country', 'national flag'],
            unified: '1F1E7-1F1F7'
        },
        {
            type: 'FLAGS',
            emoji: '🇮🇴',
            names: ['flag: British Indian Ocean Territory', 'British Indian Ocean Territory', 'territory', 'national flag'],
            unified: '1F1EE-1F1F4'
        },
        {
            type: 'FLAGS',
            emoji: '🇻🇬',
            names: ['flag: British Virgin Islands', 'British Virgin Islands', 'territory', 'national flag'],
            unified: '1F1FB-1F1EC'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇳',
            names: ['flag: Brunei', 'Brunei', 'country', 'national flag'],
            unified: '1F1E7-1F1F3'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇬',
            names: ['flag: Bulgaria', 'Bulgaria', 'country', 'national flag'],
            unified: '1F1E7-1F1EC'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇫',
            names: ['flag: Burkina Faso', 'Burkina Faso', 'country', 'national flag'],
            unified: '1F1E7-1F1EB'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇮',
            names: ['flag: Burundi', 'Burundi', 'country', 'national flag'],
            unified: '1F1E7-1F1EE'
        },
        {
            type: 'FLAGS',
            emoji: '🇰🇭',
            names: ['flag: Cambodia', 'Cambodia', 'country', 'national flag'],
            unified: '1F1F0-1F1ED'
        },
        {
            type: 'FLAGS',
            emoji: '🇨🇲',
            names: ['flag: Cameroon', 'Cameroon', 'country', 'national flag'],
            unified: '1F1E8-1F1F2'
        },
        {
            type: 'FLAGS',
            emoji: '🇨🇦',
            names: ['flag: Canada', 'Canada', 'country', 'national flag'],
            unified: '1F1E8-1F1E6'
        },
        {
            type: 'FLAGS',
            emoji: '🇨🇻',
            names: ['flag: Cape Verde', 'Cape Verde', 'country', 'national flag'],
            unified: '1F1E8-1F1FB'
        },
        {
            type: 'FLAGS',
            emoji: '🇰🇾',
            names: ['flag: Cayman Islands', 'Cayman Islands', 'territory', 'national flag'],
            unified: '1F1F0-1F1FE'
        },
        {
            type: 'FLAGS',
            emoji: '🇨🇫',
            names: ['flag: Central African Republic', 'Central African Republic', 'country', 'national flag'],
            unified: '1F1E8-1F1EB'
        },
        {
            type: 'FLAGS',
            emoji: '🇹🇩',
            names: ['flag: Chad', 'Chad', 'country', 'national flag'],
            unified: '1F1F9-1F1E9'
        },
        {
            type: 'FLAGS',
            emoji: '🇨🇱',
            names: ['flag: Chile', 'Chile', 'country', 'national flag'],
            unified: '1F1E8-1F1F1'
        },
        {
            type: 'FLAGS',
            emoji: '🇨🇳',
            names: ['flag: China', 'China', 'country', 'national flag'],
            unified: '1F1E8-1F1F3'
        },
        {
            type: 'FLAGS',
            emoji: '🇨🇴',
            names: ['flag: Colombia', 'Colombia', 'country', 'national flag'],
            unified: '1F1E8-1F1F4'
        },
        {
            type: 'FLAGS',
            emoji: '🇰🇲',
            names: ['flag: Comoros', 'Comoros', 'country', 'national flag'],
            unified: '1F1F0-1F1F2'
        },
        {
            type: 'FLAGS',
            emoji: '🇨🇬',
            names: ['flag: Congo - Brazzaville', 'Congo - Brazzaville', 'country', 'national flag'],
            unified: '1F1E8-1F1EC'
        },
        {
            type: 'FLAGS',
            emoji: '🇨🇩',
            names: ['flag: Congo - Kinshasa', 'Congo - Kinshasa', 'country', 'national flag'],
            unified: '1F1E8-1F1E9'
        },
        {
            type: 'FLAGS',
            emoji: '🇨🇰',
            names: ['flag: Cook Islands', 'Cook Islands', 'territory', 'national flag'],
            unified: '1F1E8-1F1F0'
        },
        {
            type: 'FLAGS',
            emoji: '🇨🇷',
            names: ['flag: Costa Rica', 'Costa Rica', 'country', 'national flag'],
            unified: '1F1E8-1F1F7'
        },
        {
            type: 'FLAGS',
            emoji: '🇨🇮',
            names: ['flag: Côte d’Ivoire', 'Côte d’Ivoire', 'country', 'national flag'],
            unified: '1F1E8-1F1EE'
        },
        {
            type: 'FLAGS',
            emoji: '🇭🇷',
            names: ['flag: Croatia', 'Croatia', 'country', 'national flag'],
            unified: '1F1ED-1F1F7'
        },
        {
            type: 'FLAGS',
            emoji: '🇨🇺',
            names: ['flag: Cuba', 'Cuba', 'country', 'national flag'],
            unified: '1F1E8-1F1FA'
        },
        {
            type: 'FLAGS',
            emoji: '🇨🇾',
            names: ['flag: Cyprus', 'Cyprus', 'country', 'national flag'],
            unified: '1F1E8-1F1FE'
        },
        {
            type: 'FLAGS',
            emoji: '🇨🇿',
            names: ['flag: Czech Republic', 'Czech Republic', 'country', 'national flag'],
            unified: '1F1E8-1F1FF'
        },
        {
            type: 'FLAGS',
            emoji: '🇩🇰',
            names: ['flag: Denmark', 'Denmark', 'country', 'national flag'],
            unified: '1F1E9-1F1F0'
        },
        {
            type: 'FLAGS',
            emoji: '🇩🇯',
            names: ['flag: Djibouti', 'Djibouti', 'country', 'national flag'],
            unified: '1F1E9-1F1EF'
        },
        {
            type: 'FLAGS',
            emoji: '🇩🇲',
            names: ['flag: Dominica', 'Dominica', 'country', 'national flag'],
            unified: '1F1E9-1F1F2'
        },
        {
            type: 'FLAGS',
            emoji: '🇩🇴',
            names: ['flag: Dominican Republic', 'Dominican Republic', 'country', 'national flag'],
            unified: '1F1E9-1F1F4'
        },
        {
            type: 'FLAGS',
            emoji: '🇪🇨',
            names: ['flag: Ecuador', 'Ecuador', 'country', 'national flag'],
            unified: '1F1EA-1F1E8'
        },
        {
            type: 'FLAGS',
            emoji: '🇪🇬',
            names: ['flag: Egypt', 'Egypt', 'country', 'national flag'],
            unified: '1F1EA-1F1EC'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇻',
            names: ['flag: El Salvador', 'El Salvador', 'country', 'national flag'],
            unified: '1F1F8-1F1FB'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇶',
            names: ['flag: Equatorial Guinea', 'Equatorial Guinea', 'country', 'national flag'],
            unified: '1F1EC-1F1F6'
        },
        {
            type: 'FLAGS',
            emoji: '🇪🇷',
            names: ['flag: Eritrea', 'Eritrea', 'country', 'national flag'],
            unified: '1F1EA-1F1F7'
        },
        {
            type: 'FLAGS',
            emoji: '🇪🇪',
            names: ['flag: Estonia', 'Estonia', 'country', 'national flag'],
            unified: '1F1EA-1F1EA'
        },
        {
            type: 'FLAGS',
            emoji: '🇪🇹',
            names: ['flag: Ethiopia', 'Ethiopia', 'country', 'national flag'],
            unified: '1F1EA-1F1F9'
        },
        {
            type: 'FLAGS',
            emoji: '🇪🇺',
            names: ['flag: European Union', 'European Union', 'flag', 'EU'],
            unified: '1F1EA-1F1FA'
        },
        {
            type: 'FLAGS',
            emoji: '🇫🇰',
            names: ['flag: Falkland Islands', 'Falkland Islands', 'territory', 'national flag'],
            unified: '1F1EB-1F1F0'
        },
        {
            type: 'FLAGS',
            emoji: '🇫🇴',
            names: ['flag: Faroe Islands', 'Faroe Islands', 'territory', 'national flag'],
            unified: '1F1EB-1F1F4'
        },
        {
            type: 'FLAGS',
            emoji: '🇫🇯',
            names: ['flag: Fiji', 'Fiji', 'country', 'national flag'],
            unified: '1F1EB-1F1EF'
        },
        {
            type: 'FLAGS',
            emoji: '🇫🇮',
            names: ['flag: Finland', 'Finland', 'country', 'national flag'],
            unified: '1F1EB-1F1EE'
        },
        {
            type: 'FLAGS',
            emoji: '🇫🇷',
            names: ['flag: France', 'France', 'country', 'national flag'],
            unified: '1F1EB-1F1F7'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇫',
            names: ['flag: French Guiana', 'French Guiana', 'territory', 'national flag'],
            unified: '1F1EC-1F1EB'
        },
        {
            type: 'FLAGS',
            emoji: '🇵🇫',
            names: ['flag: French Polynesia', 'French Polynesia', 'territory', 'national flag'],
            unified: '1F1F5-1F1EB'
        },
        {
            type: 'FLAGS',
            emoji: '🇹🇫',
            names: ['flag: French Southern Territories', 'French Southern Territories', 'territory', 'national flag'],
            unified: '1F1F9-1F1EB'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇦',
            names: ['flag: Gabon', 'Gabon', 'country', 'national flag'],
            unified: '1F1EC-1F1E6'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇲',
            names: ['flag: Gambia', 'Gambia', 'country', 'national flag'],
            unified: '1F1EC-1F1F2'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇪',
            names: ['flag: Georgia', 'Georgia', 'country', 'national flag'],
            unified: '1F1EC-1F1EA'
        },
        {
            type: 'FLAGS',
            emoji: '🇩🇪',
            names: ['flag: Germany', 'Germany', 'country', 'national flag'],
            unified: '1F1E9-1F1EA'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇭',
            names: ['flag: Ghana', 'Ghana', 'country', 'national flag'],
            unified: '1F1EC-1F1ED'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇮',
            names: ['flag: Gibraltar', 'Gibraltar', 'territory', 'national flag'],
            unified: '1F1EC-1F1EE'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇷',
            names: ['flag: Greece', 'Greece', 'country', 'national flag'],
            unified: '1F1EC-1F1F7'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇱',
            names: ['flag: Greenland', 'Greenland', 'territory', 'national flag'],
            unified: '1F1EC-1F1F1'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇩',
            names: ['flag: Grenada', 'Grenada', 'country', 'national flag'],
            unified: '1F1EC-1F1E9'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇵',
            names: ['flag: Guadeloupe', 'Guadeloupe', 'territory', 'national flag'],
            unified: '1F1EC-1F1F5'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇺',
            names: ['flag: Guam', 'Guam', 'territory', 'national flag'],
            unified: '1F1EC-1F1FA'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇹',
            names: ['flag: Guatemala', 'Guatemala', 'country', 'national flag'],
            unified: '1F1EC-1F1F9'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇳',
            names: ['flag: Guinea', 'Guinea', 'country', 'national flag'],
            unified: '1F1EC-1F1F3'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇼',
            names: ['flag: Guinea-Bissau', 'Guinea-Bissau', 'country', 'national flag'],
            unified: '1F1EC-1F1FC'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇾',
            names: ['flag: Guyana', 'Guyana', 'country', 'national flag'],
            unified: '1F1EC-1F1FE'
        },
        {
            type: 'FLAGS',
            emoji: '🇭🇹',
            names: ['flag: Haiti', 'Haiti', 'country', 'national flag'],
            unified: '1F1ED-1F1F9'
        },
        {
            type: 'FLAGS',
            emoji: '🇭🇳',
            names: ['flag: Honduras', 'Honduras', 'country', 'national flag'],
            unified: '1F1ED-1F1F3'
        },
        {
            type: 'FLAGS',
            emoji: '🇭🇰',
            names: ['flag: Hong Kong SAR China', 'Hong Kong SAR China', 'region', 'national flag'],
            unified: '1F1ED-1F1F0'
        },
        {
            type: 'FLAGS',
            emoji: '🇭🇺',
            names: ['flag: Hungary', 'Hungary', 'country', 'national flag'],
            unified: '1F1ED-1F1FA'
        },
        {
            type: 'FLAGS',
            emoji: '🇮🇸',
            names: ['flag: Iceland', 'Iceland', 'country', 'national flag'],
            unified: '1F1EE-1F1F8'
        },
        {
            type: 'FLAGS',
            emoji: '🇮🇳',
            names: ['flag: India', 'India', 'country', 'national flag'],
            unified: '1F1EE-1F1F3'
        },
        {
            type: 'FLAGS',
            emoji: '🇮🇩',
            names: ['flag: Indonesia', 'Indonesia', 'country', 'national flag'],
            unified: '1F1EE-1F1E9'
        },
        {
            type: 'FLAGS',
            emoji: '🇮🇷',
            names: ['flag: Iran', 'Iran', 'country', 'national flag'],
            unified: '1F1EE-1F1F7'
        },
        {
            type: 'FLAGS',
            emoji: '🇮🇶',
            names: ['flag: Iraq', 'Iraq', 'country', 'national flag'],
            unified: '1F1EE-1F1F6'
        },
        {
            type: 'FLAGS',
            emoji: '🇮🇪',
            names: ['flag: Ireland', 'Ireland', 'country', 'national flag'],
            unified: '1F1EE-1F1EA'
        },
        {
            type: 'FLAGS',
            emoji: '🇮🇱',
            names: ['flag: Israel', 'Israel', 'country', 'national flag'],
            unified: '1F1EE-1F1F1'
        },
        {
            type: 'FLAGS',
            emoji: '🇮🇹',
            names: ['flag: Italy', 'Italy', 'country', 'national flag'],
            unified: '1F1EE-1F1F9'
        },
        {
            type: 'FLAGS',
            emoji: '🇯🇲',
            names: ['flag: Jamaica', 'Jamaica', 'country', 'national flag'],
            unified: '1F1EF-1F1F2'
        },
        {
            type: 'FLAGS',
            emoji: '🇯🇵',
            names: ['flag: Japan', 'Japan', 'country', 'national flag'],
            unified: '1F1EF-1F1F5'
        },
        {
            type: 'FLAGS',
            emoji: '🎌',
            names: ['crossed flags', 'Japan', 'celebration', 'ceremony'],
            unified: '1F38C'
        },
        {
            type: 'FLAGS',
            emoji: '🇯🇪',
            names: ['flag: Jersey', 'Jersey', 'territory', 'national flag'],
            unified: '1F1EF-1F1EA'
        },
        {
            type: 'FLAGS',
            emoji: '🇯🇴',
            names: ['flag: Jordan', 'Jordan', 'country', 'national flag'],
            unified: '1F1EF-1F1F4'
        },
        {
            type: 'FLAGS',
            emoji: '🇰🇿',
            names: ['flag: Kazakhstan', 'Kazakhstan', 'country', 'national flag'],
            unified: '1F1F0-1F1FF'
        },
        {
            type: 'FLAGS',
            emoji: '🇰🇪',
            names: ['flag: Kenya', 'Kenya', 'country', 'national flag'],
            unified: '1F1F0-1F1EA'
        },
        {
            type: 'FLAGS',
            emoji: '🇰🇮',
            names: ['flag: Kiribati', 'Kiribati', 'country', 'national flag'],
            unified: '1F1F0-1F1EE'
        },
        {
            type: 'FLAGS',
            emoji: '🇰🇼',
            names: ['flag: Kuwait', 'Kuwait', 'country', 'national flag'],
            unified: '1F1F0-1F1FC'
        },
        {
            type: 'FLAGS',
            emoji: '🇰🇬',
            names: ['flag: Kyrgyzstan', 'Kyrgyzstan', 'country', 'national flag'],
            unified: '1F1F0-1F1EC'
        },
        {
            type: 'FLAGS',
            emoji: '🇱🇦',
            names: ['flag: Laos', 'Laos', 'country', 'national flag'],
            unified: '1F1F1-1F1E6'
        },
        {
            type: 'FLAGS',
            emoji: '🇱🇻',
            names: ['flag: Latvia', 'Latvia', 'country', 'national flag'],
            unified: '1F1F1-1F1FB'
        },
        {
            type: 'FLAGS',
            emoji: '🇱🇧',
            names: ['flag: Lebanon', 'Lebanon', 'country', 'national flag'],
            unified: '1F1F1-1F1E7'
        },
        {
            type: 'FLAGS',
            emoji: '🇱🇸',
            names: ['flag: Lesotho', 'Lesotho', 'country', 'national flag'],
            unified: '1F1F1-1F1F8'
        },
        {
            type: 'FLAGS',
            emoji: '🇱🇷',
            names: ['flag: Liberia', 'Liberia', 'country', 'national flag'],
            unified: '1F1F1-1F1F7'
        },
        {
            type: 'FLAGS',
            emoji: '🇱🇾',
            names: ['flag: Libya', 'Libya', 'country', 'national flag'],
            unified: '1F1F1-1F1FE'
        },
        {
            type: 'FLAGS',
            emoji: '🇱🇮',
            names: ['flag: Liechtenstein', 'Liechtenstein', 'country', 'national flag'],
            unified: '1F1F1-1F1EE'
        },
        {
            type: 'FLAGS',
            emoji: '🇱🇹',
            names: ['flag: Lithuania', 'Lithuania', 'country', 'national flag'],
            unified: '1F1F1-1F1F9'
        },
        {
            type: 'FLAGS',
            emoji: '🇱🇺',
            names: ['flag: Luxembourg', 'Luxembourg', 'country', 'national flag'],
            unified: '1F1F1-1F1FA'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇴',
            names: ['flag: Macao SAR China', 'Macao SAR China', 'region', 'national flag'],
            unified: '1F1F2-1F1F4'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇰',
            names: ['flag: Macedonia', 'Macedonia', 'country', 'national flag'],
            unified: '1F1F2-1F1F0'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇬',
            names: ['flag: Madagascar', 'Madagascar', 'country', 'national flag'],
            unified: '1F1F2-1F1EC'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇼',
            names: ['flag: Malawi', 'Malawi', 'country', 'national flag'],
            unified: '1F1F2-1F1FC'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇾',
            names: ['flag: Malaysia', 'Malaysia', 'country', 'national flag'],
            unified: '1F1F2-1F1FE'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇻',
            names: ['flag: Maldives', 'Maldives', 'country', 'national flag'],
            unified: '1F1F2-1F1FB'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇱',
            names: ['flag: Mali', 'Mali', 'country', 'national flag'],
            unified: '1F1F2-1F1F1'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇹',
            names: ['flag: Malta', 'Malta', 'country', 'national flag'],
            unified: '1F1F2-1F1F9'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇭',
            names: ['flag: Marshall Islands', 'Marshall Islands', 'country', 'national flag'],
            unified: '1F1F2-1F1ED'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇶',
            names: ['flag: Martinique', 'Martinique', 'territory', 'national flag'],
            unified: '1F1F2-1F1F6'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇷',
            names: ['flag: Mauritania', 'Mauritania', 'country', 'national flag'],
            unified: '1F1F2-1F1F7'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇺',
            names: ['flag: Mauritius', 'Mauritius', 'country', 'national flag'],
            unified: '1F1F2-1F1FA'
        },
        {
            type: 'FLAGS',
            emoji: '🇾🇹',
            names: ['flag: Mayotte', 'Mayotte', 'territory', 'national flag'],
            unified: '1F1FE-1F1F9'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇽',
            names: ['flag: Mexico', 'Mexico', 'country', 'national flag'],
            unified: '1F1F2-1F1FD'
        },
        {
            type: 'FLAGS',
            emoji: '🇫🇲',
            names: ['flag: Micronesia', 'Micronesia', 'country', 'national flag'],
            unified: '1F1EB-1F1F2'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇩',
            names: ['flag: Moldova', 'Moldova', 'country', 'national flag'],
            unified: '1F1F2-1F1E9'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇨',
            names: ['flag: Monaco', 'Monaco', 'country', 'national flag'],
            unified: '1F1F2-1F1E8'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇳',
            names: ['flag: Mongolia', 'Mongolia', 'country', 'national flag'],
            unified: '1F1F2-1F1F3'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇪',
            names: ['flag: Montenegro', 'Montenegro', 'country', 'national flag'],
            unified: '1F1F2-1F1EA'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇸',
            names: ['flag: Montserrat', 'Montserrat', 'territory', 'national flag'],
            unified: '1F1F2-1F1F8'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇦',
            names: ['flag: Morocco', 'Morocco', 'country', 'national flag'],
            unified: '1F1F2-1F1E6'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇿',
            names: ['flag: Mozambique', 'Mozambique', 'country', 'national flag'],
            unified: '1F1F2-1F1FF'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇲',
            names: ['flag: Myanmar (Burma)', 'Myanmar (Burma)', 'country', 'national flag'],
            unified: '1F1F2-1F1F2'
        },
        {
            type: 'FLAGS',
            emoji: '🇳🇦',
            names: ['flag: Namibia', 'Namibia', 'country', 'national flag'],
            unified: '1F1F3-1F1E6'
        },
        {
            type: 'FLAGS',
            emoji: '🇳🇷',
            names: ['flag: Nauru', 'Nauru', 'country', 'national flag'],
            unified: '1F1F3-1F1F7'
        },
        {
            type: 'FLAGS',
            emoji: '🇳🇵',
            names: ['flag: Nepal', 'Nepal', 'country', 'national flag'],
            unified: '1F1F3-1F1F5'
        },
        {
            type: 'FLAGS',
            emoji: '🇳🇱',
            names: ['flag: Netherlands', 'Netherlands', 'country', 'national flag'],
            unified: '1F1F3-1F1F1'
        },
        {
            type: 'FLAGS',
            emoji: '🇳🇨',
            names: ['flag: New Caledonia', 'New Caledonia', 'territory', 'national flag'],
            unified: '1F1F3-1F1E8'
        },
        {
            type: 'FLAGS',
            emoji: '🇳🇿',
            names: ['flag: New Zealand', 'New Zealand', 'country', 'national flag'],
            unified: '1F1F3-1F1FF'
        },
        {
            type: 'FLAGS',
            emoji: '🇳🇮',
            names: ['flag: Nicaragua', 'Nicaragua', 'country', 'national flag'],
            unified: '1F1F3-1F1EE'
        },
        {
            type: 'FLAGS',
            emoji: '🇳🇪',
            names: ['flag: Niger', 'Niger', 'country', 'national flag'],
            unified: '1F1F3-1F1EA'
        },
        {
            type: 'FLAGS',
            emoji: '🇳🇬',
            names: ['flag: Nigeria', 'Nigeria', 'country', 'national flag'],
            unified: '1F1F3-1F1EC'
        },
        {
            type: 'FLAGS',
            emoji: '🇳🇺',
            names: ['flag: Niue', 'Niue', 'country', 'national flag'],
            unified: '1F1F3-1F1FA'
        },
        {
            type: 'FLAGS',
            emoji: '🇳🇫',
            names: ['flag: Norfolk Island', 'Norfolk Island', 'territory', 'national flag'],
            unified: '1F1F3-1F1EB'
        },
        {
            type: 'FLAGS',
            emoji: '🇰🇵',
            names: ['flag: North Korea', 'North Korea', 'country', 'national flag'],
            unified: '1F1F0-1F1F5'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇵',
            names: ['flag: Northern Mariana Islands', 'Northern Mariana Islands', 'territory', 'national flag'],
            unified: '1F1F2-1F1F5'
        },
        {
            type: 'FLAGS',
            emoji: '🇳🇴',
            names: ['flag: Norway', 'Norway', 'country', 'national flag'],
            unified: '1F1F3-1F1F4'
        },
        {
            type: 'FLAGS',
            emoji: '🇴🇲',
            names: ['flag: Oman', 'Oman', 'country', 'national flag'],
            unified: '1F1F4-1F1F2'
        },
        {
            type: 'FLAGS',
            emoji: '🇵🇰',
            names: ['flag: Pakistan', 'Pakistan', 'country', 'national flag'],
            unified: '1F1F5-1F1F0'
        },
        {
            type: 'FLAGS',
            emoji: '🇵🇼',
            names: ['flag: Palau', 'Palau', 'country', 'national flag'],
            unified: '1F1F5-1F1FC'
        },
        {
            type: 'FLAGS',
            emoji: '🇵🇸',
            names: ['flag: Palestine', 'Palestine', 'territory', 'national flag'],
            unified: '1F1F5-1F1F8'
        },
        {
            type: 'FLAGS',
            emoji: '🇵🇦',
            names: ['flag: Panama', 'Panama', 'country', 'national flag'],
            unified: '1F1F5-1F1E6'
        },
        {
            type: 'FLAGS',
            emoji: '🇵🇬',
            names: ['flag: Papua New Guinea', 'Papua New Guinea', 'country', 'national flag'],
            unified: '1F1F5-1F1EC'
        },
        {
            type: 'FLAGS',
            emoji: '🇵🇾',
            names: ['flag: Paraguay', 'Paraguay', 'country', 'national flag'],
            unified: '1F1F5-1F1FE'
        },
        {
            type: 'FLAGS',
            emoji: '🇵🇪',
            names: ['flag: Peru', 'Peru', 'country', 'national flag'],
            unified: '1F1F5-1F1EA'
        },
        {
            type: 'FLAGS',
            emoji: '🇵🇭',
            names: ['flag: Philippines', 'Philippines', 'country', 'national flag'],
            unified: '1F1F5-1F1ED'
        },
        {
            type: 'FLAGS',
            emoji: '🇵🇳',
            names: ['flag: Pitcairn Islands', 'Pitcairn Islands', 'territory', 'national flag'],
            unified: '1F1F5-1F1F3'
        },
        {
            type: 'FLAGS',
            emoji: '🇵🇱',
            names: ['flag: Poland', 'Poland', 'country', 'national flag'],
            unified: '1F1F5-1F1F1'
        },
        {
            type: 'FLAGS',
            emoji: '🇵🇹',
            names: ['flag: Portugal', 'Portugal', 'country', 'national flag'],
            unified: '1F1F5-1F1F9'
        },
        {
            type: 'FLAGS',
            emoji: '🇵🇷',
            names: ['flag: Puerto Rico', 'Puerto Rico', 'territory', 'national flag'],
            unified: '1F1F5-1F1F7'
        },
        {
            type: 'FLAGS',
            emoji: '🇶🇦',
            names: ['flag: Qatar', 'Qatar', 'country', 'national flag'],
            unified: '1F1F6-1F1E6'
        },
        {
            type: 'FLAGS',
            emoji: '🇷🇴',
            names: ['flag: Romania', 'Romania', 'country', 'national flag'],
            unified: '1F1F7-1F1F4'
        },
        {
            type: 'FLAGS',
            emoji: '🇷🇺',
            names: ['flag: Russia', 'Russia', 'country', 'national flag'],
            unified: '1F1F7-1F1FA'
        },
        {
            type: 'FLAGS',
            emoji: '🇷🇼',
            names: ['flag: Rwanda', 'Rwanda', 'country', 'national flag'],
            unified: '1F1F7-1F1FC'
        },
        {
            type: 'FLAGS',
            emoji: '🇼🇸',
            names: ['flag: Samoa', 'Samoa', 'country', 'national flag'],
            unified: '1F1FC-1F1F8'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇲',
            names: ['flag: San Marino', 'San Marino', 'country', 'national flag'],
            unified: '1F1F8-1F1F2'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇹',
            names: ['flag: São Tomé & Príncipe', 'São Tomé & Príncipe', 'country', 'national flag'],
            unified: '1F1F8-1F1F9'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇦',
            names: ['flag: Saudi Arabia', 'Saudi Arabia', 'country', 'national flag'],
            unified: '1F1F8-1F1E6'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇳',
            names: ['flag: Senegal', 'Senegal', 'country', 'national flag'],
            unified: '1F1F8-1F1F3'
        },
        {
            type: 'FLAGS',
            emoji: '🇷🇸',
            names: ['flag: Serbia', 'Serbia', 'country', 'national flag'],
            unified: '1F1F7-1F1F8'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇨',
            names: ['flag: Seychelles', 'Seychelles', 'country', 'national flag'],
            unified: '1F1F8-1F1E8'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇱',
            names: ['flag: Sierra Leone', 'Sierra Leone', 'country', 'national flag'],
            unified: '1F1F8-1F1F1'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇬',
            names: ['flag: Singapore', 'Singapore', 'country', 'national flag'],
            unified: '1F1F8-1F1EC'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇰',
            names: ['flag: Slovakia', 'Slovakia', 'country', 'national flag'],
            unified: '1F1F8-1F1F0'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇮',
            names: ['flag: Slovenia', 'Slovenia', 'country', 'national flag'],
            unified: '1F1F8-1F1EE'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇧',
            names: ['flag: Solomon Islands', 'Solomon Islands', 'country', 'national flag'],
            unified: '1F1F8-1F1E7'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇴',
            names: ['flag: Somalia', 'Somalia', 'country', 'national flag'],
            unified: '1F1F8-1F1F4'
        },
        {
            type: 'FLAGS',
            emoji: '🇿🇦',
            names: ['flag: South Africa', 'South Africa', 'country', 'national flag'],
            unified: '1F1FF-1F1E6'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇸',
            names: ['flag: South Georgia & South Sandwich Islands', 'South Georgia & South Sandwich Islands', 'territory', 'national flag'],
            unified: '1F1EC-1F1F8'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇸',
            names: ['flag: South Sudan', 'South Sudan', 'country', 'national flag'],
            unified: '1F1F8-1F1F8'
        },
        {
            type: 'FLAGS',
            emoji: '🇰🇷',
            names: ['flag: South Korea', 'South Korea', 'country', 'national flag'],
            unified: '1F1F0-1F1F7'
        },
        {
            type: 'FLAGS',
            emoji: '🇪🇸',
            names: ['flag: Spain', 'Spain', 'country', 'national flag'],
            unified: '1F1EA-1F1F8'
        },
        {
            type: 'FLAGS',
            emoji: '🇱🇰',
            names: ['flag: Sri Lanka', 'Sri Lanka', 'country', 'national flag'],
            unified: '1F1F1-1F1F0'
        },
        {
            type: 'FLAGS',
            emoji: '🇧🇱',
            names: ['flag: St. Barthélemy', 'St. Barthélemy', 'territory', 'national flag'],
            unified: '1F1E7-1F1F1'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇭',
            names: ['flag: St. Helena', 'St. Helena', 'territory', 'national flag'],
            unified: '1F1F8-1F1ED'
        },
        {
            type: 'FLAGS',
            emoji: '🇰🇳',
            names: ['flag: St. Kitts & Nevis', 'St. Kitts & Nevis', 'country', 'national flag'],
            unified: '1F1F0-1F1F3'
        },
        {
            type: 'FLAGS',
            emoji: '🇱🇨',
            names: ['flag: St. Lucia', 'St. Lucia', 'country', 'national flag'],
            unified: '1F1F1-1F1E8'
        },
        {
            type: 'FLAGS',
            emoji: '🇲🇫',
            names: ['flag: St. Martin', 'St. Martin', 'territory', 'national flag'],
            unified: '1F1F2-1F1EB'
        },
        {
            type: 'FLAGS',
            emoji: '🇵🇲',
            names: ['flag: St. Pierre & Miquelon', 'St. Pierre & Miquelon', 'territory', 'national flag'],
            unified: '1F1F5-1F1F2'
        },
        {
            type: 'FLAGS',
            emoji: '🇻🇨',
            names: ['flag: St. Vincent & Grenadines', 'St. Vincent & Grenadines', 'country', 'national flag'],
            unified: '1F1FB-1F1E8'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇩',
            names: ['flag: Sudan', 'Sudan', 'country', 'national flag'],
            unified: '1F1F8-1F1E9'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇷',
            names: ['flag: Suriname', 'Suriname', 'country', 'national flag'],
            unified: '1F1F8-1F1F7'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇿',
            names: ['flag: Swaziland', 'Swaziland', 'country', 'national flag'],
            unified: '1F1F8-1F1FF'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇪',
            names: ['flag: Sweden', 'Sweden', 'country', 'national flag'],
            unified: '1F1F8-1F1EA'
        },
        {
            type: 'FLAGS',
            emoji: '🇨🇭',
            names: ['flag: Switzerland', 'Switzerland', 'country', 'national flag'],
            unified: '1F1E8-1F1ED'
        },
        {
            type: 'FLAGS',
            emoji: '🇸🇾',
            names: ['flag: Syria', 'Syria', 'country', 'national flag'],
            unified: '1F1F8-1F1FE'
        },
        {
            type: 'FLAGS',
            emoji: '🇹🇼',
            names: ['flag: Taiwan', 'Taiwan', 'country', 'national flag'],
            unified: '1F1F9-1F1FC'
        },
        {
            type: 'FLAGS',
            emoji: '🇹🇯',
            names: ['flag: Tajikistan', 'Tajikistan', 'country', 'national flag'],
            unified: '1F1F9-1F1EF'
        },
        {
            type: 'FLAGS',
            emoji: '🇹🇿',
            names: ['flag: Tanzania', 'Tanzania', 'country', 'national flag'],
            unified: '1F1F9-1F1FF'
        },
        {
            type: 'FLAGS',
            emoji: '🇹🇭',
            names: ['flag: Thailand', 'Thailand', 'country', 'national flag'],
            unified: '1F1F9-1F1ED'
        },
        {
            type: 'FLAGS',
            emoji: '🇹🇱',
            names: ['flag: Timor-Leste', 'Timor-Leste', 'country', 'national flag'],
            unified: '1F1F9-1F1F1'
        },
        {
            type: 'FLAGS',
            emoji: '🇹🇬',
            names: ['flag: Togo', 'Togo', 'country', 'national flag'],
            unified: '1F1F9-1F1EC'
        },
        {
            type: 'FLAGS',
            emoji: '🇹🇰',
            names: ['flag: Tokelau', 'Tokelau', 'territory', 'national flag'],
            unified: '1F1F9-1F1F0'
        },
        {
            type: 'FLAGS',
            emoji: '🇹🇴',
            names: ['flag: Tonga', 'Tonga', 'country', 'national flag'],
            unified: '1F1F9-1F1F4'
        },
        {
            type: 'FLAGS',
            emoji: '🇹🇹',
            names: ['flag: Trinidad & Tobago', 'Trinidad & Tobago', 'country', 'national flag'],
            unified: '1F1F9-1F1F9'
        },
        {
            type: 'FLAGS',
            emoji: '🇹🇳',
            names: ['flag: Tunisia', 'Tunisia', 'country', 'national flag'],
            unified: '1F1F9-1F1F3'
        },
        {
            type: 'FLAGS',
            emoji: '🇹🇷',
            names: ['flag: Turkey', 'Turkey', 'country', 'national flag'],
            unified: '1F1F9-1F1F7'
        },
        {
            type: 'FLAGS',
            emoji: '🇹🇲',
            names: ['flag: Turkmenistan', 'Turkmenistan', 'country', 'national flag'],
            unified: '1F1F9-1F1F2'
        },
        {
            type: 'FLAGS',
            emoji: '🇹🇻',
            names: ['flag: Tuvalu', 'Tuvalu', 'country', 'national flag'],
            unified: '1F1F9-1F1FB'
        },
        {
            type: 'FLAGS',
            emoji: '🇻🇮',
            names: ['flag: U.S. Virgin Islands', 'U.S. Virgin Islands', 'territory', 'national flag'],
            unified: '1F1FB-1F1EE'
        },
        {
            type: 'FLAGS',
            emoji: '🇺🇬',
            names: ['flag: Uganda', 'Uganda', 'country', 'national flag'],
            unified: '1F1FA-1F1EC'
        },
        {
            type: 'FLAGS',
            emoji: '🇺🇦',
            names: ['flag: Ukraine', 'Ukraine', 'country', 'national flag'],
            unified: '1F1FA-1F1E6'
        },
        {
            type: 'FLAGS',
            emoji: '🇦🇪',
            names: ['flag: United Arab Emirates', 'United Arab Emirates', 'country', 'national flag'],
            unified: '1F1E6-1F1EA'
        },
        {
            type: 'FLAGS',
            emoji: '🇬🇧',
            names: ['flag: United Kingdom', 'United Kingdom', 'country', 'national flag'],
            unified: '1F1EC-1F1E7'
        },
        {
            type: 'FLAGS',
            emoji: '🇺🇸',
            names: ['flag: United States', 'United States', 'country', 'national flag'],
            unified: '1F1FA-1F1F8'
        },
        {
            type: 'FLAGS',
            emoji: '🇺🇾',
            names: ['flag: Uruguay', 'Uruguay', 'country', 'national flag'],
            unified: '1F1FA-1F1FE'
        },
        {
            type: 'FLAGS',
            emoji: '🇺🇿',
            names: ['flag: Uzbekistan', 'Uzbekistan', 'country', 'national flag'],
            unified: '1F1FA-1F1FF'
        },
        {
            type: 'FLAGS',
            emoji: '🇻🇺',
            names: ['flag: Vanuatu', 'Vanuatu', 'country', 'national flag'],
            unified: '1F1FB-1F1FA'
        },
        {
            type: 'FLAGS',
            emoji: '🇻🇦',
            names: ['flag: Vatican City', 'Vatican City', 'country', 'national flag'],
            unified: '1F1FB-1F1E6'
        },
        {
            type: 'FLAGS',
            emoji: '🇻🇪',
            names: ['flag: Venezuela', 'Venezuela', 'country', 'national flag'],
            unified: '1F1FB-1F1EA'
        },
        {
            type: 'FLAGS',
            emoji: '🇻🇳',
            names: ['flag: Vietnam', 'Vietnam', 'country', 'national flag'],
            unified: '1F1FB-1F1F3'
        },
        {
            type: 'FLAGS',
            emoji: '🇼🇫',
            names: ['flag: Wallis & Futuna', 'Wallis & Futuna', 'territory', 'national flag'],
            unified: '1F1FC-1F1EB'
        },
        {
            type: 'FLAGS',
            emoji: '🇪🇭',
            names: ['flag: Western Sahara', 'Western Sahara', 'territory', 'national flag'],
            unified: '1F1EA-1F1ED'
        },
        {
            type: 'FLAGS',
            emoji: '🇾🇪',
            names: ['flag: Yemen', 'Yemen', 'country', 'national flag'],
            unified: '1F1FE-1F1EA'
        },
        {
            type: 'FLAGS',
            emoji: '🇿🇲',
            names: ['flag: Zambia', 'Zambia', 'country', 'national flag'],
            unified: '1F1FF-1F1F2'
        },
        {
            type: 'FLAGS',
            emoji: '🇿🇼',
            names: ['flag: Zimbabwe', 'Zimbabwe', 'country', 'national flag'],
            unified: '1F1FF-1F1FC'
        },
        {
            type: 'FLAGS',
            emoji: '🏴‍☠️',
            names: ['pirate flag', 'pirate', 'skull and crossbones', 'jolly roger'],
            unified: '1F3F4-200D-2620-FE0F'
        }
    ]
}
