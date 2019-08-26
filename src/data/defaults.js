import { easeInOutQuad, easeInOutQuint } from 'utils';


const defaults = {
  colors: [
    "#f5f7f4",
    "#ddf7d3",
    "#bff7b2",
    "#98f791",
    "#70f77f",
    "#4ff689",
    "#2ef5b2",
    "#0de7f3",
    "#007bee",
    "#0012e5",
    "#4800d9"
  ],
  qty: 11,
  yEase: easeInOutQuad,
  maxAmp: 500,
  ampEase: easeInOutQuad,
  wLength: 900,
  maxWidth: 20,
  widthEase: easeInOutQuint,
  maxShift: 100,
  segmentLength: 20,
};

export default defaults;
