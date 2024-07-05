import Link from "next/link"
import { Button } from "@/components/ui/button"
import CustomIcon from "./custom-icon"

export function ResponsiveHomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex pt-4 items-center justify-center" prefetch={false}>
          <CustomIcon />
          <code className="ml-4">IndusAI Solutions</code>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/services"
            className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="https://forms.gle/Kq1wLNvMXwi3HgzE6"
            className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block"
            prefetch={false}
          >
            Careers
          </Link>
          <Button variant="ghost" size="icon" className="sm:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transforming the Future with AI Tools
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    At IndusAI, we are dedicated to harnessing the power of artificial intelligence to drive
                    innovation and create a better future for all.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="https://forms.gle/Kq1wLNvMXwi3HgzE6"
                    prefetch={false}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium border text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
              <img
                src="/gemini-ai.jpeg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">AI Capabilities</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock the Power of AI</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our cutting-edge AI solutions are designed to transform your business and drive innovation. From
                  natural language processing to computer vision, we offer a wide range of services to help you achieve
                  your goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/webinar.png"
                width="310"
                height="310"
                alt="Image"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Natural Language Processing</h3>
                      <p className="text-muted-foreground">
                        Unlock the power of language with our advanced NLP capabilities.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Computer Vision</h3>
                      <p className="text-muted-foreground">
                        Revolutionize your visual data processing with our cutting-edge computer vision solutions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Predictive Analytics</h3>
                      <p className="text-muted-foreground">
                        Gain valuable insights and make data-driven decisions with our predictive analytics tools.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Mission</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At IndusAI, we are always on the lookout for talented individuals who share our passion for
                innovation and technology. If you're ready to be a part of our journey, apply now!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="https://forms.gle/Kq1wLNvMXwi3HgzE6"
                className="inline-flex h-10 border items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 IndusAI Solutions Pvt. Ltd. | All rights reserved.</p>
      </footer>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
