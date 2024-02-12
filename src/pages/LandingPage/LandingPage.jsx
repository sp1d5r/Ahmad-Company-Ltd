import React from "react";
import Navbar from "../../components/Nav/Nav";
import Conventa from "../../assets/conventa.png";
import Mathew from "../../assets/MatthewUpham.png";

export default function LandingPage({}){
    console.log("here");
    return (
        <div>
            <Navbar />



            <section className="py-24 flex items-center min-h-[80vh] justify-center bg-white">
                <div className="mx-auto max-w-[43rem]">
                    <div className="text-center">
                        <p className="text-lg font-medium leading-8 text-indigo-600/95">Introducing The Ahmad Company</p>
                        <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Distribute your brand from&nbsp;design to code</h1>
                        <p className="mt-3 text-lg leading-relaxed text-slate-400">Build and deploy websites that help your audience convert!</p>
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-4">
                        <a href="https://calendly.com/theahmadcompany/30min" className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">Get started for free</a>
                        <a href="#" className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"> Request a demo </a>
                    </div>
                </div>
            </section>


            <div className="flex min-h-[80vh] items-center justify-center p-10 bg-white">
                <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
                    <div className="row-span-2 flex flex-col rounded-md border border-slate-200">
                        <div className="h-1/2 flex-1"><img src="https://d33wubrfki0l68.cloudfront.net/c43307b88fb814366e4f3a181c788796cba83faa/4c05c/new/landing/omnichannel.png" className="w-full object-cover object-right-top" alt="omnichannel" /></div>
                        <div className="p-10">
                            <h3 className="text-xl font-medium text-gray-700">Verify your ideas</h3>
                            <p className="mt-2 text-slate-500">
                                We can create a clear channel of communication. In the example of StealMyArtBack, we were able to create a highly converting landing page to validate a market idea.
                                In the example below we were able to build and deploy a custom website designed at Artists with the goal to protect them from DMCA. Lead time 2 weeks from idea to product!</p>
                            <a href="https://www.stealmyartback.co.uk/" className="mt-2 inline-flex text-sky-500">Read More →</a>
                        </div>
                    </div>
                    <div className="flex rounded-md border border-slate-200">
                        <div className="flex-1 p-10">
                            <h3 className="text-xl font-medium text-gray-700">Full-Stack Support</h3>
                            <p className="mt-2 text-slate-500">
                                Sometimes off-the-shelf is not good enough.
                                You need a custom backend and a custom frontend.
                                At least for conventa this was true - our longest and proudest parnership!
                            </p>
                            <p className="mt-2 text-slate-500">
                                An e-learning psychology platform designed to educate through short-form content.
                            </p>
                            <a href="https://www.conventa.net/" className="mt-2 inline-flex text-sky-500">Read More →</a>
                        </div>

                        <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                            <div className="absolute inset-0">
                                <img src={Conventa} className="h-full w-full object-cover object-left-top" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex rounded-md border border-slate-200">
                        <div className="flex-1 p-10">
                            <h3 className="text-xl font-medium text-gray-700">Antiques. Antiques and More Antiques</h3>
                            <p className="mt-2 text-slate-500">
                                Sometimes, you don't need the most complex setup. You're a local business who's main
                                priority is to sell your products. But you don't want an off-the-shelf shopify store.
                            </p>
                            <p className="mt-2 text-slate-500">
                                This was the case for Matthew, an established Antique store in Fullham. We helped migrate
                                the products off his existing site and set him up with a new website.
                            </p>
                            <a href="https://main.d2j9sqdj37qbux.amplifyapp.com" class="mt-2 inline-flex text-sky-500">Read More →</a>
                        </div>

                        <div class="relative hidden h-full w-1/3 overflow-hidden lg:block">
                            <div class="absolute inset-0">
                                <img src={"https://main.d2j9sqdj37qbux.amplifyapp.com/static/media/antique-hero-image-2.96cea338c5605e0ebaad.png"} class="h-full w-full object-cover object-left-top" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white h-screen flex items-center justify-center">
                <div className=" text-center">
                    <div className="text-7xl text-indigo-600 leading-5">”</div>
                    <div className="font-medium max-w-xl text-xl">
                        We were stuck! We had clients ready to be onboarded but our data infrastructure was unable to connect to our
                        front-end. With the Ahmad brothers we were quickly able to move forward with a new data pipeline approach
                        streamlining our offering.
                    </div>
                    <div className="mt-5">
                        <span class="font-bold">Grigorii Mordkovich</span><span class="text-gray-500 font-medium"> — Co-Founder and CEO, Spredo</span>
                    </div>
                </div>
            </div>
        </div>
    )
}