import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data";
import Link from "next/link";
import { PiBooksLight } from "react-icons/pi";

const Products = () => {
  return (
    <>
      <Header />
      <main className="bg-[#ebe0d7] py-10 px-4 relative">
        <div className="text-center text-gray-800">
          <div className="relative flex justify-center gap-2 items-start">
            <h2 className="text-3xl font-semibold mb-8 text-gray-700 z-10">
              Our Products
            </h2>
            <PiBooksLight size={38} className="inline" />
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-800 text-pretty">
              All our notes and resources are made publically available for free
              in our Telegram Channel. If you would like to subscribe to our
              channel, please follow us on Instgram{" "}
              <Link
                href="https://www.instagram.com/bondbeyond_academy/"
                className="text-[#1F3E65] underline underline-offset-2"
                target="_blank"
                aria-label="Instagram"
              >
                @bondbeyond_academy
              </Link>{" "}
              and drop us a DM.
            </p>

            <p className="text-gray-800 text-balance mt-2">
              Alterntively, if you would like to purchase a hard copy of our
              products, please contact us at{" "}
              <Link
                href="tel:98535245"
                className="text-[#1F3E65] underline underline-offset-2"
                aria-label="Contact number"
              >
                +65 9853 5245
              </Link>
              .
            </p>

            <p className="text-gray-800 text-balance mt-2">
              All prices are inclusive of printing, binding and mailing charges.
            </p>
          </div>

          <section className="mt-10 testimonial-grid">
            {products.map((product, index) => (
              <Product key={index} {...product} />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;

const Product = ({ url, title, price, productId }) => {
  return (
    <div className="relative product-item bg-gray-600 rounded-2xl mb-10 p-3 max-w-[300px] hover:scale-105 duration-300">
      <a href={`products/${productId}`}>
        <div className="mx-auto ">
          <Image
            src={url}
            width={300}
            height={50}
            alt={title}
            className="rounded-lg"
            priority
          />
        </div>
        <div className="p-2 text-balance text-white">
          <p className="text-xl ">{title}</p>
          <p className="italic">{price}</p>
        </div>
      </a>
    </div>
  );
};
