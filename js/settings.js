var settings = {};


settings.init = function() {
    settings.colorSelect = document.getElementById("colorSelect");
    settings.randomSelect = document.getElementById("randomSelect");
    settings.scrambleSelect = document.getElementById("scrambleSelect");

    settings.colorSelect.addEventListener("change", (event) => (settings.color = event.target.value));
    settings.randomSelect.addEventListener("change", (event) => (settings.random = event.target.value));
    settings.scrambleSelect.addEventListener("change", (event) => (settings.scramble = event.target.value));

    const changeEvent = new Event("change");
    settings.colorSelect.dispatchEvent(changeEvent);
    settings.randomSelect.dispatchEvent(changeEvent);
    settings.scrambleSelect.dispatchEvent(changeEvent);

    document.getElementById("newBtn").addEventListener("click", custom.nextSGF);
    document.getElementById("resetBtn").addEventListener("click", custom.resetSGF);

    settings.colorSelect.addEventListener("change", custom.nextSGF);
    settings.randomSelect.addEventListener("change", custom.nextSGF);
    settings.scrambleSelect.addEventListener("change", custom.nextSGF);
};
