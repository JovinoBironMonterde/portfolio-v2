"use client";

import { Inter, Roboto } from "next/font/google";
import "./assets/css/globals.css";
import { Box } from "@mui/material";
import LayoutContainer from './components/LayoutContainer';
import SideBar from "./components/SideBar";
import AppBar from "./components/AppBar";
import RevealAnimation from "./components/RevealAnimation";
import MiniDrawer from "./components/MiniDrawer";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import CircularProgress from '@mui/material/CircularProgress';

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    // Simulate loading time for demo purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={roboto.className}>
        <Box sx={{ display: { xl: 'none', md: 'block', xs: 'block' } }}>
          <MiniDrawer />
        </Box>
        <Box
          sx={{
            maxWidth: '100vw',
            height: '100vh',
            bgcolor: '#2a517a85',
            display: 'flex',
            alignItems: 'center',
            p: 3,
          }}
        >
          <Box
            sx={{
              width: '450px',
              height: '80%',
              bgcolor: '#f4f4f4',
              borderRadius: 5,
              overflow: "hidden",
              display: { xl: 'block', md: 'none', xs: 'none' },
            }}
          >
            <SideBar />
          </Box>
          <Box
            className="parent"
            sx={{
              width: '100%',
              height: '100%',
              bgcolor: '#f2f2f2',
              borderRadius: 5,
              ml: { xl: 4, md: 0 },
              overflowY: 'scroll',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <RevealAnimation />
            <Box sx={{ position: "sticky", top: 0, bgcolor: '#087ea2', zIndex: 9999 }}>
              <AppBar />
            </Box>
            <Box sx={{ p: 0 }}>
              {loading ? (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh',
                  }}
                >
                  <CircularProgress disableShrink />
                </Box>
              ) : (
                children
              )}
            </Box>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}></Box>
      </body>
    </html>
  );
}
