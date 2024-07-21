
import AdminTaskbar from "@/components/AdminTaskbar";

import { ThemeProvider } from "@/components/theme-provider"





export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body > <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <div className="flex flex-row h-screen w-screen ">
                    <div className="w-1/5">
                        <AdminTaskbar />
                    </div>
                    <div className="w-4/5">
                        {children}
                    </div>



                </div>

            </ThemeProvider></body>
        </html>
    );
}
