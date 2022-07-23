const FREUNDLICH = {
    value: "freundlich",
    description: "Ist freundlich"
}

const groups = [
    ["ehrlich", "energievoll", "visionär", "loyal", "leben intensiv", "kontaktfreudig", "sorgfältig", "spirituell", "treu", "verführerisch", "genießerisch", "tolerant", "großzügig", "geheimnisvoll", "große Seelenkraft"],
    ["abenteuerlustig", "freundlich", "energievoll", "visionär", "leben intensiv", "diszipliniert", "ermunternd", "kreativ", "individuell", "unabhängig", "leidenschaftlich", "wissbegierig"],
    ["ehrlich", "energievoll", "visionär", "loyal", "vergessen nichts", "organisiert", "diszipliniert", "können Missstände ansprechen", "feministisch", "verantwortungsvoll", "unabhängig", "wertebewusst", "treu", "tolerant", "selbstständig", "unabhängig"],
    ["abenteuerlustig", "selbstironisch", "energievoll", "charismatisch", "kontaktfreudig", "diplomatisch", "charmant", "auffällig", "authentisch", "schnell", "willensstark", "selbstständig", "sportlich"],
    ["ehrlich", "abenteuerlustig", "selbstironisch", "energievoll", "loyal", "charismatisch", "charmant", "können Missstände ansprechen", "gesellig", "spontan", "treu", "verführerisch", "freundlich", "freundschaftlich", "kommunikativ", "großzügig"],
    ["energievoll", "ermunternd", "spirituell", "emotional", "romantisch", "verständnisvoll", "verzeihend", "leidenschaftlich", "genießerisch", "freundschaftlich", "empfindsam", "gefühlsbetont"],
    ["freundlich", "energievoll", "visionär", "vergessen nichts", "organisiert", "diplomatisch", "optimistisch", "sorgfältig", "diszipliniert", "können Missstände ansprechen", "mutig", "führungsstark", "selbstbewusst", "authentisch", "kommunikativ", "wissbegierig", "schnell", "willensstark", "selbstständig", "sportlich", "unabhängig"]
];

const zodiacSigns = [
    {
        name: "Wassermann",
        from: { day: 20, month: 1 },
        positives: [
            "spirituell",
            "feministisch",
            "auffällig",
            "kreativ",
            "individuell",
            "gesellig",
            "emotional"
        ],
        negatives: [
            "rebellisch",
            "distanziert",
            "sprunghaft",
            "unruhig",
            "eigenwillig"
        ],
        relational: [
            "Schütze",
            "Zwilling"
        ],
        nonRelational: [
            "Stier"
        ]
    },
    {
        name: "Fische",
        from: { day: 19, month: 2 },
        positives: [
            "romantisch",
            "verständnisvoll",
            "verzeihend",
            "mutig"
        ],
        negatives: [
            "anhänglich",
            "verschlossen",
            "manipulativ",
            "impulsiv"
        ],
        relational: [
            "Fische",
            "Skorpion"
        ],
        nonRelational: [
            "Widder",
            "Löwe"
        ]
    },
    {
        name: "Widder",
        from: { day: 21, month: 3 },
        positives: [
            "führungsstark",
            "verantwortungsvoll",
            "unabhängig",
            "spontan",
            "leidenschaftlich",
            "selbstbewusst"
        ],
        negatives: [
            "impulsiv",
            "direkt",
            "arrogant",
            "herrschsüchtig"
        ],
        relational: [
            "Löwe",
            "Zwillinge"
        ],
        nonRelational: [
            "Krebs",
            "Fische"
        ]
    },
    {
        name: "Stier",
        from: { day: 20, month: 4 },
        positives: [
            "wertebewusst",
            "authentisch",
            "genießerisch",
            "treu",
            "verführerisch"
        ],
        negatives: [
            "unbeugsam",
            "stur",
            "besitzergreifend",
            "eifersüchtig"
        ],
        relational: [
            "Löwe",
            "Wassermann",
            "Krebs"
        ],
        nonRelational: [
            "Skorpion"
        ]
    },
    {
        name: "Zwilling",
        from: { day: 21, month: 5 },
        positives: [
            "tolerant",
            "freundschaftlich",
            "kommunikativ",
            "wissbegierig",
            "schnell",
            "großzügig"
        ],
        negatives: [
            "entscheidungsfaul",
            "distanziert",
            "verschlossen",
            "spottend"
        ],
        relational: [
            "Waage",
            "Wassermann",
            "Schütze"
        ],
        nonRelational: [
            "Jungfrau"
        ]
    },
    {
        name: "Krebs",
        from: { day: 21, month: 6 },
        positives: [
            "empfindsam",
            "geheimnisvoll",
            "gefühlsbetont",
            "willensstark",
            "große Seelenkraft"
        ],
        negatives: [
            "launisch",
            "rebellisch",
            "besitzergreifend"
        ],
        relational: [
            "Steinbock",
            "Skorpion"
        ],
        nonRelational: [
            "Fische",
            "Waage"
        ]
    },
    {
        name: "Löwe",
        from: { day: 23, month: 7 },
        positives: [
            "führungsstark",
            "selbstbewusst",
            "selbstständig",
            "sportlich"
        ],
        negatives: [
            "abgehoben",
            "Angst vor Neid",
            "selbstverliebt"
        ],
        relational: [
            "Schütze",
            "Widder"
        ],
        nonRelational: [
            "Wassermann"
        ]
    },
    {
        name: "Jungfrau",
        from: { day: 23, month: 8 },
        positives: [
            "unabhängig",
            "können Missstände ansprechen",
            "ermunternd",
            "diszipliniert",
            "sorgfältig"
        ],
        negatives: [
            "kompromisslos",
            "perfektionistisch",
            "verschlossen",
            "kritiksüchtig"
        ],
        relational: [
            "Fische",
            "Stier",
        ],
        nonRelational: [
            "Zwilling"
        ]
    },
    {
        name: "Waage",
        from: { day: 23, month: 9 },
        positives: [
            "kreativ",
            "optimistisch",
            "charmant",
            "diplomatisch",
            "kontaktfreudig"
        ],
        negatives: [
            "nicht gelassen",
            "bestätigungssuchend",
            "verschlossen",
            "Angst vor Vorurteile"
        ],
        relational: [
            "Steinbock",
            "Stier",
            "Zwilling"
        ],
        nonRelational: []
    },
    {
        name: "Skorpion",
        from: { day: 23, month: 10 },
        positives: [
            "charismatisch",
            "leben intensiv",
            "organisiert",
            "vergessen nichts",
            "loyal"
        ],
        negatives: [
            "dominant",
            "besitzergreifend",
            "erwartungsvoll",
            "rachbegierend"
        ],
        relational: [
            "Fische",
            "Skorpion",
            "Stier"
        ],
        nonRelational: [
            "Löwe"
        ]
    },
    {
        name: "Schütze",
        from: { day: 22, month: 11 },
        positives: [
            "visionär",
            "optimistisch",
            "energievoll",
            "abenteuerlustig",
            "ehrlich"
        ],
        negatives: [
            "Angst vor Abhängigkeit",
            "ungebunden",
            "nicht beständig",
            "Drang nach Entfaltung",
            "Drang zu missionieren"
        ],
        relational: [
            "Wassermann",
            "Fische",
            "Zwillinge"
        ],
        nonRelational: [
            "Jungfrau"
        ]
    },
    {
        name: "Steinbock",
        from: { day: 22, month: 12 },
        positives: [
            "führungsstark",
            "freundlich",
            "kommunikativ",
            "selbstironisch"
        ],
        negatives: [
            "Leistungsdrang",
            "Kontrolldrang",
            "Verzichtet auf Hilfe"
        ],
        relational: [
            "Waage",
            "Fische"
        ],
        nonRelational: [
            "Widder"
        ]
    }
];

const vips= [
    "31.03.",
    "12.07.",
    "28.09.",
    "03.12.",
    "27.12.",
    "28.12.",
    "29.12."
].map(datestrToData);

const blacklist = [
    "08.02.",
    "15.06.",
    "29.05.",
    "10.09."
].map(datestrToData);

// const myFeatures = groups.flat();
// const missing = zodiacSigns.map(({positives}) => positives.filter(feature => !myFeatures.includes(feature))).flat();
// console.log(missing);

function getZodiacSign(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    let lastSign = zodiacSigns[zodiacSigns.length - 1];

    for (const sign of zodiacSigns) {
        if (sign.from.month > month || (sign.from.day > day && sign.from.month === month)) {
            break;
        }
        lastSign = sign;
    }

    return lastSign;
}

function onload() {
    const form = document.getElementById("form");
    const button = document.getElementById("button");
    const output = document.getElementById("output");

    const commons = document.getElementById("commons");
    const challenges = document.getElementById("challenges");
    const relationDescription = document.getElementById("relation-description");
    const percent = document.getElementById("percent");
    const signs = document.getElementById("signs");


    const b1 = form.birthdate1;
    const b2 = form.birthdate2;

    function evaluate() {
        const params = new URLSearchParams(window.location.search);
        b1.value = params.get("birthdate1");
        b2.value = params.get("birthdate2");

        if (!b1.value.length || !b2.value.length) {
            return;
        }

        const date1 = new Date(b1.value);
        const date2 = new Date(b2.value);
        const sign1 = getZodiacSign(date1);
        const sign2 = getZodiacSign(date2);

        const result = algorithmus(date1, date2);
        const negatives = [...result.negatives, ...result.negatives2].slice(0, 3);

        console.log(result);

        commons.innerHTML = result.positives.map(feature => `<li>${feature}</li>`).join('');
        challenges.innerHTML = negatives.map(feature => `<li>${feature}</li>`).join('');
        signs.innerHTML = `<span>${sign1.name}</span> &#10133; <span>${sign2.name}</span>`

        percent.innerHTML = Math.round(result.percent * 100) / 100 + "%";

        if (result.relationalMatching === "normal") {
            relationDescription.innerHTML = "Brigitte.de hat euch leider nicht erwähnt...";
        } else if (result.relationalMatching === "buff") {
            relationDescription.innerHTML = "Nach Brigitte.de passt ihr sehr gut zusammen!";
        } else {
            relationDescription.innerHTML = "Brigitte.de sagt leider, dass ihr beiden eher wenig Erfolg zusammen haben werdet :(";
        }

        output.classList.remove("hidden");
    }

    function onsubmit(event) {
        const params = new URLSearchParams(window.location.search);
        params.set("birthdate1", b1.value);
        params.set("birthdate2", b2.value);
        const search = "?" + params.toString();

        if (window.location.search !== search) {
            window.history.pushState({}, null, window.location.href.split("?")[0] + search);
            evaluate();
        }

        event.preventDefault();
        return false;
    }

    form.addEventListener("submit", onsubmit);
    window.addEventListener("popstate", evaluate);

    evaluate();
}

window.addEventListener("load", onload);



function numberNoise(seed) {
    return Math.cos(seed * 100);
}

function datestrToData(str) {
    const regex = /(\d{2})\.(\d{2})\./;
    const match = regex.exec(str);
    const [, day, month] = match;
    return { day: parseInt(day), month: parseInt(month) };
}

function isVip(date1, date2) {
    for (const daten of vips) {
        if ((date1.getDate() === daten.day && date1.getMonth()+1 === daten.month) || (date2.getDate()===daten.day && date2.getMonth()+1 === daten.month)) {
            return true;
        }
    }
}

function isBlaclisted(date1, date2) {
    for (const daten of blacklist) {
        if ((date1.getDate() === daten.day && date1.getMonth()+1 === daten.month) || (date2.getDate()===daten.day && date2.getMonth()+1 === daten.month)) {
            return true;
        }
    }
}

function percent(date1, date2, featurePercent, matchingBoost) {
    const sign1 = getZodiacSign(date1);
    const sign2 = getZodiacSign(date2);
    if (isVip(date1, date2)) {
        const percent1 = 89 + numberNoise(date1.getTime() + date2.getTime())*5 + (5 * featurePercent/100);
        return percent1;
    }
    if (isBlaclisted(date1, date2)) {
        const percent1= 0.69;
        return percent1;
    }

    let boostPercent;
    if (matchingBoost === "normal") {
        boostPercent = 25;
    }
    if(matchingBoost === "buff"){
        boostPercent = 50;
    }
    if(matchingBoost === "nerf"){
        boostPercent = 0;
    }

    return (featurePercent*0.5) + boostPercent + numberNoise(sign1.from.day + sign2.from.day);
}

function algorithmus(date1, date2){
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
            for (const group of groups) {
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
    } else if (isBlaclisted(date1, date2)) {
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