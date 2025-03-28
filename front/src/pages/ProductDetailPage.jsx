import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // ✅ Import axios
import { Rate } from "antd";
import Navbar from "../components/Navbar";

const ProductDetailPage = () => {
  const { id } = useParams();
  console.log("Product ID:", id);

  const [singleProduct, setSingleProduct] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/product/${id}`);
        setSingleProduct(response.data); // ✅ Fix API response handling
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!singleProduct) return <p className="text-center mt-10">Loading product details...</p>;

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4 font-sans mt-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column - Images */}
          <div className="md:w-2/5">
            <div className="border rounded mb-4 p-2 bg-white">
              <img src={singleProduct.images[0]} alt="Product Image" className="w-full object-contain" />
              <p className="text-center text-sm text-gray-500 mt-2">
                Click image to open expanded view
              </p>
            </div>
          </div>

          {/* Right column - Product info */}
          <div className="md:w-3/5">
            <h1 className="text-xl font-medium">{singleProduct?.name}</h1>


            <div className="mt-2">
              <span className="text-sm">Brand: </span>
              <span className="text-sm text-blue-600">{singleProduct?.brand || "N/A"}</span>
            </div>

            <div className="flex items-center mt-1">
              <span className="text-sm font-medium mr-1">2.7</span>
              <Rate disabled defaultValue={2.7} allowHalf className="text-base" />
              <span className="mx-2 text-gray-500">|</span>
              <a href="#" className="text-sm text-blue-600 hover:underline">10 ratings</a>
            </div>

            <div className="mt-4">
              <span className="text-xs align-top">$</span>
              <span className="text-3xl font-medium">{singleProduct?.price}</span>
            </div>

            <div className="text-red-600 font-medium my-2">Only 18 left in stock - order soon.</div>

            <div className="border-t border-b py-4 my-4 grid grid-cols-2 gap-y-3 text-sm">
              <div className="font-medium">RAM</div>
              <div>{singleProduct?.ram || "N/A"}</div>

              <div className="font-medium">Storage</div>
              <div>{singleProduct?.storage || "N/A"}</div>

              <div className="font-medium">ScreenSize</div>
              <div>{singleProduct?.screensize || "N/A"}</div>

              

              {showMore && (
                <>
                  <div className="font-medium">ScreenSize</div>
                  <div>{singleProduct?.screensize || "No details"}</div>
                </>
              )}
            </div>

            <button className="text-blue-600 text-sm mb-4" onClick={() => setShowMore(!showMore)}>
              See {showMore ? "less" : "more"}
            </button>

            <div className="flex gap-2 mt-6">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded">
                Add to Cart
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
