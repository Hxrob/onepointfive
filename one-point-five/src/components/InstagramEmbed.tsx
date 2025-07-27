'use client';
import { useEffect } from 'react';

type Props = { url: string };

export default function InstagramEmbed({ url }: Props) {
  useEffect(() => {
    // Once the script is loaded, re-process embeds
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
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