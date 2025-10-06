import Head from "next/head";
import {
  BitcoinCircleIcon,
  MenuIcon
} from "@bitcoin-design/bitcoin-icons-react/filled";
import { BitcoinCircleIcon as BitcoinCircleIconOutline } from "@bitcoin-design/bitcoin-icons-react/outline";
import React from "react";
import { TextScramble } from '../components/core/text-scramble';

function toggleMenu() {
  let header = document.getElementById('header-container');
  if(header.classList.contains('deactivated')) header.classList.remove('deactivated');
  else header.classList.add('deactivated');
}

function scrollTo(e){
  e.preventDefault();
  let element = document.getElementById( e.target.hash.substring(1) );
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  toggleMenu();
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
    window.addEventListener('scroll', checkScrollPosition);
  });
  
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
        <meta property="og:image" content="/og-image2.jpg" />
        <meta property="og:image:alt" content="Bitcoin for Signal - Private Messaging Needs Private Money." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bitcoin for Signal - Private Messaging Needs Private Money." />
        <meta name="twitter:description" content="Signal integration for private, peer-to-peer bitcoin payments via Cashu ecash." />
        <meta name="twitter:image" content="/og-image2.jpg" />
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
              <li><a href="#problem" onClick={scrollTo}>The Problem</a></li>
              <li><a href="#solution" onClick={scrollTo}>The Solution</a></li>
              <li><a href="#privacy" onClick={scrollTo}>Privacy Deep Dive</a></li>
              <li><a href="#demo" onClick={scrollTo}>Demo</a></li>
              <li><a href="#how" onClick={scrollTo}>How It Works</a></li>
              <li><a href="#action" onClick={scrollTo}>Take Action</a></li>
              <li><a href="#faq" onClick={scrollTo}>FAQ</a></li>
            </ul>
          </nav>
        </header>
      </div>

      <main className="text-left">
        <div className="hero flex items-center justify-center w-full p-12 pt-24 min-h-screen lg:p-36 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left side - Text content */}
            <div className="flex-1 text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-8 animate-fade-in-up">
                <TextScramble speed={25} delay={200}>
                Private Messaging Needs Private Money.
                </TextScramble>
              </h1>

              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-8 max-w-2xl animate-fade-in-up animation-delay-200">
                <TextScramble speed={30} delay={600}>
                  Bitcoin belongs in Signal.
                  Cashu ecash enables truly private bitcoin payments
                  inside the world's most trusted encrypted messenger.
                </TextScramble>
              </h3>

              {/* Share button */}
              <div className="animate-fade-in-up animation-delay-400">
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    "Signal protects your messages. Bitcoin protects your money.\n\n" +
                    "Time to bring them together with Cashu ecash.\n\n" +
                    "See the proof-of-concept: bitcoinforsignal.org\n\n" +
                    "@Signalapp #BitcoinForSignal 🔒₿"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white px-6 py-3 text-lg text-signal-blue hover:bg-signal-blue hover:text-white transition rounded-md font-medium inline-block">
                    Share This Campaign On X
                  </div>
                </a>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-up animation-delay-400">
              <img 
                src="/signal-hero2.png" 
                alt="Signal app interface"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl"
              />
            </div>
          </div>

        </div>

        <div className="container mx-auto px-12 max-w-screen-xl">
          <section>
            <div className="basis-6/12 space-y-4 flex justify-center flex-col">
              <h2 className="text-signal-blue" id="problem">The Problem</h2>

              <h3>
                Signal integrated MobileCoin, but it hasn't seen meaningful adoption. Bitcoin is the obvious alternative.
              </h3>

              <p>
                Signal built payments into their app using MobileCoin &mdash; a privacy-focused cryptocurrency.
                But MobileCoin has limited liquidity, minimal adoption, and lacks the network effects that make
                a payment system useful.
              </p>

              <p>
                Bitcoin is the world's most liquid, most adopted, and most censorship-resistant digital currency.
                But base-layer bitcoin lacks the privacy guarantees that align with Signal's mission.
              </p>

              <p>
                What if Signal could offer bitcoin payments with privacy equal to or better than their messaging?
                That's exactly what Cashu ecash enables.
              </p>
            </div>

            <div className="basis-6/12 pt-6 md:p-6 flex justify-center">
              <img src="/signal-problem.jpg" alt="Signal needs private bitcoin" className="xl:w-8/12" />
            </div>
          </section>

          <section>
            <div className="basis-6/12 space-y-4 flex justify-center flex-col">
              <h2 className="text-signal-blue" id="solution">The Solution</h2>

              <h3>Cashu Ecash + Signal = Private Bitcoin Payments</h3>

              <p>
                Developers have built a working fork of Signal that natively integrates <a href="https://cashu.space">Cashu ecash</a>.
                This proof-of-concept demonstrates that private bitcoin payments can work seamlessly inside Signal.
              </p>

              <p>
                Cashu is a Chaumian ecash protocol built on Bitcoin and Lightning. It provides true privacy through
                blind signatures &mdash; not even the mint knows who owns which tokens. Users can send bitcoin to
                each other with the same privacy guarantees as their encrypted messages.
              </p>

              <p>
                This integration feels native to Signal. No clunky external wallets, no blockchain addresses
                cluttering your chats &mdash; just tap, send, done. Privacy-preserving. Instant. Bitcoin.
              </p>
            </div>

            <div className="basis-6/12 pt-6 md:p-6 flex justify-center items-center">
              <img src="/signal-hidden.jpg" alt="Cashu + Signal integration" className="xl:w-8/12" />
            </div>
          </section>

          <div className="pt-12 pb-12 text-center space-y-8">
            <h2 className="text-signal-blue" id="demo">See It In Action</h2>

            <p className="max-w-4xl mx-auto">
              The Signal + Cashu fork demonstrates how private bitcoin payments can work seamlessly inside Signal.
              Below are demo videos and screenshots showcasing the integration.
            </p>

            <div className="flex flex-col space-y-8 pb-12">
              <div className="flex flex-col items-center space-y-4">
                <h4 className="font-semibold text-signal-text-strong">Demo Video</h4>
                <video 
                  className="w-full max-w-4xl aspect-video rounded-md shadow-sm" 
                  controls
                >
                  <source src="/signal-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-center text-signal-text max-w-4xl">Watch how seamlessly users can send bitcoin ecash tokens directly in their Signal conversations.</p>
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                <img 
                  src="/signal-wide.png" 
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
                Signal &mdash; can read your messages. Cashu ecash extends this same principle to money.
              </p>

              <p>
                <strong>Chaumian blind signatures</strong> ensure 
                that when you mint ecash tokens, the mint cannot link those tokens back to you when you later spend them. 
                This is cryptographic privacy, not just anonymity through obscurity.
              </p>

              <p>
                <strong>No metadata leakage</strong> through Cashu mints. Bitcoin's base layer exposes amounts, addresses, and timing.
                Lightning is better, but still reveals payment channel relationships. Cashu tokens can be sent
                peer-to-peer with zero on-chain footprint and no revealing metadata.
              </p>

              <p>
                This integration doesn't compromise Signal's privacy guarantees &mdash; it extends them to financial
                transactions. Your messages are private. Your payments should be too.
              </p>
            </div>
            <div className="basis-6/12 flex justify-center p-6">
              <div className="bg-signal-bg border border-signal-border-weak p-6 rounded-md w-full max-w-md">
                <h4 className="font-semibold text-signal-text-strong mb-3">The Math Behind the Privacy</h4>
                <p className="text-sm text-signal-text mb-3">
                  Cashu uses Blind Diffie-Hellmann Key Exchange (BDHKE) to achieve unlinkability:
                </p>
                <div className="text-sm text-signal-text space-y-2 font-mono bg-white p-4 rounded border">
                  <div>1. Mint <code className="bg-gray-100 px-1 rounded">Bob</code> publishes public key <code className="bg-gray-100 px-1 rounded">K = kG</code></div>
                  <div>2. <code className="bg-gray-100 px-1 rounded">Alice</code> picks secret <code className="bg-gray-100 px-1 rounded">x</code> and computes <code className="bg-gray-100 px-1 rounded">Y = hash_to_curve(x)</code></div>
                  <div>3. <code className="bg-gray-100 px-1 rounded">Alice</code> sends to <code className="bg-gray-100 px-1 rounded">Bob</code>: <code className="bg-gray-100 px-1 rounded">B_ = Y + rG</code> with <code className="bg-gray-100 px-1 rounded">r</code> being a random blinding factor</div>
                  <div>4. <code className="bg-gray-100 px-1 rounded">Bob</code> sends back to <code className="bg-gray-100 px-1 rounded">Alice</code> blinded key: <code className="bg-gray-100 px-1 rounded">C_ = kB_</code></div>
                  <div>5. <code className="bg-gray-100 px-1 rounded">Alice</code> can calculate the unblinded key as <code className="bg-gray-100 px-1 rounded">C_ - rK = kY + krG - krG = kY = C</code></div>
                  <div>6. <code className="bg-gray-100 px-1 rounded">Alice</code> can take the pair <code className="bg-gray-100 px-1 rounded">(x, C)</code> as a token and can send it to <code className="bg-gray-100 px-1 rounded">Carol</code></div>
                  <div>7. <code className="bg-gray-100 px-1 rounded">Carol</code> can send <code className="bg-gray-100 px-1 rounded">(x, C)</code> to <code className="bg-gray-100 px-1 rounded">Bob</code> who then checks that <code className="bg-gray-100 px-1 rounded">k*hash_to_curve(x) == C</code>, and if so treats it as a valid spend</div>
                </div>
                <p className="text-xs text-signal-text-weak mt-3">
                  Where G is the generator point, k is the mint's private key, and the blinding factor r ensures 
                  the mint cannot correlate the blinded request with the final token. The mint can verify tokens 
                  without knowing who originally minted them.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="basis-6/12 space-y-4 flex flex-col justify-center">
              <h2 className="text-signal-blue" id="how">How It Works</h2>

              <h3>Technical Overview for Developers</h3>

              <p>
                <strong>The Signal + Cashu integration</strong> works by embedding a lightweight
                Cashu wallet directly into the Signal app. Users connect to a Cashu mint (which acts as a
                custodian for bitcoin) and can mint, send, and receive ecash tokens.
              </p>

              <p>
                <strong>Ecash is stored locally</strong> and wallets store user balances locally on their device. When a user sends a payment, the app generates a Cashu token, and sends it as an encrypted message. The recipient's Signal app automatically detects the token and adds it to their balance.
              </p>

              <p>
                <strong>Mints on Bitcoin</strong> enable payments through Lightning. Users can send and receive payments from anyone, anywhere, at any time. Whether its from another Signal contact, or a merchant that accepts Bitcoin.
              </p>

              <p>
                <strong>The Cashu protocol</strong> is open and not controlled by a single entity. This means that anyone can run a Cashu mint and anyone can use any Cashu wallet. The protocol is defined in the Cashu <a href="https://cashubtc.github.io/nuts">specifications</a>.
              </p>

            </div>
            <div className="basis-6/12 flex justify-center p-6">
              <div className="bg-signal-bg border border-signal-border-weak p-6 rounded-md w-full max-w-md">
                <h4 className="font-semibold text-signal-text-strong mb-3">Protocol Specifications</h4>
                <p className="text-sm text-signal-text mb-4">
                  The Cashu protocol is defined by a set of specifications called NUTs (Notation, Usage, and Terminology):
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-signal-text-strong mb-2 text-signal-blue">Mandatory</h5>
                    <ul className="text-sm text-signal-text space-y-1 ml-4">
                      <li>• <a href="https://cashubtc.github.io/nuts/00/" className="text-blue-600 hover:underline font-medium">NUT-00: Cryptography</a> - Cryptographic primitives</li>
                      <li>• <a href="https://cashubtc.github.io/nuts/03/" className="text-blue-600 hover:underline font-medium">NUT-03: Swapping Tokens</a> - Double spend protection</li>
                      <li>• <a href="https://cashubtc.github.io/nuts/04/" className="text-blue-600 hover:underline font-medium">NUT-04: Minting</a> - Token issuance</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-signal-text-strong mb-2 text-orange-600">Optional</h5>
                    <ul className="text-sm text-signal-text space-y-1 ml-4">
                      <li>• <a href="https://cashubtc.github.io/nuts/11/" className="text-blue-600 hover:underline font-medium">NUT-11: Pay to Public Key</a> - Programmable payments</li>
                      <li>• <a href="https://cashubtc.github.io/nuts/12/" className="text-blue-600 hover:underline font-medium">NUT-12: DLEQ Proofs</a> - Discrete Log Equality proofs</li>
                      <li>• <a href="https://cashubtc.github.io/nuts/16/" className="text-blue-600 hover:underline font-medium">NUT-16: Animated QR Codes</a> - Dynamic QR codes</li>
                      <li>• <a href="https://cashubtc.github.io/nuts/22/" className="text-blue-600 hover:underline font-medium">NUT-22: Blind Authentication</a> - Privacy-preserving authentication</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-xs text-signal-text-weak mt-4">
                  Complete specifications and implementation details available in the <a href="https://github.com/cashubtc/nuts" className="text-blue-600 hover:underline">Cashu NUTs repository</a>.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="md:p-12 flex flex-col md:items-center space-y-8 p-4 mx-auto mb-8">
          <h2 className="text-signal-blue" id="action">Take Action</h2>

          <p className="max-w-screen-sm md:text-center text-xl">
            This proof-of-concept demonstrates that Cashu + Signal is technically feasible.
            Now we need to show Signal that there's demand for this integration.
          </p>

          {/* Share Campaign Button */}
          <div className="flex justify-center pt-6">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                "Private messaging needs private money. @Signalapp should integrate Bitcoin payments using Cashu ecash for maximum privacy. Check out this proof-of-concept: https://bitcoinforsignal.org #BitcoinForSignal #Signal #Cashu"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-signal-blue px-8 py-4 text-lg text-white hover:bg-blue-700 transition rounded-md font-medium inline-block">
                Share This Campaign On X
              </div>
            </a>
          </div>

          <div className="max-w-screen-lg pt-8 space-y-6">
            <div className="bg-white border border-signal-border-weak p-8 rounded-md shadow-sm space-y-4 transition-shadow duration-300 hover:shadow-md">
              <h3 className="text-2xl font-semibold text-signal-text-strong">For Signal Users</h3>
              <ul className="list-disc ml-6 space-y-2 text-signal-text">
                <li>Share this site with your Signal contacts and on social media</li>
                <li>Contact Signal support and express your interest in bitcoin payments</li>
                <li>Advocate for privacy-preserving bitcoin integration in Signal forums</li>
              </ul>
            </div>

            <div className="bg-white border border-signal-border-weak p-8 rounded-md shadow-sm space-y-4 transition-shadow duration-300 hover:shadow-md">
              <h3 className="text-2xl font-semibold text-signal-text-strong">For Developers</h3>
              <ul className="list-disc ml-6 space-y-2 text-signal-text">
                <li>Review the Signal + Cashu proof-of-concept code</li>
                <li>Help refine the UX and security model</li>
                <li>Build complementary tools (mint infrastructure, testing tools, etc.)</li>
                <li>Learn about <a href="https://cashu.space">Cashu</a> and contribute to the broader ecosystem</li>
              </ul>
            </div>

            <div className="bg-white border border-signal-border-weak p-8 rounded-md shadow-sm space-y-4 transition-shadow duration-300 hover:shadow-md">
              <h3 className="text-2xl font-semibold text-signal-text-strong">For Decision Makers at Signal</h3>
              <p className="text-signal-text">
                We believe Cashu ecash aligns perfectly with Signal's mission. This integration would:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-signal-text">
                <li>Replace the underutilized MobileCoin integration with the world's most liquid cryptocurrency</li>
                <li>Maintain Signal's uncompromising privacy standards through Chaumian blind signatures</li>
                <li>Attract millions of bitcoin users who share Signal's values around privacy and freedom</li>
                <li>Position Signal as the premier private communication and payment platform</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 text-center space-y-6">
            <h3 className="text-2xl">Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
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
                  <div className="text-sm text-gray-500">Learn about the protocol</div>
                </div>
              </a>

              {/* GitHub Documentation */}
              <a 
                href="https://github.com/cashubtc" 
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
                  <div className="font-medium text-gray-900 group-hover:text-gray-700">GitHub Documentation</div>
                  <div className="text-sm text-gray-500">Technical specifications</div>
                </div>
              </a>

            </div>
          </div>
        </div>

        <div className="container mx-auto px-12 max-w-screen-xl">
          <h2 className="text-signal-blue mb-4" id="faq">FAQ</h2>
          <div className="flex flex-col md:flex-row m-0 gap-8 md:gap-16">
            <div className="basis-6/12 space-y-6">
              <div>
                <h3>What is Cashu?</h3>
                <p>
                  Cashu is a purely open-source ecash protocol that enables private, peer-to-peer bitcoin payments using
                  Chaumian blind signatures. It's not a company, organization, or entity with financial interests &mdash;
                  it's a free and open-source community-driven project with no single controlling entity. Cashu allows users to send bitcoin payments with the same level of privacy as physical cash, while maintaining compatibility with the broader Bitcoin ecosystem.
                </p>
              </div>

              <div>
                <h3>How is this Cashu different from MobileCoin?</h3>
                <p>
                  Cashu is a purely open-source project with no financial backers or commercial interests. Bitcoin is the world's most liquid and widely-adopted cryptocurrency with deep infrastructure and network effects. Cashu brings strong privacy to bitcoin, making it a pragmatic alternative that Signal users are more likely to actually use.
                </p>
              </div>
            </div>
            <div className="basis-6/12 space-y-6">
              <div>
                <h3>Will Signal actually do this?</h3>
                <p>
                  That depends on community demand. This site and the proof-of-concept are advocacy
                  tools to show Signal that there's real interest. If enough users, developers, and privacy
                  advocates speak up, Signal may consider integrating Cashu or a similar bitcoin privacy solution.
                </p>
              </div>

              <div>
                <h3>How can I help?</h3>
                <p>
                  Share this site, contact Signal to express interest, try the proof-of-concept fork when it's
                  available, and if you're a developer, contribute to the code or the broader Cashu ecosystem.
                  The more momentum we build, the more likely this becomes a reality.
                </p>
              </div>
            </div>
          </div>
        </div>
          
        <div className="pt-24 pb-24 pl-12 pr-12 max-w-4xl text-center space-y-4 flex flex-col items-center container mx-auto max-w-screen-lg">
          <h2 className="text-signal-blue">Join the Movement</h2>
          <p className="text-xl">
            This is a grassroots advocacy campaign to bring private bitcoin payments to Signal.
            Follow updates, contribute code, and join the conversation.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#3C3744] text-[#E9E9E9] py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Left Section - Copyright and Info */}
            <div className="lg:col-span-2 space-y-4">
              <p className="text-sm text-[#E9E9E9]">
                © 2025 Bitcoin for Signal. This is a grassroots advocacy campaign, not an official Signal or Cashu project.
              </p>
              <p className="text-sm text-[#E9E9E9]">
                "Signal", Signal logos, and other trademarks are trademarks or registered trademarks of Signal Technology Foundation.
              </p>
              <p className="text-sm text-[#E9E9E9]">
                For media inquiries about this campaign, contact us at <a href="mailto:bitcoinforsignal@proton.me" className="text-[#E9E9E9] hover:text-white hover:underline transition" style={{fontWeight: 500}}>bitcoinforsignal@proton.me</a>.
              </p>
            </div>

            {/* Download Signal Column */}
            <div className="space-y-3">
              <h4 className="block font-semibold text-[#E9E9E9] mb-3" style={{fontWeight: 600, marginBottom: '12px', fontSize: '16px'}}>Download Signal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://signal.org/android" target="_blank" rel="noopener noreferrer" className="text-[#E9E9E9] hover:text-white hover:underline transition" style={{fontWeight: 500}}>Android</a></li>
                <li><a href="https://signal.org/iphone" target="_blank" rel="noopener noreferrer" className="text-[#E9E9E9] hover:text-white hover:underline transition" style={{fontWeight: 500}}>iPhone & iPad</a></li>
                <li><a href="https://signal.org/desktop" target="_blank" rel="noopener noreferrer" className="text-[#E9E9E9] hover:text-white hover:underline transition" style={{fontWeight: 500}}>Windows</a></li>
                <li><a href="https://signal.org/desktop" target="_blank" rel="noopener noreferrer" className="text-[#E9E9E9] hover:text-white hover:underline transition" style={{fontWeight: 500}}>Mac</a></li>
                <li><a href="https://signal.org/desktop" target="_blank" rel="noopener noreferrer" className="text-[#E9E9E9] hover:text-white hover:underline transition" style={{fontWeight: 500}}>Linux</a></li>
              </ul>
            </div>

            {/* Cashu Resources Column */}
            <div className="space-y-3">
              <h4 className="block font-semibold text-[#E9E9E9] mb-3" style={{fontWeight: 600, marginBottom: '12px', fontSize: '16px'}}>Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://cashu.space" target="_blank" rel="noopener noreferrer" className="text-[#E9E9E9] hover:text-white hover:underline transition" style={{fontWeight: 500}}>Cashu Official Website</a></li>
                <li><a href="https://github.com/cashubtc" target="_blank" rel="noopener noreferrer" className="text-[#E9E9E9] hover:text-white hover:underline transition" style={{fontWeight: 500}}>Cashu GitHub</a></li>
                <li><a href="https://cashubtc.github.io/nuts" target="_blank" rel="noopener noreferrer" className="text-[#E9E9E9] hover:text-white hover:underline transition" style={{fontWeight: 500}}>Cashu Documentation</a></li>
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
