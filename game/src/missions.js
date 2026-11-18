import {MISSIONS} from './config.js';import {saveGame} from './save.js';
export function createMissions(save){return{index:save.done||0,active:true,progress:0}}
export function currentMission(m){return MISSIONS[Math.min(m.index,MISSIONS.length-1)]}
export function updateMission(m,state,player,save){if(!m.active||m.index>=MISSIONS.length)return;const target=targets[m.index%targets.length];if(Math.hypot(player.x-target[0],player.z-target[1])<10){m.progress+=state.speed>0?Math.max(.2,state.speed/25):1;if(m.progress>=2){const completed=m.index;save.done=Math.min(MISSIONS.length,m.index+1);save.cash+=650+completed*80;m.index=save.done;m.progress=0;if(m.index>=MISSIONS.length){state.toast='SOLMARA IS YOURS · THE CREW MADE IT HOME';state.mission={index:12,title:'THE LONG WAY HOME',desc:'The Reyes crew brought Solmara back into the light.'}}else state.toast='JOB COMPLETE · CREW CUT $'+(650+completed*80);saveGame(save)}}}
const targets=[[0,70],[40,35],[-35,35],[70,-35],[-70,0],[0,0],[70,70],[0,-70],[-70,-70],[35,-70],[0,120],[0,160]];
export function missionTarget(m){return targets[m.index%targets.length]}
// R2 revision pass: linked objectives advance and persist with the player save.
