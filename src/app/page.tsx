'use client'
import React from "react";
import { FaqItem } from "./faqItem";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const navigation = [
    { name: 'The Future of Art', href: '#futureOfArt', current: false },
    { name: 'FAQ', href: '#faq', current: false },
    { name: 'Collaborators', href: '#collaborators', current: false },
]


function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const pieces = [
    {
        id: 1,
        name: '3228',
        href: '#',
        artist: 'Crazy Skulls',
        imageSrc: '/skull.png',
        imageAlt: 'En el año 3228, la humanidad nalmente logró los ansiados viajes interestelares, llegando a una galaxia remota después de décadas de espera. Sin embargo, la alegría se desvaneció al darse cuenta de que estaban perdidos en el espacio profundo, fuera del alcance de la Tierra.',
        description: 'En el año 3228, la humanidad nalmente logró los ansiados viajes interestelares, llegando a una galaxia remota después de décadas de espera. Sin embargo, la alegría se desvaneció al darse cuenta de que estaban perdidos en el espacio profundo, fuera del alcance de la Tierra.',
        instagram: 'https://www.instagram.com/crazyskulls.eth/',
        twitter: 'https://twitter.com/MaradiagaElias'
    },
    {
        id: 2,
        name: 'Emission Echoes',
        href: '#',
        artist: 'John Mackay / Sucito',
        imageSrc: '/retrowave.gif',
        imageAlt: 'Como olvidar el siempre honesto canal cero tvhn',
        description: 'Como olvidar el siempre honesto canal cero tvhn',
        twitter: "https://twitter.com/sucito_eth",
    },
    {
        id: 3,
        name: 'Sacerdote Maya',
        href: '#',
        artist: 'The Z',
        imageSrc: '/graf.jpeg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        web: "https://www.behance.net/eezelaya",
        instagram: 'https://www.instagram.com/Erick_zelaya/'

    },
    {
        id: 4,
        name: 'CITYSCAPE',
        href: '#',
        artist: 'Stupid Giant',
        imageSrc: '/daily.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        web: "https://linktr.ee/stupidgiant",
        twitter: "https://twitter.com/giantstupid",
        instagram: "https://www.instagram.com/stupidgiant/",
    },
    {
        id: 5,
        name: 'Techno Sun',
        href: '#',
        artist: 'Enmanuel',
        imageSrc: '/TechnoSun.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        instagram: 'https://instagram.com/enmanuel_ehc'
    },
    {
        id: 6,
        name: 'ELLA',
        href: '#',
        artist: 'Legan Rooster',
        imageSrc: '/legan.jpg',
        imageAlt: 'Estás piezas describen el maltrato emocional que hemos recibido por años  desde distintos sectores de poder hasta de una persona desconocid al final todos tenemos este mismo sentir.',
        instagram: "https://www.instagram.com/leganrooster/",
    },
    {
        id: 7,
        name: 'Un Rincón',
        href: '#',
        artist: 'Jess Bits',
        imageSrc: '/rincon.gif',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        instagram: 'https://www.instagram.com/jess.bits/',
        twitter: 'https://twitter.com/JessBits_',
    },
    {
        id: 8,
        name: 'Invasivo Lion Fish',
        href: '#',
        artist: 'Doris Cruz',
        imageSrc: '/pezleon.gif',
        imageAlt: 'Especie invasiva de sorprendente belleza, habitante de nuestros arrecifes la cual debe ser combatida por su único depredador, el ser humano.Esta obra presenta la abstraccion de las aletas de está especie, tratando de penetrar la mente humana, haciéndose visible y real. ',
        description: 'Especie invasiva de sorprendente belleza, habitante de nuestros arrecifes la cual debe ser combatida por su único depredador, el ser humano.Esta obra presenta la abstraccion de las aletas de está especie, tratando de penetrar la mente humana, haciéndose visible y real. ',
        instagram: 'https://www.instagram.com/doris_4rt/',
    },
    {
        id: 9,
        name: 'Save The Drama For Your MAMA!',
        href: '#',
        artist: 'Ahhsun',
        imageSrc: '/savethedrama.gif',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        instagram: 'https://www.instagram.com/ahhsun_/',
        twitter: 'https://twitter.com/ahhsun_',
    },
    {
        id: 10,
        name: 'Si la Economía Circula...',
        href: '#',
        artist: 'Estudio Coralino',
        imageSrc: '/coralino.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        instagram: 'https://www.instagram.com/recrea_coralino/',
    },
    {
        id: 11,
        name: ' Ain Soph Aur',
        href: '#',
        artist: 'Hector Díaz',
        imageSrc: '/ain.jpeg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        twitter: "https://twitter.com/ainsophaurnfts",
        instagram: "https://instagram.com/xainsophaurx"

    },
    // More pieces...

]

export default function Example() {
    return (
        <>
            {/*
            This example requires updating your template:

            ```
            <html className="h-full bg-gray-100">
            <body className="h-full">
            ```
          */}
            <div className="min-h-full">
                {/* Nav */}
                <Disclosure as="nav" className="bg-purple">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <Image
                                                // className="h-8 w-8"
                                                src="/logo.png"
                                                alt="Your Company"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-purple-light text-white'
                                                                : 'text-white hover:bg-purple-dark hover:text-white',
                                                            'rounded-md px-3 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-purple-dark p-2 text-white hover:bg-purple-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                {/* Art pieces */}
                <main id="futureOfArt">

                    <div className="bg-white">
                        <header className="bg-white">
                            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-center ">
                                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl mt-4">The Future of Art Exhibition</h2>
                                <p className="max-w-xl mx-auto mt-4 mb-6 text-base leading-relaxed text-gray-600">The culmination of the physical exhibition at the MIN Museum </p>
                            </div>
                        </header>
                        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mb-12">
                                {pieces.map((piece) => (
                                    <div key={piece.id}>
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                            {/* <a href={piece.href} className="group">
                                                <Image
                                                    src={piece.imageSrc}
                                                    alt={piece.imageAlt}
                                                    width={500}
                                                    height={500}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </a> */}


                                            <Image
                                                src={piece.imageSrc}
                                                alt={piece.imageAlt}
                                                width={500}
                                                height={500}
                                                className="h-full w-full object-cover object-center"
                                                unoptimized={true}
                                            />

                                        </div>
                                        <h3 className="mt-4 text-sm text-gray-700">{piece.name}
                                            {/* <a
                                                href="#"
                                                className="rounded-md bg-purple px-2.5 py-1.5 float-right text-sm font-semibold text-white shadow-sm hover:bg-purple-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-dark"

                                            >
                                                Mint
                                            </a> */}
                                            <button
                                                // href="#"
                                                className="rounded-md bg-gray-300 px-2.5 py-1.5 float-right text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-dark" disabled

                                            >
                                                Mint
                                            </button>
                                        </h3>
                                        <p className="mt-1 text-lg font-medium text-gray-900">{piece.artist}</p>
                                        <div className=''>
                                            {piece.web && (
                                                <a href={piece.web} target='blank'>
                                                    <FontAwesomeIcon icon={faGlobe} size='xl' className='mr-2 hover:opacity-75' /></a>
                                            )}
                                            {piece.twitter && (
                                                <a href={piece.twitter} target='blank'> <FontAwesomeIcon icon={faXTwitter} size='xl' className='mr-2 hover:opacity-75' /></a>
                                            )}
                                            {piece.instagram && (
                                                <a href={piece.instagram} target='blank'>  <FontAwesomeIcon icon={faInstagram} size='xl' className='hover:opacity-75' /></a>
                                            )}
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>

                {/* FAQ */}
                <section className="py-15 bg-gray-50 sm:py-16 lg:py-12 " id="faq">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Didn’t find the answer you are looking for? <a href="https://twitter.com/EthereumHN" target="blank" title="" className="font-medium text-celeste transition-all duration-200 hover:text-celeste-dark focus:text-celeste hover:underline">Contact us on 𝕏 </a></p>
                        </div>

                        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-12">

                            <FaqItem header={" What is The Future of Art Exhibition?"} isHidden={false} text={<><p>As part of our  <a href="https://www.proof.xyz/society/proposals/74e751c0-08e7-4004-869d-0dd47cba1852" target="_blank" title="" className="font-medium text-celeste transition-all duration-200 hover:text-celeste-dark focus:text-celeste hover:underline"> Moonbird’s Lunar Society Proposal</a>, we partnered with the Museo para la Identidad Nacional (MIN), intending to onboard artists into Web3 and NFTs by providing a complete learning experience through a series of interactive workshops in two different cities in Honduras which had a physical art exhibition at the museum where <b className="text-purple">11 artists</b> showcased <b className="text-purple">3 art pieces each</b>.</p><br></br><p>We wanted to provide to the <b className="text-purple">Honduran & Moonbirds </b> communities the opportunity to mint pieces that were showcased in the exhibition. Each artist picked <b className="text-purple">one piece</b>  from the exhibition which will be allowed to be minted on Zora on the <b className="text-purple">Optimism L2 Network</b>.</p></>}></FaqItem>

                            <FaqItem header={" Who can Mint?"} isHidden={true} text={<p>This is an exclusive mint, only assistants of the physical exhibition (verified by POAP), <b className="text-purple">PROOF Ecosystem</b> holders that registered in the <a href="https://www.premint.xyz/onboarding-honduran-artists/moonbirds-community-collabs/" target="_blank" className="font-medium text-celeste transition-all duration-200 hover:text-celeste-dark focus:text-celeste hover:underline">Premint</a>, volunteers, and contributors of  <b className="text-purple">Ethereum Honduras</b> will be able to mint.

                            <br></br><br></br>
                            Allowed addresses will have the opportunity to mint <b className="text-purple">2 NFTs</b> per Artist priced at <b className="text-purple">0.015 ETH</b> each piece.
                            </p>}></FaqItem>

                            <FaqItem header={" How to Mint?"} isHidden={true} text={<p>Once the mint is enabled, allowed addresses can select which pieces they want to mint. The mint will happen directly on Zora.co for <b className="text-purple">0.015 ETH</b> each piece on the Optimism Network.

                                <br></br><br></br>

                                To mint, you will need to hold ETH on the Optimism Network, to buy the pieces and pay the network fees, You can bridge ETH directly from Ethereum mainnet using the official <a href="https://app.optimism.io/bridge/deposit" target="blank" className="font-medium text-celeste transition-all duration-200 hover:text-celeste-dark focus:text-celeste hover:underline">Optimism Bridge</a> or from other networks like Polygon, Arbitrum, Gnosis using the <a href="https://bridge.connext.network/ETH-from-ethereum-to-optimism?symbol=ETH" target="blank" className="font-medium text-celeste transition-all duration-200 hover:text-celeste-dark focus:text-celeste hover:underline">Connext Bridge</a>.


                            </p>}></FaqItem>

                            <FaqItem header={" Why Optimism Network?"} isHidden={true} text={<p>Each day the adoption of Layer 2 is increasing, L2s are not the future for scaling Ethereum, they are the present. This mint presents a good opportunity for participants to learn the impact and benefits of using L2s aligned with the core principles of Ethereum and public goods funding.
                                <br></br><br></br>
                                The Optimism Network aligns perfectly with these values, also has good support to the NFT ecosystem with tools for artists like <b className="text-purple">Zora</b> and <b className="text-purple">Manifold</b>.</p>}></FaqItem>
                        </div>


                    </div>
                </section>

                {/* Sponsors */}
                <div className="bg-white py-24 sm:py-14" id="collaborators">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-center text-3xl leading-tigh text-black font-bold">
                            This event was possible thanks to the collaboration of
                        </h2>
                        <div className="mx-auto mt-14 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                            <Image
                                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                                src="/logo-black.png"
                                alt="Ethereum Honduras"
                                width={158}
                                height={48}
                            />
                            <Image
                                className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
                                src="/tgu-black.svg"
                                alt="Ethereum Tegucigalpa"
                                width={158}
                                height={48}
                            />
                            <Image
                                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                                src="/mb-black.svg"
                                alt="Moonbirds"
                                width={158}
                                height={48}
                            />
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                                src="/min-black.png"
                                alt="MIN"
                                width={158}
                                height={48}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
