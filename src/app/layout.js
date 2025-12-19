import "./globals.css";

export const metadata = {
  title: "Corbã Missions - Ide por Todo Mundo",
  description: "Somos uma sociedade e instituição cristã missionária, comprometida em capacitar e equipar novos ministros do evangelho, levando o amor de Cristo ao mundo.",
  keywords: ["missões", "evangelho", "cristão", "missionário", "Brasil", "Austrália", "Corbã"],
  authors: [{ name: "Corbã Missions" }],
  openGraph: {
    title: "Corbã Missions - Ide por Todo Mundo",
    description: "Levando a mensagem de Cristo ao mundo através de missões evangelísticas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Corbã Missions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corbã Missions - Ide por Todo Mundo",
    description: "Levando a mensagem de Cristo ao mundo através de missões evangelísticas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
