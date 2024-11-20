'use client';

import { Card } from '@/app/components';

export default function Home() {
  return (
    <div>
      <Card
        $primary={false}
        $padding='30px'
      >
        Primary Card
      </Card>
    </div>
  );
}
