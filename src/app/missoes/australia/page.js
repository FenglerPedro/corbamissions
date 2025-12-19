import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, GraduationCap } from "lucide-react";
import WavingFlag from "@/components/WavingFlag";

export const metadata = {
    title: "Missão Austrália - Corbã Missions",
    description: "Damos continuidade ao Ide na Austrália. Desde 2023 em Sydney, espalhando a luz de Cristo através de cultos e ações comunitárias.",
};

export default function AustraliaMission() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <div className="pt-20">
                {/* Hero for Australia Mission */}
                <section className="relative py-24 bg-gradient-section overflow-hidden">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6 order-2 lg:order-1">
                                <div className="flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full w-fit">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm font-medium">Austrália</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight">
                                    Missão Austrália: <span className="text-gradient">Além das Fronteiras</span>
                                </h1>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                                    De Porto Alegre a Sydney, nossa visão é global. Levamos a mensagem de Cristo para novas culturas,
                                    adaptando a metodologia sem perder a essência do Evangelho.
                                </p>
                                <div className="flex gap-4">
                                    <Button size="lg" className="rounded-full">
                                        Saiba Mais
                                    </Button>
                                </div>
                            </div>
                            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-start">
                                <WavingFlag
                                    src="/flag-australia.png"
                                    alt="Bandeira da Austrália"
                                    className="w-full max-w-[600px] aspect-[1.5]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Content */}
                <section className="py-20">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-2 gap-16">
                            <div className="space-y-8">
                                <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:shadow-card transition-shadow shadow-sm">
                                    <div className="p-3 bg-primary/10 rounded-xl">
                                        <Globe className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-heading font-medium mb-2">Cultos Domiciliares</h4>
                                        <p className="text-muted-foreground">Reunimos pequenos grupos para estudo bíblico e comunhão, fortalecendo laços e criando uma comunidade de fé acolhedora em terra estrangeira.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:shadow-card transition-shadow shadow-sm">
                                    <div className="p-3 bg-primary/10 rounded-xl">
                                        <GraduationCap className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-heading font-medium mb-2">Treinamento Multicultural</h4>
                                        <p className="text-muted-foreground">Capacitamos missionários para lidar com as diferenças culturais e linguísticas, preparando-os para um ministério eficaz na Austrália.</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl font-heading font-medium mb-6">Nossa Jornada em Sydney</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Desde 2023, temos trabalhado incansavelmente para espalhar a luz de Cristo na Austrália. Através de cultos domiciliares,
                                    reuniões comunitárias e ações de auxílio, compartilhamos esperança em meio às adversidades.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Em solo estrangeiro, somos uma ponte para o amor de Deus, demonstrando Sua graça e compaixão a todos os que encontramos.
                                    Juntos, deixamos um impacto duradouro, lembrando ao mundo que o amor de Cristo conhece fronteiras apenas para atravessá-las.
                                </p>

                                <div className="mt-8 p-6 bg-secondary/50 rounded-2xl border border-secondary">
                                    <blockquote className="italic text-lg text-foreground mb-4">
                                        "Pregar o evangelho na Austrália tem sido um desafio abençoador. Ver vidas transformadas em uma cultura tão diversa é a prova viva do poder de Deus."
                                    </blockquote>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">F</div>
                                        <div>
                                            <p className="font-medium text-sm">Pr. Felipe Silva</p>
                                            <p className="text-xs text-muted-foreground">Líder da Missão Austrália</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
