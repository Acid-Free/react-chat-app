export function getTimeAgo(timestampInSeconds) {
  const now = Math.floor(Date.now() / 1000);
  const elapsedSeconds = now - timestampInSeconds;

  if (elapsedSeconds < 5) {
    return "Just now";
  } else if (elapsedSeconds < 60) {
    return "A few seconds ago";
  } else if (elapsedSeconds < 3600) {
    const minutes = Math.floor(elapsedSeconds / 60);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (elapsedSeconds < 86400) {
    const hours = Math.floor(elapsedSeconds / 3600);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (elapsedSeconds < 604800) {
    const days = Math.floor(elapsedSeconds / 86400);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (elapsedSeconds < 2419200) {
    const weeks = Math.floor(elapsedSeconds / 604800);
    return `${weeks} week${weeks === 1 ? "" : "s"} ago`;
  } else {
    return new Date(timestampInSeconds * 1000).toLocaleDateString();
  }
}
