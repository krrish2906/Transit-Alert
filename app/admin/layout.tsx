import Sidebar from "@/components/Sidebar";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <main className='h-[calc(100vh-4rem)] w-full bg-white text-black'>
                    <Sidebar />
                    {children}
                </main>
            </body>
        </html>
    );
};
