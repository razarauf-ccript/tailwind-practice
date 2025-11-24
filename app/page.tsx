import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="border-b-4 border-blue-500 px-40">
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
      <div className="bg-blue-50">
        <div className="pt-2 px-40">
          <div className="bg-white p-10 m-5 rounded-xl shadow-md">
            <div className="flex items-center border-b-3 border-blue-100 pb-5">
              <img className="rounded-full h-10 mr-5" src="/user.png" />
              <div className="text-xl font-bold">Patient Information</div>
            </div>
            <div className="flex justify-start pt-5 gap-50">
              <div>
                <div className="text-gray-700 text-sm">PATIENT NAME</div>
                <div className="font-bold text-lg">Teresa Rose</div>
              </div>
              <div>
                <div className="text-gray-700 text-sm">DATE OF BIRTH</div>
                <div className="font-bold text-lg">July 30, 1960</div>
              </div>
              <div>
                <div className="text-gray-700 text-sm">STUDY DATE</div>
                <div className="font-bold text-lg text-blue-500">November 5, 2025</div>
              </div>
            </div>
            <div className="flex justify-start pt-5 gap-48">
              <div>
                <div className="text-gray-700 text-sm">TECHNICIAN</div>
                <div className="font-bold text-lg">Iyad Ismail, MD</div>
              </div>
              <div>
                <div className="text-gray-700 text-sm">PRESENTING SYMPTOMS</div>
                <div className="text-lg">Pain Lump Cancer Cyst, Cold symptoms or congestion, Wrist Pain or Injury - Right, Hip Pain or Injury - Right, Skin conditions: Mohs micrographic surgery - Nose/2012-09-12</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-2 px-40">
          <div className="bg-white p-10 m-5 rounded-xl shadow-md">
            <div className="flex items-center border-b-3 border-blue-100 pb-5">
              <img className="h-10 mr-5" src="/stethoscope.png" />
              <div className="text-xl font-bold">Patient Symptoms</div>
            </div>
            <div className="mt-6">
              We carefully reviewed the images obtained from the thermal imaging study alongside other diagnostic tests and clinical findings to gain a comprehensive understanding of your condition.
            </div>
            <br />
            <div>
              It's important to know that thermography is a supportive diagnostic tool and should not replace other imaging methods like mammography or ultrasound. A negative thermogram does not eliminate the possibility of needing further tests or a biopsy based on your clinical situation.
            </div>
            <br />
            <div className="bg-blue-100 border-l-3 border-blue-500 p-5">
              <div className="text-l font-bold">Description of the Clinical Thermal Imaging Study:</div>
              <div className="pt-3">You underwent a digital infrared thermal imaging examination using a high-resolution thermographic camera designed for medical use. We followed standardized protocols to ensure accurate results.</div>
            </div>
            <br />
            <div>
              Medical thermography is a non-invasive method that measures temperature differences on the skin. This can provide valuable insights into your body's metabolic and blood flow activity beneath the skin. Changes in temperature may reveal unusual or concerning patterns in specific areas of interest.
            </div>
            <br />
            <div>
              While thermography is a useful tool, it is essential to consider it alongside other diagnostic methods and clinical evaluations for a complete assessment of your health.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
