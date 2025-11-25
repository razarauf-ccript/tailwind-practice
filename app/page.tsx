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
        <div className="mb-2 px-40">
          <div className="bg-white p-10 mx-5 rounded-xl shadow-md">
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
        <div className="mb-2 bg-blue-50">
          <div className="pt-2 px-40">
            <div className="bg-white p-10 mx-5 rounded-xl shadow-md">
              <div className="flex items-center border-b-3 border-blue-100 pb-5">
                <img className="rounded-full h-10 mr-5" src="/user.png" />
                <div className="text-xl font-bold">Breast Impressions & Findings</div>
              </div>
              <div className="py-5">
                November 5th, 2025. The patient presents with symptoms including pain, lump, cancer cyst, cold symptoms or congestion, right wrist pain or injury, right hip pain or injury, and a history of Mohs micrographic surgery on the nose in 2012.
              </div>
              <div className="flex justify-between gap-10">
                <div className="p-10 rounded-xl bg-blue-50 w-200">
                  <div className="flex items-center pb-5">
                    <img className="rounded-full h-8 mr-5" src="/heat.png" />
                    <div className="text-l font-bold">Temperature Measurements</div>
                  </div>
                  <div className="flex justify-between border-b-2 border-blue-100 mb-5">
                    <div>Breast Global Temperature Difference</div>
                    <div>0.06°C</div>
                  </div>
                  <div className="flex justify-between border-b-2 border-blue-100 mb-5">
                    <div>Normal Threshold</div>
                    <div>&lt; 0.3°C</div>
                  </div>
                  <div className="flex justify-between border-b-2 border-blue-100 mb-5">
                    <div>Status</div>
                    <div className="bg-green-100 px-5 py-1 text-green-700 rounded-xl">Within Normal Limits</div>
                  </div>
                </div>
                <div className="p-10 rounded-xl bg-blue-50 w-200">
                  <div className="flex items-center pb-5">
                    <img className="rounded-full h-8 mr-5" src="/breast.png" />
                    <div className="text-l font-bold">Nipple Temperature</div>
                  </div>
                  <div className="flex justify-between border-b-2 border-blue-100 mb-5">
                    <div>Breast Nipple Temperature Difference</div>
                    <div>0.71°C</div>
                  </div>
                  <div className="flex justify-between border-b-2 border-blue-100 mb-5">
                    <div>Normal Threshold</div>
                    <div>&lt; 1.0°C</div>
                  </div>
                  <div className="flex justify-between border-b-2 border-blue-100 mb-5">
                    <div>Status</div>
                    <div className="bg-green-100 px-5 py-1 text-green-700 rounded-xl">Within Normal Limits</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 border-l-3 border-blue-500 p-5 mt-5">
                <div className="flex items-center pb-5">
                  <img className="rounded-full h-8 mr-5" src="/microscope.png" />
                  <div className="text-l font-bold">Thermovascular Evaluation</div>
                </div>
                <div className="flex items-center pb-5">
                  <img className="rounded-full h-5 mr-5" src="/check.png" />
                  <div>The thermovascular evaluation reveals symmetrical thermal patterns across both breasts, with no significant hyperthermic or hypothermic areas noted.</div>
                </div>
                <div className="flex items-center pb-5">
                  <img className="rounded-full h-5 mr-5" src="/check.png" />
                  <div>There is no evidence of focal hyperthermia in any specific quadrant, and the overall thermal distribution appears consistent with normal physiological patterns.</div>
                </div>
              </div>
              <div className="bg-yellow-100 border-l-3 border-yellow-500 p-5 mt-5">
                <div className="flex items-center pb-5">
                  <img className="rounded-full h-8 mr-5" src="/lightbulb.png" />
                  <div className="text-l font-bold">Recommendations</div>
                </div>
                <div>
                  I recommend that the thermal findings from this exam be clinically correlated with any further diagnostic imaging deemed necessary by the client's healthcare provider. Follow-up breast thermography is advised in 6 months to form a baseline, compare subsequent testing, and monitor for changes.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2 bg-blue-50">
          <div className="pt-2 px-40">
            <div className="bg-white p-10 mx-5 rounded-xl shadow-md">
              <div className="flex items-center border-b-3 border-blue-100 pb-5">
                <img className="rounded-full h-10 mr-5" src="/head.png" />
                <div className="text-xl font-bold">Head Examination</div>
              </div>
              <div className="text-l font-bold mt-5">Head Examination Summary</div>
              <div className="flex items-center mt-5"><div className="rounded-full border-blue-500 border-5 bg-blue-500 text-blue-500 h-3 w-3 mr-3"></div><div>No symptoms of a cold or nasal congestion were reported.</div></div>
              <div className="flex items-center mt-5"><div className="rounded-full border-blue-500 border-5 bg-blue-500 text-blue-500 h-3 w-3 mr-3"></div><div>There is no family history of strokes.</div></div>
              <div className="flex items-center mt-5"><div className="rounded-full border-blue-500 border-5 bg-blue-500 text-blue-500 h-3 w-3 mr-3"></div><div>Your last dental cleaning was completed within the past six months.</div></div>
              <div className="flex items-center mt-5"><div className="rounded-full border-blue-500 border-5 bg-blue-500 text-blue-500 h-3 w-3 mr-3"></div><div>You have had a wisdom tooth extraction.</div></div>
              <div className="flex items-center mt-5"><div className="rounded-full border-blue-500 border-5 bg-blue-500 text-blue-500 h-3 w-3 mr-3"></div><div>You have mercury fillings and crowns in place.</div></div>
            </div>
          </div>
        </div>

        <div className="mb-2 bg-blue-50">
          <div className="pt-2 px-40">
            <div className="bg-white p-10 mx-5 rounded-xl shadow-md">
              <div className="flex items-center border-b-3 border-blue-100 pb-5">
                <img className="rounded-full h-10 mr-5" src="/cancer.png" />
                <div className="text-xl font-bold">Breast Health Report</div>
              </div>
              <div>

                <div className="bg-blue-50 rounded-xl p-5 mt-5">
                  <div className="flex items-center pb-5">
                    <img className="rounded-full h-10 mr-5" src="/mammogram.png" />
                    <div className="text-xl font-bold">Breast Health Report</div>
                  </div>
                  <div>Your mammogram performed on October 15, 2018, showed normal results, with no significant findings.</div>
                </div>

                <div className="bg-blue-50 rounded-xl p-5 mt-5">
                  <div className="flex items-center pb-5">
                    <img className="rounded-full h-10 mr-5" src="/tissue-culture.png" />
                    <div className="text-xl font-bold">Breast Tissue</div>
                  </div>
                  <div>YYou have dense breast tissue, which is a common condition and does not indicate any problems.</div>
                </div>

                <div className="bg-blue-50 rounded-xl p-5 mt-5">
                  <div className="flex items-center pb-5">
                    <img className="rounded-full h-10 mr-5" src="/mammogram.png" />
                    <div className="text-xl font-bold">Family History</div>
                  </div>
                  <div>There is a family history of cancer, but you have not been diagnosed with breast cancer.</div>
                </div>

                <div className="bg-blue-50 rounded-xl p-5 mt-5">
                  <div className="flex items-center pb-5">
                    <img className="rounded-full h-10 mr-5" src="/heart-rate.png" />
                    <div className="text-xl font-bold">Breast Health History</div>
                  </div>
                  <div>You have experienced some breast health issues in the past, but there are no current concerns.</div>
                </div>

                <div className="bg-blue-100 border-l-3 border-blue-500 p-5 mt-5">
                  <div className="text-l font-bold">Reproductive Health</div>
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="text-m font-bold mt-5">Menstrual Periods:</div>
                      <div className="text-l font-light">You are not currently having menstrual periods.</div>
                    </div>
                    <div>
                      <div className="text-m font-bold mt-5">Pregnancy:</div>
                      <div className="text-l font-light">You are not currently pregnant.</div>
                    </div>
                    {/* </div> */}

                    {/* <div className="flex justify-start"> */}
                    <div>
                      <div className="text-m font-bold mt-5">Breastfeeding:</div>
                      <div className="text-l font-light">You are not breastfeeding at this time, but you have breastfed in the past.</div>
                    </div>
                    <div>
                      <div className="text-m font-bold mt-5">Contraceptives:</div>
                      <div className="text-l font-light">You are not using any contraceptive methods currently.</div>
                    </div>
                  </div>

                </div>

                <div className="italic mt-5">If you have any questions or concerns about your breast health, please feel free to reach out. We are here to support you.</div>


              </div>
            </div>
          </div>
        </div>


        <div className="mb-2 bg-blue-50">
          <div className="pt-2 px-40">
            <div className="bg-white p-10 mx-5 rounded-xl shadow-md">
              <div className="flex items-center border-b-3 border-blue-100 pb-5">
                <img className="rounded-full h-10 mr-5" src="/fitness.png" />
                <div className="text-xl font-bold">Abdomen</div>
              </div>
              <div className="mt-4">
                The patient underwent a gynecological surgery, specifically a cesarean section, on November 11, 1986.
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2 bg-blue-50">
          <div className="pt-2 px-40">
            <div className="bg-white p-10 mx-5 rounded-xl shadow-md">
              <div className="flex items-center border-b-3 border-blue-100 pb-5">
                <img className="rounded-full h-10 mr-5" src="/fist.png" />
                <div className="text-xl font-bold">Upper Extremities</div>
              </div>
              <div className="mt-4">
                You are experiencing pain or an injury in your right wrist, which may involve fractures or dislocations. We will work together to assess your condition and determine the best treatment plan for your recovery.
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2 bg-blue-50">
          <div className="pt-2 px-40">
            <div className="bg-white p-10 mx-5 rounded-xl shadow-md">
              <div className="flex items-center border-b-3 border-blue-100 pb-5">
                <img className="rounded-full h-10 mr-5" src="/walk.png" />
                <div className="text-xl font-bold">Lower Extremities: Right Hip Pain or Injury</div>
              </div>
              <div className="mt-4">
                You are experiencing pain or discomfort in your right hip. This could be due to an injury or strain. We recommend monitoring your symptoms and considering rest, ice, and over-the-counter pain relief if needed. If the pain persists or worsens, please reach out for further evaluation and guidance. Your comfort and recovery are our top priorities.
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2 bg-blue-50">
          <div className="pt-2 px-40">
            <div className="bg-white p-10 mx-5 rounded-xl shadow-md">
              <div className="flex items-center border-b-3 border-blue-100 pb-5">
                <img className="rounded-full h-10 mr-5" src="/privacy.png" />
                <div className="text-xl font-bold">Skin Evaluation</div>
              </div>
              <div className="mt-4">
                In September 2012, you underwent Mohs micrographic surgery on your nose to treat a skin condition. This specialized procedure is designed to remove cancerous skin while preserving as much healthy tissue as possible. Your care team is here to support you and answer any questions you may have about your skin health moving forward.
              </div>
            </div>
          </div>
        </div>

        <div className="mb-2 bg-blue-50">
          <div className="pt-2 px-40">
            <div className="bg-white p-10 mx-5 rounded-xl shadow-md">
              <div className="flex items-center border-b-3 border-blue-100 pb-5">
                <img className="rounded-full h-10 mr-5" src="/heart-variant.png" />
                <div className="text-xl font-bold">Lifestyle</div>
              </div>
              <div className="mt-2 font-bold">Current Lifestyle Factors:</div>
              <div className="bg-blue-50 rounded-xl p-7 my-2">
                <div className="flex items-center border-blue-100 pb-5">
                  <img className="rounded-full h-6 mr-5" src="/coffee.png" />
                  <div className="text-l font-bold">Caffeine Intake</div>
                </div>
                <div>You are currently using caffeine. It's important to monitor your consumption, as it can affect your overall health and well-being.</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-7 my-2">
                <div className="flex items-center border-blue-100 pb-5">
                  <img className="rounded-full h-6 mr-5" src="/mindset.png" />
                  <div className="text-l font-bold">Stress and Anxiety</div>
                </div>
                <div>You may be experiencing stress or anxiety. It's normal to feel this way at times, and there are effective strategies and support available to help you manage these feelings.</div>
              </div>
              <div className="mt-4 italic">If you have any questions or need assistance, please feel free to reach out. Your health and comfort are our top priorities.</div>
            </div>
          </div>
        </div>

        <div className="mb-2 bg-blue-50">
          <div className="pt-2 px-40">
            <div className="bg-white p-10 mx-5 rounded-xl shadow-md">
              <div className="flex items-center border-b-3 border-blue-100 pb-5">
                <img className="rounded-full h-10 mr-5" src="/user.png" />
                <div className="text-xl font-bold">HEADING</div>
              </div>
              <div></div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
