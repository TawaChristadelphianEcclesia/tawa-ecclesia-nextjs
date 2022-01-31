const WORDS_PER_MINUTE = 220;
export function getTextReadingTime(
    text: string,
    wordsPerMinute = WORDS_PER_MINUTE
) {
    return Math.round(
        text.split(" ").filter((word) => word !== "").length / wordsPerMinute
    );
}
