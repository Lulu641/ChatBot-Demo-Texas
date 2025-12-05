// responses.js

// Advanced responses handling repeated keywords and detailed entries
function getResponse(userInput) {
  const input = userInput.toLowerCase();

  for (let entry of texasResponses) {
    if (entry.keywords.length === 0) continue
    for (let kw of entry.keywords) {
      if (input.includes(kw)) return entry.response
    }
  }
  // fallback if no keywords match
  const words = input.split(' ').slice(0,10).join(' ')
  return `Sorry which one did you want to know again based on ${words} Please pick one of the prompts above or try asking differently`;
}

const texasResponses = [
  { keywords: ["hello", "hi", "hey"], response: "Howdy partner How are you doing today" },
  { keywords: ["good morning", "morning"], response: "Good morning Texan Hope your day is amazing" },
  { keywords: ["good evening", "evening"], response: "Good evening Hope your evening is peaceful" },
  { keywords: ["how was your day", "how are you"], response: "My day has been great thanks for asking" },
  { keywords: ["thank you", "thanks"], response: "No problem happy to help Texans" },
  { keywords: ["bye", "goodbye", "see ya"], response: "See you around keep Texas beautiful" },
  { keywords: ["water", "save water"], response: "Shorter showers fixing leaks and mindful usage help conserve water in Texas" },
  { keywords: ["recycle", "recycling"], response: "Recycling plastic cans cardboard and electronics keeps Texas clean" },
  { keywords: ["plants", "trees", "gardening"], response: "Planting native trees flowers and maintaining gardens supports Texas wildlife" },
  { keywords: ["energy", "electricity", "lights"], response: "Turning off lights and using energy efficient appliances saves electricity in Texas" },
  { keywords: ["litter", "trash", "garbage"], response: "Picking up litter and keeping public spaces clean makes Texas beautiful and safe" },
  { keywords: ["help", "volunteer"], response: "Volunteering at parks or cleanups has a positive impact in Texas" },
  { keywords: ["animals", "wildlife"], response: "Respecting wildlife habitats helps Texas maintain biodiversity" },
  { keywords: ["fire", "wildfire"], response: "Reporting wildfires immediately protects forests homes and animals in Texas" },
  { keywords: ["pollution", "air", "smoke"], response: "Reducing emissions avoiding burning trash and supporting clean energy helps Texas air quality" },
  { keywords: ["food", "waste"], response: "Composting food scraps donating excess and avoiding waste helps Texas resources" },
  { keywords: ["beach", "river", "lake"], response: "Keeping water sources clean protects Texas nature and recreational areas" },
  { keywords: ["transportation", "drive", "car"], response: "Carpooling biking and using public transportation reduces pollution in Texas" },
  { keywords: ["clothes", "fashion"], response: "Buying secondhand sustainable clothing and donating old clothes reduces waste in Texas" },
  { keywords: ["education", "learn"], response: "Teaching others about conservation and sustainable habits helps Texas environment" },
  { keywords: ["camping", "hiking", "trail"], response: "Staying on trails cleaning up after yourself and respecting nature preserves Texas beauty" },
  { keywords: ["bee", "pollinator"], response: "Planting flowers avoiding pesticides and supporting beekeepers helps pollinators in Texas" },
  { keywords: ["donate", "support"], response: "Supporting local conservation efforts organizations and cleanups preserves Texas nature" },
  { keywords: [], response: "That is a great choice Texans can always do that to help the environment" }
];

// Suggestions for next prompts
const texasSuggestions = [
  "What else can Texans do to help the environment",
  "Want to hear another way to protect Texas nature",
  "Would you like another Texas conservation tip",
  "Do you want to learn another Texas friendly habit",
  "Ready for another idea to help keep Texas clean",
  "Want another simple way to care for Texas",
  "Want a suggestion to keep Texas beautiful",
  "Want another helpful Texas habit",
  "Do you want to hear a fun fact about Texas nature",
  "Would you like tips on planting native flowers",
  "Want to know how to save water at home",
  "Do you want a tip for protecting Texas animals",
  "Want to know how to recycle properly",
  "Do you want to learn a small action to protect Texas",
  "Would you like another easy eco tip",
  "Want to hear how to help Texas forests",
  "Want to know a cool way to help clean rivers",
  "Do you want another Texas friendly habit suggestion",
  "Want to know a way to protect wildlife",
  "Do you want more ideas for keeping Texas beautiful"
];
