import Links from '@/components/links'
import PlausibleProvider from 'next-plausible'

export default function Home() {
  return (
    <PlausibleProvider domain="nicolagheza.com">
      <div className="font-base">
        <h1 className="text-2xl font-heading sm:text-4xl">Nicode</h1>
        <p className="mt-2 text-lg sm:text-xl">
          Data Science &amp; Artificial Intelligence
        </p>

        <div className="mt-8 text-base sm:text-lg">
          <p>
            Hi, my name is Nicola Gheza, but you can call me <u>Nicode!</u>
          </p>
          <p>I am a software engineer based in Valle Camonica, Italy 🏔️🇮🇹.</p>
        </div>
        <Links />
      </div>
    </PlausibleProvider>
  )
}
