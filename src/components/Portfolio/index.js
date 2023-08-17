import React from "react";
import buildings from "../../assets/small/buildings.png";
import virtualreality from "../../assets/small/virtualreality.png";
import password from "../../assets/small/password.png";
import codingquiz from "../../assets/small/codingquiz.png";
import readme from "../../assets/small/readme.png";
import househunter from "../../assets/small/househunter.png";
import texteditor from "../../assets/small/texteditor.png";
import logomaker from "../../assets/small/circle.png";
import notetaker from "../../assets/small/notetaker.gif";
import socialnetwork from "../../assets/small/socialnetwork.png";
import employeetracker from "../../assets/small/employeetracker.png";
import techblog from "../../assets/small/techblog.png";
import ecommerce from "../../assets/small/ecommerce.gif";
import weather from "../../assets/small/weather.png";
import workday from "../../assets/small/workday.png";
import budgetwise from "../../assets/small/budgetwise.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://mahdi83777.github.io/MahdisWorkDayScheduler/">
                {" "}
                <img
                  src={workday}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="WorkDayScheduler"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Work Day Scheduler</h4>
              <p>
              A simple calendar application that allows a user to save events for each hour of the day by modifying starter code. 
              This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://mahdi83777.github.io/MahdisWeatherDashboard/">
                {" "}
                <img
                  src={weather}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="WeatherDashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
              This application is a weather dashboard that will display the current weather for the searched city as well as the forecast for the next five days. 
              It will also store in local storage and in searched history the past search results.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://afternoon-tundra-66898-d64f284645ec.herokuapp.com/">
                {" "}
                <img
                  src={budgetwise}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="BudgetWise"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Budget Wise</h4>
              <p>
              An online web application that allows users to track their finances. 
              This includes, income, expenses, budgetting, and more! 
              This application was developed using the MERN stack. 
              Our app also has a donation page integrated with Stripe.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/mahdi83777/MahdisEcommerceBackend">
                {" "}
                <img
                  src={ecommerce}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="EcommerceBackend"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Ecommerce Backend</h4>
              <p>
              Internet retail, also known as e-commerce, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. 
              E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. 
              Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer. 
              This application is the back end for an e-commerce site. It configures a working Express.js API to use Sequelize to interact with a MySQL database.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://salty-tor-19542.herokuapp.com/">
                {" "}
                <img
                  src={techblog}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="TechBlog"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Tech Blog</h4>
              <p>
              This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. 
              This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/mahdi83777/MahdisEmployeeTracker">
                {" "}
                <img
                  src={employeetracker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="EmployeeTracker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Employee Tracker</h4>
              <p>
              This command line application uses Node.js, Inquirer, and MySQL to manage a company's employee database. 
              It can view, add, update and delete data from the database.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/mahdi83777/MahdisSocialNetwork">
                {" "}
                <img
                  src={socialnetwork}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="SocialNetwork"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Social Network</h4>
              <p>
              This application is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. 
              This uses Express.js for routing, a MongoDB database, and the Mongoose ODM.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://shrouded-springs-09070.herokuapp.com/">
                {" "}
                <img
                  src={notetaker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="HomeBrew"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>HomeBrew</h4>
              <p>
              This application called Mahdis Note Taker can be used to write and save notes. 
              This application will use an Express.js back end and will save and retrieve note data from a JSON file.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/mahdi83777/MahdisLogoMaker">
                {" "}
                <img
                  src={logomaker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="LogoMaker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Logo Maker</h4>
              <p>
              This app uses a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. 
              The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://immense-woodland-75023-12b9f87d1bf1.herokuapp.com/">
                {" "}
                <img
                  src={househunter}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="RealEstate"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Real Estate</h4>
              <p>
              House Hunter is a web application where you can search for properties, upload your property for sale or rent and it is built with Node.js and Express.js that serves as a RESTful API for searching and listing real estate properties. 
              It utilizes Handlebars.js as the template engine for rendering dynamic views, MySQL as the database management system, and the Sequelize ORM for interacting with the database. 
              The project follows the MVC (Model-View-Controller) paradigm to maintain a well-organized folder structure.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://salty-tor-19542.herokuapp.com/">
                {" "}
                <img
                  src={texteditor}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="TextEditor"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Text Editor</h4>
              <p>
              This app builds a text editor that runs in the browser. 
              The app will be a single-page application that meets the PWA criteria. 
              Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. 
              The application will also function offline.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/mahdi83777/MahdisReadMe">
                {" "}
                <img
                  src={readme}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="ReadMe"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Read Me Generator</h4>
              <p>
              A command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://mahdi83777.github.io/MahdisQuiz/">
                {" "}
                <img
                  src={codingquiz}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="CodingQuiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Coding Quiz</h4>
              <p>
              A timed coding quiz with clear and polished user interface, written dynamically using HTML, CSS and Javascript.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://mahdi83777.github.io/MahdisPasswordGenerator/">
                {" "}
                <img
                  src={password}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="PasswordGenerator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Generator</h4>
              <p>
              An application that enables employees to generate random passwords based on criteria that they’ve selected.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={virtualreality}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="VirtualReality"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Virtual Reality</h4>
              <p>
              This project works to change the system of how we experience objects in the world. We want to create a complex virtual environment while maintaining the sense of reality. 
              Moreover, we are working to create a virtual reality environment, with the Oculus Quest headset, that depicts the orientation program in the university.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={buildings}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Buildings"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Buildings Management System</h4>
              <p>
              This project will be a focus on buildings in Lebanon. 
              A database that will store information about a building, its residents, its address and other attributes. 
              In the following, we’ll state the entities as well as their attributes, the relationships involved in the database, the constraints imposed and of course queries that can be done at the end of the project.{" "}
              </p>
            </div>
          </div>
        </div>


      </section>
    </div>
  );
}

export default Portfolio;
