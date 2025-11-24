import Image from "next/image";

export default function Home() {
  return (
    <div className="border-b-4 border-blue-500 px-20">
      <nav className="m-5 flex justify-between items-center">
        <span className="flex items-center">
          <div className="bg-blue-500 p-3 m-5 w-15 rounded-md"><img src="/heat.png" className="h-8" /></div>
          <span>
            <div className="text-xl font-bold">Thermographic Wellness, Inc.</div>
            <div className="text-md font-light">Medical Imaging Report</div>
          </span>
        </span>

        <span className="flex content-center">
          <span className="flex items-center bg-blue-500 py-3 px-4 rounded-md"><img src="/printer.png" className="h-5 mr-5" />Print Report</span>
          <span className="flex items-center bg-gray-200 py-3 px-4 rounded-md ml-5"><img src="/download.png" className="h-5 mr-5" />Download PDF</span>
        </span>
      </nav>
    </div>
  );
}
