
import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function VanguardPanelSolutionsWebsite() {

    const [formData, setFormData] = useState({
        companyName: "",
        contactPerson: "",
        businessEmail: "",
        phoneNumber: "",
        projectName: "",
        description: "",
    });


    const [files, setFiles] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        try {
            const data = new FormData();

            data.append("companyName", formData.companyName);
            data.append("contactPerson", formData.contactPerson);
            data.append("businessEmail", formData.businessEmail);
            data.append("phoneNumber", formData.phoneNumber);
            data.append("projectName", formData.projectName);
            data.append("description", formData.description);

            for (let i = 0; i < files.length; i++) {
                data.append("files", files[i]);
            }

            const response = await axios.post(
                "https://vanguardholdingslankabackend-production.up.railway.app/api/rfq/create-rfq",
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            alert("RFQ Submitted Successfully");

            console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        document.title =
            'Vanguard Panel Solutions PVT LTD | Electrical Panel Manufacturer Sri Lanka & Maldives'

        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute(
                'content',
                'Vanguard Panel Solutions PVT LTD is a leading electrical panel manufacturer in Sri Lanka and Maldives specializing in MCC panels, PCC panels, synchronization panels, AMF panels, APFC panels, automation systems, switchboards, and industrial electrical engineering solutions.'
            )
        } else {
            const meta = document.createElement('meta')
            meta.name = 'description'
            meta.content =
                'Vanguard Panel Solutions PVT LTD is a leading electrical panel manufacturer in Sri Lanka and Maldives specializing in MCC panels, PCC panels, synchronization panels, AMF panels, APFC panels, automation systems, switchboards, and industrial electrical engineering solutions.'
            document.head.appendChild(meta)
        }

        const keywords = document.querySelector('meta[name="keywords"]')
        if (keywords) {
            keywords.setAttribute(
                'content',
                'Electrical Panel Manufacturer Sri Lanka, MCC Panels Sri Lanka, PCC Panels Sri Lanka, Synchronization Panels Maldives, AMF Panels Sri Lanka, APFC Panels, Switchboard Manufacturer Sri Lanka, Industrial Automation Panels, Electrical Engineering Sri Lanka, LT Panels Sri Lanka, Generator Synchronization Panels, Vanguard Panel Solutions'
            )
        } else {
            const meta = document.createElement('meta')
            meta.name = 'keywords'
            meta.content =
                'Electrical Panel Manufacturer Sri Lanka, MCC Panels Sri Lanka, PCC Panels Sri Lanka, Synchronization Panels Maldives, AMF Panels Sri Lanka, APFC Panels, Switchboard Manufacturer Sri Lanka, Industrial Automation Panels, Electrical Engineering Sri Lanka, LT Panels Sri Lanka, Generator Synchronization Panels, Vanguard Panel Solutions'
            document.head.appendChild(meta)
        }

        const canonical = document.createElement('link')
        canonical.rel = 'canonical'
        canonical.href = 'http://vanguardholdingslanka.com'
        document.head.appendChild(canonical)
    }, [])
    const [mobileMenu, setMobileMenu] = useState(false)

    const navigation = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Products', href: '#products' },
        { name: 'Partners', href: '#partners' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'RFQ Page', href: '#rfqpage' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <div className="min-h-screen scroll-smooth bg-black text-white" >
            <main>
                <h1 className="hidden">
                    Vanguard Panel Solutions PVT LTD - Electrical Panel Manufacturer in Sri Lanka & Maldives
                </h1>
                <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 backdrop-blur">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center overflow-hidden">
                                <img
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='520' height='140' viewBox='0 0 520 140'%3E%3Cdefs%3E%3ClinearGradient id='metallic' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ffffff'/%3E%3Cstop offset='20%25' stop-color='%23d4d4d8'/%3E%3Cstop offset='45%25' stop-color='%239ca3af'/%3E%3Cstop offset='70%25' stop-color='%23f4f4f5'/%3E%3Cstop offset='100%25' stop-color='%2352525b'/%3E%3C/linearGradient%3E%3Cfilter id='shadow'%3E%3CfeDropShadow dx='0' dy='4' stdDeviation='6' flood-color='%23000000' flood-opacity='0.8'/%3E%3C/filter%3E%3C/defs%3E%3Ctext x='50%25' y='58%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial Black,Arial,sans-serif' font-size='72' fill='url(%23metallic)' filter='url(%23shadow)' letter-spacing='-2'%3EVANGUARD%3C/text%3E%3Ctext x='50%25' y='88%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial,sans-serif' font-size='16' letter-spacing='4' fill='%23a1a1aa'%3EPANEL SOLUTIONS PVT LTD%3C/text%3E%3C/svg%3E"
                                    alt="Vanguard Panel Solutions Logo"
                                    className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] transition duration-500 hover:scale-105"
                                />
                            </div>


                        </div>

                        <nav className="hidden items-center gap-8 lg:flex">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm text-zinc-300 transition hover:text-white"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>

                        <button
                            className="text-3xl lg:hidden"
                            onClick={() => setMobileMenu(!mobileMenu)}
                        >
                            {mobileMenu ? '✕' : '☰'}
                        </button>
                    </div>

                    {mobileMenu && (
                        <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-6 lg:hidden">
                            <div className="flex flex-col gap-5">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-zinc-300 transition hover:text-white"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </header>

                <section id="home" className="border-b border-zinc-800 bg-gradient-to-r from-zinc-950 via-black to-zinc-900">
                    <div className="mx-auto grid max-w-7xl animate-fade-up gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-32">
                        <div>
                            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
                                Vanguard Panel Solutions PVT LTD
                            </p>

                            <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
                                Industrial Electrical Panel Manufacturing
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg">
                                Premium low voltage switchboards, MCC panels, PCC panels, synchronization panels, motor control centers,
                                and custom engineered electrical systems for industrial and commercial projects.
                            </p>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                                <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]">
                                    <a href="#contact">Request Quote</a>
                                </button>

                                <button className="rounded-full border border-zinc-700 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-zinc-900 hover:border-zinc-500">
                                    <a href="#products">View Solutions</a>
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-zinc-800/20 to-white/10 blur-3xl" />

                            <img
                                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1800&auto=format&fit=crop"
                                alt="3D Electrical Panel Board Render"
                                className="relative z-10 h-[320px] sm:h-[420px] lg:h-[560px] w-full rounded-3xl border border-zinc-700 object-cover shadow-[0_0_80px_rgba(255,255,255,0.08)] transition duration-700 hover:scale-[1.03] hover:shadow-[0_0_90px_rgba(255,255,255,0.12)]"
                            />

                            <div className="absolute -bottom-6 -left-6 hidden rounded-3xl border border-zinc-700 bg-zinc-900/90 p-6 shadow-2xl backdrop-blur lg:block floating-card">
                                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                                    Premium Engineering
                                </p>
                                <h3 className="mt-2 text-2xl font-black text-white">
                                    Smart LV Panel Systems
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="border-b border-zinc-800 bg-zinc-950/40 py-24">
                    <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1400&auto=format&fit=crop"
                                alt="About Vanguard Panel Solutions"
                                className="h-[320px] sm:h-[420px] lg:h-[500px] w-full rounded-3xl border border-zinc-800 object-cover shadow-2xl transition duration-700 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]"
                            />
                        </div>

                        <div>
                            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
                                About Us
                            </p>

                            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-6xl">
                                Engineering Reliable Electrical Panel Solutions
                            </h2>

                            <p className="mt-8 text-lg leading-relaxed text-zinc-400">
                                Vanguard Panel Solutions PVT LTD is a Sri Lankan electrical panel manufacturing
                                company specializing in industrial switchboards, synchronization systems,
                                automation panels, MCC panels, PCC panels, and engineered power distribution
                                solutions.
                            </p>

                            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                                We deliver premium-quality electrical systems designed to international standards
                                for commercial, industrial, infrastructure, hospitality, renewable energy, and
                                mission-critical projects across Sri Lanka and Maldives.
                            </p>

                            <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-6">
                                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                                    <h3 className="text-4xl font-black text-white">500+</h3>
                                    <p className="mt-2 text-sm text-zinc-400">
                                        Projects Delivered
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                                    <h3 className="text-4xl font-black text-white">10+</h3>
                                    <p className="mt-2 text-sm text-zinc-400">
                                        Years Experience
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                                    <h3 className="text-4xl font-black text-white">24/7</h3>
                                    <p className="mt-2 text-sm text-zinc-400">
                                        Technical Support
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
                    <div className="mb-16 text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
                            Products
                        </p>

                        <h2 className="text-4xl font-black lg:text-6xl">
                            Industrial Electrical Panels, MCC Panels & Switchboard Solutions
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
                            Vanguard Panel Solutions provides advanced electrical LT panels,
                            synchronization systems, automation panels, solar panels, and industrial
                            switchboard solutions for commercial, industrial, infrastructure, and
                            renewable energy projects across Sri Lanka and Maldives.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: 'PCC Panels',
                                desc: 'Power Control Centre panels designed for efficient power distribution, monitoring, and industrial electrical control systems.',
                            },
                            {
                                title: 'MCC Panels',
                                desc: 'Motor Control Center panels engineered for centralized motor management, automation, and operational reliability.',
                            },
                            {
                                title: 'APFC Panels',
                                desc: 'Automatic Power Factor Correction panels designed to improve power efficiency and reduce energy losses.',
                            },
                            {
                                title: 'Synchronization Panels',
                                desc: 'Advanced synchronization systems for generators and multiple power source integration with seamless load sharing.',
                            },
                            {
                                title: 'AMF Panels',
                                desc: 'Automatic Main Failure panels providing uninterrupted power switching and backup generator control.',
                            },
                            {
                                title: 'VFD & Soft Starter Panels',
                                desc: 'Variable Frequency Drive and soft starter panels for optimized motor control and reduced energy consumption.',
                            },
                            {
                                title: 'IMCC Panels',
                                desc: 'Intelligent Motor Control Center panels with advanced automation and smart communication systems.',
                            },
                            {
                                title: 'Auto Changeover Panels',
                                desc: 'Reliable automatic transfer switching solutions for industrial and commercial backup power systems.',
                            },
                            {
                                title: 'Feeder Pillars',
                                desc: 'Outdoor electrical distribution feeder pillars designed for utility, infrastructure, and industrial applications.',
                            },
                            {
                                title: 'Solar ACDB & DCDB Panels',
                                desc: 'Solar AC distribution boards and DC distribution boards engineered for solar power systems and renewable energy projects.',
                            },
                            {
                                title: 'Array Junction Boxes',
                                desc: 'IP-rated array junction boxes designed for safe solar PV string connectivity and protection.',
                            },
                            {
                                title: 'Power Distribution Boards',
                                desc: 'Custom-built power distribution boards with industrial-grade safety, efficiency, and durability.',
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="group rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-3 hover:border-zinc-600 hover:bg-zinc-900 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                            >
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800 text-2xl font-black text-white">
                                    VP
                                </div>

                                <h3 className="mb-4 text-2xl font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="leading-relaxed text-zinc-400">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="portfolio" className="border-y border-zinc-800 bg-black py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-16 text-center">
                            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                                Our Work Portfolio
                            </p>

                            <h2 className="mt-4 text-4xl font-black lg:text-6xl">
                                Industrial Electrical Panel Manufacturing Projects
                            </h2>

                            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
                                Explore a selection of our completed electrical panel manufacturing,
                                synchronization systems, automation installations, and industrial switchboard
                                projects delivered across commercial and industrial sectors.
                            </p>
                        </div>

                        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: 'Industrial MCC Panel Installation',
                                    image:
                                        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1400&auto=format&fit=crop',
                                },
                                {
                                    title: 'Commercial Switchboard Systems',
                                    image:
                                        'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
                                },
                                {
                                    title: 'Power Distribution Panels',
                                    image:
                                        'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1400&auto=format&fit=crop',
                                },
                                {
                                    title: 'Generator Synchronization Panels',
                                    image:
                                        'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1400&auto=format&fit=crop',
                                },
                                {
                                    title: 'Industrial Automation Systems',
                                    image:
                                        'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1400&auto=format&fit=crop',
                                },
                                {
                                    title: 'Custom Electrical Engineering Projects',
                                    image:
                                        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1400&auto=format&fit=crop',
                                },
                            ].map((project) => (
                                <div
                                    key={project.title}
                                    className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition-all duration-500 hover:-translate-y-3 hover:border-zinc-600 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]"
                                >
                                    <div className="overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="h-[240px] sm:h-[320px] w-full object-cover transition duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-white">
                                            {project.title}
                                        </h3>

                                        <p className="mt-4 leading-relaxed text-zinc-400">
                                            Premium industrial electrical solutions engineered for reliability,
                                            operational efficiency, and long-term performance.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="partners" className="overflow-hidden border-y border-zinc-800 bg-zinc-950/60 py-14">
                    <div className="mb-10 text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                            Trusted Global Brands
                        </p>

                        <h2 className="mt-4 text-3xl font-black lg:text-5xl">
                            Global Electrical Engineering Technology Partners
                        </h2>
                    </div>

                    <div className="relative overflow-hidden">
                        <div className="flex w-max animate-marquee gap-8 px-6">
                            {[
                                {
                                    name: 'Schneider Electric',
                                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Schneider_Electric_2007.svg/512px-Schneider_Electric_2007.svg.png',
                                },
                                {
                                    name: 'ABB',
                                    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg',
                                },
                                {
                                    name: 'Socomec',
                                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Socomec_logo.svg/512px-Socomec_logo.svg.png',
                                },
                                {
                                    name: 'Rockwell Automation',
                                    logo: 'https://1000logos.net/wp-content/uploads/2021/05/Rockwell-Automation-logo.png',
                                },
                                {
                                    name: 'Siemens',
                                    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg',
                                },
                                {
                                    name: 'Terasaki',
                                    logo: 'https://www.terasaki.com/wp-content/uploads/2022/09/terasaki-logo.png',
                                },
                                {
                                    name: 'Schneider Electric',
                                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Schneider_Electric_2007.svg/512px-Schneider_Electric_2007.svg.png',
                                },
                                {
                                    name: 'ABB',
                                    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg',
                                },
                                {
                                    name: 'Socomec',
                                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Socomec_logo.svg/512px-Socomec_logo.svg.png',
                                },
                                {
                                    name: 'Rockwell Automation',
                                    logo: 'https://1000logos.net/wp-content/uploads/2021/05/Rockwell-Automation-logo.png',
                                },
                                {
                                    name: 'Siemens',
                                    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg',
                                },
                                {
                                    name: 'Terasaki',
                                    logo: 'https://www.terasaki.com/wp-content/uploads/2022/09/terasaki-logo.png',
                                },
                            ].map((brand, index) => (
                                <div
                                    key={index}
                                    className="flex h-24 min-w-[200px] sm:h-28 sm:min-w-[260px] items-center justify-center rounded-3xl border border-zinc-800 bg-white px-10 shadow-2xl"
                                >
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="max-h-10 sm:max-h-14 max-w-[140px] sm:max-w-[180px] w-auto object-contain"
                                        loading="eager"
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://via.placeholder.com/180x60/ffffff/000000?text=' + encodeURIComponent(brand.name)
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <style>{`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-up {
            animation: fadeUp 1s ease-out;
          }

          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .floating-card {
            animation: float 5s ease-in-out infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}</style>
                </section>

                <section id="rfqpage" className="border-t border-zinc-800 bg-black py-24">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        <div className="mb-14 text-center">
                            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                                Dedicated RFQ Portal
                            </p>

                            <h2 className="mt-4 text-4xl font-black lg:text-6xl">
                                Request a Detailed Electrical Panel Quotation
                            </h2>

                            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
                                Submit your complete project requirements including technical specifications,
                                single line diagrams, BOQs, load schedules, panel layouts, and tender documents.
                                Our engineering team will review your submission and provide a detailed quotation.
                            </p>
                        </div>

                        <div className="rounded-[32px] border border-zinc-800 bg-zinc-950 p-6 shadow-2xl sm:p-10 lg:p-14">
                            <div className="grid gap-8 md:grid-cols-2">
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    name="companyName"
                                    onChange={handleChange}
                                    className="rounded-2xl border border-zinc-700 bg-black px-5 py-4 sm:px-6 sm:py-5 outline-none transition focus:border-zinc-500"
                                />

                                <input
                                    type="text"
                                    placeholder="Contact Person"
                                    name="contactPerson"
                                    onChange={handleChange}
                                    className="rounded-2xl border border-zinc-700 bg-black px-5 py-4 sm:px-6 sm:py-5 outline-none transition focus:border-zinc-500"
                                />

                                <input
                                    type="email"
                                    placeholder="Business Email"
                                    name="businessEmail"
                                    onChange={handleChange}
                                    className="rounded-2xl border border-zinc-700 bg-black px-5 py-4 sm:px-6 sm:py-5 outline-none transition focus:border-zinc-500"
                                />

                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    name="phoneNumber"
                                    onChange={handleChange}
                                    className="rounded-2xl border border-zinc-700 bg-black px-5 py-4 sm:px-6 sm:py-5 outline-none transition focus:border-zinc-500"
                                />

                                <input
                                    type="text"
                                    placeholder="Project Name"
                                    name="projectName"
                                    onChange={handleChange}
                                    className="rounded-2xl border border-zinc-700 bg-black px-5 py-4 sm:px-6 sm:py-5 outline-none transition focus:border-zinc-500 md:col-span-2"
                                />

                                <textarea
                                    rows="7"
                                    onChange={handleChange}
                                    name="description"
                                    placeholder="Describe your project requirements, panel types, specifications, and quantities"
                                    className="rounded-2xl border border-zinc-700 bg-black px-5 py-4 sm:px-6 sm:py-5 outline-none transition focus:border-zinc-500 md:col-span-2"
                                />

                                <div className="rounded-2xl border border-dashed border-zinc-700 bg-black p-8 md:col-span-2">
                                    <input
                                        type="file"
                                        multiple
                                        onChange={(e) => setFiles(e.target.files)}
                                        className="block w-full cursor-pointer text-sm text-zinc-400 file:mr-4 file:rounded-full file:border-0 file:bg-white file:px-5 file:py-3 file:font-semibold file:text-black hover:file:bg-zinc-300"
                                    />

                                    <p className="mt-4 text-sm text-zinc-500">
                                        Accepted files: PDF, DWG, XLSX, DOCX, BOQs, drawings, and specifications
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-sm text-zinc-500">
                                    Our engineering team typically responds within 24–48 hours.
                                </p>

                                <button className="rounded-2xl bg-white px-10 py-5 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]" onClick={handleSubmit}>
                                    Submit Detailed RFQ
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="border-y border-zinc-800 bg-zinc-950 py-24">
                    <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
                        <div className="rounded-[32px] border border-zinc-800 bg-black p-6 sm:p-10 lg:p-14">
                            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                                <div>
                                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
                                        Contact Us
                                    </p>

                                    <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-6xl">
                                        Trusted Electrical Panel Manufacturer in Sri Lanka
                                    </h2>

                                    <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg">
                                        Vanguard Panel Solutions PVT LTD delivers premium electrical panel
                                        manufacturing, automation systems, synchronization panels, MCC systems,
                                        and industrial switchboards for commercial and industrial applications
                                        across Sri Lanka and Maldives.
                                    </p>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
                                        <h3 className="mb-4 text-2xl font-bold text-white">
                                            Email
                                        </h3>

                                        <p className="leading-relaxed text-zinc-400">
                                            sales@vanguardholdingslanka.com
                                        </p>
                                    </div>

                                    {/* <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
                                        <h3 className="mb-4 text-2xl font-bold text-white">
                                            Phone
                                        </h3>

                                        <p className="leading-relaxed text-zinc-400">
                                            +94 77 000 0000
                                        </p>
                                    </div> */}

                                    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 sm:col-span-2">
                                        <h3 className="mb-4 text-2xl font-bold text-white">
                                            Office Location
                                        </h3>

                                        <p className="leading-relaxed text-zinc-400">
                                            Malabe, Sri Lanka
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="border-t border-zinc-800 bg-zinc-950">
                    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-4 lg:gap-14">
                        <div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center overflow-hidden">
                                    <img
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='520' height='140' viewBox='0 0 520 140'%3E%3Cdefs%3E%3ClinearGradient id='metallic' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ffffff'/%3E%3Cstop offset='20%25' stop-color='%23d4d4d8'/%3E%3Cstop offset='45%25' stop-color='%239ca3af'/%3E%3Cstop offset='70%25' stop-color='%23f4f4f5'/%3E%3Cstop offset='100%25' stop-color='%2352525b'/%3E%3C/linearGradient%3E%3Cfilter id='shadow'%3E%3CfeDropShadow dx='0' dy='4' stdDeviation='6' flood-color='%23000000' flood-opacity='0.8'/%3E%3C/filter%3E%3C/defs%3E%3Ctext x='50%25' y='58%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial Black,Arial,sans-serif' font-size='72' fill='url(%23metallic)' filter='url(%23shadow)' letter-spacing='-2'%3EVANGUARD%3C/text%3E%3Ctext x='50%25' y='88%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial,sans-serif' font-size='16' letter-spacing='4' fill='%23a1a1aa'%3EPANEL SOLUTIONS PVT LTD%3C/text%3E%3C/svg%3E"
                                        alt="Vanguard Panel Solutions Logo"
                                        className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] transition duration-500 hover:scale-105"
                                    />
                                </div>


                            </div>

                            <p className="mt-6 max-w-sm leading-relaxed text-zinc-500">
                                Premium industrial electrical panel manufacturing, synchronization systems,
                                automation panels, and engineered power distribution solutions across Sri Lanka and Maldives.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-6 text-lg font-bold text-white">
                                Company
                            </h3>

                            <div className="flex flex-col gap-4 text-zinc-500">
                                <a href="#about" className="transition hover:text-white">
                                    About Us
                                </a>
                                <a href="#portfolio" className="transition hover:text-white">
                                    Portfolio
                                </a>
                                <a href="#partners" className="transition hover:text-white">
                                    Partners
                                </a>
                                <a href="#contact" className="transition hover:text-white">
                                    Contact
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-6 text-lg font-bold text-white">
                                Solutions
                            </h3>

                            <div className="flex flex-col gap-4 text-zinc-500">
                                <a href="#products" className="transition hover:text-white">
                                    Products
                                </a>
                                <a href="#rfqpage" className="transition hover:text-white">
                                    RFQ Page
                                </a>
                                <a href="#products" className="transition hover:text-white">
                                    MCC Panels
                                </a>
                                <a href="#products" className="transition hover:text-white">
                                    PCC Panels
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-6 text-lg font-bold text-white">
                                Contact Info
                            </h3>

                            <div className="space-y-4 text-zinc-500">
                                <p>sales@vanguardholdingslanka.com</p>
                                {/* <p>+94 77 000 0000</p> */}
                                <p>Colombo, Sri Lanka</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-zinc-800">
                        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-zinc-500 lg:flex-row lg:items-center lg:justify-between">
                            <p>© 2026 Vanguard Panel Solutions PVT LTD. All rights reserved.</p>

                            <div className="flex gap-6">
                                <a href="#" className="transition hover:text-white">
                                    Privacy Policy
                                </a>
                                <a href="#" className="transition hover:text-white">
                                    Terms & Conditions
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}
