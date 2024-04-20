import { StaticImageData } from "next/image";

import BioAmla from "../images/bio-amla.jpeg";
import BlisfulBakes from "../images/bistful-bakes.jpeg";
import CoffeeDelight from "../images/coffee-delight.jpeg";
import CoffeeTemplate from "../images/coffee-template.jpeg";
import CofeeTimes from "../images/coffee-times.jpeg";
import CoffeeDelightV2 from "../images/cofferr-delight-v2.jpeg";
import DelightfulBites from "../images/delightful-bites.jpeg";
import ElevateFit from "../images/elevate-fit.jpeg";
import EtheralGlow from "../images/etheral-glow.jpeg";
import PetTemplate from "../images/pet-template-1.jpeg";
import Tasties from "../images/Tasties.jpeg";
import Travellers from "../images/travelers.jpeg";
import RoshniNews from "../images/roshni-news.jpeg";

export type ProjectType = {
  name: string;
  description: string;
  longDescription?: string;
  image: StaticImageData;
  mobileImage?: StaticImageData;
  figma?: StaticImageData;
  old?: StaticImageData;
  tools: string[];
};

export const projectsList: ProjectType[] = [
  {
    name: "Pet Template",
    description:
      "Get ready to unleash the cuteness with our Pet Instagram template set! With seven pages of adorable content",
    image: PetTemplate,
    tools: ["Adobe Illustrator", "Canva"],
  },
  {
    name: "Tasties",
    description:
      "Experience the best of Italian and Chinese cuisine with our Tasties Restaurant.",
    image: Tasties,
    tools: ["Adobe Illustrator", "Canva"],
  },
  {
    name: "Blisful Bakes",
    description:
      "Creating a Logo Of a Bakery filled with Delights of Homemade Sweets",
    image: BlisfulBakes,
    tools: ["Adobe Illustrator", "Canva"],
  },
  {
    name: "Coffee Delight",
    description:
      "Introducing our coffee-inspired logo, where the aroma of freshly brewed beans meets the enchantment of literature.",
    image: CoffeeDelight,
    tools: ["Adobe Illustrator", "Canva"],
  },
  {
    name: "Coffee Template",
    description:
      "Elevate your coffee game with our Instagram template set! Featuring eight pages of stunning visuals and engaging content.",
    image: CoffeeTemplate,
    tools: ["Adobe Illustrator", "Canva"],
  },
  {
    name: "Cofee Times",
    description:
      "With eight captivating pages, this template brings the essence of coffee culture to life.",
    image: CofeeTimes,
    tools: ["Adobe Illustrator", "Canva"],
  },
  {
    name: "Bio Amla",
    description:
      `Check out the new look of Bio Amla! It combines old-school Ayurvedic vibes with a modern twist. The packaging is eco-friendly and totally chic, just like the product inside!"`,
    image: BioAmla,
    tools: ["Adobe Illustrator", "Canva"],
  },
  {
    name: "Delightful Bites",
    description:
      `Introducing our "Delightful Bites" bakery With its charming design and delectable imagery, this template is perfect for showcasing your irresistible treats`,
    image: DelightfulBites,
    tools: ["Adobe Illustrator", "Canva"],
  },
  {
    name: "Ethera Glow",
    description:
      "A Logo Designing of a Beauty Lotion that Symbolize Luxurious Vibe with Nature!",
    image: EtheralGlow,
    tools: ["Adobe Illustrator", "Canva"],
  },
  {
    name: "Travellers",
    description:
      "Embark on unforgettable adventures with our Travel Post template.",
    image: Travellers,
    tools: ["Adobe Illustrator", "Canva"],
  },
  {
    name: "Coffee Delight",
    description:
      "This logo embodies the essence of a cafe - a haven for coffee lovers seeking the perfect blend of flavor and joy. With its elegant design and inviting colors, it captures the warmth and passion we pour into every cup.",
    image: CoffeeDelightV2,
    tools: ["Adobe Illustrator", "Canva"],
  },
  {
    name: "Elevate Fit",
    description:
      "Introducing our sleek and dynamic gym logo, where style meets strength. Bold lines and modern typography convey power and vitality, while the minimalist design exudes sophistication.",
    image: ElevateFit,
    tools: ["Adobe Illustrator", "Canva"],
  },
  {
    name: "Roshni News",
    description:
      "Unveiling the emblem of truth and vigilance, behold Roshni News. It's a crime channel logo representing a hope for justice.",
    image: RoshniNews,
    tools: ["Adobe Illustrator", "Canva"],
  }
];
