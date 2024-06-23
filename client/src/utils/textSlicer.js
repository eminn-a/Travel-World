export default function textSlice(string, symbols = 240) {
  let result = `${string.slice(0, symbols)}...`;
  return result;
}
