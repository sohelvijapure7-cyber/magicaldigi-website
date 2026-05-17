export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Form Data:", body);

    return Response.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
}