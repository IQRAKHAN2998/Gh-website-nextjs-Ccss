import Image from "next/image";

export default function Courses() {
    return (
        <main>
            <div id="work">
                <h1>Certified AI, Metaverse, and Web 3.0 Developer and Solopreneur <br /> Developing Billion-Dollar Valued
                    Developers and Solopreneurs</h1>
                <p>The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are
                    winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and
                    massive distribution networks. Solopreneurs trained in this program will win by automating work typically
                    outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing
                    vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This
                    program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will
                    adopt the ultra-lean business model and work independently and will not need to hire employees or other team
                    members.</p>
            </div>
            <div id="images">
                <Image src="/download1.jpg" alt="img" width={300} height={300} />
                <Image src="/download 2.jpg" alt="img" width={300} height={300} />
                <Image src="/download 3.jpg" alt="img" width={300} height={300} />
            </div>

            <br /><br />
            <br />
            <div id="links">
  <h1 id="courses">Core Courses Sequence</h1>
  <div className="course-container">
    <div className="course-item">
      <a href="#">
        <Image src="/download 4.jpg" alt="course" width={200} height={200} />
      </a>
      <p>Programming Fundamentals</p>
    </div>

    <div className="course-item">
      <a href="#">
        <Image src="/download 5.jpg" alt="course" width={200} height={200} />
      </a>
      <p>Web2 Using NextJS</p>
    </div>

    <div className="course-item">
      <a href="#">
        <Image src="/pic.jpg" alt="course" width={200} height={200} />
      </a>
      <p>Earn as you learn</p>
    </div>
  </div>
</div>


<div>
  <div id="adv">
    <h1>Advance Courses</h1>
    
    <div className="course-container">
      <div className="course-item">
        <a href="#">
          <Image src="/artifical intelligence.jpg" alt="course" width={250} height={250} />
        </a>
        <p>Artificial <br />Intelligence</p>
      </div>
      
      <div className="course-item">
        <a href="#">
          <Image src="/web 3.0.jpg" alt="course" width={250} height={250} />
        </a>
        <p>Web 3 and <br />Metaverse</p>
      </div>
      
      <div className="course-item">
        <a href="#">
          <Image src="/IOT.jpg" alt="course" width={250} height={250} />
        </a>
        <p>Cloud-Native <br />Computing</p>
      </div>
      
      <div className="course-item">
        <a href="#">
          <Image src="/programability.jpg" alt="procourse" width={250} height={250} />
        </a>
        <p>Ambient Computing <br />and IOT</p>
      </div>
      
      <div className="course-item">
        <a href="#">
          <Image src="/BIOINFORMATIC.jpg" alt="biocourse" width={250} height={250} />
        </a>
        <p>Genomics and <br />Bioinformatics</p>
      </div>
      
      
    </div>
  </div>
</div>


        </main>
    )
}
