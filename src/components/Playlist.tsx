import React from "react";

export default function Playlist() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 py-12 relative">
      <div>
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <h2 className="text-4xl font-bold mb-2">My Playlist</h2>
          <p className="text-lg text-secondary-foreground">
            Design. Code. Music. Repeat. 🎶
          </p>
        </div>
      </div>
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/7nOBu37PL0EWK92Jh0yYX9?utm_source=generator"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </section>
  );
}
