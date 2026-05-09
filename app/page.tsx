'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { FaChevronDown, FaYoutube, FaFacebookF, FaInstagram, FaTiktok, FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaBars, FaTimes, FaPlay } from 'react-icons/fa'
import { Poppins, Dancing_Script } from 'next/font/google'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/effect-fade'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  variable: '--font-poppins'
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing'
})

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const socials = [
    { icon: FaYoutube, link: "https://youtube.com/@rodolphduvent9084", label: "YouTube" },
    { icon: FaFacebookF, link: "https://facebook.com/rodolphduvent", label: "Facebook" },
    { icon: FaInstagram, link: "https://instagram.com/rodolphduvent", label: "Instagram" },
    { icon: FaTiktok, link: "https://tiktok.com/@rodolphduvent", label: "TikTok" },
  ]

  const menuLinks = [
    { nom: "ACCUEIL", href: "#" },
    { nom: "À PROPOS", href: "#apropos" },
    { nom: "MESSAGES", href: "#messages" },
    { nom: "MESSAGE AUDIO", href: "#message-audio" },
    { nom: "ÉGLISE", href: "#eglise" },
    { nom: "CONTACT", href: "#contact" },
  ]

  const cultes = [
    { jour: "MERCREDI", heure: "19H00 - 20H30", type: "CULTE D'ENSEIGNEMENT" },
    { jour: "VENDREDI", heure: "19H00 - 20H30", type: "CULTE D'INTERCESSION" },
    { jour: "DIMANCHE", heure: "09H00 - 12H30", type: "CULTE D'ADORATION" },
    { jour: "DIMANCHE", heure: "14H30 - 17H00", type: "CULTE DES JEUNES" },
  ]

  const slides = [
    {
      image: "/slide1.jpg",
      titre: "RODOLPH-DUVENT",
      sousTitre: "BIENVENUE SUR MON SITE",
      bouton: false
    },
    {
      image: "/slide2.jpg",
      titre: "QUI EST RODOLPH-DUVENT?",
      texte: "Rodolph-Duvent est le Pasteur Principal de l'Assemblée de Dieu de la Réconciliation, aussi appelée ADR Church, située au quartier Nialy à Libreville, Gabon.",
      texteComplet: `Rodolph-Duvent est le Pasteur Principal de l'Assemblée de Dieu de la Réconciliation, aussi appelée ADR Church, située au quartier Nialy à Libreville, Gabon.

Il est un prédicateur qui marque sa génération par le message de la Sainteté. Son fardeau est de ramener la Sainteté de Dieu au milieu du peuple de Dieu par la démonstration de puissance de Dieu, signes, prodiges et miracles.

Sa phrase : "Ne méprise personne, car la grâce transforme!"

Il est l'auteur de la célèbre vidéo TikTok : "La beauté ne rime pas forcément avec impudicité mais la beauté peut rimer avec Sainteté."

Il prêche l'Évangile gratuitement et partage ses messages sur YouTube, Facebook, Instagram et TikTok.`,
      bouton: true,
      boutonText: "Voir plus",
      showSocials: true
    },
    {
      image: "/slide3.jpg",
      titre: "LE MESSAGE DE LA SAINTETÉ",
      texte: "Recherchez la sanctification, sans laquelle personne ne verra le Seigneur. Hébreux 12:14",
      bouton: true,
      boutonText: "ÉCOUTER LA PAROLE",
      boutonLink: "#messages"
    }
  ]

  return (
    <main className={`${poppins.className} bg-white`}>

      <header className="fixed top-0 w-full bg-black z-50 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-white text-xl tracking-wider flex items-baseline gap-1">
            <span className="font-black">RODOLPH</span>
            <span className={`${dancing.className} text-2xl font-bold`}>Duvent</span>
          </h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-[#C9A961] p-3 z-[60] relative"
          >
            {menuOpen? <FaTimes className="text-black text-xl" /> : (
              <>
                <div className="w-6 h-0.5 bg-black mb-1"></div>
                <div className="w-6 h-0.5 bg-black mb-1"></div>
                <div className="w-6 h-0.5 bg-black"></div>
              </>
            )}
          </button>
        </div>
      </header>

      <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-black z-40 transition-transform duration-500 ${menuOpen? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-24 px-8">
          <nav className="flex flex-col gap-6">
            {menuLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl font-bold hover:text-[#C9A961] transition border-b border-white/10 pb-4"
              >
                {link.nom}
              </a>
            ))}
          </nav>

          <div className="flex gap-6 mt-12">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white hover:text-[#C9A961] transition text-2xl"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-30"
        ></div>
      )}

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">
              <Image
                src={slide.image}
                alt={slide.titre}
                fill
                className="object-cover object-center"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/60"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
                <h2 className="text-5xl md:text-8xl font-black mb-6 max-w-5xl leading-tight">
                  {slide.titre}
                </h2>

                {slide.sousTitre && (
                  <p className="text-base md:text-lg tracking-[0.4em] mb-10 font-light uppercase">
                    {slide.sousTitre}
                  </p>
                )}

                {slide.texte && (
                  <p className="text-lg md:text-xl max-w-3xl mb-10 leading-relaxed font-light">
                    {slide.texte}
                  </p>
                )}

                {slide.bouton? (
                  <div className="flex flex-col items-center gap-6">
                    {slide.boutonLink? (
                      <a
                        href={slide.boutonLink}
                        className="bg-white text-black py-4 px-10 font-bold tracking-widest hover:bg-[#C9A961] transition uppercase text-xs"
                      >
                        {slide.boutonText}
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          const modal = document.getElementById('modal-bio')
                          if(modal) modal.classList.remove('hidden')
                        }}
                        className="bg-white text-black py-4 px-10 font-bold tracking-widest hover:bg-[#C9A961] transition uppercase text-xs"
                      >
                        {slide.boutonText}
                      </button>
                    )}

                    {slide.showSocials && (
                      <div className="flex gap-5 mt-2">
                        {socials.map((social, i) => (
                          <a
                            key={i}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="text-white hover:text-[#C9A961] transition text-xl"
                          >
                            <social.icon />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <FaChevronDown className="text-3xl animate-bounce mt-12" />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div id="modal-bio" className="hidden fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-6">
        <div className="bg-white max-w-3xl max-h-[90vh] overflow-y-auto p-8 md:p-12 relative">
          <button
            onClick={() => document.getElementById('modal-bio')?.classList.add('hidden')}
            className="absolute top-4 right-4 text-3xl text-[#0A1F44] hover:text-[#C9A961]"
          >
            ×
          </button>
          <h3 className="text-4xl font-black text-[#0A1F44] mb-6">QUI EST RODOLPH-DUVENT?</h3>
          <div className="w-24 h-px bg-[#C9A961] mb-8"></div>
          <div className="text-gray-700 leading-8 whitespace-pre-line font-light text-lg mb-8">
            {slides[1].texteComplet}
          </div>

          <div className="flex gap-6 pt-6 border-t border-gray-200">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-[#0A1F44] hover:text-[#C9A961] transition text-2xl"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <section id="messages" className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-[#0A1F44] mb-6">
              DERNIERS MESSAGES
            </h2>
            <div className="w-24 h-px bg-[#C9A961] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Découvrez les dernières prédications du Pasteur Rodolph-Duvent sur la Sainteté
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative aspect-video bg-black overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/e8QE9hzXnuc"
                title="Message 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="relative aspect-video bg-black overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/wpf-7sJprpo"
                title="Message 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="relative aspect-video bg-black overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/AZZIfxrWaeQ"
                title="Message 3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="relative aspect-video bg-black overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/iuATMiJQEck"
                title="Message 4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://youtube.com/@rodolphduvent9084"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0A1F44] text-white py-4 px-10 font-bold tracking-widest hover:bg-[#C9A961] hover:text-black transition uppercase text-xs"
            >
              VOIR TOUTES LES PRÉDICATIONS
            </a>
          </div>
        </div>
      </section>

      {/* SECTION MESSAGE AUDIO/VIDÉO LOCAL */}
      <section id="message-audio" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-[#0A1F44] mb-6">
              MESSAGE À ÉCOUTER
            </h2>
            <div className="w-24 h-px bg-[#C9A961] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Écoutez le dernier message du Pasteur Rodolph-Duvent
            </p>
          </div>

          <div className="relative aspect-video bg-black overflow-hidden shadow-2xl">
            <video
              className="w-full h-full"
              controls
              poster="/slide2.jpg"
              preload="metadata"
            >
              <source src="/message.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-3 bg-[#F5F5F5] px-8 py-4">
              <FaPlay className="text-[#C9A961] text-xl" />
              <p className="text-[#0A1F44] font-bold tracking-wider">
                "NE MÉPRISE PERSONNE, CAR LA GRÂCE TRANSFORME!"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="eglise" className="py-24 px-6 bg-[#0A1F44] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              ADR CHURCH NIALY
            </h2>
            <div className="w-24 h-px bg-[#C9A961] mx-auto mb-8"></div>
            <p className="text-lg font-light max-w-2xl mx-auto text-gray-300">
              Assemblée de Dieu de la Réconciliation - Libreville, Gabon
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
                <FaClock className="text-[#C9A961]" />
                PROGRAMME DES CULTES
              </h3>
              <div className="space-y-4">
                {cultes.map((culte, i) => (
                  <div key={i} className="bg-white/5 border-l-4 border-[#C9A961] p-6 hover:bg-white/10 transition">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[#C9A961] font-black text-sm tracking-wider">{culte.jour}</span>
                      <span className="text-white font-bold">{culte.heure}</span>
                    </div>
                    <p className="text-lg font-light">{culte.type}</p>
                  </div>
                ))}

                <div className="bg-[#C9A961]/20 border-l-4 border-[#C9A961] p-6 mt-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[#C9A961] font-black text-sm tracking-wider">LUNDI - VENDREDI</span>
                    <span className="text-white font-bold">05H00 - 05H30</span>
                  </div>
                  <p className="text-lg font-light">PRIÈRES MATINALES</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-black mb-8">NOUS CONTACTER</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FaPhone className="text-[#C9A961] text-2xl mt-1" />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Téléphone</p>
                    <a href="tel:+24174390509" className="text-xl font-bold hover:text-[#C9A961] transition">
                      +241 74 39 05 09
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-[#C9A961] text-2xl mt-1" />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Adresse</p>
                    <p className="text-xl font-bold">NIALY, AVANT LE CONTENEUR</p>
                    <p className="text-gray-300">Libreville, Gabon</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Nialy+Libreville+Gabon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10 bg-white text-[#0A1F44] py-4 px-10 font-bold tracking-widest hover:bg-[#C9A961] transition uppercase text-xs"
              >
                VOIR SUR GOOGLE MAPS
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-[#0A1F44] mb-6">
              CONTACTEZ-NOUS
            </h2>
            <div className="w-24 h-px bg-[#C9A961] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 font-light">
              Une question? Une demande de prière? Écrivez-nous
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full border border-gray-300 px-6 py-4 focus:outline-none focus:border-[#C9A961] transition"
              />
              <input
                type="email"
                placeholder="Votre email"
                className="w-full border border-gray-300 px-6 py-4 focus:outline-none focus:border-[#C9A961] transition"
              />
            </div>
            <input
              type="text"
              placeholder="Sujet"
              className="w-full border border-gray-300 px-6 py-4 focus:outline-none focus:border-[#C9A961] transition"
            />
            <textarea
              placeholder="Votre message"
              rows={6}
              className="w-full border border-gray-300 px-6 py-4 focus:outline-none focus:border-[#C9A961] transition resize-none"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#0A1F44] text-white py-4 px-12 font-bold tracking-widest hover:bg-[#C9A961] hover:text-black transition uppercase text-xs"
              >
                ENVOYER LE MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            <div>
              <h3 className="text-2xl tracking-wider flex items-baseline gap-1 mb-4">
                <span className="font-black">RODOLPH</span>
                <span className={`${dancing.className} text-3xl font-bold`}>Duvent</span>
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Pasteur Principal de l'Assemblée de Dieu de la Réconciliation.<br />
                Le message de la Sainteté pour cette génération.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-[#C9A961]">LIENS RAPIDES</h4>
              <nav className="flex flex-col gap-3">
                {menuLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="text-gray-400 hover:text-[#C9A961] transition font-light"
                  >
                    {link.nom}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-[#C9A961]">SUIVEZ-NOUS</h4>
              <div className="flex gap-4 mb-6">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white hover:text-[#C9A961] transition text-2xl"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-[#C9A961]" />
                <span className="font-light">contact@rodolphduvent.com</span>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-500 font-light text-sm">
              © 2026 ADR Church Nialy. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>

    </main>
  )
}