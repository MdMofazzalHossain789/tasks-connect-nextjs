import { createUser } from "@/actions/user.action";
import { clerkClient } from "@clerk/nextjs/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const eventType = evt.type;

    if (eventType === "user.created") {
      const {
        id,
        username,
        first_name,
        last_name,
        email_addresses,
        image_url,
      } = evt.data;

      const user = {
        clerkId: id,
        username,
        firstname: first_name,
        lastname: last_name,
        email: email_addresses[0].email_address || "",
        imageUrl: image_url,
      };

      const newUser = createUser(user);

      if (newUser) {
        const client = await clerkClient();

        await client.users?.updateUserMetadata(id, {
          publicMetadata: {
            userId: newUser._id,
          },
        });

        return NextResponse.json({
          message: "User created successfully",
          user: newUser,
        });
      }
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
