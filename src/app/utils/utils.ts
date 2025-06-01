// Helper function to shorten long titles (more than 20 characters)
export const ellipsisChr = (title: string, length: number) => {
  if (title.length > length) {
    return title.slice(0, length) + "..."; // Truncate and add ellipsis
  }
  return title; // Return original title if short enough
};
