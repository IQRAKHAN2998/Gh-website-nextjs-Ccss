import Image from 'next/image'

export default function Hero() {
  return (
    <main>
      <div id="hero-section">
        <div id="pics">
          {/* You can add an image here if needed */}
        </div>
        <div id="HEAD">
          <h1>GOVERNOR Sindh</h1>
          <h2>Kamran Khan Tessori</h2>
          <h3>
            Certified Cloud <br />
            Applied Generative AI <br />
            Engineer (GenEng)
          </h3>
          <h4>Earn up to $5,000 / month</h4>
          <h5>
           
          Now admissions are open in Hyderabad
          </h5>
          <div id="BUTTON">
            <button>APPLY NOW</button>
            <h1>
              508,000 <br />
              Accepted applications</h1>
            
          </div>
        
        </div>
        <div id="leftside">
            
            <Image src="/cover..png" alt="governor sindh" width={600} height={500} />
            </div>
      </div>

    </main>
  )
}
