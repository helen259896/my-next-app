
'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@/app/components/theme-provider";
import { clientSideFunction } from "@/app/utils/client-utils";


export default function ClientRoutePage() {
  const theme = useTheme();
  const settings = { dots: true};
  const result = clientSideFunction();
  return (
    <h1 style={{color: theme.colors.primary}}>
      Client Route 
      <div>{result}</div>
    </h1>
  )
}