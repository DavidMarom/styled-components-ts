'use client';
import { useState } from 'react';
import { Card } from '@/app/components';

export default function Home() {
  const [padding, setPadding] = useState(30);

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={padding}
        onChange={(e) => setPadding(parseInt(e.target.value))}
      />
      
      <Card
        $primary={true}
        $padding={`${padding}px`}
      >
        Primary Card
      </Card>
    </div>
  );
}
