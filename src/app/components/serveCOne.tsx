import fs from 'fs';

import { ServeCTwo } from './serveCTwo';
import { ClientCOne } from './clientCOne';

export function ServeCOne() {
  fs.readFileSync('src/app/components/serveCOne.tsx', 'utf-8');
    // console.log('NavLinks');
  // console.log('About this component');
  return (
    <div>
      <h1>ServeCOne</h1>
      {/* <ServeCTwo /> */}
      {/* <ClientCOne /> */}
    </div>
  )
}