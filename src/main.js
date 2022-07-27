import {getZodiacSign} from "./zodiac-signs";
import {algorithm} from "./matching-algorithm";

function onload() {
    const form = document.getElementById("form");
    const output = document.getElementById("output");
    const button = document.getElementById("button");
    const commons = document.getElementById("commons");
    const challenges = document.getElementById("challenges");
    const relationDescription = document.getElementById("relation-description");
    const percent = document.getElementById("percent");
    const signs = document.getElementById("signs");


    const b1 = form.birthdate1;
    const b2 = form.birthdate2;

    let hasPushedHistory = false;

    b1.addEventListener("change", updateURL);
    b2.addEventListener("change", updateURL);

    function updateURL() {
        const params = new URLSearchParams(window.location.search);
        params.set("birthdate1", b1.value);
        params.set("birthdate2", b2.value);
        const search = "?" + params.toString();

        const url = window.location.href.split("?")[0] + search;

        if (window.location.search !== search) {
            button.classList.remove("disabled");
            if (hasPushedHistory) {
                window.history.replaceState({}, null, url);
            } else {
                window.history.pushState({}, null, url);
                hasPushedHistory = true;
                output.classList.add("hidden");
            }
        } else {
            button.classList.add("disabled");
        }

        if (!b1.checkValidity() || !b2.checkValidity()) {
            button.classList.add("disabled");
        }
    }

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
        // reset the animation
        output.style.animation = "none";
        output.offsetHeight; // trigger reflow
        output.style.animation = "open-animation 500ms ease";

        button.classList.add("disabled");
    }

    function onsubmit(event) {
        if (hasPushedHistory) {
            evaluate();
            hasPushedHistory = false;
        }

        event.preventDefault();
        return false;
    }

    form.addEventListener("submit", onsubmit);
    window.addEventListener("popstate", evaluate);

    evaluate();
}

window.addEventListener("load", onload);







