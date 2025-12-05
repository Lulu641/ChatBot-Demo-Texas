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

// ------------------------- RESPONSE FUNCTION (updated) -------------------------
function getResponse(userInput) {
  if (!userInput) return "Please type something";

  const normalized = userInput.trim();

  // 0. Check suggestionResponses first
  if (suggestionResponses[normalized]) {
    return suggestionResponses[normalized];
  }

  // 1. Check exact matches from fullResponses
  const lower = normalized.toLowerCase();
  for (let entry of fullResponses) {
    if (lower.includes(entry.prompt.toLowerCase())) {
      return entry.response;
    }
  }

  // 2. Check keywords in texasResponses
  for (let entry of texasResponses) {
    for (let kw of entry.keywords) {
      if (lower.includes(kw)) {
        return entry.response;
      }
    }
  }

  // 3. Partial understanding fallback
  const words = lower.split(' ').slice(0,10).join(' ');
  if (words) {
    return `Sorry. I am not sure about "${words}". Please pick from the prompts below or try asking differently.`;
  }

  return "Sorry. I am not sure what you meant. Please pick from the prompts below or try asking differently.";
}
