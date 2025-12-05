// responses.js

// Enhanced responses with slang abbreviations full sentences and proper grammar
function getResponse(userInput) {
  const input = userInput.toLowerCase();

  for (let entry of texasResponses) {
    if (entry.keywords.length === 0) continue
    for (let kw of entry.keywords) {
      if (input.includes(kw)) return entry.response
    }
  }

  const words = input.split(' ').slice(0,10).join(' ');
  return `Sorry. I am not sure about ${words}. Please pick from the prompts below or try asking differently.`;
}

const texasResponses = [
  { keywords: ["hello", "hi", "hey", "hiya", "howdy", "sup", "greetings", "yo", "wassup"], response: "Yo howdy partner! How ya doin today?" },
  { keywords: ["good morning", "morning", "rise and shine"], response: "Mornin y'all! Hope ur day is lookin bright and chill" },
  { keywords: ["good evening", "evening", "night"], response: "Evenin! Hope ur night is peaceful and relaxed" },
  { keywords: ["how are you", "how was your day", "how is it going", "how are things", "sup"], response: "I’m doin great thanks! How’s your day goin so far?" },
  { keywords: ["i am good", "i'm good", "i am great", "i'm great", "i am fine", "i'm fine", "i am doing well", "doing good", "doing well"], response: "Glad to hear that! Keep up the good vibes in Texas. Everything’s lookin positive" },
  { keywords: ["thank you", "thanks", "thx", "much appreciated"], response: "No prob! Happy to help Texans anytime." },
  { keywords: ["bye", "goodbye", "see ya", "later", "farewell", "cya"], response: "Catch ya later! Keep Texas beautiful and safe." },
  { keywords: ["water", "save water", "hydration"], response: "Short showers and fixin leaks really help conserve water. Every drop counts in Texas." },
  { keywords: ["recycle", "recycling", "trash", "garbage", "waste"], response: "Recycle stuff like cans bottles and cardboard. It keeps Texas clean and green." },
  { keywords: ["plants", "trees", "gardening", "flowers", "flora"], response: "Plant native trees flowers or a lil garden. Helps wildlife and looks awesome." },
  { keywords: ["energy", "electricity", "lights", "power"], response: "Turn off lights when not usin em and use energy efficient appliances. Saves power and money." },
  { keywords: ["litter", "trash", "garbage", "cleanup"], response: "Pick up litter whenever ya see it. Keeps public spaces clean and safe." },
  { keywords: ["help", "volunteer", "assist", "aid"], response: "Volunteer at parks or cleanups. Makes a huge positive impact." },
  { keywords: ["animals", "wildlife", "creatures"], response: "Respect wildlife habitats. It keeps Texas diverse and thriving." },
  { keywords: ["fire", "wildfire", "burn"], response: "Report wildfires immediately. Protects forests homes and animals." },
  { keywords: ["pollution", "air", "smoke", "emissions"], response: "Reduce emissions avoid burnin trash and support clean energy. Keeps the air fresh." },
  { keywords: ["food", "waste", "compost"], response: "Compost food scraps or donate extra. Reduces waste and helps Texas resources." },
  { keywords: ["beach", "river", "lake", "waterways"], response: "Keep water sources clean. Protects nature and makes recreational areas safe." },
  { keywords: ["transportation", "drive", "car", "bike", "walk", "commute"], response: "Carpool bike or use public transport. Less pollution, more smiles." },
  { keywords: ["clothes", "fashion", "apparel", "wardrobe"], response: "Buy secondhand or donate old clothes. Less waste, more happy Texans." },
  { keywords: ["education", "learn", "teach", "inform"], response: "Teach or learn conservation habits. Every bit helps the environment." },
  { keywords: ["camping", "hiking", "trail", "outdoors"], response: "Stay on trails, clean up after yourself. Nature stays beautiful." },
  { keywords: ["bee", "pollinator", "insect"], response: "Plant flowers, avoid pesticides and support beekeepers. Pollinators thrive." },
  { keywords: ["donate", "support", "contribute"], response: "Support local conservation groups. Helps protect Texas for everyone." },
  { keywords: [], response: "That’s a great choice! Texans can always do that to help the environment. Keep it up!" }
];

// Suggestions for prompts to keep conversation going
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
