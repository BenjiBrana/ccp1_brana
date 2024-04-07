'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FilAriane() {
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    const path = window.location.pathname
      .split('/')
      .filter((crumb) => crumb !== '');
    path.unshift('/');
    setSegments(path);
  }, []);

  return (
    <div className="flex flex-row mt-6 ml-6">
      {segments.map((pathSegment, index) => (
        <div className="flex flex-row" id="filAriane" key={index}>
          <span>
            {pathSegment === '/' ? (
              <Link href="/" key={pathSegment}>
                <Image
                  className="rounded-full h-6 w-6"
                  src="/logo/home.svg"
                  alt="Logo home"
                  title="Logo retour accueil"
                  width={24}
                  height={24}
                />
              </Link>
            ) : (
              <Link href={`/${pathSegment}`} key={pathSegment}>
                {pathSegment}
              </Link>
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
