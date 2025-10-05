import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crypto News Hub - 仮想通貨ニュースまとめ',
  description: 'ビットコイン、イーサリアム、NFT、DeFiなど仮想通貨・ブロックチェーンの最新ニュースを毎日自動更新',
  keywords: ["仮想通貨","暗号資産","ビットコイン","イーサリアム","NFT","DeFi","ブロックチェーン"],
  openGraph: {
    title: 'Crypto News Hub - 仮想通貨ニュースまとめ',
    description: 'ビットコイン、イーサリアム、NFT、DeFiなど仮想通貨・ブロックチェーンの最新ニュースを毎日自動更新',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
