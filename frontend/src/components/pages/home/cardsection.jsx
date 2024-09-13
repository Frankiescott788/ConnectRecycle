import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";

export default function Cardsection() {
    return (
        <section>
            <div className="text-center my-10">
                <p className="text-3xl">Discover nearby <span className="text-[#fb6f92]">recycling</span> centers and services effortlessly.</p>
                <p className="text-gray-400">Connecting you to convenient recycling options for a cleaner future.</p>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 lg:col-span-3">

                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="https://assets.lummi.ai/assets/QmNmeGxUJC6mFpV2g7qo2gAAvLWrGcLuThiDNi7kw4Ycqi?auto=format&w=1500"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Available soon.</p>
                            <p className="text-black text-tiny">Get notified.</p>
                        </div>
                        <Button className="text-tiny bg-[#fb6f92] text-white" radius="full" size="sm">
                            view
                        </Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 lg:col-span-3">

                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="https://assets.lummi.ai/assets/QmVvHmcaE3UYx8hY89ESFXTtDb25ArSELaUcmC1VaqYWPG?auto=format&w=1500"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Available soon.</p>
                            <p className="text-black text-tiny">Get notified.</p>
                        </div>
                        <Button className="text-tiny bg-[#fb6f92] text-white" radius="full" size="sm">
                            View
                        </Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 lg:col-span-3">

                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="https://assets.lummi.ai/assets/QmURSp9yFKXdyJhQrL3UAfrzUCWdGqGSWokidhNxiuRimG?auto=format&w=1500"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Available soon.</p>
                            <p className="text-black text-tiny">Get notified.</p>
                        </div>
                        <Button className="text-tiny" color="primary" radius="full" size="sm">
                            Notify Me
                        </Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 lg:col-span-3">

                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="https://assets.lummi.ai/assets/QmZo4qxkcyFoHBMTKygqAypHKPS268kDm68pBmuN376wk6?auto=format&w=1500"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Available soon.</p>
                            <p className="text-black text-tiny">Get notified.</p>
                        </div>
                        <Button className="text-tiny" color="primary" radius="full" size="sm">
                            Notify Me
                        </Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 lg:col-span-3">

                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="https://assets.lummi.ai/assets/QmNxyVQxwuD9Y36cX1ZigUXwkUPf6mtbcsYGf42JutXYyW?auto=format&w=1500"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Available soon.</p>
                            <p className="text-black text-tiny">Get notified.</p>
                        </div>
                        <Button className="text-tiny" color="primary" radius="full" size="sm">
                            Notify Me
                        </Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 lg:col-span-3">

                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="https://assets.lummi.ai/assets/QmPyqQgSM8sDVrcQxRwUA6fTDaeXkLMvpf6Z3Kx4aCg3pU?auto=format&w=1500"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Available soon.</p>
                            <p className="text-black text-tiny">Get notified.</p>
                        </div>
                        <Button className="text-tiny" color="primary" radius="full" size="sm">
                            Notify Me
                        </Button>
                    </CardFooter>
                </Card>
                
            </div>
        </section>
    )
}