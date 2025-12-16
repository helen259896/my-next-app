'use client'

import React, { useState } from "react";

export function NavSearch({children}: {children: React.ReactNode}) {
    console.log('NavSearch');
    const [search, setSearch] = useState('');
  // console.log('About this component');
  return (
    <div>
      input of Search page
      {children}
      {/* <input >search</input> */}
    </div>
  )
}