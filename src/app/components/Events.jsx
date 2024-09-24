import React from 'react';
import Image from 'next/image'; // Importa el componente Image de Next.js para optimizar imágenes
import Link from 'next/link';   // Importa Link de Next.js para la navegación entre páginas

export default function Events() {
  return (
    <section id="restaurant" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-yellow-700/30 to-yellow-100/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Gorostiaga te espera
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
            "Descubre la tranquilidad que solo el campo puede ofrecer, donde el tiempo parece detenerse y cada momento se saborea al máximo."
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Ver Menú
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Reservar Mesa
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/goros3.jpg"
                width={550}
                height={310}
                alt="Restaurant Dish"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "550/310", objectFit: "cover" }}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/goros5.jpg"
                  width={260}
                  height={260}
                  alt="Restaurant Dish"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "260/260", objectFit: "cover" }}
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/goros1.jpg"
                  width={260}
                  height={260}
                  alt="Restaurant Dish"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "260/260", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
