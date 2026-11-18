export function createActivities(){return{packages:0,race:false,checkpoints:[[0,70],[70,35],[70,-35],[0,-70]],checkpoint:0,score:0}}
export function updateActivities(a,p,state,save){if(!a.race)return;let c=a.checkpoints[a.checkpoint];if(Math.hypot(p.x-c[0],p.z-c[1])<8){a.checkpoint++;if(a.checkpoint>=a.checkpoints.length){a.checkpoint=0;a.race=false;save.cash+=1200;state.toast='COASTLINE SPRINT · $1,200'}}}
// R2 revision pass: races and package collection add optional cash routes to free roam.
