export const SITE_NAME = "Keep Kids Private";
export const TAGLINE = "A photo of a child is not just a photo anymore.";

export const CORE_MESSAGE = {
  learn: "What they can find out from your post",
  image: "What they can do with your child's image",
  // bridge:
  //   "A normal post reveals who they are. A clear photo shows what they look like. Together, that is enough to copy, fake and target them.",
};

export const EXAMPLE_POST = {
  author: "Sarah Mitchell",
  authorInitials: "SM",
  timeAgo: "2h",
  audience: "Friends",
  caption:
    "First day at school! Can\u2019t believe Sophie is 5 already. So proud of our little star. I used to hold her hand all the way, now she wants to walk herself U0001f979",
  captionMarkers: {
    milestone: "First day at school",
    name: "Sophie",
    age: "5",
    nickname: "little star",
    schoolRoute: "hold her hand all the way",
    unsupervised: "wants to walk herself",
  },
  reactions: 47,
  comments: 12,
  sampleComment: {
    author: "Jean Mitchell",
    text: "Look at our Sophie! They grow up so fast \u2764\ufe0f.  Can't wait to have you all for the weekend!",
  },
};

/** Markers on the photo (numbers 1–8) — tuned for image1.png */
export const PHOTO_HOTSPOTS = [
  { id: "face", label: "Clear face", x: 55, y: 30 },
  { id: "badge", label: "School name", x: 50, y: 50 },
  { id: "uniform", label: "School uniform", x: 50, y: 72 },
  { id: "sibling", label: "Sibling", x: 18, y: 26 },
  { id: "house", label: "House number", x: 8, y: 10 },
  { id: "street", label: "Street name", x: 80, y: 16 },
  { id: "car", label: "Car registration", x: 86, y: 50 },
  { id: "location", label: "Neighbourhood", x: 64, y: 10 },
];

/** Markers on post text & metadata (numbers 9–17) */
export const POST_MARKERS = [
  { id: "author", label: "Parent\u2019s full name", number: 9 },
  { id: "audience", label: "Who can see this", number: 10 },
  { id: "milestone", label: "School milestone", number: 11 },
  { id: "name", label: "Child\u2019s first name", number: 12 },
  { id: "age", label: "Exact age", number: 13 },
  { id: "nickname", label: "Nickname", number: 14 },
  { id: "comment", label: "Family in comments and potential bait", number: 15 },
  { id: "school-route", label: "School walking route", number: 16 },
  { id: "unsupervised", label: "Unsupervised walk time", number: 17 },
];

/** What strangers can learn — from caption, comments & background */
export const LEARN_FROM_POST = [
  "First name & nickname",
  "Exact age",
  "School name & uniform",
  "House number & street",
  "Car registration",
  "Parent\u2019s full name",
  "Siblings & grandparents",
  "School walking route & walk time",
  "When they\u2019re unsupervised",
];

/** What can be done once they have the image file & a clear face */
export const DO_WITH_IMAGE = [
  "Copy & save the photo",
  "Swap objects in the scene",
  "Remove clothes digitally",
  "Build an AI video of them",
  "Paste their face elsewhere",
  "Fake what they never did",
  "Add people or objects in",
];

export const PROFILE_LINES = [
  "They can learn who your child is.",
  "They can copy what your child looks like.",
  "They can fake what your child never did.",
];

export const SITE_IMAGES = {
  sourcePost: {
    file: "image1.png",
    alt: "AI-generated innocent school-day photo used as the example parent post",
  },
  misusePromenade: {
    file: "image2.png",
    alt: "Innocent photo of a boy eating an ice cream on a seaside promenade",
  },
  misusePool: {
    file: "image3.png",
    alt: "Innocent photo of a girl smiling at a swimming pool in swimwear",
  },
  misuseBedroom: {
    file: "image4.png",
    alt: "Innocent photo of a toddler on a bed with her mother",
  },
  misuseFacePaste: {
    file: "image5.png",
    alt: "Innocent photo of a child playing dress up with makeup",
  },
  misusePlayGarden: {
    file: "image6.png",
    alt: "Innocent photo of a boy playing wrestler in a homemade ring in the garden",
  },
  misuseSillySofa: {
    file: "image7.png",
    alt: "Innocent photo of a boy acting silly on a sofa at home",
  },
} as const;

export type ImageKey = keyof typeof SITE_IMAGES;

export const INNOCENT_PHOTO_MISUSE: {
  id: string;
  imageKey: ImageKey;
  scene: string;
  title: string;
  misuseLine: string;
  riskLine: string;
}[] = [
  {
    id: "promenade",
    imageKey: "misusePromenade",
    scene: "Ice cream on the promenade",
    title: "Items replaced with something else",
    misuseLine:
      "What they\u2019re holding, wearing or standing next to can be swapped for something else entirely — the photo still looks real.",
    riskLine:
      "An ice cream on the promenade feels harmless. Every object in the frame is something an editor can change.",
  },
  {
    id: "pool",
    imageKey: "misusePool",
    scene: "Swimming pool on holiday",
    title: "Clothes digitally removed",
    misuseLine:
      "Pool and swimwear photos are still fully innocent — but AI can turn them into sexualised fakes.",
    riskLine:
      "More skin on show plus a direct look at the camera is exactly what these tools are built for.",
  },
  {
    id: "bedroom",
    imageKey: "misuseBedroom",
    scene: "Bedtime at home",
    title: "AI video from a single photo",
    misuseLine:
      "One still image is enough to make your child appear to move, speak, or react — as if it were real footage.",
    riskLine:
      "Private moments at home feel safe to share. An expressive face is all some tools need to animate.",
  },
  {
    id: "face-paste",
    imageKey: "misuseFacePaste",
    scene: "Playing dress up",
    title: "Their face pasted into another scene",
    misuseLine:
      "A clear front-facing face can be cut out and dropped into any other photo or video — in seconds.",
    riskLine:
      "Dress-up photos feel cute and harmless. A plain background makes the face easy to lift out.",
  },
  {
    id: "play-garden",
    imageKey: "misusePlayGarden",
    scene: "Playing in the garden",
    title: "Fake what they never did",
    misuseLine:
      "A fun play photo can be edited so your child appears somewhere else, doing something they never did — and it still looks believable.",
    riskLine:
      "Parents share silly moments to make people smile. Editors use them to build a story that never happened.",
  },
  {
    id: "silly-sofa",
    imageKey: "misuseSillySofa",
    scene: "Acting silly on the sofa",
    title: "People and things added in",
    misuseLine:
      "Other people, objects or scenes can be pasted into the space around your child — and the photo still looks like one shot.",
    riskLine:
      "Silly poses and plain backgrounds leave empty room to edit. Who and what wasn\u2019t there can be added later.",
  },
];

export const AI_DISCLOSURE = {
  eyebrow: "This is the world we live in",
  heading: "100% Fake",
  body: [
    "None of these images are real.",
    "Every child, every place, every moment on this site was created by AI.",
    "No real photos were used.",
    "No real children were copied.",
    "No real families were involved.",
    "If AI can create this from nothing, imagine what it can do with the real photos we post every day.",
    "Once a child\u2019s image is online, you lose control of where it goes, who saves it, and what it can become.",
    "Keep kids private.",
  ],
  imageBadge: "100% AI",
};

export const AI_DISCLOSURE_IMAGES = [
  "sourcePost",
  "misusePromenade",
  "misusePool",
  "misuseBedroom",
  "misuseFacePaste",
  "misusePlayGarden",
  "misuseSillySofa",
] as const satisfies readonly ImageKey[];

export const NSPCC_PHOTO_GUIDANCE = {
  url: "https://learning.nspcc.org.uk/online-safety/photographing-filming-children",
};

export const SHARING_PRIVACY_TIPS = [
  "Set your profile and posts to private — not public",
  "Audit your friends list. Do you actually know everyone on it?",
  "Want someone to see a photo? Send it to them directly",
  "Don\u2019t show the world when a text, DM or group chat would do",
  "Turn off location tagging before you upload",
  "Check who can comment — family replies reveal names too",
  "Scroll through old posts. What\u2019s still public?",
];
