import Link from "next/link";
import { FaRocket } from "react-icons/fa6";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";

const Contact = () => {
  return (
    <main className="bg-[#ebe0d7] py-10 px-4 relative overflow-hidden">
      <div
        id="contact"
        className="w-[80%] h-[1px] absolute top-[-150px] z-0"
      ></div>
      <div className="absolute w-[10px] h-[500px] bg-gray-50 rotate-45 top-[-80px]"></div>
      <div className="absolute w-[10px] h-[500px] bg-gray-50 -rotate-45 top-[-80px]"></div>
      <div className="relative text-center text-gray-800 z-10">
        <div className="max-sm:mb-6 mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 z-10">
            Ready to elevate your Chemistry?{" "}
            <FaRocket size={30} className="text-gray-700 z-10 inline" />
          </h2>
        </div>
        <section>
          <p className="text-gray-800 text-balance mb-5">
            Contact us at the following platforms for a free consultation call!
          </p>
          <div className="flex justify-center max-sm:gap-2 gap-5 md:gap-10 items-center flex-wrap">
            <div className="flex gap-2 items-center">
              <MdOutlineMailOutline size={30} />
              <Link href="mailto:enquiry@bondbeyond.sg">
                enquiry@bondbeyond.sg
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <MdOutlinePhone size={30} />
              <Link href="tel:98535245">+65 9853 5245</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
