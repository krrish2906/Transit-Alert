import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";

// Get specific Alert by ID:-
export async function GET(req: NextRequest, { params }: { params: { alertId: string } }) {
    try {
        const { alertId } = params;
        const alert = await prisma.alert.findUnique({
            where: { id: alertId }
        });

        if (!alert) {
            return NextResponse.json({
                data: null,
                success: false,
                message: "Alert not found",
                error: "Not Found"
            }, { status: 404 });
        }

        return NextResponse.json({
            data: alert,
            success: true,
            message: "Alert retrieved successfully",
            error: null
        }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            data: null,
            success: false,
            message: "Failed to retrieve alert",
            error: error
        }, { status: 500 });
    }
}

// Delete Alert:-
export async function DELETE(req: NextRequest, { params }: { params: { alertId: string } }) {
    try {
        const { alertId } = params;
        const { userId } = getAuth(req);

        const user = await prisma.user.findUnique({
            where: { id: userId! }
        });

        // Check if user exists and user.role === "ADMIN"
        if (!userId || !user || user.role !== "ADMIN") {
            return NextResponse.json({
                data: null,
                success: false,
                message: "Unauthorized Access",
                error: "Unauthorized"
            }, { status: 401 });
        }

        // Check if alert exists and if the alert was created by the user
        const alert = await prisma.alert.findUnique({
            where: { id: alertId }
        });

        if (!alert) {
            return NextResponse.json({
                data: null,
                success: false,
                message: "Alert not found",
                error: "Not Found"
            }, { status: 404 });
        }
        
        if (alert.userId !== userId) {
            return NextResponse.json({
                data: null,
                success: false,
                message: "Unauthorized to delete this alert",
                error: "Unauthorized"
            }, { status: 403 });
        }

        const deletedAlert = await prisma.alert.delete({
            where: { id: alertId }
        });

        return NextResponse.json({
            data: deletedAlert,
            success: true,
            message: "Alert deleted successfully",
            error: null
        }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            data: null,
            success: false,
            message: "Failed to delete alert",
            error: error
        }, { status: 500 });
    }
}

// Update Alert:-
export async function PUT(req: NextRequest, { params }: { params: { alertId: string } }) {
    try {
        const { alertId } = params;
        const { userId } = getAuth(req);
        const { title, message, type, severity, location } = await req.json();

        const user = await prisma.user.findUnique({
            where: { id: userId! }
        });

        // Check if user exists and user.role === "ADMIN"
        if (!userId || !user || user.role !== "ADMIN") {
            return NextResponse.json({
                data: null,
                success: false,
                message: "Unauthorized Access",
                error: "Unauthorized"
            }, { status: 401 });
        }

        // Check if alert exists
        const alert = await prisma.alert.findUnique({
            where: { id: alertId }
        });

        if (!alert) {
            return NextResponse.json({
                data: null,
                success: false,
                message: "Alert not found",
                error: "Not Found"
            }, { status: 404 });
        }

        // Check if all required fields are present or not
        if (!title || !message || !type || !severity || !location) {
            return NextResponse.json({
                data: null,
                success: false,
                message: "Failed to update alert",
                error: "Required fields were missing"
            }, { status: 400 });
        }

        // Check if the alert was created by the user
        if (alert.userId !== userId) {
            return NextResponse.json({
                data: null,
                success: false,
                message: "Unauthorized to update this alert",
                error: "Unauthorized"
            }, { status: 403 });
        }

        // Update the alert
        const updatedAlert = await prisma.alert.update({
            where: { id: alertId },
            data: { title, message, type, severity, location }
        });

        return NextResponse.json({
            data: updatedAlert,
            success: true,
            message: "Alert updated successfully",
            error: null
        }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            data: null,
            success: false,
            message: "Failed to update alert",
            error: error
        }, { status: 500 });
    }
}