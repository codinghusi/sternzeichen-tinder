export const zodiacSigns = [
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

export function getZodiacSign(date) {
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