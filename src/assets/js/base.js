export function adaptVal(val){
  let width = document.body.clientWidth
  if(width < 1248) return parseInt(1248*val/2560)
  return parseInt(width*val/2560)
}
