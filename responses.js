// responses.js

// Updated response logic: use keywords only if input is partially understandable, else default response
function getResponse(userInput) {
  const input = userInput.toLowerCase();

  let matched = false;
  for (let entry of texasResponses) {
    if (entry.keywords.length === 0) continue;
    for (let kw of entry.keywords) {
      if (input.includes(kw)) {
        matched = true;
        return entry.response;
      }
    }
  }

  if (input.trim() === "" || !matched) {
    return "Sorry. I am not sure what you meant. Please pick from the prompts below or try asking differently.";
  } else {
    const words = input.split(' ').slice(0,10).join(' ');
    return `Sorry. I am not sure about ${words}. Please pick from the prompts below or try asking differently.`;
  }
}

// Texas responses with proper punctuation and slang
const texasResponses = [
  { keywords: ["hello", "hi", "hey", "hiya", "howdy", "sup", "yo", "wassup"], response: "Yo, howdy partner! How ya doin today?" },
  { keywords: ["bro", "dude", "man"], response: "Hey bro! What's up? Hope your day is going great." },
  { keywords: ["great", "awesome", "amazing", "cool"], response: "That's great to hear! Keep it up, and enjoy Texas life!" },
  { keywords: ["wth", "wtf", "omg"], response: "Whoa! That's wild, lol. What happened exactly?" },
  { keywords: ["lol", "haha", "lmao"], response: "Haha, glad you think so! Life's fun in Texas." },
  { keywords: ["good morning", "morning", "rise and shine"], response: "Mornin', y'all! Hope your day is looking bright and chill." },
  { keywords: ["good evening", "evening", "night"], response: "Evenin'! Hope your night is peaceful and relaxing." },
  { keywords: ["how are you", "how was your day", "how is it going", "how are things"], response: "I'm doing great, thanks! How's your day going so far?" },
  { keywords: ["i am good", "i'm good", "i am great", "i'm great", "i am fine", "i'm fine", "doing good", "doing well"], response: "Glad to hear that! Keep up the good vibes, and enjoy your Texas day." },
  { keywords: ["thank you", "thanks", "thx", "much appreciated"], response: "No problem! Happy to help Texans anytime, for sure." },
  { keywords: ["bye", "goodbye", "see ya", "later", "farewell", "cya"], response: "Catch ya later! Keep Texas beautiful and safe, take care." },
  { keywords: ["water", "save water", "hydration"], response: "Short showers, fixing leaks, and using less water really help. Every drop counts in Texas." },
  { keywords: ["recycle", "recycling", "trash", "garbage", "waste"], response: "Recycle cans, bottles, and cardboard. It keeps Texas clean and green." },
  { keywords: ["plants", "trees", "gardening", "flowers", "flora"], response: "Plant native trees and flowers, or a little garden. It helps wildlife, and looks awesome!" },
  { keywords: ["energy", "electricity", "lights", "power"], response: "Turn off lights when not in use, and use energy efficient appliances. Saves power and money." },
  { keywords: ["litter", "cleanup", "garbage"], response: "Pick up litter whenever you see it. Keeps public spaces clean, and safe." },
  { keywords: ["help", "volunteer", "assist", "aid"], response: "Volunteer at parks or cleanups. It makes a huge positive impact on the community." },
  { keywords: ["animals", "wildlife", "creatures"], response: "Respect wildlife habitats. It keeps Texas diverse and thriving." },
  { keywords: ["fire", "wildfire", "burn"], response: "Report wildfires immediately. Protects forests, homes, and animals." },
  { keywords: ["pollution", "air", "smoke", "emissions"], response: "Reduce emissions, avoid burning trash, and support clean energy. Keeps the air fresh." },
  { keywords: ["food", "waste", "compost"], response: "Compost food scraps, or donate extra. Reduces waste, and helps Texas resources." },
  { keywords: ["beach", "river", "lake", "waterways"], response: "Keep water sources clean. Protects nature, and makes recreational areas safe." },
  { keywords: ["transportation", "drive", "car", "bike", "walk", "commute"], response: "Carpool, bike, or use public transport. Less pollution, more smiles." },
  { keywords: ["clothes", "fashion", "apparel", "wardrobe"], response: "Buy secondhand, or donate old clothes. Less waste, more happy Texans." },
  { keywords: ["education", "learn", "teach", "inform"], response: "Teach or learn conservation habits. Every bit helps the environment." },
  { keywords: ["camping", "hiking", "trail", "outdoors"], response: "Stay on trails, and clean up after yourself. Nature stays beautiful." },
  { keywords: ["bee", "pollinator", "insect"], response: "Plant flowers, avoid pesticides, and support beekeepers. Pollinators thrive." },
  { keywords: ["donate", "support", "contribute"], response: "Support local conservation groups. Helps protect Texas for everyone." },
  { keywords: [], response: "Sorry. I am not sure what you meant. Please pick from the prompts below, or try asking differently." }
];

// Suggestions for prompts
const texasSuggestions = [
  "What else can Texans do to help the environment?",
  "Want to hear another way to protect Texas nature?",
  "Would you like another Texas conservation tip?",
  "Do you want to learn another Texas friendly habit?",
  "Ready for another idea to help keep Texas clean?",
  "Want another simple way to care for Texas?",
  "Want a suggestion to keep Texas beautiful?",
  "Want another helpful Texas habit?",
  "Do you want to hear a fun fact about Texas nature?",
  "Would you like tips on planting native flowers?"
];
