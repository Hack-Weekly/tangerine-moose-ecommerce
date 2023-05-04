import { type Product } from "~/types/product";

const coffeeProducts: Product[] = [
  {
    id: 1001,
    name: "Tangerine House Blend",
    slug: "tangerine-house-blend",
    description: "Medium roast, balanced, slightly acidic, sweet. Notes: citrus, berry, chocolate.",
    created_at: "2023-01-12T05:00:00.000Z",
    updated_at: "2023-01-12T05:00:00.000Z",
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
        id: 1,
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
        id: 2,
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
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
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
        id: 1,
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
        id: 2,
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
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
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
        id: 1,
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
        id: 2,
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
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
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
        id: 1,
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
        id: 2,
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
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
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
        id: 1,
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
        id: 2,
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
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
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
        id: 1,
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
        id: 2,
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
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
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
        id: 1,
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
        id: 2,
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
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
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
        id: 1,
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
        id: 2,
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
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
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
        id: 1,
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
        id: 2,
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
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
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
        id: 1,
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
        id: 2,
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
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
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
        id: 1,
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
        id: 2,
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
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
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
        id: 1,
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
        id: 2,
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

const teaProducts: Product[] = [
  {
    id: 2001,
    name: "Earl Grey Loose Tea",
    slug: "early-grey-loose-tea",
    description: "Rich black tea with creamy-sweet vanilla and a citrusy hint of bergamot",
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
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
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
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
  {
    id: 2003,
    name: "Assam Loose Tea",
    slug: "assam-loose-tea",
    description: "A classic, bold Assam with a rich, dark cup and full flavour.",
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
    type: "tea",
    primary_tag: "black tea",
    tags: ["black tea", "loose leaf"],
    base_price: 850,
    price_varies: true,
    image_url: "/tea/loose-leaf-b97017.svg",
    color: "#b97017",
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
        price: 850,
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
        price: 950,
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
        price: 1700,
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
        price: 1800,
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
        price: 3000,
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
        price: 3200,
      },
    ],
  },
  {
    id: 2004,
    name: "Assam Loose Tea",
    slug: "assam-loose-tea",
    description: "A classic, bold Assam with a rich, dark cup and full flavour.",
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
    type: "tea",
    primary_tag: "black tea",
    tags: ["black tea", "tea bags"],
    base_price: 750,
    price_varies: true,
    image_url: "/tea/tea-bag-b97017.svg",
    color: "#b97017",
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
        price: 750,
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
        price: 1500,
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
        price: 2750,
      },
    ],
  },
  {
    id: 2005,
    name: "Darjeeling Loose Tea",
    slug: "darjeeling-loose-tea",
    description: "A second flush black tea with a well developed flavour, sweet and smooth.",
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
    type: "tea",
    primary_tag: "black tea",
    tags: ["black tea", "loose leaf"],
    base_price: 1000,
    price_varies: true,
    image_url: "/tea/loose-leaf-770a22.svg",
    color: "#770a22",
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
        price: 1000,
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
        price: 1100,
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
        price: 2000,
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
        price: 2100,
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
        price: 4000,
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
        price: 4100,
      },
    ],
  },
  {
    id: 2006,
    name: "Darjeeling Loose Tea",
    slug: "darjeeling-loose-tea",
    description: "A second flush black tea with a well developed flavour, sweet and smooth.",
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
    type: "tea",
    primary_tag: "black tea",
    tags: ["black tea", "tea bags"],
    base_price: 1000,
    price_varies: true,
    image_url: "/tea/tea-bag-770a22.svg",
    color: "#770a22",
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
        price: 1000,
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
        price: 1900,
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
        price: 3750,
      },
    ],
  },
  {
    id: 2007,
    name: "Ceremonial Organic Matcha",
    slug: "ceremonial-grade-matcha",
    description: "A green tea characterized by a rich aroma, mellow umami, and a vivid green color.",
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
    type: "tea",
    primary_tag: "green tea",
    tags: ["green tea", "powder"],
    base_price: 2600,
    price_varies: true,
    image_url: "/tea/loose-leaf-079d37.svg",
    color: "#079d37",
    options: [
      {
        name: "Amount",
        values: ["20g", "40g", "100g"],
      },
    ],
    variants: [
      {
        id: 1,
        options: [
          {
            name: "Amount",
            value: "20g",
          },
        ],
        available: true,
        price: 2600,
      },
      {
        id: 2,
        options: [
          {
            name: "Amount",
            value: "40g",
          },
        ],
        available: true,
        price: 4900,
      },
      {
        id: 3,
        options: [
          {
            name: "Amount",
            value: "100g",
          },
        ],
        available: true,
        price: 10400,
      },
    ],
  },
  {
    id: 2008,
    name: "Sencha Loose Leaf",
    slug: "sencha-loose-leaf",
    description:
      "A harmonious balance of umami, sweetness, bitterness, and astringency, with a bright fragrance like a sunny field. About 25 servings in this 100g size product",
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
    type: "tea",
    primary_tag: "green tea",
    tags: ["green tea", "loose leaf"],
    base_price: 2500,
    price_varies: false,
    image_url: "/tea/loose-leaf-01511b.svg",
    color: "#01511b",
  },
];

const equipmentProducts: Product[] = [
  {
    id: 3001,
    name: "Hario V60",
    slug: "hario-v60",
    description:
      "Cone-shape coffee dripper designed for accessibility, versatility, and most importantly, making good coffee",
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
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
  {
    id: 3002,
    name: "V60 Filters",
    slug: "v60-filters",
    description: "For V60-style drip brewers",
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
    type: "equipment",
    primary_tag: "filters",
    tags: ["filters"],
    base_price: 1400,
    price_varies: true,
    image_url: "/equipment/v60-filters.svg",
    color: "#d40077",
    options: [
      {
        name: "Count",
        values: ["Set of 50", "Set of 100"],
      },
    ],
    variants: [
      {
        id: 1,
        options: [
          {
            name: "Count",
            value: "Set of 50",
          },
        ],
        available: true,
        price: 1400,
      },
      {
        id: 2,
        options: [
          {
            name: "Count",
            value: "Set of 100",
          },
        ],
        available: true,
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
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
    type: "equipment",
    primary_tag: "brewer",
    tags: ["brewer"],
    base_price: 5200,
    price_varies: true,
    image_url: "/equipment/aeropress.svg",
    color: "#a50010",
    options: [
      {
        name: "Add-ons",
        values: ["Without tote bag", "With tote bag"],
      },
    ],
    variants: [
      {
        id: 1,
        options: [
          {
            name: "Add-ons",
            value: "Without tote bag",
          },
        ],
        available: true,
        price: 5200,
      },
      {
        id: 2,
        options: [
          {
            name: "Add-ons",
            value: "With tote bag",
          },
        ],
        available: true,
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
    created_at: "2022-12-11T05:00:00.000Z",
    updated_at: "2022-12-11T05:00:00.000Z",
    type: "equipment",
    primary_tag: "filters",
    tags: ["filters"],
    base_price: 4200,
    price_varies: true,
    image_url: "/equipment/aeropress-filters.svg",
    color: "#a50010",
    options: [
      {
        name: "Count",
        values: ["1 Pack (350 filters)", "2 Pack (700 filters)", "4 Pack (1400 filters)"],
      },
    ],
    variants: [
      {
        id: 1,
        options: [
          {
            name: "Count",
            value: "1 Pack (350 filters)",
          },
        ],
        available: true,
        price: 1200,
      },
      {
        id: 2,
        options: [
          {
            name: "Count",
            value: "2 Pack (700 filters)",
          },
        ],
        available: true,
        price: 2000,
      },
      {
        id: 3,
        options: [
          {
            name: "Count",
            value: "4 Pack (1400 filters)",
          },
        ],
        available: true,
        price: 2900,
      },
    ],
  },
];

const allProducts: Product[] = [...coffeeProducts, ...teaProducts, ...equipmentProducts];

export { coffeeProducts, teaProducts, equipmentProducts, allProducts };
