import { PrismaClient, type Prisma, type ProductType } from "@prisma/client";

const products: Prisma.ProductCreateInput[] = [
  {
    name: "Tangerine House Blend",
    slug: "tangerine-house-blend",
    description: "Medium roast, balanced, slightly acidic, sweet. Notes: citrus, berry, chocolate.",
    createdAt: "2023-01-12T05:00:00.000Z",
    updatedAt: "2023-01-12T05:00:00.000Z",
    type: "coffee" as ProductType,
    primaryTag: "blend",
    tags: ["blend"],
    basePrice: 19,
    priceVaries: true,
    imageUrl: "/coffee/bean-bag-fe8a26.svg",
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
    variants: {
      create: [
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
      ],
    },
  },
  {
    name: "Hanoi Robusta Blend",
    slug: "hanoi-robusta-blend",
    description:
      "Robusta and arabica blend for Vietnamese coffee, bold, earthy, and complex. Notes: nutty, earthy, woody",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "coffee" as ProductType,
    primaryTag: "blend",
    tags: ["blend"],
    basePrice: 17,
    priceVaries: true,
    imageUrl: "/coffee/bean-bag-076a04.svg",
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
    variants: {
      create: [
        {
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
          price: 17,
        },
        {
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
          price: 17,
        },
        {
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
          price: 17,
        },
        {
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
          price: 32,
        },
        {
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
          price: 32,
        },
        {
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
          price: 32,
        },
        {
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
          price: 80,
        },
        {
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
          price: 80,
        },
        {
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
          price: 80,
        },
      ],
    },
  },
  {
    name: "Gazebo Light Roast",
    slug: "gazebo-light-roast",
    description: "Mellow, acidic, fruity. Notes: honey, citrus, rose",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "coffee" as ProductType,
    primaryTag: "blend",
    tags: ["blend"],
    basePrice: 17,
    priceVaries: true,
    imageUrl: "/coffee/bean-bag-04546a.svg",
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
    variants: {
      create: [
        {
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
          price: 17,
        },
        {
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
          price: 17,
        },
        {
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
          price: 17,
        },
        {
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
          price: 32,
        },
        {
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
          price: 32,
        },
        {
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
          price: 32,
        },
        {
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
          price: 80,
        },
        {
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
          price: 80,
        },
        {
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
          price: 80,
        },
      ],
    },
  },
  {
    name: "Portico Medium Roast",
    slug: "portico-medium-roast",
    description: "Balanced, rounded acidity, sweet. Notes: caramel, almond, berry",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "coffee" as ProductType,
    primaryTag: "blend",
    tags: ["blend"],
    basePrice: 17,
    priceVaries: true,
    imageUrl: "/coffee/bean-bag-381995.svg",
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
    variants: {
      create: [
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
      ],
    },
  },
  {
    name: "Turret Dark Roast",
    slug: "turret-dark-roast",
    description: "Full body, low acid, roasty. Notes: dark chocolate, nutmeg, hazelnut",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "coffee" as ProductType,
    primaryTag: "blend",
    tags: ["blend"],
    basePrice: 17,
    priceVaries: true,
    imageUrl: "/coffee/bean-bag-4d2364.svg",
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
    variants: {
      create: [
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
      ],
    },
  },
  {
    name: "Gallery French Roast",
    slug: "gallery-french-roast",
    description: "Double roasted, dark, intense. Notes: smoky, dark chocolate, caramel",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "coffee" as ProductType,
    primaryTag: "blend",
    tags: ["blend"],
    basePrice: 17,
    priceVaries: true,
    imageUrl: "/coffee/bean-bag-730640.svg",
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
    variants: {
      create: [
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
      ],
    },
  },
  {
    name: "Costa Rica",
    slug: "costa-rica",
    description: "Single origin medium roast. Notes: apricot, citrus, berry",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "coffee" as ProductType,
    primaryTag: "single origin",
    tags: ["single origin"],
    basePrice: 17,
    priceVaries: true,
    imageUrl: "/coffee/bean-bag-73060f.svg",
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
    variants: {
      create: [
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
      ],
    },
  },
  {
    name: "Guatemala",
    slug: "guatemala",
    description: "Single origin light roast, washed. Notes: citrus, almond, chamomile",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "coffee" as ProductType,
    primaryTag: "single origin",
    tags: ["single origin"],
    basePrice: 17,
    priceVaries: true,
    imageUrl: "/coffee/bean-bag-636637.svg",
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
    variants: {
      create: [
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
      ],
    },
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    description: "Single origin from Sumatra, dark roast, washed. Notes: dark chocolate, tobacco, caramel",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "coffee" as ProductType,
    primaryTag: "single origin",
    tags: ["single origin"],
    basePrice: 17,
    priceVaries: true,
    imageUrl: "/coffee/bean-bag-d86d56.svg",
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
    variants: {
      create: [
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
      ],
    },
  },
  {
    name: "Hawaii Kona",
    slug: "hawaii-kona",
    description:
      "Single origin from the slopes of Mauna Loa, medium roast, honey processed . Notes: brown sugar, milk chocolate, berry",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "coffee" as ProductType,
    primaryTag: "single origin",
    tags: ["single origin"],
    basePrice: 17,
    priceVaries: true,
    imageUrl: "/coffee/bean-bag-51a696.svg",
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
    variants: {
      create: [
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
      ],
    },
  },
  {
    name: "Ethiopia",
    slug: "ethiopia",
    description: "Single origin light roast, washed. Notes: berry, almond, lemon",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "coffee" as ProductType,
    primaryTag: "single origin",
    tags: ["single origin"],
    basePrice: 17,
    priceVaries: true,
    imageUrl: "/coffee/bean-bag-5369ce.svg",
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
    variants: {
      create: [
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
      ],
    },
  },
  {
    name: "Brazil",
    slug: "brazil",
    description: "Single origin medium roast, honey processed. Notes: dark chocolate, orange, almond",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "coffee" as ProductType,
    primaryTag: "single origin",
    tags: ["single origin"],
    basePrice: 17,
    priceVaries: true,
    imageUrl: "/coffee/bean-bag-d0d464.svg",
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
    variants: {
      create: [
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 19,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 36,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
        {
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
          price: 85,
        },
      ],
    },
  },
  {
    name: "Earl Grey Loose Tea",
    slug: "early-grey-loose-tea",
    description: "Rich black tea with creamy-sweet vanilla and a citrusy hint of bergamot",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "tea",
    primaryTag: "black tea",
    tags: ["black tea", "loose leaf"],
    basePrice: 9,
    priceVaries: true,
    imageUrl: "/tea/loose-leaf-614dac.svg",
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
    variants: {
      create: [
        {
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
          price: 9,
        },
        {
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
          price: 10,
        },
        {
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
          price: 18,
        },
        {
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
          price: 19,
        },
        {
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
          price: 34,
        },
        {
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
          price: 35,
        },
      ],
    },
  },
  {
    name: "Earl Grey Tea Bags",
    slug: "early-grey-tea-bags",
    description: "Rich black tea with creamy-sweet vanilla and a citrusy hint of bergamot",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "tea",
    primaryTag: "black tea",
    tags: ["black tea", "tea bags"],
    basePrice: 8,
    priceVaries: true,
    imageUrl: "/tea/tea-bag-586699.svg",
    color: "#586699",
    options: [
      {
        name: "Amount",
        values: ["20 Tea Bags", "50 Tea Bags", "100 Tea Bags"],
      },
    ],
    variants: {
      create: [
        {
          options: [
            {
              name: "Amount",
              value: "20 Tea Bags",
            },
          ],
          available: true,
          price: 8,
        },
        {
          options: [
            {
              name: "Amount",
              value: "50 Tea Bags",
            },
          ],
          available: true,
          price: 16,
        },
        {
          options: [
            {
              name: "Amount",
              value: "100 Tea Bags",
            },
          ],
          available: true,
          price: 29,
        },
      ],
    },
  },
  {
    name: "Assam Loose Tea",
    slug: "assam-loose-tea",
    description: "A classic, bold Assam with a rich, dark cup and full flavour.",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "tea",
    primaryTag: "black tea",
    tags: ["black tea", "loose leaf"],
    basePrice: 8.5,
    priceVaries: true,
    imageUrl: "/tea/loose-leaf-b97017.svg",
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
    variants: {
      create: [
        {
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
          price: 8.5,
        },
        {
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
          price: 9.5,
        },
        {
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
          price: 17,
        },
        {
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
          price: 18,
        },
        {
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
          price: 30,
        },
        {
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
          price: 32,
        },
      ],
    },
  },
  {
    name: "Assam Tea Bags",
    slug: "assam-tea-bags",
    description: "A classic, bold Assam with a rich, dark cup and full flavour.",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "tea",
    primaryTag: "black tea",
    tags: ["black tea", "tea bags"],
    basePrice: 7.5,
    priceVaries: true,
    imageUrl: "/tea/tea-bag-b97017.svg",
    color: "#b97017",
    options: [
      {
        name: "Amount",
        values: ["20 Tea Bags", "50 Tea Bags", "100 Tea Bags"],
      },
    ],
    variants: {
      create: [
        {
          options: [
            {
              name: "Amount",
              value: "20 Tea Bags",
            },
          ],
          available: true,
          price: 7.5,
        },
        {
          options: [
            {
              name: "Amount",
              value: "50 Tea Bags",
            },
          ],
          available: true,
          price: 15,
        },
        {
          options: [
            {
              name: "Amount",
              value: "100 Tea Bags",
            },
          ],
          available: true,
          price: 27.5,
        },
      ],
    },
  },
  {
    name: "Darjeeling Loose Tea",
    slug: "darjeeling-loose-tea",
    description: "A second flush black tea with a well developed flavour, sweet and smooth.",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "tea",
    primaryTag: "black tea",
    tags: ["black tea", "loose leaf"],
    basePrice: 10,
    priceVaries: true,
    imageUrl: "/tea/loose-leaf-770a22.svg",
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
    variants: {
      create: [
        {
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
          price: 10,
        },
        {
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
          price: 11,
        },
        {
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
          price: 20,
        },
        {
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
          price: 21,
        },
        {
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
          price: 40,
        },
        {
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
          price: 41,
        },
      ],
    },
  },
  {
    name: "Darjeeling Tea Bags",
    slug: "darjeeling-tea-bags",
    description: "A second flush black tea with a well developed flavour, sweet and smooth.",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "tea",
    primaryTag: "black tea",
    tags: ["black tea", "tea bags"],
    basePrice: 10,
    priceVaries: true,
    imageUrl: "/tea/tea-bag-770a22.svg",
    color: "#770a22",
    options: [
      {
        name: "Amount",
        values: ["20 Tea Bags", "50 Tea Bags", "100 Tea Bags"],
      },
    ],
    variants: {
      create: [
        {
          options: [
            {
              name: "Amount",
              value: "20 Tea Bags",
            },
          ],
          available: true,
          price: 10,
        },
        {
          options: [
            {
              name: "Amount",
              value: "50 Tea Bags",
            },
          ],
          available: true,
          price: 19,
        },
        {
          options: [
            {
              name: "Amount",
              value: "100 Tea Bags",
            },
          ],
          available: true,
          price: 37.5,
        },
      ],
    },
  },
  {
    name: "Ceremonial Organic Matcha",
    slug: "ceremonial-grade-matcha",
    description: "A green tea characterized by a rich aroma, mellow umami, and a vivid green color.",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "tea",
    primaryTag: "green tea",
    tags: ["green tea", "powder"],
    basePrice: 26,
    priceVaries: true,
    imageUrl: "/tea/loose-leaf-079d37.svg",
    color: "#079d37",
    options: [
      {
        name: "Amount",
        values: ["20g", "40g", "100g"],
      },
    ],
    variants: {
      create: [
        {
          options: [
            {
              name: "Amount",
              value: "20g",
            },
          ],
          available: true,
          price: 26,
        },
        {
          options: [
            {
              name: "Amount",
              value: "40g",
            },
          ],
          available: true,
          price: 49,
        },
        {
          options: [
            {
              name: "Amount",
              value: "100g",
            },
          ],
          available: true,
          price: 104,
        },
      ],
    },
  },
  {
    name: "Sencha Loose Leaf",
    slug: "sencha-loose-leaf",
    description:
      "A harmonious balance of umami, sweetness, bitterness, and astringency, with a bright fragrance like a sunny field. About 25 servings in this 100g size product",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "tea",
    primaryTag: "green tea",
    tags: ["green tea", "loose leaf"],
    basePrice: 25,
    priceVaries: false,
    imageUrl: "/tea/loose-leaf-01511b.svg",
    color: "#01511b",
    options: [],
  },
  {
    name: "Hario V60",
    slug: "hario-v60",
    description:
      "Cone-shape coffee dripper designed for accessibility, versatility, and most importantly, making good coffee",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "equipment",
    primaryTag: "brewer",
    tags: ["brewer"],
    basePrice: 42,
    priceVaries: true,
    imageUrl: "/equipment/v60.svg",
    color: "#d40077",
    options: [
      {
        name: "Material",
        values: ["Plastic", "Ceramic", "Glass"],
      },
    ],
    variants: {
      create: [
        {
          options: [
            {
              name: "Material",
              value: "Plastic",
            },
          ],
          available: true,
          price: 42,
        },
        {
          options: [
            {
              name: "Material",
              value: "Ceramic",
            },
          ],
          available: true,
          price: 48,
        },
        {
          options: [
            {
              name: "Material",
              value: "Glass",
            },
          ],
          available: true,
          price: 49,
        },
      ],
    },
  },
  {
    name: "V60 Filters",
    slug: "v60-filters",
    description: "For V60-style drip brewers",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "equipment",
    primaryTag: "filters",
    tags: ["filters"],
    basePrice: 14,
    priceVaries: true,
    imageUrl: "/equipment/v60-filters.svg",
    color: "#d40077",
    options: [
      {
        name: "Count",
        values: ["Set of 50", "Set of 100"],
      },
    ],
    variants: {
      create: [
        {
          options: [
            {
              name: "Count",
              value: "Set of 50",
            },
          ],
          available: true,
          price: 14,
        },
        {
          options: [
            {
              name: "Count",
              value: "Set of 100",
            },
          ],
          available: true,
          price: 26,
        },
      ],
    },
  },
  {
    name: "AeroPress Coffee Maker",
    slug: "aeropress",
    description:
      "An easy to use, very portable device that makes smooth, rich, grit-free coffee with a delicious, full-bodied finish that lingers well after your last sip.",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "equipment",
    primaryTag: "brewer",
    tags: ["brewer"],
    basePrice: 52,
    priceVaries: true,
    imageUrl: "/equipment/aeropress.svg",
    color: "#a50010",
    options: [
      {
        name: "Add-ons",
        values: ["Without tote bag", "With tote bag"],
      },
    ],
    variants: {
      create: [
        {
          options: [
            {
              name: "Add-ons",
              value: "Without tote bag",
            },
          ],
          available: true,
          price: 52,
        },
        {
          options: [
            {
              name: "Add-ons",
              value: "With tote bag",
            },
          ],
          available: true,
          price: 58,
        },
      ],
    },
  },
  {
    name: "AeroPress Paper Filters",
    slug: "aeropress-filters",
    description:
      "Cone-shape coffee dripper designed for accessibility, versatility, and most importantly, making good coffee",
    createdAt: "2022-12-11T05:00:00.000Z",
    updatedAt: "2022-12-11T05:00:00.000Z",
    type: "equipment",
    primaryTag: "filters",
    tags: ["filters"],
    basePrice: 42,
    priceVaries: true,
    imageUrl: "/equipment/aeropress-filters.svg",
    color: "#a50010",
    options: [
      {
        name: "Count",
        values: ["1 Pack (350 filters)", "2 Pack (700 filters)", "4 Pack (1400 filters)"],
      },
    ],
    variants: {
      create: [
        {
          options: [
            {
              name: "Count",
              value: "1 Pack (350 filters)",
            },
          ],
          available: true,
          price: 12,
        },
        {
          options: [
            {
              name: "Count",
              value: "2 Pack (700 filters)",
            },
          ],
          available: true,
          price: 20,
        },
        {
          options: [
            {
              name: "Count",
              value: "4 Pack (1400 filters)",
            },
          ],
          available: true,
          price: 29,
        },
      ],
    },
  },
];

const prisma = new PrismaClient();

async function main() {
  console.log(`seeding db`);
  for (const product of products) {
    const result = await prisma.product.create({
      data: product,
    });
    console.log(`created [${result.id}, ${result.name}]`);
  }
  console.log(`seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
