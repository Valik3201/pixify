<!-- Pixify - Image Search -->

<!-- PROJECT LOGO -->
<a name="readme-top">
  <div align="center"> 
  <br>
  <picture>
    <img alt="logo" src="https://github.com/Valik3201/goit-js-hw-11/blob/a16857efa0822a5285552a29ca9b8a0e7ac7549d/src/app/assets/logo.svg" width="400"
  </picture>
  </div>
</a>
    
<h2 align="center">
  HTTP Requests, REST API, pagination, and async/await
</h2>
    
<div align="center">
  <p>
    Search and display images using Pixabay API with features like pagination, image cards, and more.
    <br />
    <a href="https://github.com/Valik3201/goit-js-hw-11"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://valik3201.github.io/goit-js-hw-11/">View Demo</a>
    ·
    <a href="https://github.com/Valik3201/goit-js-hw-11/issues">Report Bug</a>
    ·
    <a href="https://github.com/Valik3201/goit-js-hw-11/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#http-requests">HTTP Requests</a></li>
        <li><a href="#gallery-and-image-card">Gallery and Image Card</a></li>
        <li><a href="#pagination">Pagination</a></li>
        <li><a href="#simplelightbox-library">SimpleLightbox Library</a></li>
        <li><a href="#page-scrolling">Page Scrolling</a></li>
        <li><a href="#infinite-scrolling">Infinite Scrolling</a></li>
      </ul>
    </li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![screenshot](https://github.com/Valik3201/goit-js-hw-11/blob/main/src/app/assets/screenshot.png)](https://github.com/Valik3201/goit-js-hw-11/blob/main/src/app/assets/screenshot.png)

**Pixify - Image Search** is a web application that allows users to search and display images using the Pixabay API. The project includes features such as HTTP requests, image cards, pagination, SimpleLightbox library integration, smooth page scrolling, and even infinite scrolling.

> [!NOTE]\
> The project is set up for automatic deployment to GitHub Pages using GitHub Actions by JamesIves ([GitHub Pages Deployment Action](https://github.com/marketplace/actions/deploy-to-github-pages)). The deployment action is configured to push production-ready code into the `gh-pages` branch.

### HTTP Requests

The search form in the HTML document allows users to enter a search string. Upon submitting the form, an HTTP request is made to the Pixabay API using the specified query parameters. If no images match the query, a notification is displayed.

### Gallery and Image Card

The gallery displays image cards, each containing a small image, image information, and statistics. The gallery content is cleared when searching with a new keyword to avoid confusing results.

### Pagination

Pixabay API supports pagination, and the project includes a "Load more" button. With each request, the page parameter is increased, and when searching with a new keyword, the page is reset. If the user reaches the end of the collection, a notification is displayed.

### SimpleLightbox Library

Large images are displayed using the SimpleLightbox library, which is integrated into the project. Each image card is wrapped in a link, and the library's refresh() method is called after adding a new group of image cards.

### Page Scrolling

Smooth page scrolling is implemented after each request and rendering of the next group of images.

### Infinite Scrolling

In addition to the "Load More" button, the project enables infinite loading of images when scrolling the page. 

**Note: The "Load More" button is accessible during input search, while Infinite Scrolling is available for popular list searches.**

<p align="right"><a href="#readme-top">Back to top</a></p>

<!-- Built With -->
## Built With

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [SCSS](https://sass-lang.com/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Axios](https://axios-http.com/)
* [SimpleLightbox](https://simplelightbox.com/)
* [Notiflix](https://www.notiflix.com/)
* [Font Awesome](https://fontawesome.com)
* [lazySizes](https://afarkas.github.io/lazysizes/index.html)

<p align="right"><a href="#readme-top">Back to top</a></p>

<!-- GETTING STARTED -->
## Getting Started

This section provides information on prerequisites and installation steps to set up the Pixify - Image Search project locally.

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Valik3201/pixify.git
2. Navigate to the project directory
   ```sh
    cd goit-js-hw-11
3. Install dependencies
   ```sh
    npm install

<p align="right"><a href="#readme-top">Back to top</a></p>

<!-- USAGE -->
## Usage

**Pixify - Image Search** provides a user-friendly interface for searching and displaying images using the Pixabay API. Follow the steps below to explore and make the most of the application:

1. Open the web application in your browser.
2. Enter a search query in the provided text field.
3. Click the "Search" button or press Enter to initiate the search.
4. Explore the gallery to view image cards, each containing a small image, information, and statistics.
5. Click on an image card to view the larger image using the SimpleLightbox library.
6. Scroll through the gallery and enjoy smooth page scrolling after each request.
7. Use the "Load more" button or experience infinite scrolling for additional images.
8. Keep an eye on notifications for search results, the end of the collection, or any issues encountered.

Feel free to experiment with different search queries and enjoy discovering a vast collection of images with Pixify!

<p align="right"><a href="#readme-top">Back to top</a></p>

<!-- ROADMAP -->
## Roadmap

- [x] Inception Phase:
  - [x] Project Planning
  - [x] Research and Design
  - [x] Documentation

- [x] Development Phase:
  - [x] Frontend Development
  - [x] Integration with Pixabay API
  - [x] Image Cards and Pagination

- [x] Documentation and Testing:
  - [x] Documentation and Testing

- [x] Post-Launch and Ongoing Development:
  - [x] SimpleLightbox Integration
  - [x] Notifications and User Feedback
  - [x] Optimization and Performance
  - [x] Infinite Scrolling


<p align="right"><a href="#readme-top">Back to top</a></p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to fork the project, create a new branch, make your changes, and submit a pull request.

1. Fork the Project
2. Create your Feature Branch 
    ```sh
    git checkout -b feature/NewFeature`

3. Commit your Changes
    ```sh
    `git commit -m 'Add some NewFeature'`
4. Push to the Branch
    ```sh
    `git push origin feature/NewFeature`
5. Open a Pull Request

<p align="right"><a href="#readme-top">Back to top</a></p>

<!-- CONTACT -->
## Contact

[![Gmail Badge](https://img.shields.io/badge/Gmail-EA4335?logo=gmail&logoColor=fff&style=flat)](mailto:valik3201@gmail.com)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff&style=flat)](https://www.linkedin.com/in/valentynchernetskyi/)
[![Telegram Badge](https://img.shields.io/badge/Telegram-26A5E4?logo=telegram&logoColor=fff&style=flat)](https://t.me/valik3201)
[![Instagram Badge](https://img.shields.io/badge/Instagram-E4405F?logo=instagram&logoColor=fff&style=flat)](https://www.instagram.com/valik_chern/)

<p align="right"><a href="#readme-top">Back to top</a></p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Thank you to [Pixabay](https://pixabay.com) for providing the API.

<p align="right"><a href="#readme-top">Back to top</a></p>
