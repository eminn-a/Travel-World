export default function formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });

  return `${month} ${day}, ${year} - ${dayOfWeek}`;
}
