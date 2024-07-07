import CustomIcon from "./custom-icon"
import Link from "next/link"

export function Services() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex pt-4 items-center justify-center" prefetch={false}>
        <CustomIcon />
        <code className="ml-4">IndusAI Solutions</code>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="https://forms.gle/Kq1wLNvMXwi3HgzE6" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Career
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Java Development</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our experienced Java developers create robust, scalable, and secure applications that leverage the
                  power of the Java ecosystem. From enterprise-level systems to mobile apps, we deliver tailored
                  solutions that meet your business needs.
                </p>
                <ul className="grid gap-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Expertise in Java frameworks and libraries
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Secure and scalable application development
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Seamless integration with existing systems
                  </li>
                </ul>
              </div>
              <img
                src="/java.jpg"
                width="400"
                height="400"
                alt="Java Development"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                src="/fullstack.jpg"
                width="550"
                height="400"
                alt="Full Stack Development"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Full Stack Development</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our full-stack development team combines expertise in front-end and back-end technologies to create
                  high-performing, user-friendly web applications. From design to deployment, we deliver end-to-end
                  solutions that drive business growth.
                </p>
                <ul className="grid gap-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Responsive and mobile-friendly design
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Seamless integration of front-end and back-end
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Scalable and maintainable codebase
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blockchain Development</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our blockchain experts leverage cutting-edge technologies to create decentralized applications that
                  revolutionize industries. From smart contracts to DeFi solutions, we deliver secure and scalable
                  blockchain-based products that drive innovation.
                </p>
                <ul className="grid gap-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Expertise in popular blockchain platforms
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Secure and transparent smart contract development
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Decentralized application (dApp) development
                  </li>
                </ul>
              </div>
              <img
                src="/web3e.webp"
                width="550"
                height="400"
                alt="Blockchain Development"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                src="/ai.avif"
                width="550"
                height="400"
                alt="AI Chatbot Development"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI Chatbot Development</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered chatbots provide intelligent and personalized customer support, automating repetitive
                  tasks and enhancing user experience. Leveraging natural language processing and machine learning, we
                  create chatbots that deliver seamless interactions and drive business efficiencies.
                </p>
                <ul className="grid gap-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Conversational AI with natural language understanding
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Seamless integration with existing systems
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Continuous learning and improvement
                  </li>
                </ul>
              </div>
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

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}