import { type NextApiRequest, type NextApiResponse } from "next";
import Stripe from "stripe";

import { type CartItem } from "~/types/cart";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", { apiVersion: "2022-11-15" });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const cartItems = req.body as CartItem[];

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: cartItems.map((product: CartItem) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: product.name,
                description: product.variant?.options.map((option) => option.value).join(" / "),
                images: [`${process.env.NEXT_PUBLIC_APP_URL || ""}${product.image_url}`],
              },
              unit_amount: product.price * 100,
            },
            quantity: product.quantity,
          };
        }),
        mode: "payment",
        success_url: `${req.headers.origin || ""}/?success=true`,
        cancel_url: `${req.headers.origin || ""}/?canceled=true`,
      });
      res.status(200).json({ id: session.id });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
