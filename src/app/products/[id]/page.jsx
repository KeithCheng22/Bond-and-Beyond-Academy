"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const Products = () => {
  const params = useParams();
  const productId = parseInt(params.id);

  const selectedProduct = products.filter(
    (product) => product.productId === productId
  );

  return (
    <>
      <Header />
      <main className="bg-[#ebe0d7] py-10 px-4 relative">
        <div className=" text-gray-800">
          <Link
            href="/products"
            className="bg-white text-start my-5 block border-2 border-white w-fit px-3 py-1 rounded-lg hover:bg-transparent duration-150"
          >
            Back
          </Link>
          <h2 className="text-3xl font-semibold mb-8 text-gray-700 z-10 md:hidden text-center">
            {selectedProduct[0].title}
          </h2>

          <section className="mt-10 text-center">
            {selectedProduct.map((product, index) => (
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

const Product = ({ url, title, price, desc, supportingUrl, pages }) => {
  const [showModal, setShowModal] = useState(false);
  const [imageModal, setImageModal] = useState("");

  const toggleModal = (url, title) => {
    setShowModal(!showModal);
    setImageModal([url, title]);
    window.scrollTo(0, 0);
  };

  return (
    <div className="product-item bg-gray-600 rounded-2xl mb-10 p-3 md:flex justify-between items-center flex-1 gap-2">
      <div className="">
        <Image
          width={500}
          height={300}
          src={url}
          alt={title}
          className="rounded-lg mx-auto"
        />
      </div>

      <div className="rounded-2xl md:w-[60%]">
        {/* Supporting Images Gallery */}
        <div className="md:flex flex-1 justify-around gap-1">
          {supportingUrl.map((url, index) => (
            <div
              key={index}
              className="w-fit mx-auto product-item duration-300"
            >
              <Image
                key={index}
                width={300}
                height={300}
                src={url}
                alt={title}
                className="rounded-lg my-2 max-md:w-[500px] cursor-pointer"
                onClick={() => toggleModal(url, title)}
              />
            </div>
          ))}
        </div>
        <div className="p-2 text-pretty text-white">
          <p className="text-xl max-md:hidden">{title}</p>
          <div className="text-pretty mt-2">
            <p>About the book:</p>
            <p className="italic">{desc}</p>
            <p>({pages} pages)</p>
          </div>
          <p className="italic mt-5">{price}</p>
        </div>
        {/* Modal */}
        {showModal && (
          <>
            <div className="fixed top-0 left-0 w-full h-full bg-black/50"></div>
            <Image
              src={imageModal[0]}
              width={550}
              height={300}
              alt={imageModal[1]}
              className="rounded-xl p-2 max-md:top-[500px] modal absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            />
            <span
              className="p-2 text-white absolute top-0 right-0 cursor-pointer text-6xl hover:text-gray-600 duration-150"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
          </>
        )}
      </div>
    </div>
  );
};
