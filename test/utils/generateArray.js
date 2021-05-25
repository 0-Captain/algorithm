export default function generateArray(size) {
  return new Array(size).fill(0).map(() => Math.ceil(Math.random() * size));
}
