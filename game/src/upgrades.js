import {buy,PRICES} from './shop.js';
export function upgradeCar(kind,state,save,car){if(!PRICES[kind])return false;return buy(kind,state,save,car)}
export function repaint(car,police,scene,state,save){if(!car||save.cash<600)return false;save.cash-=600;car.mesh.children[0].material.color.setHex([0xe0a84e,0x458f94,0xddd4c2,0x853b52][Math.floor(Math.random()*4)]);police.heat=0;police.units.forEach(c=>scene.remove(c.mesh));police.units=[];state.heat=0;return true}
// R2 revision pass: persistent garage upgrades and repaint heat-clearing share one interface.
