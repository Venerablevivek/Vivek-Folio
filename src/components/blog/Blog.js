import React from 'react';
import "./Blog.css";
import Image1 from "../../assets/Img1.png";
import Image2 from "../../assets/Img2.png";
import Image3 from "../../assets/Img3.png";
import Image4 from "../../assets/Img4.png";
import Image5 from "../../assets/Img5.png";

const Blog = () => {
  return (
    <div>
      <section className='blog container section' id='blog' >
          <h2 className='section__title' >Published Articles</h2>

          <div className='blog__container grid' >
            <div className='blog__card' >
              <div className='blog__thumb' >
                <a href='https://www.geeksforgeeks.org/creating-and-deploying-an-atlas-cluster-in-mongodb/' target='_blank' > <span className='blog__category' >MongoDB</span> </a>
                <a href='https://www.geeksforgeeks.org/creating-and-deploying-an-atlas-cluster-in-mongodb/' target='_blank' ><img src={Image1} alt='' className='blog__img' /> </a>
              </div>

              <div className='blog__details' >
                <h3 className='blog__title' >Creating and Deploying an Atlas Cluster in MongoDB</h3>
                <div className='blog__meta' >
                  <span>12 Dec, 2023</span>
                  <span className='blog__dot' >.</span>
                  <span>Vivek</span>
                </div>
              </div>
            </div>

            <div className='blog__card' >
              <div className='blog__thumb' >
                <a href='https://www.geeksforgeeks.org/next-js-dynamic-api-routes/' target='_blank' > <span className='blog__category' >NextJS, ReactJs</span> </a>
                <a href='https://www.geeksforgeeks.org/next-js-dynamic-api-routes/' target='_blank' ><img src={Image2} alt='' className='blog__img' /> </a>
              </div>

              <div className='blog__details' >
                <h3 className='blog__title' >Next JS Dynamic API Routes</h3>
                <div className='blog__meta' >
                  <span>12 Dec, 2023</span>
                  <span className='blog__dot' >.</span>
                  <span>Vivek</span>
                </div>
              </div>
            </div>

            <div className='blog__card' >
              <div className='blog__thumb' >
                <a href='https://www.geeksforgeeks.org/spring-boot-versioning-a-rest-api/' target='_blank' > <span className='blog__category' >Java, Advanced Java, Spring Boot</span> </a>
                <a href='https://www.geeksforgeeks.org/spring-boot-versioning-a-rest-api/' target='_blank' ><img src={Image3} alt='' className='blog__img' /> </a>
              </div>

              <div className='blog__details' >
                <h3 className='blog__title' >Spring Boot – Versioning a REST API</h3>
                <div className='blog__meta' >
                  <span>08 Dec, 2023</span>
                  <span className='blog__dot' >.</span>
                  <span>Vivek</span>
                </div>
              </div>
            </div>

            <div className='blog__card' >
              <div className='blog__thumb' >
                <a href='https://www.geeksforgeeks.org/how-to-correctly-use-axios-params-with-arrays-in-javascript/' target='_blank' > <span className='blog__category' >Javascript,Web Technologies</span> </a>
                <a href='https://www.geeksforgeeks.org/how-to-correctly-use-axios-params-with-arrays-in-javascript/' target='_blank' ><img src={Image4} alt='' className='blog__img' /> </a>
              </div>

              <div className='blog__details' >
                <h3 className='blog__title' >How to correctly use axios params with arrays in JavaScript ?</h3>
                <div className='blog__meta' >
                  <span>22 Nov, 2023</span>
                  <span className='blog__dot' >.</span>
                  <span>Vivek</span>
                </div>
              </div>
            </div>

            <div className='blog__card' >
              <div className='blog__thumb' >
                <a href='https://www.geeksforgeeks.org/how-to-send-push-notification-using-xmpp-server/' target='_blank' > <span className='blog__category' >Node.js, Web Technologies</span> </a>
                <a href='https://www.geeksforgeeks.org/how-to-send-push-notification-using-xmpp-server/' target='_blank' ><img src={Image5} alt='' className='blog__img' /> </a>
              </div>

              <div className='blog__details' >
                <h3 className='blog__title' >How to send push notification using XMPP Server?</h3>
                <div className='blog__meta' >
                  <span>07 Nov, 2023</span>
                  <span className='blog__dot' >.</span>
                  <span>Vivek</span>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Blog