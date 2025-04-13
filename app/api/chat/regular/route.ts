import { NextRequest, NextResponse } from "next/server";
import { verifyRequest, handleAuthError } from "@/firebase/server";

export async function POST(req: NextRequest) {
  // 1. Authentication check
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { error: "Unauthorized", message: "Authorization token required" },
      { status: 401 }
    );
  }

  const authToken = authHeader.slice(7);

  try {
    await verifyRequest(authToken);
  } catch (error) {
    const authError = handleAuthError(
      error as { code: string; message: string }
    );
    return NextResponse.json(
      { code: authError.code, message: authError.message },
      { status: authError.status }
    );
  }

  // 2. Request body validation
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json(
      { error: "BAD_REQUEST", message: "Invalid request body" },
      { status: 400 }
    );
  }

  // 3. Fetch from Cloudflare Worker (now with streaming)
  try {
    const aiServerResponse = await fetch(
      `${process.env.REGULAR_AI_SERVER_URL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    // 4. Create and return a streaming response
    return new Response(aiServerResponse.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "AI_SERVER_ERROR", message: error.message },
        { status: 500 }
      );
    }
  }
}

export const runtime = "edge"; // 'nodejs' | 'edge'
