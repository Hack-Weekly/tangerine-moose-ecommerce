import { loadStripe, type Stripe } from "@stripe/stripe-js";

let stripe: Stripe | null;
const getStripe = async () => {
  if (!stripe) {
    stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");
  }
  return stripe;
};

export default getStripe;
