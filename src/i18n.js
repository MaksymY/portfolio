import { createI18n } from "vue-i18n";
import en from "./translation/en.json"
import fr from "./translation/fr.json"
import ua from "./translation/ua.json"

const i18n = createI18n({
    legacy: false,
    locale: "fr",
    globalInjection: true,
    messages: {
        en: en,
        fr: fr,
        ua: ua
    }
});
export default i18n;