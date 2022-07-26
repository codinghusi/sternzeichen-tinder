export function numberNoise(seed) {
    return Math.cos(seed * 100);
}

export function datestrToData(str) {
    const regex = /(\d{2})\.(\d{2})\./;
    const match = regex.exec(str);
    const [, day, month] = match;
    return { day: parseInt(day), month: parseInt(month) };
}