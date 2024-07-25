import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import CustomIcon from "./custom-icon"


export function Hackathon() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full p-12 md:pt-24 lg:pt-32 border-y bg-primary text-primary-foreground">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tigher text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  48 Hour <br/> Geek-a-thon
                </h1>
                <p className="mt-4 text-lg">July 27-28, 2024 | Prize Pool: ₹1,00,000</p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Join us for an exciting 48-hour hackathon with a prize pool of ₹1,00,000. Showcase your skills,
                  collaborate with talented individuals, and compete for amazing prizes.
                </p>
              <Link href={'https://forms.gle/9RAKgdP9NXoFtNgNA'} ><Button className="border rounded-xl">Register Here</Button></Link>
              </div>  
            </div>
          </div>
        </section>
        <section id="event-details" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Event Details</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Geek-a-thon Schedule and Judging Criteria
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The hackathon will take place over 48 hours, with specific timelines and judging criteria outlined
                  below.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Hackathon Schedule</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>26th July 23:59PM :</strong> Registration and PPT Submission Ends
                  <br />
                  <strong>27th July 00:00AM : </strong> Hacking begins
                  <br />
                  <strong>28th July: 23:59PM : </strong> Hacking ends, Final Submission
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Problem Statement Verticals</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Sustainable Healthcare Solution</strong>
                  <br />
                  <strong>Smart City Solutions</strong>
                  <br />
                  <strong>Sustainable Educational Solutions</strong>
                  <br />
                  <strong>Web3 Applications</strong>
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Prizes</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>1st Place:</strong> ₹50,000
                  <br />
                  <strong>2nd Place:</strong> ₹30,000
                  <br />
                  <strong>3rd Place:</strong> ₹15,000
                  <br />
<strong>4th Place:</strong> ₹5,000
                  <br />
                  <strong>Everyone:</strong> Participation Certificate
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="rules" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Rules and Guidelines</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Participation and Submission Requirements
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                To ensure a fair and successful hackathon, please review the following rules and guidelines.
              </p>
            </div>
            <div className="mx-auto w-full max-w-2xl space-y-4 text-left">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Participation Requirements</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Teams of 1-3 member(s)</li>
                  <li>All the participants must be students</li>
                  <li>All team members must be available for the full 48-hour duration</li>
                  <li>No pre-built projects or code are allowed, everything must be built during the hackathon</li>
                  <li>All winners will be determined by the judges' evaluation, and their decisions are final with no objections entertained after the results are announced. </li>
                </ul>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Submission Guidelines</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Submit your project by 23:59PM on July 28th, 2024 through the registration portal</li>
                  <li>Include a brief project description, demo video, and source code</li>
                  <li>Use of any open source tools during hackathon is permitted</li>
                </ul>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Code of Conduct</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Treat all participants with respect and professionalism</li>
                  <li>No plagiarism or copying of code, ideas, or designs</li>
                  <li>Maintain a positive and collaborative environment throughout the hackathon</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted text-muted-foreground">
        <p className="text-xs">&copy; 2024 IndusAI Ltd. All rights reserved.</p>
      </footer>
    </div>
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


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function MenuIcon(props: any) {
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