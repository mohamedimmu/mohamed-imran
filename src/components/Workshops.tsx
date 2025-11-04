"use client";

import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { PlayCircle, Users, Zap, TrendingUp } from "lucide-react";

/**
 * Provide file paths from /public/workshop (example):
 * [ "1.JPG", "2.jpg", "3.jpg", ..., "8.mp4" ]
 */
const galleryFiles = [
  "/images/workshop/1.JPG",
  "/images/workshop/2.jpg",
  "/images/workshop/3.jpg",
  "/images/workshop/4.jpg",
  "/images/workshop/5.jpg",
  "/images/workshop/6.JPG",
  "/images/workshop/7.JPG",
  "/images/workshop/8.mp4", // video file
];

// Utility: check if file is video
const isVideo = (src: string) => {
  return /\.(mp4|webm|ogg)$/i.test(src);
};

export default function Workshops() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
        <h2 className="text-4xl font-bold mb-2"> Workshop</h2>
        <p className="text-lg text-secondary-foreground">
          Trained{" "}
          <strong className="text-foreground">300+ business owners</strong> on
          leveraging digital tools, automation, and marketing strategies to
          streamline operations and scale their businesses.{" "}
        </p>
      </div>

      <div className="p-8 rounded-lg ">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-lg border-2 shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Digital Transformation</h3>
            <p className="text-sm text-muted-foreground">
              Helping businesses adopt modern tools and workflows
            </p>
          </div>
          <div className="text-center p-6 rounded-lg border-2 shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Automation</h3>
            <p className="text-sm text-muted-foreground">
              Streamlining operations through smart automation
            </p>
          </div>
          <div className="text-center p-6 rounded-lg border-2 shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Growth Strategies</h3>
            <p className="text-sm text-muted-foreground">
              Implementing data-driven marketing and scaling tactics
            </p>
          </div>
        </div>
      </div>

      <PhotoProvider>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {galleryFiles.map((file, idx) => {
            const video = isVideo(file);

            return (
              <div
                key={file}
                className="break-inside-avoid overflow-hidden rounded-lg shadow-lg"
              >
                <PhotoView
                  src={file}
                  render={
                    video
                      ? ({ scale, rotate }) => (
                          <video
                            src={file}
                            controls
                            autoPlay
                            muted
                            className="w-full h-full object-contain"
                            style={{
                              transform: `scale(${scale}) rotate(${rotate}deg)`,
                            }}
                          />
                        )
                      : undefined
                  }
                >
                  <button
                    className="relative block w-full cursor-pointer focus:outline-none group"
                    aria-label={`View workshop highlight ${idx + 1}`}
                  >
                    <Image
                      unoptimized
                      src={video ? "/images/workshop/1.JPG" : file}
                      alt={`Workshop highlight ${idx + 1}${
                        video ? " (video)" : ""
                      }`}
                      width={1000}
                      height={700}
                      className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    {video && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 group-hover:bg-black/50">
                        <PlayCircle className="h-16 w-16 text-white/80 transform transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    )}
                  </button>
                </PhotoView>
              </div>
            );
          })}
        </div>
      </PhotoProvider>
    </section>
  );
}