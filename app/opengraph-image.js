import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #fcf8f7 0%, #f7e8eb 100%)',
          padding: 64,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 28, color: '#b48a45', letterSpacing: 3, textTransform: 'uppercase' }}>Conditor Paper</div>
        <div style={{ fontSize: 58, fontWeight: 700, color: '#2f2a2a', marginTop: 12 }}>Essbares Zuckerpapier für elegante Kuchen</div>
        <div style={{ fontSize: 28, color: '#6f6767', marginTop: 20 }}>Moderne Designs, hochwertige Qualität, schnelle Lieferung.</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
