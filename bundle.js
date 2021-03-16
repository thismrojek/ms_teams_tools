class TeamsTools {
    static sel = {
        buttons: {
            raiseHand: document.querySelector('#raise-hand-button')
        }
    };

    static raiseHand = {
        data: {
            delay: 1000
        },

        setDelay(delay) {
            this.data.delay = delay;
        },

        start() {
            const raiseHandButton = TeamsTools.sel.buttons.raiseHand;
            const raise = () => {
                raiseHandButton.click();
                if (this.data.delay > 0) {
                    setTimeout(() => {
                        raise();
                    }, this.data.delay);
                }
            }; raise();
        },

        stop() {
            this.data.delay = 0;
        }
    }
}
