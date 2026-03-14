import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../redux/productsSlice";

function ProductHandle() {
  const { products, selectedCategories } = useSelector(
    (state) => state.products,
  );

  const dispatch = useDispatch();

  const uniqueCategories = [...new Set(products.map((item) => item.category))];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 border-b pb-2">
        Filter by Category
      </h2>

      <div className="flex flex-col gap-3">
        {uniqueCategories.map((category) => (
          <label
            key={category}
            className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => dispatch(toggleCategory(category))}
              className="w-4 h-4"
            />

            <span className="capitalize text-gray-700">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default ProductHandle;
