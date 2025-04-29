import { Database, Brain, Eye } from 'lucide-react'

export default function Services() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Services</h1>

      <p className="mb-12 text-lg">
        I offer specialized AI and data services to help businesses leverage
        technology for improved efficiency, insights, and automation. Below are
        the key service areas I provide:
      </p>

      <div className="space-y-16">
        {/* Computer Vision Section */}
        <section>
          <div className="mb-4 flex items-center gap-3">
            <Eye className="h-8 w-8" />
            <h2 className="text-2xl font-semibold">Computer Vision</h2>
          </div>
          <div className="border-l-2 border-purple-300 pl-4">
            <p className="mb-4">
              Solutions to help you leverage your visual data and automatically
              analyze video or image streams.
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-medium">
                  Media Asset Retrieval
                </h3>
                <p>
                  Quickly retrieve images whose contents match your textual
                  query. No more digging through folders and relying on
                  filenames—just type &quot;balloons&quot; to find all images
                  containing balloons.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium">
                  AI-Powered Video Analytics
                </h3>
                <ul className="list-disc space-y-4 pl-5">
                  <li>
                    <p className="font-medium">CCTV Footage Analysis</p>
                    <p>
                      Automatically process and extract relevant events from
                      CCTV footage, detect suspicious movements, and extract
                      valuable business insights like customer counts and peak
                      hours.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Footage Anonymization</p>
                    <p>
                      Comply with GDPR rules by automatically blurring sensitive
                      information from camera footage, such as faces and number
                      plates.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Quality Control Solutions</p>
                    <p>
                      Build pipelines to automatically detect anomalies in
                      industrial goods, produce, or other products.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* General Purpose AI Section */}
        <section>
          <div className="mb-4 flex items-center gap-3">
            <Brain className="h-8 w-8" />
            <h2 className="text-2xl font-semibold">General Purpose AI</h2>
          </div>
          <div className="border-l-2 border-purple-300 pl-4">
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-medium">
                  Knowledge Base Building
                </h3>
                <p className="mb-3">
                  Custom ChatGPT-like agents that know your company and business
                  inside out, helping you quickly retrieve information and
                  discover new insights.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Leverage all company documents (PDFs, spreadsheets, videos,
                    etc.)
                  </li>
                  <li>
                    Integrate with your company&apos;s systems (CRM, databases,
                    etc.)
                  </li>
                  <li>Deploy in a secure cloud environment for data privacy</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium">Accounting Tools</h3>
                <p className="mb-3">
                  Process paper invoices and receipts from different suppliers,
                  extracting relevant information and automatically categorizing
                  by expense category.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Process various document types and extract information
                  </li>
                  <li>
                    Automatically anonymize documents by removing sensitive
                    information
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Miscellaneous Data Services Section */}
        <section>
          <div className="mb-4 flex items-center gap-3">
            <Database className="h-8 w-8" />
            <h2 className="text-2xl font-semibold">
              Miscellaneous Data Services
            </h2>
          </div>
          <div className="border-l-2 border-purple-300 pl-4">
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-medium">
                  Data Visualization Dashboards
                </h3>
                <p className="mb-3">
                  Build dashboards to collect and visualize static or live data
                  for a clearer overview of your operations.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Track machinery operating status</li>
                  <li>Monitor consumables levels</li>
                  <li>Count visitors using computer vision</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium">
                  Legacy Software Maintenance
                </h3>
                <p>
                  Maintain, fix, or upgrade your AI or data-based systems to
                  improve performance, reduce costs, or implement new features.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium">Data Scraping</h3>
                <p>
                  Build tools to automatically collect data from webpages, clean
                  it, and store it in databases or spreadsheets, with optional
                  notifications via email or text message.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium">Routing Tools</h3>
                <p>
                  Optimize delivery routes to save time, fuel, and money for
                  businesses that fulfill a large number of deliveries daily.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
