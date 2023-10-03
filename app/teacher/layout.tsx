import type { Metadata } from "next";
import TeacherNavBar from "../components/Layout/TeacherNavBar";

export const metadata: Metadata = {
    title: "Teacher Dashboard",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <TeacherNavBar />
                {children}
            </body>
        </html>
    );
}