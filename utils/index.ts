export const APP_NAME = "Nordle" as const;

export const KEYBOARD_LETTERS = [
    ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ"],
    ["い", "き", "し", "ち", "に", "ひ", "み", "　", "り", "　"],
    ["う", "く", "す", "つ", "ぬ", "ふ", "む", "ゆ", "る", "を"],
    ["え", "け", "せ", "て", "ね", "へ", "め", "　", "れ", "　"],
    ["お", "こ", "そ", "と", "の", "ほ", "も", "よ", "ろ", "ん"],
    ["ぁ", "が", "ざ", "だ", "　", "ば", "ぱ", "ゃ", "　", "　"],
    ["ぃ", "ぎ", "じ", "ぢ", "　", "び", "ぴ", "　", "　", "　"],
    ["ぅ", "ぐ", "ず", "づ", "っ", "ぶ", "ぷ", "ゅ", "ー", "　"],
    ["ぇ", "げ", "ぜ", "で", "　", "べ", "ぺ", "　", "　", "　"],
    ["ぉ", "ご", "ぞ", "ど", "　", "ぼ", "ぽ", "ょ", "　", "　"]
];

export const ANSWER_LIMIT = 5;

export const LETTER_COLORS = {
    EXACT_MATCH: {
        color: "#ffffff", 
        bg: "#4caf50"
    },
    PARTIAL_MATCH: {
        color: "#ffffff", 
        bg: "#C9B458"
    },
    NO_MATCH: {
        color: "#ffffff", 
        bg: "#757575"
    },
    UNRATED: {
        color: "#000000", 
        bg: "#ffffff"
    }
} as const;

export const PREF_CODES = {
    "東京都": "Z011",
    "神奈川県": "Z012",
    "埼玉県": "Z013"
} as const;

export const randomSelect = <T>(items: T[]): T => items[Math.floor(Math.random() * items.length)];