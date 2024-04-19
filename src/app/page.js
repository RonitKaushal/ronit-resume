'use client'
 
import { useRouter } from 'next/navigation';
import { myData } from './data'; // If using data.js
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import Head from 'next/head'

const MyPage = () => {
  const router = useRouter(); // Get router (optional)

  return (
    <div>

<Head>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" defer />
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" defer />

      
</Head>
<div className="connect-overlay close" id="connect-overlay">
    <div className="connect_container">
      <div className="close-btn" id="overlay-close">x</div>
      <div className="title">
        <h3>Connect</h3>
      </div>
      <div className="link_container">
        <a href="https://www.linkedin.com/in/ronitkaushal" className="link_box">
          <div className="link_img">
            <img src="images/linkedin.png" />
          </div>
          <div className="link"><p>Linkedin / Ronit Kaushal</p></div>
        </a>
        <a href="https://github.com/RonitKaushal" className="link_box">
          <div className="link_img">
            <img src="images/github-logo.png" />
          </div>
          <div className="link"><p>GitHub / Ronit Kaushal</p></div>
        </a>
        <a href="tel: +91 9104320305" className="link_box">
          <div className="link_img">
            <img src="images/call.png" />
          </div>
          <div className="link"><p>Call / +91 9104320305</p></div>
        </a>
        <a href="mailto:ronitkaushal445@gmail.com" className="link_box">
          <div className="link_img">
            <img src="images/gmail.png" />
          </div>
          <div className="link"><p>Gmail / ronitkaushal445@gmail.com</p></div>
        </a>
      </div>
    </div>
  </div>



  {/* <!-- //////////////////////////////////////////////// --> */}




    <div className="main">
        <div className="sectionA">
            <div className="details-section">
            <div className="banner">
                <img src="images/portfolio Banner.png" />
            </div>
            <div className="about-section">
                <div className="name">
                    <h2>Ronit Kaushal</h2>
                </div>
                <div className="role">
                  <div className="skills">
                    <div className="skill">HTML5</div>
                    <div className="skill">CSS3</div>
                    <div className="skill">JavaScript</div>
                    <div className="skill">PHP</div>
                    <div className="skill">MySql</div>
                    <div className="skill">Python</div>
                    <div className="skill">Java</div>
                    <div className="skill">C++</div>
                  </div>


                </div>
                <div className="discription">
                    <h5>
                      Computer engineering student with aptitudes in web development. Natural skills at quickly learning and applying new technologies. Eager for industry exposure to hone skill set and professional competence.                
                    </h5>  
                    </div>
            </div>
            <div className="contact-btn-section">
                <button className="contact-btn" id="overlay-open">Connect</button>
            </div>
        </div>
        {/* <!-- ---------------------------     Experience Section Start    ------------------------------- --> */}
            <div className="experience-section">
                <h4 className="title-experi">Experience</h4>
                {/* <!-- ---------------------- Experience card start ----------------- --> */}
                <div className="experi-card">
                    <div className="experi-card-details">
                        <div className="image">
                            <img src="images/techR_logo.jpeg" />
                        </div>
                        <div className="experi-details">
                            <div className="experi-title">Wordpress Designer</div>
                            <div className="experi-company">Tech Rational</div>
                        </div>
                    </div>
                    <div className="time-section">
                        <div className="time-start">Aug 2023</div>
                        <div className="time-duration">6 Months</div>
                        <div className="time-end">Jan 2024</div>
                    </div>
                    <div className="timeline"></div>

                </div>
                {/* <!-- ---------------------- Experience card end -----------------  -->
                <!-- ---------------------- Experience card start ----------------- --> */}
                <div className="experi-card">
                    <div className="experi-card-details">
                        <div className="image">
                            <img src="images/techweLogo.jpeg" />
                        </div>
                        <div className="experi-details">
                            <div className="experi-title">Web Designer Intern</div>
                            <div className="experi-company">TECHWE INNOVATION PRIVATE LIMITED</div>
                        </div>
                    </div>
                    <div className="time-section">
                        <div className="time-start">Sep 2022</div>
                        <div className="time-duration">1 Month</div>
                        <div className="time-end">Oct 2022</div>
                    </div>
                    <div className="timeline"></div>

                </div>
                {/* <!-- ---------------------- Experience card end -----------------  --> */}
            </div>
                    {/* <!-- ---------------------------     Experience Section Start    ------------------------------- -->



                            <!-- ---------------------------     Education Section Start    ------------------------------- --> */}
            <div className="experience-section">
                <h4 className="title-experi">Education</h4>
                {/* <!-- ---------------------- Experience card start ----------------- --> */}
                <div className="experi-card">
                    <div className="experi-card-details">
                        <div className="image">
                            <img src="images/diploma.jpeg" />
                        </div>
                        <div className="experi-details">
                            <div className="experi-title">Diploma. Computer Engineering</div>
                            <div className="experi-company">Shree Swaminarayan Polytechnic</div>
                        </div>
                    </div>
                </div>
                {/* <!-- ---------------------- Experience card end -----------------  -->
                <!-- ---------------------- Experience card start ----------------- --> */}
                <div className="experi-card">
                    <div className="experi-card-details">
                        <div className="image">
                            <img src="images/school.png" />
                        </div>
                        <div className="experi-details">
                            <div className="experi-title">Secondary School</div>
                            <div className="experi-company">Mount Carmel High School</div>
                        </div>
                    </div>
                </div>
                {/* <!-- ---------------------- Experience card end -----------------  --> */}

            </div>
                    {/* <!-- ---------------------------     Experience Section Start    ------------------------------- --> */}



                </div>
                <div className="projects-btn" id="secB-open">Projects</div>
                <div className="sectionB" id="sectionB">
            <div className="close-btn" id="secB-close">x</div>
            <div className="container">
                {/* <!-- Pin Start --> */}
                <div className="pin">
                <div className="image">
                  <Image src="/images/projects.png"
                      
                      
                      fill

                      />
                </div>
                </div>


                {myData.map((item) => (
                <div className="pin" key={item.id}>
                    <div className="image">
                      <Image src={item.image}
                      
                      width={500}
                      height={500}

                      />
                    </div> 
                      <Link href={item.path} >{item.name}</Link>
                      <div className="tools">
                        <div className="tool">HTML5</div>
                        <div className="tool">CSS3</div>
                        <div className="tool">JavaScript</div>
                      </div>
                    </div>
                ))}

              </div>
        </div>
    </div>


    <Script src="/script.js" ></Script>

    </div>


);
};

export default MyPage;
