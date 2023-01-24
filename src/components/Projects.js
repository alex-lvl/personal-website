import blogPreview from '../images/blog-app-preview.png';
import todolistPreview from '../images/todo-list-preview.png';
import princessPreview from '../images/wheres-the-princess-preview.png';
import weatherApp from '../images/weather-app-preview.png';
import computerWorldPreview from '../images/computer-world-preview.png';
import battleshipPreview from '../images/battleship-preview.png';
import newsweekPreview from '../images/newsweek-clone-preview.png';
import restaurantPreview from '../images/restaurant-preview.png';
import tictactoePreview from '../images/tic-tac-toe-preview.png';
import youtubePreview from '../images/youtube-clone-preview.png';
import calculatorPreview from '../images/calculator-preview.png';
import membersPreview from '../images/members-preview.png';
import rentagamePreview from '../images/rent-a-game-preview.png';
import Skill from './Skill';

function Projects(props) {
  return (
    <div className="pad-y" id="projects">
      <h1>projects</h1>
      <hr></hr>

      <div className="project">
        <div className="project-preview-container">
          <img src={blogPreview} alt="blog app preview" />
        </div>
        <div className="project-description-container">
          <h3>Event Horizon</h3>
          <div className="project-stack-container">
            <Skill
              name="react"
              class="project-stack-icon"
              vector={props.reactIcon}
            />
            <Skill
              name="express"
              class="project-stack-icon"
              vector={props.expressIcon}
            />
            <Skill
              name="node.js"
              class="project-stack-icon"
              vector={props.nodeIcon}
            />
            <Skill
              name="REST API"
              class="project-stack-icon"
              vector={props.apiIcon}
            />
            <Skill
              name="mongoDB"
              class="project-stack-icon"
              vector={props.mongoIcon}
            />
          </div>
          <p>
            This is a full-stack app utilizing a back-end API and front-end
            client developed with MERN technology. Write, edit, or delete
            articles, and leave comments under a user's post in this blog app. I
            write about market conditions in the business category. Check it
            out!
          </p>
          <div className="button-container">
            <form
              target="_blank"
              method="GET"
              action="https://github.com/alex-lvl/blog-api"
            >
              <button className="jumbotron-button">Github</button>
            </form>
            <form
              target="_blank"
              method="GET"
              action="https://alex-lvl.github.io/blog-react/"
            >
              <button className="jumbotron-button">Live Demo</button>
            </form>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-preview-container">
          <img src={todolistPreview} alt="todo list app preview" />
        </div>
        <div className="project-description-container">
          <h3>Todo List</h3>
          <div className="project-stack-container">
            <Skill
              name="javascript"
              class="project-stack-icon"
              vector={props.javascriptIcon}
            />
            <Skill
              name="Sass"
              class="project-stack-icon"
              vector={props.sassIcon}
            />
            <Skill
              name="bootstrap"
              class="project-stack-icon"
              vector={props.bootstrapIcon}
            />
            <Skill
              name="webpack"
              class="project-stack-icon"
              vector={props.webpackIcon}
            />
            <Skill
              name="firebase"
              class="project-stack-icon"
              vector={props.firebaseIcon}
            />
          </div>
          <p>
            A todo list app created with Javascript and integrated with Firebase
            as a back-end. Users may create todos and view all of them in their
            inbox or sorted by week, present, or project. Todos are saved with a
            Google account or on the local machine.
          </p>
          <div className="button-container">
            <form
              target="_blank"
              method="GET"
              action="https://github.com/alex-lvl/todo-list"
            >
              <button className="jumbotron-button">Github</button>
            </form>
            <form
              target="_blank"
              method="GET"
              action="https://todo-list-c28c1.web.app/"
            >
              <button className="jumbotron-button">Live Demo</button>
            </form>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-preview-container">
          <img src={weatherApp} alt="weather app preview" />
        </div>
        <div className="project-description-container">
          <h3>Weather App</h3>
          <div className="project-stack-container">
            <Skill
              name="javascript"
              class="project-stack-icon"
              vector={props.javascriptIcon}
            />
            <Skill
              name="Sass"
              class="project-stack-icon"
              vector={props.sassIcon}
            />
            <Skill
              name="webpack"
              class="project-stack-icon"
              vector={props.webpackIcon}
            />
          </div>
          <p>
            View the weather forecast for a city in this weather application
            created with the Open Weather API and Javascript. Try searching for
            your city to fetch weather forecast details!
          </p>
          <div className="button-container">
            <form
              target="_blank"
              method="GET"
              action="https://github.com/alex-lvl/weather-app"
            >
              <button className="jumbotron-button">Github</button>
            </form>
            <form
              target="_blank"
              method="GET"
              action="https://alex-lvl.github.io/weather-app/"
            >
              <button className="jumbotron-button">Live Demo</button>
            </form>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-preview-container">
          <img src={computerWorldPreview} alt="computer world app preview" />
        </div>
        <div className="project-description-container">
          <h3>Computer World</h3>
          <div className="project-stack-container">
            <Skill
              name="react"
              class="project-stack-icon"
              vector={props.reactIcon}
            />
          </div>
          <p>
            A simple, visually appealing front-end focused project created with
            react. Developed as an e-commerce styled website.
          </p>
          <div className="button-container">
            <form
              target="_blank"
              method="GET"
              action="https://github.com/alex-lvl/shopping-cart"
            >
              <button className="jumbotron-button">Github</button>
            </form>
            <form
              target="_blank"
              method="GET"
              action="https://alex-lvl.github.io/shopping-cart/"
            >
              <button className="jumbotron-button">Live Demo</button>
            </form>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-preview-container">
          <img src={tictactoePreview} alt="tic tac toe app preview" />
        </div>
        <div className="project-description-container">
          <h3>Tic Tac Toe</h3>
          <div className="project-stack-container">
            <Skill
              name="javascript"
              class="project-stack-icon"
              vector={props.javascriptIcon}
            />
            <Skill
              name="Sass"
              class="project-stack-icon"
              vector={props.sassIcon}
            />
          </div>
          <p>
            Try defeating the unbeatable AI in this Tic-Tac-Toe game. Developed
            with Javascript and minmax algorithm.
          </p>
          <div className="button-container">
            <form
              target="_blank"
              method="GET"
              action="https://github.com/alex-lvl/Tic-Tac-Toe"
            >
              <button className="jumbotron-button">Github</button>
            </form>
            <form
              target="_blank"
              method="GET"
              action="https://alex-lvl.github.io/Tic-Tac-Toe/"
            >
              <button className="jumbotron-button">Live Demo</button>
            </form>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-preview-container">
          <img src={princessPreview} alt="wheres the princess app preview" />
        </div>
        <div className="project-description-container">
          <h3>Where's the princess</h3>
          <div className="project-stack-container">
            <Skill
              name="react"
              class="project-stack-icon"
              vector={props.reactIcon}
            />
            <Skill
              name="firebase"
              class="project-stack-icon"
              vector={props.firebaseIcon}
            />
            <Skill
              name="javascript"
              class="project-stack-icon"
              vector={props.javascriptIcon}
            />
          </div>
          <p>
            Find all the listed characters in this where's waldo styled game!
            Post timed results to the leaderboard and compare your results to
            other players on the leaderboard page.
          </p>
          <div className="button-container">
            <form
              target="_blank"
              method="GET"
              action="https://github.com/alex-lvl/photo-tagging-app"
            >
              <button className="jumbotron-button">Github</button>
            </form>
            <form
              target="_blank"
              method="GET"
              action="https://photo-tagging-3a70f.web.app/"
            >
              <button className="jumbotron-button">Live Demo</button>
            </form>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-preview-container">
          <img src={battleshipPreview} alt="battleship app preview" />
        </div>
        <div className="project-description-container">
          <h3>Battleship</h3>
          <div className="project-stack-container">
            <Skill
              name="javascript"
              class="project-stack-icon"
              vector={props.javascriptIcon}
            />
            <Skill
              name="webpack"
              class="project-stack-icon"
              vector={props.webpackIcon}
            />
            <Skill
              name="jest"
              class="project-stack-icon"
              vector={props.jestIcon}
            />
          </div>
          <p>Play a classic game of battleship against an AI.</p>
          <div className="button-container">
            <form
              target="_blank"
              method="GET"
              action="https://github.com/alex-lvl/Battleship"
            >
              <button className="jumbotron-button">Github</button>
            </form>
            <form
              target="_blank"
              method="GET"
              action="https://alex-lvl.github.io/Battleship/"
            >
              <button className="jumbotron-button">Live Demo</button>
            </form>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-preview-container">
          <img
            src={youtubePreview}
            alt="youtube clone project preview preview"
          />
        </div>
        <div className="project-description-container">
          <h3>Youtube Clone</h3>
          <div className="project-stack-container">
            <Skill
              name="HTML"
              class="project-stack-icon"
              vector={props.htmlIcon}
            />
            <Skill
              name="CSS"
              class="project-stack-icon"
              vector={props.cssIcon}
            />
          </div>
          <p>A responsive design focused youtube clone project.</p>
          <div className="button-container">
            <form
              target="_blank"
              method="GET"
              action="https://github.com/alex-lvl/youtube-page-clone"
            >
              <button className="jumbotron-button">Github</button>
            </form>
            <form
              target="_blank"
              method="GET"
              action="https://alex-lvl.github.io/youtube-page-clone/"
            >
              <button className="jumbotron-button">Live Demo</button>
            </form>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-preview-container">
          <img src={rentagamePreview} alt="rent a game app preview" />
        </div>
        <div className="project-description-container">
          <h3>Rent-A-Game</h3>
          <div className="project-stack-container">
            <Skill
              name="bootstrap"
              class="project-stack-icon"
              vector={props.javascriptIcon}
            />
            <Skill
              name="express"
              class="project-stack-icon"
              vector={props.expressIcon}
            />
            <Skill
              name="EJS"
              class="project-stack-icon"
              vector={props.ejsIcon}
            />
            <Skill
              name="node.js"
              class="project-stack-icon"
              vector={props.nodeIcon}
            />
            <Skill
              name="mongoDB"
              class="project-stack-icon"
              vector={props.mongoIcon}
            />
          </div>
          <p>
            An inventory management app for an imaginary store. Users can view
            available games in the store and how many copies are available for
            rent. Users may also view available games by category and see a list
            of games in the category.
          </p>
          <div className="button-container">
            <form
              target="_blank"
              method="GET"
              action="https://github.com/alex-lvl/inventory-application"
            >
              <button className="jumbotron-button">Github</button>
            </form>
            <form
              target="_blank"
              method="GET"
              action="https://inventory-application-production-3ca3.up.railway.app/"
            >
              <button className="jumbotron-button">Live Demo</button>
            </form>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-preview-container">
          <img src={restaurantPreview} alt="restaurant page project preview" />
        </div>
        <div className="project-description-container">
          <h3>Restaurant</h3>
          <div className="project-stack-container">
            <Skill
              name="javascript"
              class="project-stack-icon"
              vector={props.javascriptIcon}
            />
            <Skill
              name="bootstrap"
              class="project-stack-icon"
              vector={props.bootstrapIcon}
            />
            <Skill
              name="webpack"
              class="project-stack-icon"
              vector={props.webpackIcon}
            />
          </div>
          <p>
            A responsive design focused app. Developed with DOM manipulation.
            View the home page, menu, or contact details.
          </p>
          <div className="button-container">
            <form
              target="_blank"
              method="GET"
              action="https://github.com/alex-lvl/restaurant-page"
            >
              <button className="jumbotron-button">Github</button>
            </form>
            <form
              target="_blank"
              method="GET"
              action="https://alex-lvl.github.io/restaurant-page/"
            >
              <button className="jumbotron-button">Live Demo</button>
            </form>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-preview-container">
          <img src={membersPreview} alt="members only app preview" />
        </div>
        <div className="project-description-container">
          <h3>Members Only</h3>
          <div className="project-stack-container">
            <Skill
              name="express"
              class="project-stack-icon"
              vector={props.expressIcon}
            />
            <Skill
              name="EJS"
              class="project-stack-icon"
              vector={props.ejsIcon}
            />
            <Skill
              name="node.js"
              class="project-stack-icon"
              vector={props.nodeIcon}
            />
            <Skill
              name="mongoDB"
              class="project-stack-icon"
              vector={props.mongoIcon}
            />
          </div>
          <p>
            An authentication focused app where users may post a message to the
            message board only if they're signed in.
          </p>
          <div className="button-container">
            <form
              target="_blank"
              method="GET"
              action="https://github.com/alex-lvl/members-only"
            >
              <button className="jumbotron-button">Github</button>
            </form>
            <form
              target="_blank"
              method="GET"
              action="https://members-only-production-e198.up.railway.app/"
            >
              <button className="jumbotron-button">Live Demo</button>
            </form>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-preview-container">
          <img src={calculatorPreview} alt="calculator app preview" />
        </div>
        <div className="project-description-container">
          <h3>Calculator</h3>
          <div className="project-stack-container">
            <Skill
              name="javascript"
              class="project-stack-icon"
              vector={props.javascriptIcon}
            />
          </div>
          <p>A calculator app that does basic math.</p>
          <div className="button-container">
            <form
              target="_blank"
              method="GET"
              action="https://github.com/alex-lvl/simple-calculator"
            >
              <button className="jumbotron-button">Github</button>
            </form>
            <form
              target="_blank"
              method="GET"
              action="https://alex-lvl.github.io/simple-calculator/"
            >
              <button className="jumbotron-button">Live Demo</button>
            </form>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-preview-container">
          <img src={newsweekPreview} alt="newsweek clone project preview" />
        </div>
        <div className="project-description-container">
          <h3>Newsweek Clone</h3>
          <div className="project-stack-container">
            <Skill
              name="boostrap"
              class="project-stack-icon"
              vector={props.bootstrapIcon}
            />
          </div>
          <p>
            A cloned version of the newsweek homepage using the Bootstrap
            library.
          </p>
          <div className="button-container">
            <form
              target="_blank"
              method="GET"
              action="https://github.com/alex-lvl/newsweek-homepage"
            >
              <button className="jumbotron-button">Github</button>
            </form>
            <form
              target="_blank"
              method="GET"
              action="https://alex-lvl.github.io/newsweek-homepage/"
            >
              <button className="jumbotron-button">Live Demo</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
