import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rodolph-Duvent - Le Message de la Sainteté | ADR Church Nialy',
  description: 'Site officiel du Pasteur Rodolph-Duvent. Pasteur Principal de l\'Assemblée de Dieu de la Réconciliation à Libreville, Gabon. Messages, prédications et enseignements sur la Sainteté.',
  keywords: 'Rodolph-Duvent, ADR Church, Sainteté, Libreville, Gabon, Prédication, Évangile, Nialy',
  authors: [{ name: 'Pasteur Rodolph-Duvent' }],
  openGraph: {
    title: 'Rodolph-Duvent - Le Message de la Sainteté',
    description: 'Site officiel du Pasteur Rodolph-Duvent - ADR Church Nialy',
    url: 'https://rodolph-duvent.com',
    siteName: 'Rodolph-Duvent',
    images: [
      {
        url: '/slide1.jpg',
        width: 1200,
        height: 630,
        alt: 'Pasteur Rodolph-Duvent',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rodolph-Duvent - Le Message de la Sainteté',
    description: 'Site officiel du Pasteur Rodolph-Duvent',
    images: ['/slide1.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}