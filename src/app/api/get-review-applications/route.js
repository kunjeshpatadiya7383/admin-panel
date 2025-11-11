
import clientPromise from "../../lib/mongodb";


export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const aishe = searchParams.get("aisheCode");
    try {

        const client = await clientPromise;
        const db = client.db("MUSoftware");
        const users = await db.collection("Aadhar-submitted").find({ aisheCode: aishe }).toArray();
        return Response.json({ success: true, data: users });
    } catch (error) {
        return Response.json({ success: false, error: error.message });

    }
}