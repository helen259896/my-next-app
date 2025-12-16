// 'use client'
// import { cookies } from "next/headers";
// import {useTheme} from '@/app/components/theme-provider';

export default function AboutPage() {
  // const cookieStore = cookies();
  // const theme = useTheme();
  // const theme = cookieStore;
  // console.log('About this server component', theme);
  return (
    // <div style={{color: theme.colors.primary}}>
    <div>
      About Page {new Date().toLocaleTimeString()}
    </div>
  )
}