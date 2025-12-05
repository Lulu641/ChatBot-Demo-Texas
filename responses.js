// ------------------------- SUGGESTION RESPONSES -------------------------
const suggestionResponses = {
  "How do I keep Texas clean?": "Pick up litter, plant native flowers, and conserve water to help keep Texas beautiful.",
  "What can I do to help wildlife?": "Volunteer in parks, plant trees, and respect wildlife habitats.",
  "How do I save water at home?": "Take shorter showers, fix leaks, and turn off unused taps to save water.",
  "How can I reduce trash in my neighborhood?": "Recycle, compost, and always pick up litter to reduce trash.",
  "What are simple ways to protect rivers and lakes?": "Never dump chemicals or trash in waterways and always clean up after yourself.",
  "How can I help pollinators like bees?": "Plant native flowers, avoid pesticides, and support local beekeepers.",
  "What should I plant to support local nature?": "Plant native Texas flowers and trees to provide food and shelter for wildlife.",
  "How can I volunteer in parks?": "Join community cleanups, plant trees or flowers, and maintain trails.",
  "What can I do to reduce air pollution?": "Use public transport, carpool, bike, or walk instead of driving alone.",
  "How do I support local farmers?": "Buy local produce at farmers' markets or grocery stores to support Texas agriculture."
};

// ------------------------- RESPONSE FUNCTION (STRICT SUGGESTIONS ONLY) -------------------------
function getResponse(userInput) {
  if (!userInput) return "Please type something";

  const normalized = userInput.trim();

  // Only respond if the input exactly matches a suggestion prompt
  if (suggestionResponses[normalized]) {
    return suggestionResponses[normalized];
  }

  // Otherwise, force fallback
  return `Sorry. Please pick from the suggestions below or type one exactly: \n${Object.keys(suggestionResponses).join("\n")}`;
}

