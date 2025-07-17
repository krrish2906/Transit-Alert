import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
    try {
        const { userId } = getAuth(req);
        const body = await req.json();
        const { title, message, type, severity, location } = body;

        const user = await prisma.user.findUnique({
            where: { id: userId! }
        });

        // Additionally check if user exists and user.role === "ADMIN"
        if(!userId || !user || user.role != "ADMIN") {
            return NextResponse.json({
                data: null,
                success: false,
                message: "Unauthorized Access",
                error: "Unauthorized"
            }, { status: 401 });
        }

        // Check if all required fields are present or not
        if(!title || !message || !type || !severity || !location) {
            return NextResponse.json({
                data: null,
                success: false,
                message: "Failed to create new alert",
                error: "Required fields were missing"
            }, { status: 400 });
        }

        // Finally create the newAlert and return the response
        const newAlert = await prisma.alert.create({
            data: { title, message, type, severity, location, userId }
        });

        return NextResponse.json({
            data: newAlert,
            success: true,
            message: "Alert created successfully",
            error: null
        }, { status: 201 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            data: null,
            success: false,
            message: "Failed to create new alert",
            error: error
        }, { status: 500 });
    }
};

// Get All Alerts
export async function GET() {
    try {
        const alerts = await prisma.alert.findMany();
        return NextResponse.json({
            data: alerts,
            success: true,
            message: "Successfully fetched all the alerts",
            error: null
        }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            data: null,
            success: false,
            message: "Failed to fetch the alerts",
            error: error
        }, { status: 500 });
    }
}