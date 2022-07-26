import {getZodiacSign} from "./zodiac-signs";
import {categories} from "./categories";
import {isBlacklisted, isVip} from "./special-dates";
import {numberNoise} from "./helper-functions";

function percent(date1, date2, featurePercent, matchingBoost) {
    const sign1 = getZodiacSign(date1);
    const sign2 = getZodiacSign(date2);

    if (isBlacklisted(date1, date2)) {
        return 0.69;
    }

    if (isVip(date1, date2)) {
        return 89 + numberNoise(date1.getTime() + date2.getTime())*5 + (5 * featurePercent/100);
    }

    let boostPercent;
    if (matchingBoost === "normal") {
        boostPercent = 25;
    }
    if(matchingBoost === "buff"){
        boostPercent = 48;
    }
    if(matchingBoost === "nerf"){
        boostPercent = 0;
    }

    return (featurePercent*0.5) + boostPercent + numberNoise(sign1.from.day + sign2.from.day);
}

export function algorithm(date1, date2){
    const sign1 = getZodiacSign(date1);
    const sign2 = getZodiacSign(date2);
    const matches = [];
    const allPositives = [...new Set([...sign1.positives, ...sign2.positives])];
    for(const feature of sign2.positives) {
        if (matches.includes(feature)) {
            continue;
        }
        outer: for (const feature2 of sign1.positives){
            if (matches.includes(feature2)) {
                continue;
            }
            for (const group of categories) {
                if (group.includes(feature) && group.includes(feature2)) {
                    matches.push(feature);
                    break outer;
                }
            }
        }
    }

    const featurePercent = (matches.length / allPositives.length) * 100;
    let matchingBoost = "normal";
    if (sign1.relational.includes(sign2.name) || sign2.relational.includes(sign1.name)) {
        matchingBoost = "buff";
    } else if (sign1.nonRelational.includes(sign2.name) || sign2.nonRelational.includes(sign1.name)) {
        matchingBoost = "nerf";
    }

    if (isVip(date1, date2)) {
        matchingBoost = "buff";
    } else if (isBlacklisted(date1, date2)) {
        matchingBoost = "nerf";
    }

    return {
        negatives: sign1.negatives,
        negatives2: sign2.negatives,
        positives: matches,
        percent: percent(date1, date2, featurePercent, matchingBoost),
        relationalMatching: matchingBoost,
        allPositives
    }
}