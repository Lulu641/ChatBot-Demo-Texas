// ------------------------- SUGGESTION RESPONSES -------------------------
const suggestionResponses = {
  "How do I keep Texas clean?": "Pick up litter, plant native flowers, and conserve water.",
  "What can I do to help wildlife?": "Volunteer in parks, plant trees, and respect wildlife.",
  "How do I save water at home?": "Take shorter showers and fix leaks to save water.",
  "How can I reduce trash in my neighborhood?": "Recycle properly and pick up litter whenever you see it.",
  "What are simple ways to protect rivers and lakes?": "Never dump chemicals, pick up trash, and respect water habitats.",
  "How can I help pollinators like bees?": "Plant flowers, avoid pesticides, and support local beekeepers.",
  "What should I plant to support local nature?": "Native Texas plants like bluebonnets, oak trees, and wildflowers.",
  "How can I volunteer in parks?": "Join park cleanups or community service events to help local nature.",
  "What can I do to reduce air pollution?": "Carpool, bike, or use public transport and reduce unnecessary energy use.",
  "How do I support local farmers?": "Buy local produce and support farmers’ markets."
};

// ------------------------- STRICT RESPONSE FUNCTION -------------------------
function getResponse(userInput) {
  if (!userInput) return "Please type something";

  const normalized = userInput.trim();

  if (suggestionResponses[normalized]) {
    return suggestionResponses[normalized];
  }

  return `Sorry. Please pick from the suggestions below:\n${Object.keys(suggestionResponses).join("\n")}`;
}

// ------------------------- SUGGESTION PICKER -------------------------
let remainingSuggestions = Object.keys(suggestionResponses);

function pickSuggestion() {
  if (remainingSuggestions.length === 0) return null;
  const index = Math.floor(Math.random() * remainingSuggestions.length);
  const suggestion = remainingSuggestions[index];
  remainingSuggestions.splice(index, 1); // Remove after use
  return suggestion;
}
