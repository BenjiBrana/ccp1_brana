'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FilAriane() {
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    const path = window.location.pathname.split('/');
    path[0] = '/';
    setSegments(path);
  }, []);

  return (
    <div className="flex flex-row mt-6 ml-6">
      {segments.map((path, index) => (
        <div className="flex flex-row" id="filAriane" key={index}>
          <span>
            {path === '/' ? (
              <Link href="/">
                <Image
                  className="rounded-full tablette:w-1/2 mobile:w-1/3"
                  src="/logo/home.svg"
                  alt="Logo home"
                  title="Logo retour accueil"
                  width={25}
                  height={25}
                />
              </Link>
            ) : (
              <Link href={`/${path}`}>{path}</Link>
            )}
          </span>
          {index !== segments.length - 1 && (
            <span className="mx-2">/</span>
          )}
        </div>
      ))}
    </div>
  );
}
