export const baseDir = '/faces';

export const NO_FACE = `${baseDir}/no_face.png`;

export default[
  {
    number : 2,
    image : getPath('2.jpg')
  }, {
    number : 7,
    image : getPath('7.jpg')
    // }, {   number : 12,   image : getPath('12.jpg') }, {   number : 15,   image :
    // getPath('15.jpg') }, {   number : 17,   image : getPath('17.jpg') }, {
    // number : 23,   image : getPath('23.jpg')
  }, {
    number : 24,
    image : getPath('24.jpg')
    // }, {   number : 25,   image : getPath('25.jpg') }, {   number : 31,   image :
    // getPath('31.jpg') }, {   number : 32,   image : getPath('32.jpg')
  }, {
    number : 33,
    image : getPath('33.jpg')
    // }, {   number : 36,   image : getPath('36.jpg') }, {   number : 45,   image :
    // getPath('45.jpg') }, { number : 52,   image : getPath('52.jpg') }, {
    // number : 72,   image : getPath('72.jpg') }, {   number : 77,   image :
    // getPath('77.jpg') }, { number : 99,   image : getPath('99.jpg') }, {   number
    // : 111,   image : getPath('111.jpg') }, {   number : 113,   image :
    // getPath('113.jpg')
  }, {
    number : 114,
    image : getPath('114.jpg')
    //}, { number : 115,   image : getPath('115.jpg')
  }
];

function getPath(path) {
  return `${baseDir}/${path}`;
}