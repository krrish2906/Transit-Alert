import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";

export async function POST(req: Request) {
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        throw new Error("WebHook Secret not defined");
    }

    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response("Error occured --- No Svix headers");
    }

    const payload = await req.json();
    const body = JSON.stringify(payload);

    const webhook = new Webhook(WEBHOOK_SECRET);
    let evt: WebhookEvent;

    try {
        evt = webhook.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature
        }) as WebhookEvent;
    } catch (error) {
        console.log(error);
        return new Response("Error occured", { status: 400 });
    }

    const eventType = evt.type;

    if (eventType === "user.created") {
        try {
            const { id, email_addresses, first_name, last_name, primary_email_address_id, image_url } = evt.data;
            const primaryEmail = email_addresses.find((email) => (
                email.id === primary_email_address_id
            ));

            if (!primaryEmail) {
                return new Response("No Primary Email address found", { status: 400 });
            }

            const newUser = await prisma.user.create({
                data: {
                    id,
                    name: first_name + " " + last_name,
                    profilePic: image_url,
                    email: primaryEmail.email_address,
                    role: "USER"
                }
            });

            return Response.json({
                data: newUser,
                success: true,
                message: "User created successfully",
                error: null
            }, { status: 200 });
        } catch (error) {
            return Response.json({
                data: null,
                success: false,
                message: "Failed to create a new user",
                error
            }, { status: 500 });
        }
    }

    return Response.json({
        data: null,
        success: true,
        message: "Event type not handled",
        error: null
    }, { status: 204 });
}