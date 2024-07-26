const CountProducts = ({ count }) => {
  return (
    <div className="flex items-center justify-between py-10">
      <p className="text-stone-500">
        <span className="font-medium text-black">Showing 1 - {count}</span> out
        of {count} products
      </p>

      <select
        name=""
        id=""
        className="border-[1px] border-stone-500 p-2 rounded-full"
      >
        <option value="">Sort By</option>
        <option value="">Most Liked</option>
        <option value="">Sort By</option>
        <option value="">Sort By</option>
      </select>
    </div>
  );
};

export default CountProducts;
