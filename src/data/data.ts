import type { Coffee, Equipment, Tea } from "~/types/product";

const coffeeProducts: Coffee[] = [
  {
    id: 1001,
    name: "Tangerine House Blend",
    slug: "tangerine-house-blend",
    description: "Medium roast, balanced, slightly acidic, sweet. Notes: citrus, berry, chocolate.",
    created_at: new Date(2022, 12, 12),
    updated_at: new Date(2022, 12, 12),
    type: "coffee",
    primary_tag: "blend",
    tags: ["blend"],
    base_price: 1900,
    available: true,
    price_varies: true,
    image_url: "/coffee/bean-bag-fe8a26.svg",
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
    id: 1002,
    name: "Hanoi Robusta Blend",
    slug: "hanoi-robusta-blend",
    description:
      "Robusta and arabica blend for Vietnamese coffee, bold, earthy, and complex. Notes: nutty, earthy, woody",
    created_at: new Date(2022, 11, 11),
    updated_at: new Date(2022, 11, 11),
    type: "coffee",
    primary_tag: "blend",
    tags: ["blend"],
    base_price: 1700,
    available: true,
    price_varies: true,
    image_url: "/coffee/bean-bag-076a04.svg",
    color: "#076a04",
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
    id: 1003,
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
    image_url: "/coffee/bean-bag-04546a.svg",
    color: "#04546a",
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
    id: 1004,
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
    image_url: "/coffee/bean-bag-381995.svg",
    color: "#381995",
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
    id: 1005,
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
    image_url: "/coffee/bean-bag-4d2364.svg",
    color: "#4d2364",
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
    id: 1006,
    name: "Gallery French Roast",
    slug: "gallery-french-roast",
    description: "Double roasted, dark, intense. Notes: smoky, dark chocolate, caramel",
    created_at: new Date(2022, 11, 11),
    updated_at: new Date(2022, 11, 11),
    type: "coffee",
    primary_tag: "blend",
    tags: ["blend"],
    base_price: 1700,
    available: true,
    price_varies: true,
    image_url: "/coffee/bean-bag-730640.svg",
    color: "#730640",
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
    id: 1007,
    name: "Costa Rica",
    slug: "costa-rica",
    description: "Single origin medium roast. Notes: apricot, citrus, berry",
    created_at: new Date(2022, 11, 11),
    updated_at: new Date(2022, 11, 11),
    type: "coffee",
    primary_tag: "single origin",
    tags: ["single origin"],
    base_price: 1700,
    available: true,
    price_varies: true,
    image_url: "/coffee/bean-bag-73060f.svg",
    color: "#73060f",
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
    id: 1008,
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
    image_url: "/coffee/bean-bag-636637.svg",
    color: "#636637",
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
    id: 1009,
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
    image_url: "/coffee/bean-bag-d86d56.svg",
    color: "#d86d56",
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
    id: 1010,
    name: "Hawaii Kona",
    slug: "hawaii-kona",
    description:
      "Single origin from the slopes of Mauna Loa, medium roast, honey processed . Notes: brown sugar, milk chocolate, berry",
    created_at: new Date(2022, 11, 11),
    updated_at: new Date(2022, 11, 11),
    type: "coffee",
    primary_tag: "single origin",
    tags: ["single origin"],
    base_price: 1700,
    available: true,
    price_varies: true,
    image_url: "/coffee/bean-bag-51a696.svg",
    color: "#51a696",
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
    id: 1011,
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
    image_url: "/coffee/bean-bag-5369ce.svg",
    color: "#5369ce",
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
    id: 1012,
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
    image_url: "/coffee/bean-bag-d0d464.svg",
    color: "#d0d464",
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

const teaProducts: Tea[] = [
  {
    id: 2001,
    name: "Earl Grey Loose Tea",
    slug: "early-grey-loose-tea",
    description: "Rich black tea with creamy-sweet vanilla and a citrusy hint of bergamot",
    created_at: new Date(2022, 11, 11),
    updated_at: new Date(2022, 11, 11),
    type: "tea",
    primary_tag: "black tea",
    tags: ["black tea", "loose leaf"],
    base_price: 900,
    available: true,
    price_varies: true,
    image_url: "/tea/loose-leaf-614dac.svg",
    color: "#614dac",
    format: "loose-leaf",
    variants: [
      {
        variant: {
          label: "50g",
          amount: 50,
        },
        price: 900,
      },
      {
        variant: {
          label: "100g",
          amount: 100,
        },
        price: 1800,
      },
      {
        variant: {
          label: "250g",
          amount: 250,
        },
        price: 4200,
      },
    ],
  },
  {
    id: 2002,
    name: "Earl Grey Tea Bags",
    slug: "early-grey-tea-bags",
    description: "Rich black tea with creamy-sweet vanilla and a citrusy hint of bergamot",
    created_at: new Date(2022, 11, 11),
    updated_at: new Date(2022, 11, 11),
    type: "tea",
    primary_tag: "black tea",
    tags: ["black tea", "tea bags"],
    base_price: 900,
    available: true,
    price_varies: true,
    image_url: "/tea/tea-bag-586699.svg",
    color: "#586699",
    format: "tea-bags",
    variants: [
      {
        variant: {
          label: "20 Tea Bags",
          amount: 20,
        },
        price: 800,
      },
      {
        variant: {
          label: "50 Tea Bags",
          amount: 50,
        },
        price: 1600,
      },
      {
        variant: {
          label: "100 Tea Bags",
          amount: 100,
        },
        price: 2900,
      },
    ],
  },
];

const equipmentProducts: Equipment[] = [
  {
    id: 3001,
    name: "Hario V60",
    slug: "hario-v60",
    description:
      "Cone-shape coffee dripper designed for accessibility, versatility, and most importantly, making good coffee",
    created_at: new Date(2022, 11, 11),
    updated_at: new Date(2022, 11, 11),
    type: "equipment",
    primary_tag: "brewer",
    tags: ["brewer"],
    base_price: 4200,
    available: true,
    price_varies: true,
    image_url: "/equipment/v60.svg",
    color: "#d40077",
    variant_type: "Variant",
    variants: [
      {
        label: "Plastic",
        value: "plastic",
        price: 4200,
      },
      {
        label: "Ceramic",
        value: "ceramic",
        price: 4800,
      },
      {
        label: "Glass",
        value: "glass",
        price: 4900,
      },
    ],
  },
  {
    id: 3002,
    name: "V60 Filters",
    slug: "v60-filters",
    description: "For V60-style drip brewers",
    created_at: new Date(2022, 11, 11),
    updated_at: new Date(2022, 11, 11),
    type: "equipment",
    primary_tag: "filters",
    tags: ["filters"],
    base_price: 1200,
    available: true,
    price_varies: true,
    image_url: "/equipment/v60-filters.svg",
    color: "#d40077",
    variant_type: "Count",
    variants: [
      {
        label: "Set of 50",
        value: "50-count",
        price: 1400,
      },
      {
        label: "Set of 100",
        value: "100-count",
        price: 2600,
      },
    ],
  },
  {
    id: 3003,
    name: "AeroPress Coffee Maker",
    slug: "aeropress",
    description:
      "An easy to use, very portable device that makes smooth, rich, grit-free coffee with a delicious, full-bodied finish that lingers well after your last sip.",
    created_at: new Date(2022, 11, 11),
    updated_at: new Date(2022, 11, 11),
    type: "equipment",
    primary_tag: "brewer",
    tags: ["brewer"],
    base_price: 5200,
    available: true,
    price_varies: true,
    image_url: "/equipment/aeropress.svg",
    color: "#a50010",
    variant_type: "Variant",
    variants: [
      {
        label: "Without tote bag",
        value: "without-tote",
        price: 5200,
      },
      {
        label: "With tote bag",
        value: "with-tote",
        price: 5800,
      },
    ],
  },
  {
    id: 3004,
    name: "AeroPress Paper Micro-Filters",
    slug: "aeropress-filters",
    description:
      "Cone-shape coffee dripper designed for accessibility, versatility, and most importantly, making good coffee",
    created_at: new Date(2022, 11, 11),
    updated_at: new Date(2022, 11, 11),
    type: "equipment",
    primary_tag: "filters",
    tags: ["filters"],
    base_price: 4200,
    available: true,
    price_varies: true,
    image_url: "/equipment/aeropress-filters.svg",
    color: "#a50010",
    variant_type: "Count",
    variants: [
      {
        label: "1 Pack (350 filters)",
        value: "1-pack",
        price: 1200,
      },
      {
        label: "2 Pack (700 filters)",
        value: "2-pack",
        price: 2000,
      },
      {
        label: "4 Pack (1400 filters)",
        value: "4-pack",
        price: 2900,
      },
    ],
  },
];

const allProducts: (Coffee | Tea | Equipment)[] = [...coffeeProducts, ...teaProducts, ...equipmentProducts];

export { coffeeProducts, teaProducts, equipmentProducts, allProducts };
