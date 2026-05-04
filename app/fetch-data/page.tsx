import type { Metadata } from 'next';

type Forecast = {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
};

export const metadata: Metadata = {
  title: 'Weather forecast',
};

async function getForecasts(): Promise<Forecast[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}/api/weatherforecast`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }

  return res.json();
}

export default async function FetchDataPage() {
  const forecasts = await getForecasts();

  return (
    <>
      <h1>Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((f) => (
            <tr key={f.date}>
              <td>{f.date}</td>
              <td>{f.temperatureC}</td>
              <td>{f.temperatureF}</td>
              <td>{f.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
