import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

export default function Explore() {
    return (
        <main className="mx-2 lg:mx-5">
        <section>
            <div>
                <div>

                </div>
                <div className="grid grid-cols-12">
                    <Card isFooterBlurred className="w-full h-[300px] col-span-12 lg:col-span-3">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                            src="https://nextui.org/images/card-example-6.jpeg"
                        />
                        <CardFooter className="absolute bg-white/60 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                            <div>
                                <p className="text-black ">2 months bottles</p>
                                <p className="text-black text-tiny">Bottles</p>
                            </div>
                            <Button className="text-tiny" color="primary" radius="full" size="sm">
                                View Details
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>

        </main>
    )
}