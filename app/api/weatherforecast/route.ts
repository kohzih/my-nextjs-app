import { NextResponse } from 'next/server';

const summaries = [
  'Freezing', 'Bracing', 'Chilly', 'Cool', 'Mild',
  'Warm', 'Balmy', 'Hot', 'Sweltering', 'Scorching',
];

export async function GET() {
  const now = new Date();
  const data = [...Array(5)].map((_, i) => {
    const date = new Date(now);
    date.setDate(now.getDate() + i + 1);
    const temperatureC = Math.floor(Math.random() * 75) - 20;

    return {
      date: date.toISOString().slice(0, 10),
      temperatureC,
      temperatureF: 32 + Math.floor((temperatureC * 9) / 5),
      summary: summaries[Math.floor(Math.random() * summaries.length)],
    };
  });

  return NextResponse.json(data);
}
