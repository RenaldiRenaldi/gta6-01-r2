let ctx,master,station=0;export function bootAudio(){if(ctx)return;ctx=new(window.AudioContext||window.webkitAudioContext)();master=ctx.createGain();master.gain.value=.11;master.connect(ctx.destination)}
export function tone(f=220,d=.12,type='sine',gain=.2){if(!ctx)return;const o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.value=f;g.gain.setValueAtTime(gain,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+d);o.connect(g);g.connect(master);o.start();o.stop(ctx.currentTime+d)}
export function radio(){station=(station+1)%2;return station}export function currentStation(){return station}
export function engine(speed){if(speed>4)tone(75+speed*2,.045,'sawtooth',.025)}export function siren(){tone(410,.16,'square',.035)}export function shot(){tone(95,.09,'sawtooth',.16)}
// R2 revision pass: synthesized cues keep the soundscape self-contained and offline.
