# Cashu for Signal - Advocacy Site

An advocacy website promoting the integration of Cashu ecash into Signal for private, peer-to-peer bitcoin payments.

## About

This site advocates for Signal to integrate [Cashu](https://cashu.space) ecash as a replacement for their underutilized MobileCoin integration. During the Bitcoin++ Lightning Hackathon in Berlin, developers built a proof-of-concept Signal fork with native Cashu support, demonstrating the technical feasibility of this integration.

## Why Cashu + Signal?

- **Privacy-first**: Chaumian blind signatures ensure cryptographic privacy for payments, matching Signal's encrypted messaging
- **Better than MobileCoin**: Bitcoin is the world's most liquid and adopted cryptocurrency
- **No metadata leakage**: Cashu tokens can be sent peer-to-peer with zero on-chain footprint
- **Native UX**: Clean integration that feels natural within Signal conversations

## The Mission

We believe private messaging deserves private money. This site serves as:

1. An educational resource about Cashu ecash and its privacy benefits
2. A demonstration that the integration is technically viable (via the hackathon proof-of-concept)
3. A rallying point for users, developers, and privacy advocates to show Signal there's demand

## Contributing

Interested in helping make this a reality?

- **Signal users**: Share the site, contact Signal support, try the fork when available
- **Developers**: Review the proof-of-concept code, contribute improvements, build Cashu tools
- **Everyone**: Spread the word about private bitcoin payments in Signal

Learn more about [Cashu](https://cashu.space) and join the conversation on [Telegram](https://t.me/CashuBTC) or [Discord](https://discord.gg/qKadAAQH).

## Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To build a static site for deployment:

```bash
npm run build
```

Then deploy the `out` directory.

## Built With

- Next.js
- React
- Tailwind CSS
- Bitcoin Design Icons

---

**Note**: This is a grassroots advocacy campaign, not an official Signal or Cashu project. The proof-of-concept was built at Bitcoin++ Berlin to demonstrate technical feasibility.
