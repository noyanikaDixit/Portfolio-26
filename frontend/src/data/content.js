const ASSET_BASE_A =
  "https://customer-assets-39nsmqrw.emergentagent.net/job_2ba8fcc9-1ae8-4409-bf1e-9e9e6680a45f/artifacts";
const ASSET_BASE_B =
  "https://customer-assets-4nw71qhi.emergentagent.net/job_creative-convert-6/artifacts";

export const HEADSHOT = `${ASSET_BASE_A}/2x39vmio_headshot-hero-section.webp`;

export const STATS = [
  { prefix: "Up to", value: "366%", label: "CTR lift" },
  { value: "500bps", label: "Conversion increase" },
  { value: "3x", label: "Organic content growth" },
  { value: "3", label: "Awards for Distinguished Work" },
];

export const MARQUEE_WORDS = [
  "Brand Strategy",
  "Content",
  "Conversion",
  "AI",
  "Storytelling",
  "Research",
  "Campaigns",
];

const yt = (id) => `https://www.youtube-nocookie.com/embed/${id}`;

export const PROJECTS = [
  {
    id: "onsite-stores",
    number: "01",
    title: "Designing for Discovery: Onsite Product Stores",
    tag: "Product Narrative & Conversion Strategy | Amazon Fashion",
    body: "Built a portfolio of category-led onsite stores, including Sneaker Street, Premium Edit, Wedding Store, and Festive Store, translating consumer research directly into store experience, content, and merchandising. Each store was built around a specific customer need: from footwear discovery to premium brand storytelling to seasonal shopping moments.",
    roles: [
      "Research & Insight",
      "UX & Content Direction",
      "Cross-Category Strategy",
      "Performance Analysis",
    ],
    impact:
      "Reduced bounce rate and increased conversion by 500bps. CTR gains of 250–366% across campaigns.",
    grid: "grid gap-4 sm:grid-cols-2",
    aspect: "aspect-[3/4]",
    mediaMax: "max-w-4xl",
    media: [
      { type: "video", src: "/media/45ntxuwu_1-onsitestores-a.mp4", poster: "/media/posters/onsite-a.jpg", label: "1-onsitestores-a" },
      { type: "video", src: "/media/ekc9s85d_1-onsitestores-b.mp4", poster: "/media/posters/onsite-b.jpg", label: "1-onsitestores-b" },
      { type: "video", src: "/media/vk14x4iq_1-onsitestores-c.mp4", poster: "/media/posters/onsite-c.jpg", label: "1-onsitestores-c" },
      { type: "video", src: "/media/oo61x4u1_1-onsitestores-d.mp4", poster: "/media/posters/onsite-d.jpg", label: "1-onsitestores-d" },
    ],
  },
  {
    id: "on-set",
    number: "02",
    title: "On Set: Production, Styling & Scripting",
    tag: "Production Coordination | Amazon Fashion",
    body: "Coordinated with production, styling, and photography teams across 21+ editorial shoots and 15+ onsite activations, from mood board and scripting to styling. Scripted influencer and talent-led content for major launches, and led on-ground creative direction for brand events.",
    roles: [
      "Production & Styling Coordination",
      "Scriptwriting",
      "On-Ground Creative Direction",
      "Talent Coordination",
    ],
    impact: "21+ shoots and 15+ live activations led end-to-end.",
    grid: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
    aspect: "aspect-[4/3]",
    mediaMax: "max-w-6xl",
    media: [
      { type: "image", src: `${ASSET_BASE_A}/vjiusvgx_2-onset-bts-a.png`, label: "2-onset-bts-a" },
      { type: "image", src: `${ASSET_BASE_B}/um946wyj_2-onset-bts-b.png`, label: "2-onset-bts-b", position: "object-top" },
      { type: "youtube", src: yt("kGli_grpDVE"), label: "Launch film" },
      { type: "youtube", src: yt("09xZPtZlV_s"), label: "Launch film" },
      { type: "youtube", src: yt("nAG6yyFEEH8"), label: "Launch film" },
      { type: "youtube", src: yt("k6wOkz0q6wQ"), label: "Launch film" },
    ],
  },
  {
    id: "serve",
    number: "03",
    title: "Serve: Amazon Fashion's Gen Z Platform",
    tag: "0→1 Brand & Platform Build | Amazon Fashion",
    body: "Amazon Fashion had no dedicated space for its fastest-growing customer segment: Gen Z, over 45% of active buyers. I led the 0-to-1 strategy for Serve, commissioning primary and secondary research into how Gen Z actually shops and speaks, then building the brand name, voice, brand book, platform experience, and content ecosystem end to end. I extended it across social, CRM, creator content, and cross-platform placements like Hip Hop India.",
    roles: [
      "Naming & Brand Strategy",
      "Primary Research",
      "Wireframe & Content Direction",
      "Social & CRM Extension",
    ],
    impact: "2X engagement, +40% OPS, +170% CTR.",
    grid: "grid gap-4 sm:grid-cols-2",
    aspect: "aspect-[3/4]",
    mediaMax: "max-w-4xl",
    media: [
      { type: "video", src: "/media/w8wxgvix_3-serve-landingpage-a.mp4", poster: "/media/posters/serve-a.jpg", label: "3-serve-landingpage-a" },
      { type: "image", src: "/media/3-serve-landingpage-b.gif", label: "3-serve-landingpage-b" },
      { type: "image", src: `${ASSET_BASE_B}/5jd759o5_3-serve-landingpage-c.jpg`, label: "3-serve-landingpage-c" },
      { type: "image", src: `${ASSET_BASE_B}/qnpvfdcd_3-serve-landingpage-d.jpg`, label: "3-serve-landingpage-d" },
    ],
  },
  {
    id: "myntra",
    number: "04",
    title: "Owning Festival & Sale Content Strategy",
    tag: "Content Strategy Lead | Myntra (Current)",
    body: "Leading content strategy and communication for Myntra's major fashion events and commercial moments, including the Myntra Big Fashion Festival, translating business goals and consumer insight into campaign narratives, messaging, and onsite experiences. Also lead CRM content strategy across customer segments, tailoring communication by audience, journey stage, and business objective.",
    roles: [
      "Content Strategy",
      "Campaign Narrative",
      "CRM Messaging",
      "Cross-Functional Alignment",
      "AI-Assisted Trend & Content Analysis",
      "Vernacular & Regional Language Content Adaptation",
    ],
    impact:
      "4.33% CTR on major sale banners, 73% above the 2.5% industry benchmark.",
    grid: "grid gap-4 sm:grid-cols-2",
    aspect: "aspect-[4/3]",
    mediaMax: "max-w-4xl",
    media: [
      { type: "image", src: `${ASSET_BASE_B}/3bfl36s7_4-myntra-a.png`, label: "4-myntra-a" },
      { type: "image", src: `${ASSET_BASE_B}/vsou1x59_4-myntra-b.png`, label: "4-myntra-b" },
      { type: "image", src: `${ASSET_BASE_B}/gvrwzks8_4-myntra-c.png`, label: "4-myntra-c" },
      { type: "image", src: `${ASSET_BASE_B}/o1adxc0w_4-myntra-d.jpg`, label: "4-myntra-vernacular" },
    ],
  },
  {
    id: "social-crm",
    number: "05",
    title: "Social, CRM & Brand Communication: Turning Content Into Numbers",
    tag: "Social Strategy, CRM & PR | Amazon Fashion",
    body: "Owned organic social strategy end to end, scripting, shooting, and posting from a phone, chasing trends before they cooled, and turning brand moments into scroll-stopping content. Extended that same insight-led approach into CRM messaging, PR storytelling, and on-ground brand experiences like Amazon Diwali Bash and Amazon Creator Connect, plus creative copy for limited-edition packaging.",
    roles: [
      "Social Strategy & Content",
      "CRM Messaging",
      "PR Writing",
      "Brand Event Execution",
    ],
    impact:
      "Organic content views grew 3x (avg 8K → 30K). Social engagement tripled in H2'24 (262 → 803). Creative brief compliance improved from 55.86% to 98.6%.",
    grid: "grid gap-4 sm:grid-cols-2",
    aspect: "aspect-[4/3]",
    mediaMax: "max-w-4xl",
    media: [
      { type: "image", src: `${ASSET_BASE_A}/u7on7pra_5-social-a.webp`, label: "5-social-a" },
      { type: "image", src: `${ASSET_BASE_B}/6gi41qob_5-social-b.webp`, label: "5-social-b" },
      {
        type: "link",
        src: "https://www.instagram.com/reel/DAvoLpFpSb9/?utm_source=ig_web_button_share_sheet",
        label: "Instagram Reel",
        sub: "Watch on Instagram",
        thumb: "/media/ig-reel-thumb.png",
      },
      {
        type: "link",
        src: "https://www.gqindia.com/promotion/amazon-fashion-diwali-bash-hosted-for-content-creators-as-part-of-the-great-indian-festival-2024",
        label: "GQ India Feature",
        sub: "Amazon Fashion Diwali Bash",
        thumb: "/media/gq-diwali-bash.jpg",
      },
    ],
  },
];

export const EXPLORE = [
  {
    id: "magazine",
    tag: "Editorial & Content Curation | Amazon Fashion",
    title: "Amazon Fashion's First-Ever Printed Magazine",
    body: "A long-form content experiment that brought storytelling, style, and shopping together in one glossy moment. This vacation-themed issue covered everything from effortless fashion to easy beauty tips to destination-ready looks. Over 5,000 copies were distributed free with customer orders across metro cities, cementing Amazon Fashion's image as a fashion-first platform. I helped shape the content mix and product curation, ensuring every page blended editorial storytelling with seamless product integration.",
    media: [
      { type: "video", src: "/media/kaots6du_explore1-magazine-a.mp4", poster: "/media/posters/magazine-a.jpg", label: "explore1-magazine-a" },
      { type: "image", src: "/media/explore1-magazine-b.gif", label: "explore1-magazine-b" },
    ],
  },
  {
    id: "wildcraft",
    tag: "Campaign & On-site Store Launch | Amazon Fashion",
    title: "Wildcraft x Amazon Fashion: The Great Outdoors",
    body: "In a campaign that celebrated the spirit of adventure, Amazon Fashion launched Wildcraft with a dedicated on-site store and multi-channel push. From durable hiking gear to adventure-ready essentials, the campaign brought the great outdoors closer to customers through engaging storytelling, social buzz, and immersive on-site experiences.",
    media: [
      { type: "video", src: "/media/fhcsffhc_explore2-wildcraft-a.mp4", poster: "/media/posters/wildcraft-a.jpg", label: "explore2-wildcraft-a" },
      {
        type: "link",
        src: "https://www.instagram.com/p/DFfAjzXy7cY/?igsh=MW9panAzd2dsZGM1dA%3D%3D",
        label: "Instagram Post",
        sub: "Wildcraft x Amazon Fashion",
        thumb: "/media/explore2-wildcraft-b.png",
      },
    ],
  },
];

export const ABOUT_TEXT =
  "I've spent the last seven years figuring out what makes people stop scrolling and actually buy something, first at Amazon Fashion, now at Myntra. Give me a pile of research and a blank page and I'm genuinely happy. I've named a brand, written its first words, argued for its layout, and then shown up on set to make sure the shoot matched the idea in my head. I like the messy middle part of building something new more than the polished end of it. Also, I will absolutely notice if your product page copy doesn't match your Instagram caption. It's a whole personality trait at this point.";

export const EDUCATION = [
  "NIFT — Master of Fashion Management (MFM)",
  "Amity University — Bachelor of Journalism & Mass Communication",
];

export const RESUME_URL = "/media/Noyanika-Dixit-Resume.pdf";

export const CONTACT_LINKS = [
  { label: "Email", value: "noyanikadixit@gmail.com", href: "mailto:noyanikadixit@gmail.com", testid: "contact-email-link" },
  { label: "Phone", value: "+91-8795790773", href: "tel:+918795790773", testid: "contact-phone-link" },
  { label: "LinkedIn", value: "linkedin.com/in/noyanika-dixit-258bb815b", href: "https://www.linkedin.com/in/noyanika-dixit-258bb815b/", testid: "contact-linkedin-link" },
];
