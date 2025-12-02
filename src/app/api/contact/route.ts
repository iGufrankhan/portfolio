import { NextRequest } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) { {
   try {
    
    const data: ContactFormData = await request.json();

    const { name, email, message } = data;

    if(!name || !email || !message) {
      return new Response('Bad Request: Missing fields', { status: 400 });
    }
    // Here you can handle the form data, e.g., send an email or store it in a database.

    return new Response('Message sent successfully', { status: 200 });


   } catch (error) {

    return new Response('Internal Server Error', { status: 500 });
  }

       
   }

}