export default function Section1() {
  return (
    <div>
      <div className="flex justify-around mt-20 text-5xl font-bold">
        <div className="text-center">
          Putting your <p className="font-normal inline ">child's</p> Future{" "}
          <div className="">in great motion</div>
        </div>
      </div>

      <div className="flex justify-center gap-10 mt-15">
        <div className="flex gap-3 items-center">
          <p className="bg-black text-white shadow rounded-full h-7 w-7 flex items-center justify-center">
            ✓
          </p>
          <p>No Credit Card</p>
        </div>
        <div className="flex gap-3 items-center">
          <p className="bg-black text-white shadow rounded-full h-7 w-7 flex items-center justify-center">
            ✓
          </p>
          <p>14 Days Trial</p>
        </div>
        <div className="flex gap-3 items-center">
          <p className="bg-black text-white shadow rounded-full h-7 w-7 flex items-center justify-center">
            ✓
          </p>
          <p>Free For Teachers</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" mt-15 bg-black text-white p-4 rounded-xl">
          Start Learning
        </div>
      </div>
      <div className="text-center mt-10">
        We just don't give our students only lecture but real life experiences.
      </div>
      <div className="flex  text-white justify-center mt-20 ">
        <div className="flex   p-10 bg-black rounded-r-xl">
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-bl-xl rounded-tr-xl ">
            logo
          </div>
          <div className="ml-3">
            <div className=" text-4xl">50+</div>
            <div className="my-2">School are supported across 29 states</div>
          </div>
        </div>
        <div className="flex  p-10 border-x-2 bg-black rounded-xl">
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-bl-xl rounded-tr-xl ">
            logo
          </div>
          <div className="ml-3">
            <div className=" text-4xl">12+</div>
            <div className="my-2">Helping the students of all ages thrive</div>
          </div>
        </div>
        <div className="flex  p-10 bg-black  rounded-l-xl">
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-bl-xl rounded-tr-xl ">
            logo
          </div>
          <div className="ml-3">
            <div className=" text-4xl">70+</div>
            <div className="my-2">
              Avaliable field workspaces and increasing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
