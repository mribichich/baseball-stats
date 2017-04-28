export const baseDir = '/faces';

export const NO_FACE = `${baseDir}/no_face.png`;

export default[
  {
    number : 2,
    image : getPath('2.jpg')
  }, {
    number : 7,
    image : getPath('7.jpg')
  }, {
    number : 12,
    image : null // getPath('12.jpg')
  }, {
    number : 15,
    image : null // getPath('15.jpg')
  }, {
    number : 17,
    image : null // getPath('17.jpg')
  }, {
    number : 23,
    image : null // getPath('23.jpg')
  }, {
    number : 24,
    image : getPath('24.jpg')
  }, {
    number : 25,
    image : null // getPath('25.jpg')
  }, {
    number : 31,
    image : null // getPath('31.jpg')
  }, {
    number : 32,
    image : null // getPath('32.jpg')
  }, {
    number : 33,
    image : getPath('33.jpg')
  }, {
    number : 36,
    image : null // getPath('36.jpg')
  }, {
    number : 45,
    image : null // getPath('45.jpg')
  }, {
    number : 52,
    image : null // getPath('52.jpg')
  }, {
    number : 72,
    image : null // getPath('72.jpg')
  }, {
    number : 77,
    image : getPath('77.jpg')
  }, {
    number : 99,
    image : null // getPath('99.jpg')
  }, {
    number : 111,
    image : null // getPath('111.jpg')
  }, {
    number : 113,
    image : null // getPath('113.jpg')
  }, {
    number : 114,
    image : getPath('114.jpg')
  }, {
    number : 115,
    image : null // getPath('115.jpg')
  }
];

function getPath(path) {
  return `${baseDir}/${path}`;
}