const easeInOutQuad = t => (t < .5) ? 2*t*t : -1+(4-2*t)*t;
const easeInOutCubic = t => (t < .5) ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;
const easeInOutQuint = t => (t < .5) ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t;

export { easeInOutCubic, easeInOutQuad, easeInOutQuint };
