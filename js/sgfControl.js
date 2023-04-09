var sgfControl = {};


sgfControl.init = function() {
    sgfControl.sgfCatChecksElement = document.getElementById("sgfCatChecks");

    document.getElementById("sgfCatAllBtn").addEventListener("click", sgfControl.sgfCatAllBtnClickListener);
    document.getElementById("sgfCatNoneBtn").addEventListener("click", sgfControl.sgfCatNoneBtnClickListener);

    sgfControl.createSGFCatEnableds();

    sgfControl.createSGFCatCheckElements();
};


sgfControl.sgfCatAllBtnClickListener = function () {
    for (const key of Object.keys(sgfControl.sgfCatEnableds)) {
        sgfControl.sgfCatEnableds[key] = true;
        document.getElementById(key).checked = true;
    }

    custom.setSGFs();
};

sgfControl.sgfCatNoneBtnClickListener = function () {
    for (const key of Object.keys(sgfControl.sgfCatEnableds)) {
        sgfControl.sgfCatEnableds[key] = false;
        document.getElementById(key).checked = false;
    }
};


sgfControl.createSGFCatEnableds = function () {
    sgfControl.sgfCatEnableds = {};
    sgfControl.createSGFCatEnabledsLoop("", sgfs);
};

sgfControl.createSGFCatEnabledsLoop = function (enabledKey, category) {
    if (category.hasOwnProperty("Enabled")) {
        sgfControl.sgfCatEnableds[enabledKey] = category.Enabled;
    }

    for (const [key, value] of Object.entries(category)) {
        if (key == "Enabled") continue;

        if (!Array.isArray(value)) {
            sgfControl.createSGFCatEnabledsLoop(enabledKey + key, value);
        }
    }
};

sgfControl.createSGFCatCheckElements = function () {
    sgfControl.createSGFCatCheckElementsLoop("", "", sgfs);
};

sgfControl.createSGFCatCheckElementsLoop = function (enabledKey, name, category, parentDiv = sgfControl.sgfCatChecksElement, depth = 0) {
    if (enabledKey != "") {
        let span = document.createElement("span");
        span.innerHTML = "";
        for (let i = 1; i < depth; i++) {
            span.innerHTML += "&nbsp;|&nbsp;";
        }

        let label = document.createElement("label");
        label.innerHTML = name;
        label.htmlFor = enabledKey;

        let input = document.createElement("input");
        input.type = "checkbox";
        input.checked = sgfControl.sgfCatEnableds[enabledKey];
        input.id = enabledKey;
        input.addEventListener("change", sgfControl.sgfCatCheckChangeListener);

        let div = document.createElement("div");
        div.appendChild(span);
        div.appendChild(input);
        div.appendChild(label);

        parentDiv.appendChild(div);

        parentDiv = div;
    }

    for (const [key, value] of Object.entries(category)) {
        if (key == "Enabled") continue;

        if (!Array.isArray(value)) {
            sgfControl.createSGFCatCheckElementsLoop(enabledKey + key, key, value, parentDiv, depth + 1);
        }
    }
};

sgfControl.sgfCatCheckChangeListener = function (event) {
    sgfControl.sgfCatEnableds[event.target.id] = event.target.checked;
    custom.setSGFs();
};
