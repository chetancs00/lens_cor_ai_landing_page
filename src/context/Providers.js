'use client';

import { ThemeProvider } from "./ThemeContext"

export function Provider ({children}) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}