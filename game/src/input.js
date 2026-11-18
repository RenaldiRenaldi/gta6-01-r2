export const keys=new Set();export let pointer={x:0,y:0,down:false};
window.addEventListener('keydown',e=>{keys.add(e.key.toLowerCase());if([' ','arrowup','arrowdown'].includes(e.key.toLowerCase()))e.preventDefault()});window.addEventListener('keyup',e=>keys.delete(e.key.toLowerCase()));window.addEventListener('mousemove',e=>{pointer.x=e.movementX;pointer.y=e.movementY});window.addEventListener('mousedown',()=>pointer.down=true);window.addEventListener('mouseup',()=>pointer.down=false);
export function pressed(key){if(keys.has(key)){keys.delete(key);return true}return false}
// R2 revision pass: one-shot actions stay separate from held movement and aim input.
