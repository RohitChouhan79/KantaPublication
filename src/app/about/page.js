import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-orange-400 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center font-serif text-4xl text-black md:text-5xl lg:text-6xl">About Us</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">Kanta Publication</h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
              <p className="text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
              <p className="text-gray-600">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Team</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 h-64 w-64 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/placeholder.svg?height=256&width=256"
                  alt="Director"
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Director</h3>
              <p className="mt-2 text-gray-600">Ishita Pateriya</p>
              <p className="mt-1 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 h-64 w-64 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/placeholder.svg?height=256&width=256"
                  alt="Chief Executive Officer"
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Chief Executive Officer</h3>
              <p className="mt-2 text-gray-600">Shreya Pateriya</p>
              <p className="mt-1 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
