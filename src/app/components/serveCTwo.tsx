import fs from 'fs';

export function ServeCTwo() {
  fs.readFileSync('src/app/components/serveCTwo.tsx', 'utf-8');
    // console.log('NavLinks');
  // console.log('About this component');
  return (
    <h1>
      ServeCTwo
    </h1>
  )
}