
# Serve

A cloud native government services application based on microservice architecture, which provides one government model where all entities work together. It includes ID/Visa Renewal Service, Emergency Services, Flooding, Housing and Property Services, etc. 

## Architecture

The app is broken down into 5 different microservices:
1. Authentication
2. Registration
3. Business Application
4. Lease Contract
5. Emergency

The microservices based applocation is deployed on IBM Cloud Private.

![Architecture](https://github.com/Abeer-Haroon/Serve-ICP/blob/master/Serve%20Architecture.png)

## Running the Web application locally

1. Install the dependencies

    ```
    npm install
    ```

1. Run the application

    ```
    npm start
    ```

1. View the application in a browser at `localhost:3000`


## Watch the Video

If you want a quick walkthrough of the end result, a video is available [here](https://www.youtube.com/watch?v=lMSUc_saanU&feature=youtu.be).





