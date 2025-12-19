import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Heart, Users, Calendar } from "lucide-react";
import WavingFlag from "@/components/ui/waving-flag";
import brasilFlag from "@/assets/flag-brasil.png";

const Brazil = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="pt-20">
                {/* Hero for Brazil Mission */}
                <section className="relative py-24 bg-gradient-section overflow-hidden">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full w-fit">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm font-medium">Brasil</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight">
                                    Missão Brasil: <span className="text-gradient">Espalhando Luz</span>
                                </h1>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                                    Do Brasil para o mundo, nossa missão é clara: espalhar o amor de Cristo onde quer que vamos.
                                    Unidos em um propósito, compartilhamos esperança.
                                </p>
                                <div className="flex gap-4">
                                    <Button size="lg" className="rounded-full">
                                        Quero Ser Voluntário
                                    </Button>
                                </div>
                            </div>
                            <div className="relative flex justify-center lg:justify-end">
                                <WavingFlag
                                    src={brasilFlag}
                                    alt="Bandeira do Brasil"
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
                            <div>
                                <h3 className="text-3xl font-heading font-medium mb-6">Nossa História no Brasil</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Desde sua fundação na cidade de Porto Alegre em 2013, Corbã Unidos pelo Evangelho tem sido uma
                                    força vibrante na obra de Deus no Brasil. Ao longo dos anos, sua jornada tem sido marcada pelo
                                    serviço amoroso, proporcionando auxílio em forma de alimentos e mantimentos aos lares necessitados.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Nossos projetos incluem distribuição de cestas básicas, roupas, e material escolar, além de
                                    apoio espiritual e psicológico para famílias em situação de vulnerabilidade. Acreditamos que o evangelho
                                    deve ser demonstrado em ações práticas de amor e cuidado.
                                </p>


                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:shadow-card transition-shadow">
                                    <div className="p-3 bg-primary/10 rounded-xl">
                                        <Heart className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-heading font-medium mb-2">Ação Social Integrada</h4>
                                        <p className="text-muted-foreground">Atuamos diretamente nas comunidades carentes, levando não apenas a palavra, mas o pão que alimenta o corpo e a dignidade.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:shadow-card transition-shadow">
                                    <div className="p-3 bg-primary/10 rounded-xl">
                                        <Users className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-heading font-medium mb-2">Discipulado e Mentoria</h4>
                                        <p className="text-muted-foreground">Formamos novos líderes através de cursos e acompanhamento pessoal, fortalecendo a igreja local e preparando a próxima geração.</p>
                                    </div>
                                </div>

                                <div className="bg-muted p-8 rounded-3xl text-center">
                                    <h4 className="text-2xl font-heading mb-4">Faça Parte Disso</h4>
                                    <p className="text-muted-foreground mb-6">
                                        Sua contribuição muda vidas. Junte-se a nós nesta missão de amor.
                                    </p>
                                    <Button className="w-full" variant="hero">Doar Agora</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};
export default Brazil;
