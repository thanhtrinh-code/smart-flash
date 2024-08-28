import Stripe from "stripe";
import { NextResponse } from "next/server";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const formatAmountForStripe = (amount) => {
    return Math.round(amount * 100);
}
export async function POST(req) {
    const origin = req.headers.get('origin');

    const params = {
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Pro Subscription'
                    },
                    unit_amount: formatAmountForStripe(10),
                    recurring: {
                        interval: 'month',
                        interval_count: 1
                    }
                },
                quantity: 1 // Add quantity here
            }
        ],
        success_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    };


    try {
        const checkoutSession = await stripe.checkout.sessions.create(params);
        return NextResponse.json(checkoutSession, { status: 200 });
    } catch (error) {
        console.error('Stripe error:', error.message);
        return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
    }
}