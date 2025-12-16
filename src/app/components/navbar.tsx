import {NavLinks} from './nav-links';
import {NavSearch} from './nav-search';

export function Navbar() {
  console.log('Navbar');
  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  )
}