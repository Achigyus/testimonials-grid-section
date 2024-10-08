import './App.css'
import danielPic from './assets/image-daniel.jpg'
import jonathanPic from './assets/image-jonathan.jpg'
import jeanettePic from './assets/image-jeanette.jpg'
import patrickPic from './assets/image-patrick.jpg'
import kiraPic from './assets/image-kira.jpg'
import quotePic from './assets/bg-pattern-quotation.svg'

function App() {

  return (
    <main className="main">
      <div className="container">
        <div className="testimonials_grid_section_card_container">
          <div className="testimonials_grid_section_card clifford">
            <div className="testimonials_grid_section_img_name">
              <div className="testimonials_grid_section_img_container">
                <img src={danielPic} alt="#" className="testimonials_grid_section_img" />
              </div>
              <div className="testimonials_grid_section_name_container">
                <p className="testimonials_grid_section_name barlow_semi_condensed">Daniel Clifford</p>
                <p className="testimonials_grid_section_rank barlow_semi_condensed">Verified Graduate</p>
              </div>
              <img src={quotePic} alt="#" className="testimonials_grid_section_quote_img" />
            </div>

            <h1 className="testimonials_grid_section-card_title barlow_semi_condensed">I received a job offer mid-course, and the subjects I learned were current, if not more so,
              in the company I joined. I honestly feel I got every penny’s worth.</h1>

            <p className="testimonials_grid_section_card_desc barlow_semi_condensed">“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
              transition and have heard some people who had an amazing experience here. I signed up
              for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my life. Since completing
              the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
          </div>

          <div className="testimonials_grid_section_card walters">
            <div className="testimonials_grid_section_img_name">
              <div className="testimonials_grid_section_img_container">
                <img src={jonathanPic} alt="#" className="testimonials_grid_section_img" />
              </div>
              <div className="testimonials_grid_section_name_container">
                <p className="testimonials_grid_section_name barlow_semi_condensed">Jonathan Walters</p>
                <p className="testimonials_grid_section_rank barlow_semi_condensed">Verified Graduate</p>
              </div>
            </div>

            <h1 className="testimonials_grid_section-card_title barlow_semi_condensed">The team was very supportive and kept me motivated</h1>

            <p className="testimonials_grid_section_card_desc barlow_semi_condensed">“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
              for a big company. This was one of the best investments I’ve made in myself. ”</p>
          </div>

          <div className="testimonials_grid_section_card harmon">
            <div className="testimonials_grid_section_img_name">
              <div className="testimonials_grid_section_img_container">
                <img src={jeanettePic} alt="#" className="testimonials_grid_section_img" />
              </div>
              <div className="testimonials_grid_section_name_container">
                <p className="testimonials_grid_section_name barlow_semi_condensed">Jeanette Harmon</p>
                <p className="testimonials_grid_section_rank barlow_semi_condensed">Verified Graduate</p>
              </div>
            </div>

            <h1 className="testimonials_grid_section-card_title barlow_semi_condensed">An overall wonderful and rewarding experience</h1>

            <p className="testimonials_grid_section_card_desc barlow_semi_condensed">“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
              while doing something I love. ”</p>
          </div>

          <div className="testimonials_grid_section_card abrams">
            <div className="testimonials_grid_section_img_name">
              <div className="testimonials_grid_section_img_container">
                <img src={patrickPic} alt="#" className="testimonials_grid_section_img" />
              </div>
              <div className="testimonials_grid_section_name_container">
                <p className="testimonials_grid_section_name barlow_semi_condensed">Patrick Abrams</p>
                <p className="testimonials_grid_section_rank barlow_semi_condensed">Verified Graduate</p>
              </div>
            </div>

            <h1 className="testimonials_grid_section-card_title barlow_semi_condensed">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
              learning from their experiences was easy.</h1>

            <p className="testimonials_grid_section_card_desc barlow_semi_condensed">“ The staff seem genuinely concerned about my progress which I find really refreshing. The program
              gave me the confidence necessary to be able to go out in the world and present myself as a capable
              junior developer. The standard is above the rest. You will get the personal attention you need from
              an incredible community of smart and amazing people. ”</p>
          </div>

          <div className="testimonials_grid_section_card whittle">
            <div className="testimonials_grid_section_img_name">
              <div className="testimonials_grid_section_img_container">
                <img src={kiraPic} alt="#" className="testimonials_grid_section_img" />
              </div>
              <div className="testimonials_grid_section_name_container">
                <p className="testimonials_grid_section_name barlow_semi_condensed">Kira Whittle</p>
                <p className="testimonials_grid_section_rank barlow_semi_condensed">Verified Graduate</p>
              </div>
            </div>

            <h1 className="testimonials_grid_section-card_title barlow_semi_condensed">Such a life-changing experience. Highly recommended!</h1>

            <p className="testimonials_grid_section_card_desc barlow_semi_condensed">“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
              professionals who can help me learn programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the program. The entire curriculum and staff
              did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
              project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
              could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
              experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
              100% recommend! ”</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
