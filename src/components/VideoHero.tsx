import { useRef, useEffect, useState } from "react";


export const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed; handle if needed
      });
    }
  }, []);

  const scrollToCategories = () => {
    document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-0" : "opacity-100"
        }`}
      ></div>

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadedData={() => setIsVideoLoaded(true)}
        onCanPlay={() => setIsVideoLoaded(true)}
      >
        <source src="/videos/thenosh.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white animate-slide-up">
          The Nosh
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Experience culinary excellence with our carefully crafted dishes,
          made from the finest ingredients and delivered with passion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToCategories}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-3 text-lg transition-all duration-300 hover:scale-105 animate-slide-up hover-lift"
            style={{ animationDelay: "0.4s" }}
          >
            Explore Our Menu
          </Button>
          <Button
            onClick={() => (window.location.href = "/catering")}
            size="lg"
            variant="outline"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-3 text-lg transition-all duration-300 hover:scale-105 animate-slide-up hover-lift"
            style={{ animationDelay: "0.4s" }}
          >
            Catering Services
          </Button>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";