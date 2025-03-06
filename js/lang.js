async function translatePage(targetLang) {
    const elements = document.querySelectorAll("[data-key]");

    for (const element of elements) {
        let originalText = element.innerText.trim();

        // Skip translation if text is empty
        if (!originalText) continue;

        // Prevent translation of "Health Metrica"
        const placeholder = "HEALTH-METRICA";
        let textToTranslate = originalText.replace(/Health\s*Metrica/gi, placeholder);

        let translatedText = await translateText(textToTranslate, targetLang);

        // Restore "Health Metrica" exactly as it was
        translatedText = translatedText.replace(new RegExp(placeholder, "g"), "Health Metrica");

        element.innerText = translatedText;
    }
}

async function translateText(text, targetLang) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;

    try {
        const response = await fetch(url);
        const result = await response.json();

        return result[0].map(sentence => sentence[0]).join(" "); // Ensure full text translation
    } catch (error) {
        console.error("Translation error:", error);
        return text; // Return original text if translation fails
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("languageSelector");
    if (languageSelector) {
        languageSelector.addEventListener("change", function () {
            const selectedLang = this.value;
            translatePage(selectedLang);
        });
    }
});
