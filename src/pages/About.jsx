import Image from "next/image";
import about from "../../public/about.jpg";
import { FaRegLightbulb, FaRegStar, FaRegGem } from "react-icons/fa";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { MdPeopleOutline } from "react-icons/md";
import philosophy from "../../public/philosophy.png";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page!</title>
        <meta name="description" content="..." />
      </Head>
      <main className="bg-[#ebe0d7] py-10 px-4 relative">
        <div id="about" className="w-[80%] h-[1px] absolute top-[-100px]"></div>
        <div className="text-center text-gray-800">
          <div className="relative flex justify-center gap-2 items-start">
            <h2 className="text-3xl font-semibold mb-8 text-gray-700 z-10">
              About Us
            </h2>

            <MdPeopleOutline size={38} className="text-gray-700 z-10" />
          </div>
          <div className="md:flex md:justify-center md:items-center mb-10 glass-card2 py-10">
            <div className="max-md:mb-10 w-1/2 mx-auto px-1">
              <Image
                src={about}
                alt="Potrait of Keith Cheng"
                className="rounded-lg shadow-lg mx-auto"
                priority
              />
            </div>
            <p className="text-lg leading-relaxed text-gray-700 text-pretty w-3/4 mx-auto px-5 max-sm:text-md">
              <b>Bond and Beyond Academy</b> was founded in June 2024 by Keith
              Cheng, a dedicated educator with over five years of experience in
              private tuition. Driven by a passion for chemistry and a
              commitment to educational excellence, Keith established Bond and
              Beyond Academy to address the growing need for{" "}
              <b className="text-[#1F3E65]">
                high-quality, personalised chemistry education.
              </b>{" "}
              To date, we proudly boast an impressive track record of 80%
              Distinction rates and 100% Pass rates, a testament to the
              effectiveness of our innovative teaching methods and our
              dedication to each student’s success.
              <span className="mt-10 inline-block text-pretty">
                At Bond and Beyond Academy, we believe that chemistry is not
                just a subject but a key to understanding the world around us.
                Our approach is rooted in the conviction that every student has
                unique potential and learning needs. That’s why we pride
                ourselves as{" "}
                <b className="text-[#1F3E65]">"The Chemistry Specialist"</b> and
                tailor our tuition to cater specifically to O-Level, IB, and IP
                curricula, ensuring that our students receive the support they
                need to succeed in their exams and beyond.
              </span>
            </p>
          </div>
          <div className="md:flex md:justify-center gap-6 mb-10">
            <div className="p-6 rounded-lg shadow-lg bg-white backdrop-blur-md md:w-[50%] mx-auto max-md:mb-10">
              <div className="flex justify-center gap-2">
                <h3 className="text-xl font-semibold mb-3">Mission</h3>
                <FaRegStar size={25} />
              </div>
              <p className="text-gray-800 text-balance">
                To deliver exceptional, personalised chemistry tuition for
                O-Level, IB, and IP students, fostering academic excellence, a
                love for learning, and personal growth.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-lg bg-white backdrop-blur-md  md:w-[50%] mx-auto">
              <div className="flex justify-center gap-2">
                <h3 className="text-xl font-semibold mb-3">Vision</h3>
                <FaRegLightbulb size={25} />
              </div>
              <p className="text-gray-800  text-balance">
                To be the top choice for chemistry tuition in Singapore,
                inspiring and equipping students to excel and thrive in their
                scientific pursuits.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-white  backdrop-blur-md mb-10">
            <div className="flex justify-center gap-2">
              <h3 className="text-xl font-semibold mb-3">Our Belief</h3>
              <FaRegGem size={25} />
            </div>
            <p className="text-gray-800 text-balance">
              Every lesson is crafted to meet the unique needs of our students,
              ensuring they not only excel in their exams but also develop a
              deeper appreciation for the wonders of chemistry. We believe that
              education is a powerful tool for personal transformation, and we
              are committed to helping our students grow both academically and
              personally.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-white  backdrop-blur-md">
            <div className="flex justify-center gap-2">
              <h3 className="text-xl font-semibold mb-3">
                Our Teaching Philosophy
              </h3>
              <IoExtensionPuzzleOutline size={25} />
            </div>
            <div className="flex justify-center">
              <Image
                src={philosophy}
                width={600}
                alt="Bond and Beyond Academy's Teaching Philosophy"
              />
            </div>
            <p className="text-gray-800 text-balance">
              Our approach begins with{" "}
              <b className="text-[#e4a58a]"> Concept Mastery</b>, ensuring you
              thoroughly understand core principles. Next,{" "}
              <b className="text-[#49d7b3]">Application Practice</b> helps
              reinforce this knowledge through targeted questions, bridging the
              gap between theory and practice. Finally,{" "}
              <b className="text-[#8181d4]">Exam Simulation</b> prepares you for
              real test conditions, enhancing your time management and exam
              strategies. This structured method has helped all our students to
              master concepts, apply them effectively, and excel in exams.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
