const KEY='solmara-r2-save';
export function loadSave(){try{const data=JSON.parse(localStorage.getItem(KEY)||'{}');return{cash:data.cash??2450,done:data.done??0,owned:data.owned??['Mariner GT'],upgrades:data.upgrades??[],weapons:data.weapons??['pistol'],ammo:data.ammo??{pistol:24,smg:0,shotgun:0},packages:data.packages??[]}}catch{return{cash:2450,done:0,owned:['Mariner GT'],upgrades:[],weapons:['pistol'],ammo:{pistol:24,smg:0,shotgun:0},packages:[]}}}
export function saveGame(s){localStorage.setItem(KEY,JSON.stringify({cash:s.cash,done:s.done,owned:s.owned,upgrades:s.upgrades,weapons:s.weapons,ammo:s.ammo,packages:s.packages,health:s.health}));}
// R2 revision pass: progress persistence remains local to this browser profile.
