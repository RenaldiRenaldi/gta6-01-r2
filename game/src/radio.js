import {currentStation,radio} from './audio.js';
const lines=['“Good afternoon, Solmara. Keep the windows down.”','“Dispatch reports a suspect moving through the Glass Quarter. You heard it here first.”','“The coast is warm and the roads are open. This is Sol Wave.”','“Niko here after dark. If the sirens find you, keep your nerve.”'];
export function changeStation(state){radio();state.dj=lines[currentStation()===1?3:0];return currentStation()}
export function reactToHeat(state){state.dj=state.heat>=3?'“Breaking now: patrols and air support are tracking a red coupe near Palmline.”':'“Reports of a late night run. Keep it locked to Sol Wave.”'}
// R2 revision pass: station identity and DJ reactions remain distinct from audio synthesis.
