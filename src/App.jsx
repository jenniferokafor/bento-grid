import "./app.scss";
import createPostIcon from "./assets/create-post.svg";
import starIcon from "./assets/star.svg";
import bestTimeDashboardCropped from "./assets/best-time-dashboard-cropped.svg";
import chatImg from "./assets/chat.svg";
import growthImg from "./assets/growth.svg";
import avatarsImg from "./assets/avatars.svg";
import calendarImg from "./assets/calendar.svg";
import socialsImg from "./assets/socials.svg";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="grid">
          <div className="create">
            <p>
              Create and schedule content <span>quicker.</span>
            </p>
            <img src={createPostIcon} alt="create post" />
          </div>
          <div className="write">
            <h2>Write your content using AI.</h2>
            <img src={chatImg} alt="chat" />
          </div>
          <div className="social">
            <h2>
              Social Media <span className="social-span-1">10x</span>{" "}
              <span className="social-span-2">Faster</span> with AI
            </h2>
            <div className="social-stars">
              {[...Array(5)]?.map((_, i) => (
                <img src={starIcon} alt="star" key={i} />
              ))}
            </div>
            <p>Over 4,000 5-star reviews</p>
          </div>
          <div className="manage">
            <img src={socialsImg} alt="social media accounts" />
            <h2>Manage multiple accounts and platforms.</h2>
          </div>
          <div className="faster">
            <h2>&gt;56%</h2>
            <p>faster audience growth</p>
            <img src={avatarsImg} alt="avatars" />
          </div>
          <div className="maintain">
            <h2>Maintain a consistent posting schedule.</h2>
            <img src={calendarImg} alt="calendar" />
          </div>
          <div className="grow">
            <img src={growthImg} alt="growth chart" />
            <h2>Grow followers with non-stop content.</h2>
          </div>
          <div className="schedule">
            <h2>Schedule to social media.</h2>
            <img src={bestTimeDashboardCropped} alt="dashboard" />
            <p>
              Optimize post timings to publish content at the perfect time for
              your audience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
