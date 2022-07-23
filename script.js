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
    const form = document.getElementById("form1");
    const button = document.getElementById("button");
    const output = document.getElementById("output1");

    const b1 = form.birthdate1;
    const b2 = form.birthdate2;

    function evaluate() {
        const params = new URLSearchParams(window.location.search);
        b1.value = params.get("birthdate1");
        b2.value = params.get("birthdate2");

        if (!b1.value.length || !b2.value.length) {
            return;
        }

        const date = new Date(b1.value);

        const sign = getZodiacSign(date);
        console.log(sign);
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
const day = 27;
console.log(89 + Math.cos(day/31*Math.PI*2)*5 + (5*sigmoid(parameter)));

const vips= [
    "08.02.",
    "31.03.",
    "12.07.",
    "28.09.",
    "03.12.",
    "27.12.",
    "28.12.",
    "29.12."
].map(datestrToData);

function sigmoid(parameter) {
    parameter = ((parameter-1)*8)
    return 1 / (1 + Math.exp(-parameter));
  }

function datestrToData(str) {
    const regex = /(\d{2})\.(\d{2})\./;
    const match = regex.exec(str);
    const [, day, month] = match;
    return { day: parseInt(day), month: parseInt(month) };
}

function percent(data1, data2, parameter) {
    for(const daten of vips)
    { if ((data1.day === daten.day   && data1.month === daten.month) || (data2.day===daten.day && data2.month === daten.month)){
        percent1 = 89 + Math.cos(daten.day/31*Math.PI*2)*5 + (5*sigmoid(parameter));
        return percent1;
    }
    else return sigmoid(parameter);
    }
}

function algorithmus(data1, data2){
    const positives = [];
    for(const feature of data2.positives) {
        for (const feature2 of data1.positives){
            if(feature === feature2)
            { positives.push(feature)}
        }
    }

    const parameter = (anzahl/data2.positives.length)

    
    function sigmoid(parameter) {
        parameter = ((parameter-1)*8)
        return 1 / (1 + Math.exp(-parameter));
    }

    return {
        negatives: data1.negatives,
        negatives2: data2.negatives,
        positives: data1.positives,
        positives: data2.positives,
        percent: percent(data1, data2),

    }
}