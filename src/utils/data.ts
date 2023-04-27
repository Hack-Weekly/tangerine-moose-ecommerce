import type { CoffeeProps } from "~/components/types/product";

const testProducts: CoffeeProps[] = [
{
  id: 1,
  name: "Tangerine House Blend",
  slug: "tangerine-house-blend",
  description: "Medium roast, balanced, slightly acidic, sweet. Notes: citrus, berry, chocolate.",
  created_at: new Date(2022, 12, 12),
  updated_at: new Date(2022, 12, 12),
  type: "coffee",
  primary_tag: 'blend',
  tags: ["blend"],
  base_price: 1900,
  available: true,
  price_varies: true,
  image_url: "/bean_bag.png",
  color: "#fe8a26",
  variants: [
    {
      variant: {
        label: "340g",
        weight: 340,
      },
      price: 1900,
    },
    {
      variant: {
        label: "680g",
        weight: 680,
      },
      price: 3600,
    },
    {
      variant: {
        label: "2.3kg",
        weight: 2270,
      },
      price: 8500,
    },
  ],
  grindOptions: [
    { value: "whole", label: "Whole Bean" },
    { value: "drip", label: "Drip" },
    { value: "espresso", label: "Espresso" },
  ],
},
{
  id: 2,
  name: "Hanoi Robusta Blend",
  slug: "hanoi-robusta-blend",
  description: "Robusta and arabica blend for Vietnamese coffee, bold, earthy, and complex. Notes: nutty, earthy, woody",
  created_at: new Date(2022, 11, 11),
  updated_at: new Date(2022, 11, 11),
  type: "coffee",
  primary_tag: "blend",
  tags: ["blend"],
  base_price: 1700,
  available: true,
  price_varies: true,
  image_url: "/bean_bag.png",
  color: "#fe8a26",
  variants: [
      {
      variant: {
          label: "340g",
          weight: 340,
      },
      price: 1700,
      },
      {
      variant: {
          label: "680g",
          weight: 680,
      },
      price: 3200,
      },
      {
      variant: {
          label: "2.3kg",
          weight: 2270,
      },
      price: 8000,
      },
  ],
  grindOptions: [
      { value: "whole", label: "Whole Bean" },
      { value: "drip", label: "Drip" },
      { value: "espresso", label: "Espresso" },
  ],
},
{
  id: 3,
  name: "Gazebo Light Roast",
  slug: "gazebo-light-roast",
  description: "Mellow, acidic, fruity. Notes: honey, citrus, rose",
  created_at: new Date(2022, 11, 11),
  updated_at: new Date(2022, 11, 11),
  type: "coffee",
  primary_tag: "blend",
  tags: ["blend"],
  base_price: 1700,
  available: true,
  price_varies: true,
  image_url: "/bean_bag.png",
  color: "#fe8a26",
  variants: [
    {
      variant: {
        label: "340g",
        weight: 340,
      },
      price: 1700,
    },
    {
      variant: {
        label: "680g",
        weight: 680,
      },
      price: 3200,
    },
    {
      variant: {
        label: "2.3kg",
        weight: 2270,
      },
      price: 8000,
    },
  ],
  grindOptions: [
    { value: "whole", label: "Whole Bean" },
    { value: "drip", label: "Drip" },
    { value: "espresso", label: "Espresso" },
  ],
},
{
  id: 4,
  name: "Portico Medium Roast",
  slug: "portico-medium-roast",
  description: "Balanced, rounded acidity, sweet. Notes: caramel, almond, berry",
  created_at: new Date(2022, 11, 11),
  updated_at: new Date(2022, 11, 11),
  type: "coffee",
  primary_tag: "blend",
  tags: ["blend"],
  base_price: 1700,
  available: true,
  price_varies: true,
  image_url: "/bean_bag.png",
  color: "#fe8a26",
  variants: [
    {
      variant: {
        label: "340g",
        weight: 340,
      },
      price: 1700,
    },
    {
      variant: {
        label: "680g",
        weight: 680,
      },
      price: 3200,
    },
    {
      variant: {
        label: "2.3kg",
        weight: 2270,
      },
      price: 8000,
    },
  ],
  grindOptions: [
    { value: "whole", label: "Whole Bean" },
    { value: "drip", label: "Drip" },
    { value: "espresso", label: "Espresso" },
  ],
},
{
  id: 5,
  name: "Turret Dark Roast",
  slug: "turret-dark-roast",
  description: "Full body, low acid, roasty. Notes: dark chocolate, nutmeg, hazelnut",
  created_at: new Date(2022, 11, 11),
  updated_at: new Date(2022, 11, 11),
  type: "coffee",
  primary_tag: "blend",
  tags: ["blend"],
  base_price: 1700,
  available: true,
  price_varies: true,
  image_url: "/bean_bag.png",
  color: "#fe8a26",
  variants: [
    {
      variant: {
        label: "340g",
        weight: 340,
      },
      price: 1700,
    },
    {
      variant: {
        label: "680g",
        weight: 680,
      },
      price: 3200,
    },
    {
      variant: {
        label: "2.3kg",
        weight: 2270,
      },
      price: 8000,
    },
  ],
  grindOptions: [
    { value: "whole", label: "Whole Bean" },
    { value: "drip", label: "Drip" },
    { value: "espresso", label: "Espresso" },
  ],
},
{
  id: 6,
  name: "Gallery French Roast",
  slug: "gallery-french-roast ",
  description: "Double roasted, dark, intense. Notes: smoky, dark chocolate, caramel",
  created_at: new Date(2022, 11, 11),
  updated_at: new Date(2022, 11, 11),
  type: "coffee",
  primary_tag: "blend",
  tags: ["blend"],
  base_price: 1700,
  available: true,
  price_varies: true,
  image_url: "/bean_bag.png",
  color: "#fe8a26",
  variants: [
    {
      variant: {
        label: "340g",
        weight: 340,
      },
      price: 1700,
    },
    {
      variant: {
        label: "680g",
        weight: 680,
      },
      price: 3200,
    },
    {
      variant: {
        label: "2.3kg",
        weight: 2270,
      },
      price: 8000,
    },
  ],
  grindOptions: [
    { value: "whole", label: "Whole Bean" },
    { value: "drip", label: "Drip" },
    { value: "espresso", label: "Espresso" },
  ],
},
{
  id: 7,
  name: "Costa Rica",
  slug: "costa-rica ",
  description: "Single origin medium roast. Notes: apricot, citrus, berry",
  created_at: new Date(2022, 11, 11),
  updated_at: new Date(2022, 11, 11),
  type: "coffee",
  primary_tag: "single origin",
  tags: ["single origin"],
  base_price: 1700,
  available: true,
  price_varies: true,
  image_url: "/bean_bag.png",
  color: "#fe8a26",
  variants: [
    {
      variant: {
        label: "340g",
        weight: 340,
      },
      price: 1700,
    },
    {
      variant: {
        label: "680g",
        weight: 680,
      },
      price: 3200,
    },
    {
      variant: {
        label: "2.3kg",
        weight: 2270,
      },
      price: 8000,
    },
  ],
  grindOptions: [
    { value: "whole", label: "Whole Bean" },
    { value: "drip", label: "Drip" },
    { value: "espresso", label: "Espresso" },
  ],
},
{
  id: 8,
  name: "Guatemala",
  slug: "guatemala",
  description: "Single origin light roast, washed. Notes: citrus, almond, chamomile",
  created_at: new Date(2022, 11, 11),
  updated_at: new Date(2022, 11, 11),
  type: "coffee",
  primary_tag: "single origin",
  tags: ["single origin"],
  base_price: 1700,
  available: true,
  price_varies: true,
  image_url: "/bean_bag.png",
  color: "#fe8a26",
  variants: [
    {
      variant: {
        label: "340g",
        weight: 340,
      },
      price: 1700,
    },
    {
      variant: {
        label: "680g",
        weight: 680,
      },
      price: 3200,
    },
    {
      variant: {
        label: "2.3kg",
        weight: 2270,
      },
      price: 8000,
    },
  ],
  grindOptions: [
    { value: "whole", label: "Whole Bean" },
    { value: "drip", label: "Drip" },
    { value: "espresso", label: "Espresso" },
  ],
},
{
  id: 9,
  name: "Indonesia",
  slug: "indonesia",
  description: "Single origin from Sumatra, dark roast, washed. Notes: dark chocolate, tobacco, caramel",
  created_at: new Date(2022, 11, 11),
  updated_at: new Date(2022, 11, 11),
  type: "coffee",
  primary_tag: "single origin",
  tags: ["single origin"],
  base_price: 1700,
  available: true,
  price_varies: true,
  image_url: "/bean_bag.png",
  color: "#fe8a26",
  variants: [
    {
      variant: {
        label: "340g",
        weight: 340,
      },
      price: 1700,
    },
    {
      variant: {
        label: "680g",
        weight: 680,
      },
      price: 3200,
    },
    {
      variant: {
        label: "2.3kg",
        weight: 2270,
      },
      price: 8000,
    },
  ],
  grindOptions: [
    { value: "whole", label: "Whole Bean" },
    { value: "drip", label: "Drip" },
    { value: "espresso", label: "Espresso" },
  ],
},
{
  id: 10,
  name: "Hawaii Kona",
  slug: "hawaii-kona",
  description: "Single origin from the slopes of Mauna Loa, medium roast, honey processed . Notes: brown sugar, milk chocolate, berry",
  created_at: new Date(2022, 11, 11),
  updated_at: new Date(2022, 11, 11),
  type: "coffee",
  primary_tag: "single origin",
  tags: ["single origin"],
  base_price: 1700,
  available: true,
  price_varies: true,
  image_url: "/bean_bag.png",
  color: "#fe8a26",
  variants: [
    {
      variant: {
        label: "340g",
        weight: 340,
      },
      price: 1700,
    },
    {
      variant: {
        label: "680g",
        weight: 680,
      },
      price: 3200,
    },
    {
      variant: {
        label: "2.3kg",
        weight: 2270,
      },
      price: 8000,
    },
  ],
  grindOptions: [
    { value: "whole", label: "Whole Bean" },
    { value: "drip", label: "Drip" },
    { value: "espresso", label: "Espresso" },
  ],
},
{
  id: 11,
  name: "Ethiopia",
  slug: "ethiopia",
  description: "Single origin light roast, washed. Notes: berry, almond, lemon",
  created_at: new Date(2022, 11, 11),
  updated_at: new Date(2022, 11, 11),
  type: "coffee",
  primary_tag: "single origin",
  tags: ["single origin"],
  base_price: 1700,
  available: true,
  price_varies: true,
  image_url: "/bean_bag.png",
  color: "#fe8a26",
  variants: [
    {
      variant: {
        label: "340g",
        weight: 340,
      },
      price: 1700,
    },
    {
      variant: {
        label: "680g",
        weight: 680,
      },
      price: 3200,
    },
    {
      variant: {
        label: "2.3kg",
        weight: 2270,
      },
      price: 8000,
    },
  ],
  grindOptions: [
    { value: "whole", label: "Whole Bean" },
    { value: "drip", label: "Drip" },
    { value: "espresso", label: "Espresso" },
  ],
},
{
  id: 12,
  name: "Brazil",
  slug: "brazil",
  description: "Single origin medium roast, honey processed. Notes: dark chocolate, orange, almond",
  created_at: new Date(2022, 11, 11),
  updated_at: new Date(2022, 11, 11),
  type: "coffee",
  primary_tag: "single origin",
  tags: ["single origin"],
  base_price: 1700,
  available: true,
  price_varies: true,
  image_url: "/bean_bag.png",
  color: "#fe8a26",
  variants: [
    {
      variant: {
        label: "340g",
        weight: 340,
      },
      price: 1700,
    },
    {
      variant: {
        label: "680g",
        weight: 680,
      },
      price: 3200,
    },
    {
      variant: {
        label: "2.3kg",
        weight: 2270,
      },
      price: 8000,
    },
  ],
  grindOptions: [
    { value: "whole", label: "Whole Bean" },
    { value: "drip", label: "Drip" },
    { value: "espresso", label: "Espresso" },
  ],
},
];


export { testProducts };
