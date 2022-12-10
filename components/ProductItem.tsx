import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsCartPlus, BsFillCartCheckFill } from "react-icons/bs";

export default function ProductItem() {
  const isProductInCart = false;
  return (
    <div className="p-2 rounded shadow mb-4 bg-gray-100">
      <img
        className="object-cover"
        src="https://raw.githubusercontent.com/edilson258/files/main/022810ID.jpg"
      />
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold mt-2">Nike Air Max</p>
        <div className="text-xs">
          <div>
            <p>455 orders</p>
          </div>
          <div className="flex items-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 border-t mt-2 py-2">
        <div className="flex gap-2">
          <button className="px-2 py-1 border border-slate-700 bg-slate-700 text-white rounded">
            Order now
          </button>
          <button className="text-slate-700 px-2 py-1 border border-slate-700 rounded">
            {isProductInCart ? <BsFillCartCheckFill /> : <BsCartPlus />}
          </button>
        </div>
        <div>
          <span className="text-lg font-bold">$250.00</span>
        </div>
      </div>
    </div>
  );
}
