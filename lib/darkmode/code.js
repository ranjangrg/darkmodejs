/*
    Main DarkModeApp class definition and implementation
*/
export class DarkModeApp {
    constructor() {
        // console.log("Dark mode object created ...");
        // maybe call this.init() here!??
    }
    init() {
        this._init_dark_mode_btn();
        this._init_dark_mode_features();
        this._init_color_mode_within_dom();
    }
    _init_dark_mode_btn() {
        let toggler_elem = document.getElementById("mode-toggler");
        toggler_elem.innerHTML =
            `<label class="switch">
			<input id="mode-btn" type="checkbox">
			<span class="slider round"></span>
		</label>`;
    }
    _init_dark_mode_features() {
        const mode_btn = document.getElementById("mode-btn");
        mode_btn.onchange = (e) => {
            let curr_mode = "dark-mode";
            if (mode_btn.checked) {
                curr_mode = "light-mode";
            }
            let all_elems = document.getElementsByClassName(curr_mode);
            for (let elem of [...all_elems]) {
                elem.classList.toggle("light-mode");
                elem.classList.toggle("dark-mode");
            }
            ;
        };
    }
    // adds 'light-mode' class to all [data-dm-use-color-mode]
    // within [data-dm-enable-color-mode]
    _init_color_mode_within_dom() {
        // needs [data-dm-enable-color-mode] to be set first
        let node_list = document.querySelectorAll("[data-dm-enable-color-mode] [data-dm-use-color-mode]");
        node_list.forEach((nd) => {
            nd.classList.toggle("light-mode");
        });
    }
}
