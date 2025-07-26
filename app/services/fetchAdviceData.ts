
export const fetchAdviceData = async () => {
  const res = await fetch("https://api.adviceslip.com/advice?t=", { cache: "no-store" });
  const json = await res.json();
  return json.slip;
}
