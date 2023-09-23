<!-- @format -->

# File Upload and Download System

This repository contains a Node.js application for handling file uploads, listing file information, and downloading files. The application consists of a server-side component built with Node.js, Express, Multer, and Cors, as well as a client-side component using Vite and React.

## Basic Information

The Backend/Server Node.js Application provides the following APIs:

- **Upload**: Allows users to upload files/images to MongoDB.
- **Get Files**: Retrieves a list of files' information, including file name and URL.
- **Download File**: Enables users to download a file/image from the server using the provided URL.

## API Endpoints

| Methods | URL                 | Actions                         |
| ------- | ------------------- | ------------------------------- |
| POST    | `/upload`           | Upload a File/Image             |
| GET     | `/files`            | Get List of Images (name & url) |
| GET     | `/files/[filename]` | Download a File                 |

## Client Code (Vite+React)

The client-side code is built using Vite and React. It provides a user-friendly interface for uploading files and fetching file information.

### Usage

1. Clone this repository to your local machine.
2. Navigate to the `client` directory.
3. Run `npm install` to install the necessary dependencies.
4. Start the development server using `npm run dev`.
5. Access the application at `http://localhost:3000`.

## Server Code (Node.js, Express, Multer, Cors)

The server-side code is built with Node.js, Express, Multer, and Cors. It handles file uploads, stores file data in MongoDB and provides APIs for listing and downloading files.

### Usage

1. Clone this repository to your local machine.
2. Navigate to the `server` directory.
3. Run `npm install` to install the necessary dependencies.
4. Start the server using `npm start`.
5. The server will be running at `http://localhost:3000`.

## MongoDB Configuration

The application is configured to use a local MongoDB database at `mongodb://connectionString/databaseName`. Ensure that you have MongoDB installed and running locally.

## API Usage

- Use the client-side interface to upload files.
- Click the "Get Files" button to retrieve a list of uploaded files with their names and URLs.
- To download a file, click on the file name in the list.

## Author

This project is maintained by Tejaswee Gaur 🇮🇳.

Feel free to contribute or report issues if you encounter any problems with the application.

**Happy file uploading and downloading!**
