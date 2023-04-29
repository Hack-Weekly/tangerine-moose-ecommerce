import { type Product } from "~/types/product";

export const coffeeProducts: Product[] = [
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
    price_varies: true,
    image_url: "/coffee/bean-bag-fe8a26.svg",
    color: "#fe8a26",
    options: [
      {
        name: "Amount",
        values: ["340g", "680g", "2.3kg"],
      },
      {
        name: "Grind",
        values: ["Whole Bean", "Drip", "Espresso"],
      },
    ],
    variants: [
      {
        id: 0,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 1,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 3,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 4,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 5,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 6,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 7,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 8,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 9,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 8500,
      },
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
    price_varies: true,
    image_url: "/coffee/bean-bag-076a04.svg",
    color: "#076a04",
    options: [
      {
        name: "Amount",
        values: ["340g", "680g", "2.3kg"],
      },
      {
        name: "Grind",
        values: ["Whole Bean", "Drip", "Espresso"],
      },
    ],
    variants: [
      {
        id: 0,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 1700,
      },
      {
        id: 1,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 1700,
      },
      {
        id: 3,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 1700,
      },
      {
        id: 4,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 3200,
      },
      {
        id: 5,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 3200,
      },
      {
        id: 6,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 3200,
      },
      {
        id: 7,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 8000,
      },
      {
        id: 8,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 8000,
      },
      {
        id: 9,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 8000,
      },
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
    price_varies: true,
    image_url: "/coffee/bean-bag-04546a.svg",
    color: "#04546a",
    options: [
      {
        name: "Amount",
        values: ["340g", "680g", "2.3kg"],
      },
      {
        name: "Grind",
        values: ["Whole Bean", "Drip", "Espresso"],
      },
    ],
    variants: [
      {
        id: 0,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 1700,
      },
      {
        id: 1,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 1700,
      },
      {
        id: 3,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 1700,
      },
      {
        id: 4,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 3200,
      },
      {
        id: 5,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 3200,
      },
      {
        id: 6,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 3200,
      },
      {
        id: 7,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 8000,
      },
      {
        id: 8,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 8000,
      },
      {
        id: 9,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 8000,
      },
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
    price_varies: true,
    image_url: "/coffee/bean-bag-381995.svg",
    color: "#381995",
    options: [
      {
        name: "Amount",
        values: ["340g", "680g", "2.3kg"],
      },
      {
        name: "Grind",
        values: ["Whole Bean", "Drip", "Espresso"],
      },
    ],
    variants: [
      {
        id: 0,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 1,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 3,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 4,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 5,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 6,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 7,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 8,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 9,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 8500,
      },
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
    price_varies: true,
    image_url: "/coffee/bean-bag-4d2364.svg",
    color: "#4d2364",
    options: [
      {
        name: "Amount",
        values: ["340g", "680g", "2.3kg"],
      },
      {
        name: "Grind",
        values: ["Whole Bean", "Drip", "Espresso"],
      },
    ],
    variants: [
      {
        id: 0,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 1,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 3,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 4,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 5,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 6,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 7,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 8,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 9,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 8500,
      },
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
    price_varies: true,
    image_url: "/coffee/bean-bag-730640.svg",
    color: "#730640",
    options: [
      {
        name: "Amount",
        values: ["340g", "680g", "2.3kg"],
      },
      {
        name: "Grind",
        values: ["Whole Bean", "Drip", "Espresso"],
      },
    ],
    variants: [
      {
        id: 0,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 1,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 3,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 4,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 5,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 6,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 7,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 8,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 9,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 8500,
      },
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
    price_varies: true,
    image_url: "/coffee/bean-bag-73060f.svg",
    color: "#73060f",
    options: [
      {
        name: "Amount",
        values: ["340g", "680g", "2.3kg"],
      },
      {
        name: "Grind",
        values: ["Whole Bean", "Drip", "Espresso"],
      },
    ],
    variants: [
      {
        id: 0,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 1,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 3,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 4,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 5,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 6,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 7,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 8,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 9,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 8500,
      },
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
    price_varies: true,
    image_url: "/coffee/bean-bag-636637.svg",
    color: "#636637",
    options: [
      {
        name: "Amount",
        values: ["340g", "680g", "2.3kg"],
      },
      {
        name: "Grind",
        values: ["Whole Bean", "Drip", "Espresso"],
      },
    ],
    variants: [
      {
        id: 0,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 1,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 3,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 4,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 5,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 6,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 7,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 8,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 9,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 8500,
      },
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
    price_varies: true,
    image_url: "/coffee/bean-bag-d86d56.svg",
    color: "#d86d56",
    options: [
      {
        name: "Amount",
        values: ["340g", "680g", "2.3kg"],
      },
      {
        name: "Grind",
        values: ["Whole Bean", "Drip", "Espresso"],
      },
    ],
    variants: [
      {
        id: 0,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 1,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 3,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 4,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 5,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 6,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 7,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 8,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 9,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 8500,
      },
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
    price_varies: true,
    image_url: "/coffee/bean-bag-51a696.svg",
    color: "#51a696",
    options: [
      {
        name: "Amount",
        values: ["340g", "680g", "2.3kg"],
      },
      {
        name: "Grind",
        values: ["Whole Bean", "Drip", "Espresso"],
      },
    ],
    variants: [
      {
        id: 0,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 1,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 3,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 4,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 5,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 6,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 7,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 8,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 9,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 8500,
      },
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
    price_varies: true,
    image_url: "/coffee/bean-bag-5369ce.svg",
    color: "#5369ce",
    options: [
      {
        name: "Amount",
        values: ["340g", "680g", "2.3kg"],
      },
      {
        name: "Grind",
        values: ["Whole Bean", "Drip", "Espresso"],
      },
    ],
    variants: [
      {
        id: 0,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 1,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 3,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 4,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 5,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 6,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 7,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 8,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 9,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 8500,
      },
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
    price_varies: true,
    image_url: "/coffee/bean-bag-d0d464.svg",
    color: "#d0d464",
    options: [
      {
        name: "Amount",
        values: ["340g", "680g", "2.3kg"],
      },
      {
        name: "Grind",
        values: ["Whole Bean", "Drip", "Espresso"],
      },
    ],
    variants: [
      {
        id: 0,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 1,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 3,
        options: [
          {
            name: "Amount",
            value: "340g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 4,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 5,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 6,
        options: [
          {
            name: "Amount",
            value: "680g",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 3600,
      },
      {
        id: 7,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Whole Bean",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 8,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Drip",
          },
        ],
        available: true,
        price: 8500,
      },
      {
        id: 9,
        options: [
          {
            name: "Amount",
            value: "2.3kg",
          },
          {
            name: "Grind",
            value: "Espresso",
          },
        ],
        available: true,
        price: 8500,
      },
    ],
  },
];

export const teaProducts: Product[] = [
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
    price_varies: true,
    image_url: "/tea/loose-leaf-614dac.svg",
    color: "#614dac",
    options: [
      {
        name: "Amount",
        values: ["50g", "100g", "250g"],
      },
      {
        name: "Package",
        values: ["Regular", "Gift"],
      },
    ],
    variants: [
      {
        id: 1,
        options: [
          {
            name: "Amount",
            value: "50g",
          },
          {
            name: "Package",
            value: "Regular",
          },
        ],
        available: true,
        price: 900,
      },
      {
        id: 2,
        options: [
          {
            name: "Amount",
            value: "50g",
          },
          {
            name: "Package",
            value: "Gift",
          },
        ],
        available: true,
        price: 1000,
      },
      {
        id: 3,
        options: [
          {
            name: "Amount",
            value: "100g",
          },
          {
            name: "Package",
            value: "Regular",
          },
        ],
        available: true,
        price: 1800,
      },
      {
        id: 4,
        options: [
          {
            name: "Amount",
            value: "100g",
          },
          {
            name: "Package",
            value: "Gift",
          },
        ],
        available: true,
        price: 1900,
      },
      {
        id: 5,
        options: [
          {
            name: "Amount",
            value: "250g",
          },
          {
            name: "Package",
            value: "Regular",
          },
        ],
        available: true,
        price: 3400,
      },
      {
        id: 6,
        options: [
          {
            name: "Amount",
            value: "250g",
          },
          {
            name: "Package",
            value: "Gift",
          },
        ],
        available: true,
        price: 3500,
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
    base_price: 800,
    price_varies: true,
    image_url: "/tea/tea-bag-586699.svg",
    color: "#586699",
    options: [
      {
        name: "Amount",
        values: ["20 Tea Bags", "50 Tea Bags", "100 Tea Bags"],
      },
    ],
    variants: [
      {
        id: 1,
        options: [
          {
            name: "Amount",
            value: "20 Tea Bags",
          },
        ],
        available: true,
        price: 800,
      },
      {
        id: 2,
        options: [
          {
            name: "Amount",
            value: "50 Tea Bags",
          },
        ],
        available: true,
        price: 1600,
      },
      {
        id: 3,
        options: [
          {
            name: "Amount",
            value: "100 Tea Bags",
          },
        ],
        available: true,
        price: 2900,
      },
    ],
  },
];

export const equipmentProducts: Product[] = [
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
    price_varies: true,
    image_url: "/equipment/v60.svg",
    color: "#d40077",
    options: [
      {
        name: "Material",
        values: ["Plastic", "Ceramic", "Glass"],
      },
    ],
    variants: [
      {
        id: 1,
        options: [
          {
            name: "Material",
            value: "Plastic",
          },
        ],
        available: true,
        price: 4200,
      },
      {
        id: 2,
        options: [
          {
            name: "Material",
            value: "Ceramic",
          },
        ],
        available: true,
        price: 4800,
      },
      {
        id: 3,
        options: [
          {
            name: "Material",
            value: "Glass",
          },
        ],
        available: true,
        price: 4900,
      },
    ],
  },
];
