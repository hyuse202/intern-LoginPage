
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { username, password } = await request.json();

  // Dummy check - replace this with your authentication logic
  if (username === 'admin' && password === 'admin123') {
    return NextResponse.json({ message: 'Authentication successful' }, { status: 200 });
  }

  // Return an error message for incorrect credentials
  return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
}
