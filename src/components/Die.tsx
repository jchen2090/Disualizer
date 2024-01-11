type DieProps = {
  number: number;
};

//TODO: refactor this in the future
export default function Die({ number }: DieProps) {
  switch (number) {
    case 1:
      return (
        <div className="flex items-center justify-center w-24 h-24 border-2 border-black rounded">
          <span className="block w-4 h-4 bg-black rounded-full"></span>
        </div>
      );
    case 2:
      return (
        <div className="flex justify-between w-24 h-24 p-2 border-2 border-black rounded">
          <span className="block w-4 h-4 bg-black rounded-full"></span>
          <span className="self-end block w-4 h-4 bg-black rounded-full"></span>
        </div>
      );
    case 3:
      return (
        <div className="flex justify-between w-24 h-24 p-2 border-2 border-black rounded">
          <span className="block w-4 h-4 bg-black rounded-full"></span>
          <span className="self-center block w-4 h-4 bg-black rounded-full"></span>
          <span className="self-end block w-4 h-4 bg-black rounded-full"></span>
        </div>
      );
    case 4:
      return (
        <div className="flex justify-between w-24 h-24 p-2 border-2 border-black rounded">
          <div className="flex flex-col justify-between">
            <span className="block w-4 h-4 bg-black rounded-full"></span>
            <span className="block w-4 h-4 bg-black rounded-full "></span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="block w-4 h-4 bg-black rounded-full"></span>
            <span className="block w-4 h-4 bg-black rounded-full"></span>
          </div>
        </div>
      );
    case 5:
      return (
        <div className="flex justify-between w-24 h-24 p-2 border-2 border-black rounded">
          <div className="flex flex-col justify-between">
            <span className="block w-4 h-4 bg-black rounded-full"></span>
            <span className="block w-4 h-4 bg-black rounded-full "></span>
          </div>

          <div className="flex items-center">
            <span className="block w-4 h-4 bg-black rounded-full"></span>
          </div>

          <div className="flex flex-col justify-between">
            <span className="block w-4 h-4 bg-black rounded-full"></span>
            <span className="block w-4 h-4 bg-black rounded-full"></span>
          </div>
        </div>
      );
    case 6:
      return (
        <div className="flex justify-between w-24 h-24 p-2 border-2 border-black rounded">
          <div className="flex flex-col justify-between">
            <span className="block w-4 h-4 bg-black rounded-full"></span>
            <span className="block w-4 h-4 bg-black rounded-full "></span>
            <span className="block w-4 h-4 bg-black rounded-full "></span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="block w-4 h-4 bg-black rounded-full"></span>
            <span className="block w-4 h-4 bg-black rounded-full"></span>
            <span className="block w-4 h-4 bg-black rounded-full"></span>
          </div>
        </div>
      );
    default:
      throw new Error("Not valid number for die");
  }
}
