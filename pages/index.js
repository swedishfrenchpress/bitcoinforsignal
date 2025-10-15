import Head from "next/head";
import {
  BitcoinCircleIcon,
  MenuIcon
} from "@bitcoin-design/bitcoin-icons-react/filled";
import { BitcoinCircleIcon as BitcoinCircleIconOutline } from "@bitcoin-design/bitcoin-icons-react/outline";
import React from "react";
import { TextScramble } from '../components/core/text-scramble';
import { InlineMath } from 'react-katex';

function toggleMenu() {
  let header = document.getElementById('header-container');
  if(header.classList.contains('deactivated')) header.classList.remove('deactivated');
  else header.classList.add('deactivated');
}

// Shareable assets data structure - Easy to add more designs and platforms!
// TO ADD MORE DESIGNS: Simply add a new object to this array with your image filenames
const SHAREABLE_ASSETS = [
  {
    id: 'design-1',
    name: 'Design 1',
    description: 'Clean and modern design highlighting privacy',
    variants: [
      {
        platform: 'X (Twitter)',
        filename: 'x1.jpg',
        downloadName: 'bitcoin-for-signal-x.jpg',
        aspectRatio: 'aspect-[16/9]' // Adjust based on your actual X image dimensions
      },
      {
        platform: 'Instagram',
        filename: 'ig1.jpg',
        downloadName: 'bitcoin-for-signal-instagram.jpg',
        aspectRatio: 'aspect-square' // Instagram is typically square
      }
    ]
  },
  {
    id: 'design-2',
    name: 'Design 2',
    description: 'Bold typography with clear call-to-action',
    variants: [
      {
        platform: 'X (Twitter)',
        filename: 'x2.jpg',
        downloadName: 'bitcoin-for-signal-x-2.jpg',
        aspectRatio: 'aspect-[16/9]'
      },
      {
        platform: 'Instagram',
        filename: 'ig2.jpg',
        downloadName: 'bitcoin-for-signal-instagram-2.jpg',
        aspectRatio: 'aspect-square'
      }
    ]
  },
  {
    id: 'design-3',
    name: 'Design 3',
    description: 'Minimalist aesthetic for maximum impact',
    variants: [
      {
        platform: 'X (Twitter)',
        filename: 'x3.jpg',
        downloadName: 'bitcoin-for-signal-x-3.jpg',
        aspectRatio: 'aspect-[16/9]'
      },
      {
        platform: 'Instagram',
        filename: 'ig3.jpg',
        downloadName: 'bitcoin-for-signal-instagram-3.jpg',
        aspectRatio: 'aspect-square'
      }
    ]
  },
  {
    id: 'design-4',
    name: 'Design 4',
    description: 'Fresh design for maximum engagement',
    variants: [
      {
        platform: 'X (Twitter)',
        filename: 'x4.jpg',
        downloadName: 'bitcoin-for-signal-x-4.jpg',
        aspectRatio: 'aspect-[16/9]'
      },
      {
        platform: 'Instagram',
        filename: 'ig4.jpg',
        downloadName: 'bitcoin-for-signal-instagram-4.jpg',
        aspectRatio: 'aspect-square'
      }
    ]
  },
  // ⬇️ EXAMPLE: Uncomment and modify this template to add more designs ⬇️
  // {
  //   id: 'design-2',
  //   name: 'Design 2',
  //   description: 'Bold typography focused design',
  //   variants: [
  //     { 
  //       platform: 'X (Twitter)', 
  //       filename: 'x2.jpg', 
  //       downloadName: 'bitcoin-for-signal-x-2.jpg', 
  //       aspectRatio: 'aspect-[16/9]' 
  //     },
  //     { 
  //       platform: 'Instagram', 
  //       filename: 'ig2.jpg', 
  //       downloadName: 'bitcoin-for-signal-instagram-2.jpg', 
  //       aspectRatio: 'aspect-square' 
  //     }
  //   ]
  // },
  // {
  //   id: 'design-3',
  //   name: 'Design 3',
  //   description: 'Minimalist design with bold call-to-action',
  //   variants: [
  //     { 
  //       platform: 'X (Twitter)', 
  //       filename: 'x3.jpg', 
  //       downloadName: 'bitcoin-for-signal-x-3.jpg', 
  //       aspectRatio: 'aspect-[16/9]' 
  //     },
  //     { 
  //       platform: 'Instagram', 
  //       filename: 'ig3.jpg', 
  //       downloadName: 'bitcoin-for-signal-instagram-3.jpg', 
  //       aspectRatio: 'aspect-square' 
  //     },
  //     // You can even add more platforms like LinkedIn, Facebook, etc:
  //     // { 
  //     //   platform: 'LinkedIn', 
  //     //   filename: 'linkedin3.jpg', 
  //     //   downloadName: 'bitcoin-for-signal-linkedin-3.jpg', 
  //     //   aspectRatio: 'aspect-[1.91/1]' 
  //     // }
  //   ]
  // }
];

// Reusable component for rendering a downloadable asset
const DownloadableAsset = ({ filename, downloadName, platform, aspectRatio }) => (
  <div className="flex flex-col items-center space-y-2">
    <a
      href={`/${filename}`}
      download={downloadName}
      className="relative group cursor-pointer block w-full"
    >
      {/* Image container with elegant hover effect */}
      <div className="relative overflow-hidden rounded-lg border-2 border-signal-border-weak group-hover:border-signal-blue transition-all duration-500 shadow-sm group-hover:shadow-2xl">
        <img
          src={`/${filename}`}
          alt={`Share on ${platform}`}
          className="w-full h-auto transition-all duration-500 group-hover:brightness-110"
        />
        
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Download icon overlay - positioned at bottom left */}
        <div className="absolute bottom-3 left-3 bg-signal-blue text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
          {/* SVG download icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </div>
      </div>
    </a>
    {/* Platform label below the image */}
    <span className="text-sm font-medium text-signal-text">
      {platform}
    </span>
  </div>
);

function scrollToSection(e){
  e.preventDefault();
  const href = e.currentTarget && e.currentTarget.getAttribute ? (e.currentTarget.getAttribute('href') || '') : '';
  const hash = href.includes('#') ? href.split('#')[1] : (e.currentTarget && e.currentTarget.hash ? e.currentTarget.hash.substring(1) : '');
  if(!hash) return;
  const targetElement = document.getElementById(hash);
  if(!targetElement) return;

  // Close mobile menu first so header height reflects final layout
  const headerContainer = document.getElementById('header-container');
  const isDesktop = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(min-width: 1024px)').matches;
  if(headerContainer && !isDesktop && !headerContainer.classList.contains('deactivated')) {
    headerContainer.classList.add('deactivated');
  }

  // Measure after layout settles, then scroll with exact offset for fixed header
  requestAnimationFrame(() => {
    const headerEl = document.querySelector('#header-container header');
    const headerHeight = headerEl ? headerEl.offsetHeight : 0;
    const y = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 8; // small extra margin
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: Math.max(0, y), behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
}

function changeMenuStyle(transparent = 'true') {
  let header = document.getElementById('header-container');
  if(transparent) header.classList.add('transparent');
  else header.classList.remove('transparent');
}

function checkScrollPosition(e) {
  if(window.scrollY > 100) changeMenuStyle(false);
  else changeMenuStyle();
}

export default function Home() {
  React.useEffect(()=>{
    window.addEventListener('scroll', checkScrollPosition, { passive: true });

    // If the page loads with a hash, scroll precisely to the section
    if(typeof window !== 'undefined' && window.location && window.location.hash){
      const id = window.location.hash.substring(1);
      const el = document.getElementById(id);
      if(el){
        requestAnimationFrame(() => {
          const headerEl = document.querySelector('#header-container header');
          const headerHeight = headerEl ? headerEl.offsetHeight : 0;
          const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
          const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          window.scrollTo({ top: Math.max(0, y), behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        });
      }
    }

    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);
  
  return (
    <div className="w-full max-w-80ch" onScroll={checkScrollPosition}>
      <Head>
        <title>Bitcoin for Signal - Private Messaging Needs Private Money.</title>
        <meta
          name="description"
          content="Signal integration for private, peer-to-peer bitcoin payments via Cashu ecash."
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bitcoin for Signal - Private Messaging Needs Private Money." />
        <meta property="og:description" content="Signal integration for private, peer-to-peer bitcoin payments via Cashu ecash." />
        <meta property="og:image" content="https://bitcoinforsignal.org/og-image2.jpg?v3" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Bitcoin for Signal - Private Messaging Needs Private Money." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bitcoinforsignal" />
        <meta name="twitter:creator" content="@bitcoinforsignal" />
        <meta name="twitter:title" content="Bitcoin for Signal - Private Messaging Needs Private Money." />
        <meta name="twitter:description" content="Signal integration for private, peer-to-peer bitcoin payments via Cashu ecash." />
        <meta name="twitter:image" content="https://bitcoinforsignal.org/og-image2.jpg?v3" />
        <meta name="twitter:image:alt" content="Bitcoin for Signal - Private Messaging Needs Private Money." />
        <meta property="og:url" content="https://bitcoinforsignal.org" />
        <meta property="og:site_name" content="Bitcoin for Signal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div id="header-container" className="deactivated transparent">
        <div id="nav-overlay" className="fixed w-full h-full bg-white z-[47] lg:hidden deactivated" onClick={toggleMenu}></div>

        <header className="fixed top-0 w-full left-0 z-[48] lg:flex lg:flex-row lg:bg-white lg:justify-center lg:items-center">
          <div className="controls flex flex-row justify-between p-4 bg-white z-[50] relative">
            <a href="/">
              <img 
                src="/b4s-logo.svg" 
                alt="Bitcoin for Signal" 
                className="logo w-12 h-12 lg:w-8 lg:h-8"
              />
              <span className="sr-only">Bitcoin for Signal</span>
            </a>
            <MenuIcon className="menu-toggle text-black w-12 h-12 lg:hidden" onClick={toggleMenu} />
          </div>

          <nav id="nav" className="deactivated p-4 bg-white z-[49]">
            <ul className="space-y-4 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0 items-center lg:mb-0 lg:text-sm">
              <li><a href="#problem" onClick={scrollToSection}>The Problem</a></li>
              <li><a href="#solution" onClick={scrollToSection}>The Solution</a></li>
              <li><a href="#demo" onClick={scrollToSection}>Demo</a></li>
              <li><a href="#privacy" onClick={scrollToSection}>Privacy Deep Dive</a></li>
              <li><a href="#how" onClick={scrollToSection}>How It Works</a></li>
              <li><a href="#action" onClick={scrollToSection}>Signal Your Support</a></li>
              <li><a href="#faq" onClick={scrollToSection}>FAQ</a></li>
            </ul>
          </nav>
        </header>
      </div>

      <main className="text-left">
        <div className="hero flex items-center justify-center w-full p-12 pt-24 min-h-screen lg:p-36 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Text content wrapper - we'll reorder children on mobile */}
            <div className="flex-1 text-left flex flex-col">
              {/* Title - appears first on both mobile and desktop */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-8 animate-fade-in-up order-1" style={{ minHeight: '8rem' }}>
                <TextScramble speed={25} delay={200}>
                Private Messaging Needs Private Money
                </TextScramble>
              </h1>

              {/* Image - appears second on mobile (order-2), but moves to right side on desktop (lg:order-3) */}
              <div className="flex-1 flex justify-center mb-8 lg:hidden animate-fade-in-up animation-delay-400 order-2">
                <img 
                  src="/signal-hero2.png" 
                  alt="Signal app interface"
                  className="w-full max-w-md"
                />
              </div>

              {/* Subtitle and button - appears third on mobile (order-3), second on desktop (lg:order-2) */}
              <div className="order-3 lg:order-2">
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-8 max-w-2xl animate-fade-in-up animation-delay-200" style={{ minHeight: '7rem' }}>
                  <TextScramble speed={30} delay={600}>
                  Bitcoin belongs in Signal. Cashu ecash enables truly private bitcoin payments inside the world's most trusted encrypted messenger.
                  </TextScramble>
                </h3>

                {/* Share button */}
                <div className="animate-fade-in-up animation-delay-400">
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      "Private messaging needs private money.\n\nCashu can now enable private bitcoin payments inside the world's most trusted encrypted messenger.\n\nCheck it out https://bitcoinforsignal.org #BitcoinforSignal"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-white px-6 py-3 text-lg text-signal-blue hover:bg-signal-blue hover:text-white transition rounded-md font-medium inline-block">
                      Share This On X
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Image (desktop only) */}
            <div className="hidden lg:flex flex-1 justify-center lg:justify-end animate-fade-in-up animation-delay-400">
              <img 
                src="/signal-hero2.png" 
                alt="Signal app interface"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl"
              />
            </div>
          </div>

        </div>

        <div className="container mx-auto px-12 max-w-screen-xl">
          <section className="flex flex-col md:flex-row md:gap-4 md:pt-12 md:pb-12">
            <div className="w-full md:basis-6/12 space-y-4 flex justify-center flex-col">
              <h2 className="text-signal-blue" id="problem">The Problem</h2>
              
              {/* Image appears right after title on mobile only */}
              <div className="md:hidden mb-6 flex justify-center">
                <img src="/signal-problem.jpg" alt="Signal needs private bitcoin" className="w-full max-w-sm object-contain" />
              </div>

              <h3>
                Payments Belong in Signal.
              </h3>

              <p>
              Signal enables private communication for everyone, but the moment we leave Signal to make a payment, our interactions become traceable. Creating a privacy gap between our messages and our money.
              </p>

              <p>Signal integrated MobileCoin to solve this, but most Signal users don't even know this feature exists. And for those who do, there's another problem: a payment system that's only used within Signal reveals you're a Signal user.
              </p>
            </div>

            {/* Image appears beside content on desktop with proper spacing */}
            <div className="hidden md:flex md:basis-6/12 pt-6 md:p-6 justify-center">
              <img src="/signal-problem.jpg" alt="Signal needs private bitcoin" className="xl:w-8/12 object-contain" />
            </div>
          </section>

          <section className="flex flex-col md:flex-row md:gap-4 md:pt-12 md:pb-12">
            <div className="w-full md:basis-6/12 space-y-4 flex justify-center flex-col">
              <h2 className="text-signal-blue" id="solution">The Solution</h2>
              
              {/* Image appears right after title on mobile only */}
              <div className="md:hidden mb-6 flex justify-center">
                <img src="/signal-hidden.jpg" alt="Cashu x Signal integration" className="w-full max-w-sm object-contain" />
              </div>

              <h3>Bitcoin + Cashu = Private Payments.</h3>

              <p>
              Bitcoin is the obvious choice. As the most widely adopted cryptocurrency, using Bitcoin gives Signal users plausible deniability—you can't be identified as a Signal user simply by transacting in Bitcoin.
              </p>

              <p>
              But Bitcoin alone isn't enough. Cashu ecash, built on Chaumian blind signatures, adds the privacy layer Bitcoin lacks. With Cashu, Signal users can send and receive Bitcoin micropayments completely anonymously, natively within the app. Private messages meet private money.
              </p>
            </div>

            {/* Image appears beside content on desktop with proper spacing */}
            <div className="hidden md:flex md:basis-6/12 pt-6 md:p-6 justify-center">
              <img src="/signal-hidden.jpg" alt="Cashu x Signal integration" className="xl:w-8/12 object-contain" />
            </div>
          </section>

          <div className="pt-12 pb-12 text-center space-y-8">
            <h2 className="text-signal-blue" id="demo">See It In Action</h2>

            <p className="max-w-4xl mx-auto">
              The Signal Cashu fork demonstrates how bitcoin payments can work seamlessly inside Signal.
            </p>

            <div className="flex flex-col space-y-8 pb-12">
              <div className="flex flex-col items-center space-y-4">
                <video 
                  className="w-full max-w-4xl aspect-video rounded-md shadow-sm" 
                  controls
                >
                  <source src="/signal-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-center text-signal-text max-w-4xl">Users can send ecash directly in their Signal conversations, like handing over a physical bill to your friend.</p>
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                <img 
                  src="/signal-wide.jpg" 
                  alt="Signal chat with Cashu payment interface" 
                  className="w-full max-w-4xl h-auto"
                />
                <p className="text-center text-signal-text max-w-4xl">The UI is clean and native to Signal, making bitcoin payments feel as natural as sending a message.</p>
              </div>
            </div>
          </div>

          <section>
            <div className="basis-6/12 space-y-4 flex flex-col justify-center">
              <h2 className="text-signal-blue" id="privacy">Privacy Deep Dive</h2>

              <h3>Why Cashu is a perfect match for Signal</h3>

              <p>
                Signal's mission is to protect privacy. End-to-end encryption ensures that no one &mdash; not even
                Signal &mdash; can read your messages. Cashu extends this same principle to money.
              </p>

              <p>
                <strong>Chaumian ecash</strong> ensures user privacy while enabling instant and cheap payments, even for tiny amounts. Ecash is not a cryptocurrency but a 
                representation of an asset, just like how physical cash represents your money. No speculation, no get quick rich schemes. 
                Cashu works best with Bitcoin but it is compatible even with fiat currencies like USD.
              </p>

              <p>
                <strong>Blind signatures</strong> are the cryptographic primitive that enable cash-like privacy in the digital world.
                Introduced in the 80s by visionary cryptographer David Chaum, ecash is experiencing a renaissance in recent years due to open-source projects like Cashu.
              </p>

              <p>
                The Cashu Signal integration doesn't compromise Signal's privacy guarantees &mdash; it extends them to financial
                transactions. Your messages are private. Your payments should be too.
              </p>
            </div>
            <div className="basis-6/12 flex justify-center p-6">
              <div className="bg-signal-bg border border-signal-border-weak p-6 rounded-md w-full max-w-md">
                <h4 className="font-semibold text-signal-text-strong mb-3">The Math Behind the Privacy</h4>
                <p className="text-sm text-signal-text mb-3">
                  Cashu uses a Blind Diffie-Hellmann Key Exchange (BDHKE) to achieve unlinkability:
                </p>
                <div className="text-sm text-signal-text space-y-2 font-mono bg-white p-4 rounded border">
                  <div>1. Mint <code className="bg-gray-100 px-1 rounded">Bob</code> publishes public key <span className="bg-gray-100 px-1 rounded"><InlineMath math={'K = kG'} /></span>.</div>
                  <div>2. User <code className="bg-gray-100 px-1 rounded">Alice</code> picks secret <span className="bg-gray-100 px-1 rounded"><InlineMath math={'x'} /></span> and computes <span className="bg-gray-100 px-1 rounded"><InlineMath math={'Y = \\mathrm{hash\\_to\\_curve}(x)'} /></span>.</div>
                  <div>3. <code className="bg-gray-100 px-1 rounded">Alice</code> sends to <code className="bg-gray-100 px-1 rounded">Bob</code> <span className="bg-gray-100 px-1 rounded"><InlineMath math={"B' = Y + rG"} /></span> with <span className="bg-gray-100 px-1 rounded"><InlineMath math={'r'} /></span> being a random blinding factor.</div>
                  <div>4. <code className="bg-gray-100 px-1 rounded">Bob</code> sends back to <code className="bg-gray-100 px-1 rounded">Alice</code> blind signature <span className="bg-gray-100 px-1 rounded"><InlineMath math={"C' = k \\cdot B'"} /></span>.</div>
                  <div>5. <code className="bg-gray-100 px-1 rounded">Alice</code> can calculate the unblinded signature as <span className="bg-gray-100 px-1 rounded"><InlineMath math={"C' - rK = kY + krG - krG = kY = C"} /></span>.</div>
                  <div>6. <code className="bg-gray-100 px-1 rounded">Alice</code> can take the pair <span className="bg-gray-100 px-1 rounded"><InlineMath math={'(x, C)'} /></span> as an ecash token and can send it to user <code className="bg-gray-100 px-1 rounded">Carol</code>.</div>
                  <div>7. <code className="bg-gray-100 px-1 rounded">Carol</code> sends <span className="bg-gray-100 px-1 rounded"><InlineMath math={'(x, C)'} /></span> to <code className="bg-gray-100 px-1 rounded">Bob</code> who then checks that <span className="bg-gray-100 px-1 rounded"><InlineMath math={'k \\cdot \\mathrm{hash\\_to\\_curve}(x) = C'} /></span>, and if so treats it as a valid spend.</div>
                </div>
                <p className="text-xs text-signal-text-weak mt-3">
                  Where all upper-case symbols are elliptic curve points and <InlineMath math={'G'}/> is the generator point, <InlineMath math={'k'}/> is the mint's private key, and <InlineMath math={'r'}/> is a blinding factor. The mint can verify tokens 
                  without knowing who originally created them.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="basis-6/12 space-y-4 flex flex-col justify-center">
              <h2 className="text-signal-blue" id="how">How It Works</h2>

              <h3>Technical Overview for Developers</h3>

              <p>
                <strong>The Signal Cashu integration</strong> embeds a lightweight
                Cashu wallet directly into Signal using the <a href="https://cashudevkit.org/" target="_blank" rel="noopener noreferrer">Cashu Development Kit</a>. Building with Cashu is as simple as it gets so we added Cashu to Signal for iOS and Android. The result is a beautiful and intuitive user experience.
              </p>

              <p>
                <strong>Ecash is like physical cash</strong> and is stored locally on the user's device. To make a payment, the user sends ecash through the encrypted Signal chat, like any other text message. Nobody facilitates the payment for you, everything stays 
                between you and your friends.
              </p>

              <p>
                <strong>Cashu Mints</strong> issue ecash in return for payments on the Bitcoin network. Users deposit Bitcoin to a mint and the mint acts as a trusted custodian for the Bitcoin it receives. Think of it like a community bank, but with strong privacy.
                Mints allow users to send and receive payments from anyone, anywhere, at any time. Whether its from another Signal contact, or a merchant that accepts Bitcoin.
              </p>

              <p>
                <strong>The Cashu protocol</strong> is open and not controlled by a single entity. It is defined in the Cashu <a href="https://cashubtc.github.io/nuts" target="_blank" rel="noopener noreferrer">protocol specifications</a>. This means that any individual or organization can run a mint or create a wallet. Cashu has a vibrant <a href="https://github.com/cashubtc/awesome-cashu" target="_blank" rel="noopener noreferrer">open-source ecosystem</a> with many wallet and mint implementations and <a href="https://docs.cashu.space/libraries" target="_blank" rel="noopener noreferrer">developer libraries</a> to chose from.
              </p>

            </div>
            <div className="basis-6/12 flex justify-center p-6">
              <div className="bg-signal-bg border border-signal-border-weak p-6 rounded-md w-full max-w-md">
                <h4 className="font-semibold text-signal-text-strong mb-3">Protocol Specifications</h4>
                <p className="text-sm text-signal-text mb-4">
                  The Cashu protocol is defined by a set of open specifications called NUTs (Notation, Usage, and Terminology):
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-signal-text-strong mb-2 text-signal-blue">Mandatory</h5>
                    <ul className="text-sm text-signal-text space-y-1 ml-4">
                      <li>• <a href="https://cashubtc.github.io/nuts/00/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">NUT-00: Cryptography</a> - Cryptographic primitives</li>
                      <li>• <a href="https://cashubtc.github.io/nuts/03/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">NUT-03: Swapping Tokens</a> - Double spend protection</li>
                      <li>• <a href="https://cashubtc.github.io/nuts/04/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">NUT-04: Minting</a> - Token issuance</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-signal-text-strong mb-2 text-orange-600">Optional</h5>
                    <ul className="text-sm text-signal-text space-y-1 ml-4">
                      <li>• <a href="https://cashubtc.github.io/nuts/11/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">NUT-11: Pay to Public Key</a> - Programmable payments</li>
                      <li>• <a href="https://cashubtc.github.io/nuts/12/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">NUT-12: DLEQ Proofs</a> - Discrete Log Equality proofs</li>
                      <li>• <a href="https://cashubtc.github.io/nuts/16/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">NUT-16: Animated QR Codes</a> - Dynamic QR codes</li>
                      <li>• <a href="https://cashubtc.github.io/nuts/22/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">NUT-22: Blind Authentication</a> - Privacy-preserving authentication</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-xs text-signal-text-weak mt-4">
                  Complete specifications and implementation details available in the <a href="https://github.com/cashubtc/nuts" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cashu NUTs repository</a>.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="md:p-12 flex flex-col md:items-center space-y-8 p-4 mx-auto mb-8">
          <h2 className="text-signal-blue" id="action">Signal Your Support</h2>

          <p className="max-w-screen-sm md:text-center text-xl">
            Our proof-of-concept demonstrates that Cashu Signal is technically feasible.
            If you like this idea as much as we do, show your support and let's spark the imagination of the open-source world.
          </p>

          {/* Share Campaign Button */}
          <div className="flex justify-center pt-6">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                "Private messaging needs private money.\n\nCashu can now enable private bitcoin payments inside the world's most trusted encrypted messenger.\n\nCheck it out https://bitcoinforsignal.org #BitcoinforSignal"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-signal-blue px-8 py-4 text-lg text-white hover:bg-blue-700 transition rounded-md font-medium inline-block">
                Share This On X
              </div>
            </a>
          </div>

          {/* Shareable Assets Section - Dynamically rendered from SHAREABLE_ASSETS data */}
          <div className="max-w-screen-xl pt-8 w-full px-4">
            <h3 className="text-2xl font-semibold text-signal-text-strong mb-6 text-center">
            Show Your Love For Bitcoin In Signal 
            </h3>
            {/* Horizontal grid of design cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SHAREABLE_ASSETS.map((design) => (
                <div 
                  key={design.id} 
                  className="bg-white border border-signal-border-weak rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Platform variants stacked vertically within this design card */}
                  <div className="space-y-4">
                    {design.variants.map((variant, idx) => (
                      <DownloadableAsset
                        key={`${design.id}-${idx}`}
                        filename={variant.filename}
                        downloadName={variant.downloadName}
                        platform={variant.platform}
                        aspectRatio={variant.aspectRatio}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-screen-lg pt-8 space-y-6">
            <div className="bg-white border border-signal-border-weak p-8 rounded-md shadow-sm space-y-4 transition-shadow duration-300 hover:shadow-md">
              <h3 className="text-2xl font-semibold text-signal-text-strong">For Signal Users</h3>
              <ul className="list-disc ml-6 space-y-2 text-signal-text">
                <li>Spread the word by sharing this site with your Signal contacts and on Social Media #bitcoinforsignal</li>
                <li>Engage with Signal by tagging and mention Signal official accounts in relevant posts</li>
                <li>Discuss Bitcoin For Signal topic in forums, meetups, and with your friends</li>
              </ul>
            </div>

            <div className="bg-white border border-signal-border-weak p-8 rounded-md shadow-sm space-y-4 transition-shadow duration-300 hover:shadow-md">
              <h3 className="text-2xl font-semibold text-signal-text-strong">For Developers</h3>
              <ul className="list-disc ml-6 space-y-2 text-signal-text">
                <li>Review the Signal + Cashu proof-of-concept code</li>
                <li>Build complementary tools (mint infrastructure, testing tools, etc.)</li>
                <li>Learn about <a href="https://cashu.space" target="_blank" rel="noopener noreferrer">Cashu</a> and join the <a href="https://t.me/CashuBTC" target="_blank" rel="noopener noreferrer">discussion</a>.</li>
              </ul>
            </div>

            <div className="bg-white border border-signal-border-weak p-8 rounded-md shadow-sm space-y-4 transition-shadow duration-300 hover:shadow-md">
              <h3 className="text-2xl font-semibold text-signal-text-strong">For Decision Makers at Signal</h3>
              <p className="text-signal-text">
              Cashu naturally aligns with Signal's privacy first mission.
              </p>
              <ul className="list-disc ml-6 space-y-2 text-signal-text">
                <li>Encrypted messages deserve encrypted money, Cashu enables truly anonymous Bitcoin payments</li>
                <li>Widespread Bitcoin adoption protects user privacy better than specialized cryptocurrencies</li>
                <li>Bitcoin brings millions of potential new users, more users means better privacy for everyone</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 text-center space-y-6">
            <h3 className="text-2xl">Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {/* iOS Source Code */}
              <a 
                href="https://github.com/zeugmaster/Signal-iOS" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 flex flex-col items-center space-y-3 group"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <div className="font-medium text-gray-900 group-hover:text-gray-700">iOS Source Code</div>
                </div>
              </a>

              {/* Android Source Code */}
              <a 
                href="https://github.com/lollerfirst/Signal-Android" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 flex flex-col items-center space-y-3 group"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
                  </svg>
                </div>
                <div className="text-center">
                  <div className="font-medium text-gray-900 group-hover:text-gray-700">Android Source Code</div>
                </div>
              </a>

              {/* Cashu Website */}
              <a 
                href="https://cashu.space" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 flex flex-col items-center space-y-3 group"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="font-medium text-gray-900 group-hover:text-gray-700">Cashu Official Website</div>
                </div>
              </a>

              {/* Cashu Documentation */}
              <a 
                href="https://docs.cashu.space/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 flex flex-col items-center space-y-3 group"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <div className="font-medium text-gray-900 group-hover:text-gray-700">Cashu Documentation</div>
                </div>
              </a>

            </div>
          </div>
        </div>

        <div className="container mx-auto px-12 max-w-screen-xl pb-24">
          <h2 className="text-signal-blue mb-4" id="faq">FAQ</h2>
          <div className="flex flex-col md:flex-row m-0 gap-8 md:gap-16">
            <div className="basis-6/12 space-y-6">
              <div>
                <h3>What is Cashu?</h3>
                <p>
                  Cashu enables private, peer-to-peer bitcoin payments using Chaumian blind signatures. It's not a company, organization, or entity with financial interests &mdash;
                  it's a free and open-source community-driven project with no single controlling entity. Cashu allows users to send bitcoin payments with the same level of privacy as physical cash, while maintaining compatibility with the broader Bitcoin ecosystem.
                </p>
              </div>

              <div>
                <h3>How is Cashu different from MobileCoin?</h3>
                <p>
                  Cashu is a purely open-source project with no commercial interests. It is not a speculative cryptocurrency but a protocol that works with any asset. Bitcoin is internet's native digital currency with the largest user base across the world. Cashu brings strong privacy to bitcoin, making it a pragmatic solution that Signal can build on.
                </p>
              </div>
            </div>
            <div className="basis-6/12 space-y-6">
              <div>
                <h3>Will Signal actually do this?</h3>
                <p>
                  We love and trust Signal and want to imagine a better world together with them. This site and the proof-of-concept are tools to spark their imagination
                  and to show Signal that there's real interest for global micropayments within their ecosystem.
                  Together with Signal, we would love to start a discussion about integrating Cashu or a similar bitcoin privacy solution.
                </p>
              </div>

              <div>
                <h3>How can I help?</h3>
                <p>
                  Share this site, try the proof-of-concept fork.
                  The best support you can give is to use privacy-preserving technologies and to share it with your friends. 
                  If you're a developer, check out the Cashu protocol, consider integrating it with your app, or contribute to the Cashu code or the broader Cashu ecosystem directly.
                </p>
              </div>
            </div>
          </div>
        </div>
          
      </main>

      {/* Footer */}
      <footer className="bg-[#3C3744] text-[#E9E9E9] py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Left Section - Copyright and Info */}
            <div className="lg:col-span-2 space-y-4">
              <p className="text-sm text-[#E9E9E9]">
                This is a grassroots advocacy campaign, not an official Signal or Cashu project.
              </p>
              <p className="text-sm text-[#E9E9E9]">
                "Signal", Signal logos, and other trademarks are trademarks or registered trademarks of Signal Technology Foundation.
              </p>
              <p className="text-sm text-[#E9E9E9]">
                For media inquiries about this campaign, contact us at <a href="mailto:bitcoinforsignal@proton.me" target="_blank" rel="noopener noreferrer" className="text-[#E9E9E9] hover:text-white hover:underline transition" style={{fontWeight: 500}}>bitcoinforsignal@proton.me</a>.
              </p>
              
              {/* Bitcoin Design Community Credit */}
              <div className="pt-2">
                <a 
                  href="https://bitcoin.design" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 text-[#E9E9E9] hover:text-white transition group"
                >
                  <img 
                    src="/bdc-logo.svg" 
                    alt="Bitcoin Design Community" 
                    className="h-6 w-6"
                  />
                  <span className="text-sm group-hover:underline" style={{fontWeight: 500}}>
                    Website designed by the Bitcoin Design Community
                  </span>
                </a>
              </div>
            </div>

            {/* Cashu Resources Column */}
            <div className="space-y-3">
              <h4 className="block font-semibold text-[#E9E9E9] mb-3" style={{fontWeight: 600, marginBottom: '12px', fontSize: '16px'}}>Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://cashu.space" target="_blank" rel="noopener noreferrer" className="text-[#E9E9E9] hover:text-white hover:underline transition" style={{fontWeight: 500}}>Cashu Official Website</a></li>
                <li><a href="https://github.com/cashubtc" target="_blank" rel="noopener noreferrer" className="text-[#E9E9E9] hover:text-white hover:underline transition" style={{fontWeight: 500}}>Cashu GitHub</a></li>
                <li><a href="https://docs.cashu.space/" target="_blank" rel="noopener noreferrer" className="text-[#E9E9E9] hover:text-white hover:underline transition" style={{fontWeight: 500}}>Cashu Documentation</a></li>
                <li><a href="https://t.me/CashuBTC" target="_blank" rel="noopener noreferrer" className="text-[#E9E9E9] hover:text-white hover:underline transition" style={{fontWeight: 500}}>Cashu Telegram</a></li>
                <li><a href="https://x.com/CashuBTC" target="_blank" rel="noopener noreferrer" className="text-[#E9E9E9] hover:text-white hover:underline transition" style={{fontWeight: 500}}>Cashu on X</a></li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
