export default function textSlice(string) {
  let result = `${string.slice(0, 240)}...`;
  return result;
}
