class TeamsTools {
    static sel = {
        buttons: {
            raiseHand: document.querySelector('#raise-hand-button'),
            muteMicrophone: document.querySelector('#microphone-button')
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

    static lagMicrophone = {
        data: {
            toggled: true
        },

        start(toggled = true) {
            if (toggled == true) {
                this.data.toggled = true;
            } else if (toggled == false) {
                this.data.toggled = false;
            }
            const muteButton = TeamsTools.sel.buttons.muteMicrophone;
            let delayParams = [];
            for(let i = 0; i <= 9; i++) {
                delayParams.push(Math.round(Math.random() * 800));
            }
            console.log(delayParams);
            
            const mute = () => {
                muteButton.click();
                if (this.data.toggled) {
                    setTimeout(() => {
                        mute();
                    }, delayParams[Math.round(Math.random() * 10)]);
                }
            }; mute();
        },

        stop() {
            this.start(false);
        }
    }
}
