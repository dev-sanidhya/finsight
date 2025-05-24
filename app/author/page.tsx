import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Meet the Founders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sarthk */}
        <Card className="rounded-2xl shadow-md bg-[#0f172a] text-white">
          <CardHeader className="flex flex-row items-start gap-4">
            <Image
              src="/sarthk.jpg"
              alt="Sarthk Kharwal"
              width={80}
              height={80}
              className="rounded-full object-cover w-20 h-20"
            />
            <div>
              <CardTitle className="text-xl mb-2">Sarthk Kharwal</CardTitle>
              <CardDescription className="text-gray-300 leading-relaxed">
                Third year undergrad student pursuing B.Tech at VIPS, IPU, New
                Delhi. Full stack developer who likes to get his hands dirty
                with JavaScript and Python, bringing end-to-end full stack ideas
                to life.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        {/* Sanidhya */}
        <Card className="rounded-2xl shadow-md bg-[#0f172a] text-white">
          <CardHeader className="flex flex-row items-start gap-4">
            <Image
              src="/sanidhya.jpg"
              alt="Sanidhya Shishodia"
              width={80}
              height={80}
              className="rounded-full object-cover w-20 h-20"
            />
            <div>
              <CardTitle className="text-xl mb-2">Sanidhya Shishodia</CardTitle>
              <CardDescription className="text-gray-300 leading-relaxed">
                A first-year B.Tech student at VIPS, IPU, New Delhi, with a keen
                interest in web development and frontend programming.
                <br />
                <br />
                Sanidhya demonstrates a strong technical foundation, with
                proficiency in HTML, Python, and CSS, complemented by expertise
                in backend technologies such as Node.js. This combination
                highlights his adaptability and effectiveness in delivering
                seamless end-to-end development solutions.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        {/* Atharva */}
        <Card className="rounded-2xl shadow-md bg-[#0f172a] text-white">
          <CardHeader className="flex flex-row items-start gap-4">
            <Image
              src="/atharva.jpg"
              alt="Atharva Singh"
              width={80}
              height={80}
              className="rounded-full object-cover w-20 h-20"
            />
            <div>
              <CardTitle className="text-xl mb-2">Atharva Singh</CardTitle>
              <CardDescription className="text-gray-300 leading-relaxed">
                A first-year B.Tech student at VIPS, IP University, New Delhi,
                Atharva is a dedicated learner with a growing interest in web
                development and backend technologies. Proficient in C++ with
                hands-on problem-solving experience on LeetCode, he is building
                a strong foundation in modern web development.
                <br />
                <br />
                Atharva's technical expertise includes HTML, Python, CSS, and
                backend technologies like Node.js, showcasing his versatility in
                both frontend and backend development.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
