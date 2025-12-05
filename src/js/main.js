import {settings} from "./settings";

const dayNight = {
    init() {
        document.documentElement.classList.add(settings.jsEnabledClass);

        this.btnElement = document.querySelector(settings.btnSelector);
        this.tumblerElement = document.querySelector(settings.tumblerSelector);
        this.postElements = document.querySelectorAll(settings.postSelector);

        this.btnElement.addEventListener('click', () => {
            this.changeClasses();
        });

    },

    changeClasses() {
        document.body.classList.toggle(settings.bodyClass);
        this.tumblerElement.classList.toggle(settings.tumblerClass);
        this.postElements.forEach((postElement) =>{
            postElement.classList.toggle(settings.postClass);
        })

    },
};
dayNight.init();