import {datestrToData} from "./helper-functions";

export const vips= [
    "31.03.",
    "12.07.",
    "28.09.",
    "03.12.",
    "27.12.",
    "28.12.",
    "29.12."
].map(datestrToData);

export const blacklist = [
    "08.02.",
    "15.06.",
    "29.05.",
    "10.09."
].map(datestrToData);

export function isVip(date1, date2) {
    for (const date of vips) {
        if ((date1.getDate() === date.day && date1.getMonth()+1 === date.month) || (date2.getDate()===date.day && date2.getMonth()+1 === date.month)) {
            return true;
        }
    }
}

export function isBlacklisted(date1, date2) {
    for (const date of blacklist) {
        if ((date1.getDate() === date.day && date1.getMonth()+1 === date.month) || (date2.getDate()===date.day && date2.getMonth()+1 === date.month)) {
            return true;
        }
    }
}