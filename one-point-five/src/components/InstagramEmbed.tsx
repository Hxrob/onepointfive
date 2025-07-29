'use client';
import { useEffect } from 'react';

// Define Instagram embed API interface
interface InstagramEmbedAPI {
  Embeds: {
    process: () => void;
  };
}

// Extend Window interface
declare global {
  interface Window {
    instgrm?: InstagramEmbedAPI;
  }
}

type Props = { url: string };

export default function InstagramEmbed({ url }: Props) {
  useEffect(() => {
    // Once the script is loaded, re-process embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <blockquote
      className="instagram-media mx-auto"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ margin: '1rem 0', maxWidth: '540px' }}
    >
    </blockquote>
  );
}