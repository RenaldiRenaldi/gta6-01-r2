import {saveGame} from './save.js';import {clearHeat} from './police.js';
export function atSafehouse(p){return Math.hypot(p.x,p.z+70)<10}
export function enterSafehouse(p,save,police,scene,state){if(!atSafehouse(p))return false;saveGame(save);clearHeat(police,scene);state.toast='CASA REYES · PROGRESS SAVED · HEAT COOLED';return true}
export function storeCar(car,save){if(car&&!save.owned.includes(car.kind))save.owned.push(car.kind);saveGame(save)}
// R2 revision pass: Casa Reyes provides a local save point and garage storage hooks.
