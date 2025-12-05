// responses.js

// Full responses - exact or partial matches
const fullResponses = [
  { prompt: "hello", response: "Yo howdy partner! Nice to see ya today" },
  { prompt: "hi", response: "Hey there! How's it goin" },
  { prompt: "hey", response: "Hey friend! Ready to learn some Texas tips" },
  { prompt: "i am doing great", response: "That's awesome! Keep that good energy rollin" },
  { prompt: "i'm tired", response: "Aww hang in there! Hope you get some rest soon" },
  { prompt: "lol", response: "Haha glad you find that funny Texans love a good laugh" },
  { prompt: "bro", response: "Yo bro! How's your day lookin" },
  { prompt: "how was your day", response: "Mine's been chillin! How about yours" },
  { prompt: "want another Texas tip", response: "Sure thing! Using reusable bags and cutting down on plastic really helps" },
  { prompt: "what else can Texans do to help the environment", response: "They can volunteer at parks, plant native trees, and pick up litter whenever they see it" },
  { prompt: "i'm happy", response: "Sweet! Keep that smile on, Texans love good vibes" },
  { prompt: "good morning", response: "Mornin partner! Hope your day starts off awesome" },
  { prompt: "good evening", response: "Evenin! Kick back and relax, Texas style" },
  { prompt: "howdy", response: "Howdy! Ready for some Texas tips today" },
  { prompt: "sup", response: "Sup partner! Hope you're havin a chill day" },
  { prompt: "i'm sad", response: "Aww I'm sorry to hear that Take a deep breath and take care of yourself" },
  { prompt: "i'm excited", response: "Yay that's awesome! Keep that energy goin" },
  { prompt: "good job", response: "Thanks! Texans appreciate the kind words" },
  { prompt: "thank you", response: "Anytime partner! Happy to help" },
  { prompt: "thanks", response: "No problem! Keep Texas lookin beautiful" },
  { prompt: "i'm hungry", response: "Grab some grub! Texas BBQ is always a winner" },
  { prompt: "i'm cold", response: "Bundle up partner! Stay warm out there" },
  { prompt: "i'm hot", response: "Stay hydrated! Texas sun can be brutal sometimes" },
  { prompt: "good afternoon", response: "Afternoon partner! Hope you're having a smooth day" },
  { prompt: "good night", response: "Night partner! Rest well and dream of Texas bluebonnets" },
  { prompt: "see ya", response: "Catch you later! Keep Texas beautiful and safe" },
  { prompt: "bye", response: "Bye partner! Don't forget to care for the environment" },
  { prompt: "good to see you", response: "Good to see you too! Texans love friendly faces" },
  { prompt: "i am bored", response: "Try a Texas cleanup or plant a flower to pass the time" },
  { prompt: "i am stressed", response: "Take a walk outside and enjoy Texas nature for a bit" },
  { prompt: "what's up", response: "Not much partner! Just sharing Texas tips with folks" },
  { prompt: "how's it going", response: "Going great! How about you partner" },
  { prompt: "what are you doing", response: "Just helping Texans learn how to care for their state" },
  { prompt: "any tips", response: "Sure! Pick up litter, plant native flowers, and conserve water" },
  { prompt: "need advice", response: "Always happy to help! Start by turning off unused lights and using reusable bags" },
  { prompt: "what can i do", response: "Many things! Volunteer in parks, plant trees, and respect wildlife" },
  { prompt: "cool", response: "Glad you think so partner! Texas life is full of surprises" },
  { prompt: "awesome", response: "Yup! Texans know how to make things awesome" },
  { prompt: "fantastic", response: "Glad to hear it! Keep that energy goin" },
  { prompt: "happy", response: "That's great! Smile wide partner" },
  { prompt: "sad", response: "Aww partner I'm here for ya Take a deep breath" },
  { prompt: "excited", response: "Yay! Love that energy Keep it rollin" },
  { prompt: "lolol", response: "Haha that's hilarious partner Texans love a laugh" },
  { prompt: "hey there", response: "Hey there partner! How's your day goin" },
  { prompt: "good vibes", response: "Keep those good vibes rollin partner Texans appreciate it" },
  { prompt: "i am lost", response: "Don't worry partner Stay calm and take one step at a time" },
  { prompt: "confused", response: "It's okay partner We can figure it out together" },
  { prompt: "need help", response: "Absolutely partner! What do you need help with" },
  { prompt: "what should i do", response: "You could volunteer, plant native flowers, or pick up litter" },
  { prompt: "yo", response: "Yo partner! How ya doin today" },
  { prompt: "sup dude", response: "Sup dude! Ready to learn some Texas tips" },
  { prompt: "hey bro", response: "Hey bro! How's your day lookin" },
  { prompt: "i am fine", response: "Glad to hear it partner Keep up the good vibes" },
  { prompt: "i'm good", response: "Awesome partner! Keep Texas lookin beautiful" },
  { prompt: "i'm ok", response: "Good to hear partner Let's keep movin" },
  { prompt: "good day", response: "Hope your day is goin great partner" },
  { prompt: "great day", response: "Yup! Texas days can be amazing partner" },
  { prompt: "bad day", response: "Aww partner Sorry to hear that Take it easy" },
  { prompt: "i am tired lol", response: "Haha take a break partner Rest up and recharge" },
  { prompt: "i'm bored lol", response: "Try volunteerin in a park partner It's fun and helpful" },
  { prompt: "omg wow", response: "OMG partner! That sounds wild Tell me more" },
  { prompt: "omg lol", response: "Haha OMG partner Texans love a laugh" },
  { prompt: "thanks a lot", response: "Anytime partner Happy to help" },
  { prompt: "thank you very much", response: "You're welcome partner! Keep up the great work" },
  { prompt: "no worries", response: "No worries partner! Texans always help each other" },
  { prompt: "see you later", response: "See ya partner! Take care of Texas" },
  { prompt: "later bro", response: "Catch ya later partner! Keep Texas beautiful" },
  { prompt: "take care", response: "Will do partner You too Keep up the good vibes" },
  { prompt: "hello there", response: "Hello partner! Ready for some Texas tips" },
  { prompt: "howdy there", response: "Howdy partner! Hope you're havin a good day" },
  { prompt: "yo yo", response: "Yo yo partner! Let's talk Texas" },
  { prompt: "hey hey", response: "Hey hey partner! What's up" }
];

// Keywords - for slang/partial understanding
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
  { keywords: [], response: "Sorry. I am not sure what you meant. Please pick from the prompts below, or try asking differently." }
];

// Suggestions
// Suggestions that act like real user questions/prompts
let texasSuggestions = [
  "How do I keep Texas clean?",
  "What can I do to help wildlife?",
  "How do I save water at home?",
  "How can I reduce trash in my neighborhood?",
  "What are simple ways to protect rivers and lakes?",
  "How can I help pollinators like bees?",
  "What should I plant to support local nature?",
  "How can I volunteer in parks?",
  "What can I do to reduce air pollution?",
  "How do I compost food scraps at home?"
];


// Main function
function getResponse(userInput) {
  if (!userInput) return "Please type something";

  const normalized = userInput.toLowerCase().replace(/[.!?]/g,'').trim();

  // 1. Check fullResponses - partial match
  for (let entry of fullResponses) {
    if (normalized.includes(entry.prompt.toLowerCase())) {
      return entry.response;
    }
  }

  // 2. Check keywords
  for (let entry of texasResponses) {
    for (let kw of entry.keywords) {
      if (normalized.includes(kw)) {
        return entry.response;
      }
    }
  }

  // 3. If input matches any suggestion, respond with a generic tip
  for (let suggestion of texasSuggestions) {
    if (normalized.includes(suggestion.toLowerCase().replace(/[.!?]/g,''))) {
      return "Here's a tip! Pick up litter, plant native flowers, or conserve water. Keep Texas beautiful!";
    }
  }

  // 4. Partial understanding fallback
  const words = normalized.split(' ').slice(0,10).join(' ');
  if (words) {
    return `Sorry. I am not sure about "${words}". Please pick from the prompts below or try asking differently.`;
  }

  // 5. Final fallback
  return "Sorry. I am not sure what you meant. Please pick from the prompts below or try asking differently.";
}
