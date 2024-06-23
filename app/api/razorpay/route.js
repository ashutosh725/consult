// pages/api/razorpay.js

import Razorpay from "razorpay";
import shortid from "shortid";
import { NextResponse } from 'next/server';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_KEY,
});

export async function POST(req) {
  try {
    const { productId, name, mobile, email, address, price } = await req.json();
    console.log("Received form data:", { productId, name, mobile, email, address, price });

    const payment_capture = 1;
    const amount = price * 100; // Convert price to paisa
    const currency = "INR";

    const options = {
      amount: amount.toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
      notes: {
        paymentFor: productId,
        userId: "user_id_here",
        productId: 'your_product_id',
      },
    };

    const response = await razorpay.orders.create(options);
    console.log("Razorpay order created:", response);

    return NextResponse.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
      name,
      email,
      amountDesc: `Payment for ${productId}`,
    });
  } catch (error) {
    console.error("Error during payment initialization:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
