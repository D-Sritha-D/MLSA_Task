/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/3rd Bg.png";

const imageAltText = "aesthetic laptop image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Food Calorie Detection using Images",
    description:
      "This application is designed to detect and estimate the calorie content of various foods using GoogleNet, a pre-trained convolutional neural network (CNN). The model has been trained on over 100 different types of foods and can accurately identify and estimate the calories present in those foods based on input images.",
    url: "https://github.com/D-Sritha-D/Food-Image-Calorie-Detection",
  },
  {
    title: "Emotion-Based-Music-Recommendation-System",
    description:
      "This repository hosts a music recommendation system that leverages emotion detection techniques to curate personalized playlists based on users' emotional states. The system utilizes cutting-edge machine learning algorithms to analyze and recognize users' emotions from various inputs, such as facial expressions, voice tones, or text inputs.",
    url: "https://github.com/D-Sritha-D/Emotion-Based-Music-Recommendation-System",
  },
  {
    title: "PDF-Knows",
    description:
      "PDFKnows is an innovative chatbot designed to revolutionize the way you interact with PDF documents. With its advanced AI capabilities, PDFKnows can analyze and understand the content of your PDFs, allowing you to have natural and intuitive conversations with your documents.",
    url: "https://github.com/D-Sritha-D/Pdf_Chatbot",
  },
  {
    title: "Speech Command Dataset Classification",
    description:
      "Using TensorFlow to build an LSTM (a type of RNN), this project aims to classify the audio clips provided in Google's Speech Command Dataset",
    url: "https://github.com/D-Sritha-D/Speech_Command_Dataset_Classification",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
