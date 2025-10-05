import Head from "next/head";
import {
  BitcoinCircleIcon,
  MenuIcon
} from "@bitcoin-design/bitcoin-icons-react/filled";
import { BitcoinCircleIcon as BitcoinCircleIconOutline } from "@bitcoin-design/bitcoin-icons-react/outline";
import React from "react";

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
        <title>Cashu for Signal - Private Bitcoin Payments</title>
        <meta
          name="description"
          content="Signal should integrate Cashu ecash for private, peer-to-peer bitcoin payments. Built at Bitcoin++ Lightning Hackathon in Berlin."
        />
        <meta property="og:image" content="/signal-cashu-poster.jpg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="Cashu for Signal - Private Bitcoin Payments" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bitcoin_design" />
        <meta name="twitter:creator" content="@bitcoin_design" />
        <meta name="twitter:title" content="Cashu for Signal - Private Bitcoin Payments" />
        <meta name="twitter:description" content="Signal should integrate Cashu ecash for private, peer-to-peer bitcoin payments. Built at Bitcoin++ Lightning Hackathon in Berlin." />
        <meta name="twitter:image" content="/signal-cashu-poster.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div id="header-container" className="deactivated transparent">
        <div id="nav-overlay" className="fixed w-full h-full bg-white z-[47] lg:hidden deactivated" onClick={toggleMenu}></div>

        <header className="fixed top-0 w-full left-0 z-[48] lg:flex lg:flex-row lg:bg-white lg:justify-center lg:items-center">
          <div className="controls flex flex-row justify-between p-4 bg-white z-[50] relative">
            <a href="/">
              <BitcoinCircleIconOutline className="logo text-black w-12 h-12 lg:w-8 lg:h-8" />
              <span className="sr-only">Cashu for Signal</span>
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
        <div className="hero text-center text-white flex items-center justify-center flex-col w-full p-12 pt-16 h-screen lg:p-36">
          <div className="min-w-[156px] min-h-[156px]">
            <BitcoinCircleIcon
              style={{ width: "156px", height: "156px" }}
              className="mb-12 drop-shadow-md"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-12 drop-shadow-md">
            Bitcoin Belongs in Signal
          </h1>

          <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium drop-shadow-md mb-24 max-w-5xl">
            Private messaging meets private money.
            Cashu ecash enables truly private bitcoin payments
            inside the world's most trusted encrypted messenger.
          </h3>

          <svg width="78" height="126" viewBox="0 0 78 126" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md hero-scroll min-w-[96px] min-h-[126px]">
            <path d="M42 14C42 12.3431 40.6569 11 39 11C37.3431 11 36 12.3431 36 14H42ZM36.8787 101.121C38.0503 102.293 39.9497 102.293 41.1213 101.121L60.2132 82.0294C61.3848 80.8579 61.3848 78.9584 60.2132 77.7868C59.0416 76.6152 57.1421 76.6152 55.9706 77.7868L39 94.7574L22.0294 77.7868C20.8579 76.6152 18.9584 76.6152 17.7868 77.7868C16.6152 78.9584 16.6152 80.8579 17.7868 82.0294L36.8787 101.121ZM36 14V99H42V14H36Z" fill="white"/>
          </svg>
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
              <img src="problem-ui.svg" alt="Signal needs private bitcoin" className="xl:w-8/12" />
            </div>
          </section>

          <section>
            <div className="basis-6/12 space-y-4 flex justify-center flex-col">
              <h2 className="text-signal-primary" id="solution">The Solution</h2>

              <h3>Cashu Ecash + Signal = Private Bitcoin Payments</h3>

              <p>
                At the Bitcoin++ Lightning Hackathon in Berlin, two developers built a working fork of Signal
                that natively integrates <a href="https://cashu.space">Cashu ecash</a>.
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
              <img src="single-qr.svg" alt="Cashu + Signal integration" className="xl:w-8/12" />
            </div>
          </section>

          <section>
            <div className="basis-6/12 space-y-4 flex flex-col justify-center">
              <h2 className="text-signal-blue" id="privacy">Privacy Deep Dive</h2>

              <h3>Why Cashu is a perfect match for Signal</h3>

              <p>
                Signal's mission is to protect privacy. End-to-end encryption ensures that no one &mdash; not even
                Signal &mdash; can read your messages. Cashu ecash extends this same principle to money.
              </p>

              <p>
                <strong>Chaumian blind signatures</strong> mean that when you mint ecash tokens, the mint cannot
                link those tokens back to you when you later spend them. This is cryptographic privacy, not just
                anonymity through obscurity.
              </p>

              <p>
                <strong>No metadata leakage.</strong> Bitcoin's base layer exposes amounts, addresses, and timing.
                Lightning is better, but still reveals payment channel relationships. Cashu tokens can be sent
                peer-to-peer with zero on-chain footprint and no revealing metadata.
              </p>

              <p>
                This integration doesn't compromise Signal's privacy guarantees &mdash; it extends them to financial
                transactions. Your messages are private. Your payments should be too.
              </p>
            </div>
            <div className="basis-6/12 flex justify-center p-6">
              <div className="bg-bpr-orange w-[240px] h-[240px] md:w-[340px] md:h-[340px]">
                <img src="qr-bip21-bolt11.png" alt="Privacy illustration" className="drop-shadow-xl rotate-[-12deg]" />
              </div>
            </div>
          </section>

          <div className="pt-12 pb-12 text-center space-y-8">
            <h2 className="text-signal-blue" id="demo">See It In Action</h2>

            <p className="max-w-4xl mx-auto">
              The Signal + Cashu fork was built during the Bitcoin++ Lightning Hackathon in Berlin.
              Below are placeholders for demo videos and screenshots showcasing the integration.
            </p>

            <div className="flex flex-col space-y-8 md:flex-row md:space-x-6 md:space-y-0 pb-12 lg:justify-around">
              <div className="basis-6/12 lg:basis-5/12 xl:basis-4/12">
                <div className="flex flex-col items-center space-y-4 px-4">
                  <h4 className="font-semibold text-signal-text-strong">Demo Video</h4>
                  <div className="bg-signal-bg border border-signal-border-weak w-full aspect-video flex items-center justify-center rounded-md shadow-sm">
                    <p className="text-signal-text-weak text-sm">[Video placeholder: Sending Cashu ecash in Signal]</p>
                  </div>
                  <p className="text-left text-signal-text">Watch how seamlessly users can send bitcoin ecash tokens directly in their Signal conversations.</p>
                </div>
              </div>
              <div className="basis-6/12 lg:basis-5/12 xl:basis-4/12">
                <div className="flex flex-col items-center space-y-4 px-4">
                  <h4 className="font-semibold text-signal-text-strong">Screenshots</h4>
                  <div className="bg-signal-bg border border-signal-border-weak w-full aspect-video flex items-center justify-center rounded-md shadow-sm">
                    <p className="text-signal-text-weak text-sm">[Screenshot placeholder: Signal chat with Cashu payment]</p>
                  </div>
                  <p className="text-left text-signal-text">The UI is clean and native to Signal, making bitcoin payments feel as natural as sending a message.</p>
                </div>
              </div>
            </div>
          </div>

          <section>
            <div className="basis-6/12 space-y-4 flex flex-col justify-center">
              <h2 className="text-signal-blue" id="how">How It Works</h2>

              <h3>Technical Overview for Developers</h3>

              <p>
                The Signal + Cashu integration built at the Berlin hackathon works by embedding a lightweight
                Cashu wallet directly into the Signal app. Users connect to a Cashu mint (which acts as a
                custodian for bitcoin) and can mint, send, and receive ecash tokens.
              </p>

              <p>
                <strong>Sending payments:</strong> Users select an amount, the app generates a Cashu token, and
                sends it as an encrypted message. The recipient's Signal app automatically detects the token and
                adds it to their balance.
              </p>

              <p>
                <strong>Privacy mechanics:</strong> The mint uses blind signatures to ensure it cannot link tokens
                to specific users. Signal's end-to-end encryption ensures that metadata about payments stays private.
              </p>

              <p>
                <strong>Open source:</strong> The proof-of-concept code is available for developers to review,
                test, and build upon. Learn more about the <a href="https://cashu.space">Cashu protocol</a> and
                the <a href="https://github.com/cashubtc">Cashu specification</a>.
              </p>
            </div>
            <div className="basis-6/12 flex justify-center p-6">
              <div className="bg-bpr-orange w-[240px] h-[240px] md:w-[340px] md:h-[340px]">
                <div className="bg-white p-4 drop-shadow-xl rotate-[-12deg] flex items-center justify-center">
                  <p className="text-sm text-gray-700">[Diagram placeholder: Cashu flow in Signal]</p>
                </div>
              </div>
            </div>
          </section>

          <div className="flex justify-center p-12 mb-8">
            <div className="bg-signal-bg border border-signal-border-weak w-full max-w-4xl p-12 rounded-md text-center shadow-sm">
              <p className="text-signal-text-weak">[Flowchart placeholder: How Cashu tokens flow between Signal users]</p>
            </div>
          </div>
        </div>

        <div className="md:p-12 flex flex-col md:items-center space-y-8 p-4 mx-auto mb-8">
          <h2 className="text-signal-primary" id="action">Take Action</h2>

          <p className="max-w-screen-sm md:text-center text-xl">
            This proof-of-concept demonstrates that Cashu + Signal is technically feasible.
            Now we need to show Signal that there's demand for this integration.
          </p>

          <div className="max-w-screen-lg pt-8 space-y-6">
            <div className="bg-white border border-signal-border-weak p-8 rounded-md shadow-sm space-y-4 transition-shadow duration-300 hover:shadow-md">
              <h3 className="text-2xl font-semibold text-signal-text-strong">For Signal Users</h3>
              <ul className="list-disc ml-6 space-y-2 text-signal-text">
                <li>Share this site with your Signal contacts and on social media</li>
                <li>Contact Signal support and express your interest in bitcoin payments</li>
                <li>Try the Signal + Cashu fork (link to come) and provide feedback</li>
                <li>Advocate for privacy-preserving bitcoin integration in Signal forums</li>
              </ul>
            </div>

            <div className="bg-white border border-signal-border-weak p-8 rounded-md shadow-sm space-y-4 transition-shadow duration-300 hover:shadow-md">
              <h3 className="text-2xl font-semibold text-signal-text-strong">For Developers</h3>
              <ul className="list-disc ml-6 space-y-2 text-signal-text">
                <li>Review the Signal + Cashu proof-of-concept code (repository link to come)</li>
                <li>Test the fork and contribute improvements</li>
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
              <p className="mt-4 text-signal-text">
                The hackathon proof-of-concept shows this is technically viable. Let's make it a reality.
              </p>
            </div>
          </div>

          <div className="pt-8 text-center space-y-4">
            <h3 className="text-2xl">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://cashu.space">
                  Cashu Protocol Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/cashubtc">
                  Cashu GitHub Organization
                </a>
              </li>
              <li>
                <a href="#">
                  Signal + Cashu Fork Repository (coming soon)
                </a>
              </li>
              <li>
                <a href="#">
                  Open Letter to Signal (coming soon)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-12 max-w-screen-xl">
          <h2 className="text-signal-blue mb-4" id="faq">FAQ</h2>
          <div className="flex flex-col md:flex-row m-0 gap-8 md:gap-16">
            <div className="basis-6/12 space-y-6">
              <div>
                <h3>Isn't Cashu custodial?</h3>
                <p>
                  Yes, Cashu mints hold the underlying bitcoin. However, the privacy guarantees are strong:
                  the mint cannot see who owns which tokens due to blind signatures. For small, everyday payments
                  (like you'd make in a messenger), this tradeoff is reasonable &mdash; similar to keeping cash in
                  your physical wallet vs. a bank vault.
                </p>
              </div>

              <div>
                <h3>What about regulatory concerns?</h3>
                <p>
                  Signal is a nonprofit focused on privacy and open-source technology. Cashu ecash is fundamentally
                  a tool for privacy, not for money transmission at the Signal level. Users hold their own tokens
                  and interact with mints directly. Signal would simply provide the interface, similar to how they
                  provide encrypted messaging without reading messages.
                </p>
              </div>

              <div>
                <h3>Why not use Lightning directly?</h3>
                <p>
                  Lightning provides fast bitcoin payments, but it has privacy limitations: payment routing can leak
                  metadata about senders and receivers. Cashu ecash provides superior privacy through blind signatures,
                  making it a better fit for Signal's privacy mission. That said, Cashu is built on top of Lightning,
                  so this integration benefits from Lightning's infrastructure.
                </p>
              </div>
            </div>
            <div className="basis-6/12 space-y-6">
              <div>
                <h3>How is this different from MobileCoin?</h3>
                <p>
                  MobileCoin is a separate blockchain with its own cryptocurrency. Bitcoin is the world's most
                  liquid and widely-adopted cryptocurrency with deep infrastructure and network effects. Cashu
                  brings strong privacy to bitcoin, making it a pragmatic alternative that Signal users are
                  more likely to actually use.
                </p>
              </div>

              <div>
                <h3>Will Signal actually do this?</h3>
                <p>
                  That depends on community demand. This site and the hackathon proof-of-concept are advocacy
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
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://github.com/cashubtc">
              <div className="border-2 border-signal-blue px-6 py-3 text-lg text-signal-blue hover:bg-signal-blue hover:text-white transition rounded-md font-medium">
                GitHub
              </div>
            </a>
            <a href="https://t.me/CashuBTC">
              <div className="border-2 border-signal-blue px-6 py-3 text-lg text-signal-blue hover:bg-signal-blue hover:text-white transition rounded-md font-medium">
                Telegram
              </div>
            </a>
            <a href="https://discord.gg/qKadAAQH">
              <div className="border-2 border-signal-blue px-6 py-3 text-lg text-signal-blue hover:bg-signal-blue hover:text-white transition rounded-md font-medium">
                Discord
              </div>
            </a>
          </div>
          <p className="text-sm text-signal-text-light pt-8">
            Built with ❤️ by the Bitcoin privacy community • Proof-of-concept from Bitcoin++ Berlin
          </p>
        </div>
      </main>
    </div>
  );
}
