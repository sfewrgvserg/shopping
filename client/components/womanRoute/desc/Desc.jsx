const Desc = ({ detail }) => {
  return (
    <div className="space-y-5">
      <div className="flex">
        <h3 className="bg-stone-500 text-white py-2 px-10 cursor-pointer hover:bg-black hover:text-white duration-150">
          Description
        </h3>
      </div>
      <p>{detail}</p>
    </div>
  );
};

export default Desc;
