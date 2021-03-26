class TeamsTools {
    static static = {
        prefix: '[TEAMS TOOLS]:'
    }

    static sel;

    static redeclareSel() {
        this.sel = {
            buttons: {
                disconnect: document.querySelector('#hangup-button'),
                muteMicrophone: document.querySelector('#microphone-button'),
                raiseHand: document.querySelector('#raise-hand-button'),
                sendMessage: document.querySelector('#send-message-button')
            },
            textareas: {
                chatMessage: document.querySelector('.cke_wysiwyg_div div')
            }
        };
    };

    static watchTime(time, callback, interval = 1000) {
        const worker = setInterval(() => {
            TeamsTools.redeclareSel();

            const currentTime = new Date().getTime();
            if (currentTime >= time) {
                callback();
                clearInterval(worker);
            }
        }, interval);
    }

    static raiseHand = {
        data: {
            delay: 1000
        },

        setDelay(delay) {
            this.data.delay = delay;
        },

        start() {
            const raise = () => {
                TeamsTools.redeclareSel();
                const raiseHandButton = TeamsTools.sel.buttons.raiseHand;

                if (raiseHandButton) {
                    raiseHandButton.click();
                } else {
                    TeamsTools.redeclareSel();
                    console.warn(`${TeamsTools.static.prefix} Your screen resolution is too low, the hand up button is not displayed. Resize the window so that the above button is available.`);
                }
                
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
            TeamsTools.redeclareSel();

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
                TeamsTools.redeclareSel();

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

    static disconnect = {
        data: {
            desiredDate: undefined
        },

        schedule(hour = {
            hours: new Date().getHours(),
            minutes: new Date().getMinutes()
        }, date = {
            day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            year: new Date().getFullYear()
        }) {
            TeamsTools.redeclareSel();

            if (TeamsTools.sel.buttons.disconnect) {
                this.data.desiredDate = new Date(`
                    ${date.month}/
                    ${date.day}/
                    ${date.year} 
                    ${hour.hours}:
                    ${hour.minutes}:
                    00
                `)
                TeamsTools.sel.buttons.disconnect.style['background-color'] = 'yellowgreen';
                TeamsTools.sel.buttons.disconnect.innerHTML = '<img src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/10-512.png" style="width: 50%;filter: invert(1);height: 50%;transform: translate(50%, 50%);">';
                console.warn(`${TeamsTools.static.prefix} Scheduled auto-disconnect for: ${this.data.desiredDate}`);
                TeamsTools.watchTime(this.data.desiredDate.getTime(), () => {
                    this.now();
                    console.warn(`${TeamsTools.static.prefix} You were disconnected from this meeting.`);
                })
            } else {
                console.warn(`${TeamsTools.static.prefix} You are not currently in a meeting. You must be in a call to schedule an automatic disconnect.`);
            }
        },

        now() {
            TeamsTools.redeclareSel();
            TeamsTools.sel.buttons.disconnect.click();
        }
    }

    static chat = {
        send(content) {
            TeamsTools.redeclareSel();
            TeamsTools.sel.textareas.chatMessage.textContent = content;
            TeamsTools.sel.buttons.sendMessage.click();
        }
    }
}

window[teamsCLI] = new TeamsTools();