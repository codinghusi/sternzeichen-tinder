import {getZodiacSign} from "./zodiac-signs";
import {algorithm} from "./matching-algorithm";

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

        const result = algorithm(date1, date2);
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







