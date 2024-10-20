# StackOverFlowClone

I am creating a StackOverflow Clone API. This project is completely Open Source. This project is going to be built by open source community.

## List of APIs needed:

### 1. Users

a. **Get All Users** - Fetch a list of all registered users.

b. **Get User by Username** - Retrieve details of a specific user by their username.

c. **Create New User** - Add a new user to the system.

d. **Update User Information** - Modify details of an existing user.

---

### 2. Questions

a. **Get All Questions** - Fetch a list of all questions.

b. **Create a New Question**

-   Add a new question to the database.
-   **Required Fields:** `title`
-   **Optional Fields:** `body`, `tags`, `userId`

c. **Update Question by ID** - Modify the details of an existing question by its unique identifier.

d. **Delete Question by ID**- Remove a question from the database using its unique identifier.

---

### 3. Answers

a. **Get All Answers**- Fetch a list of all answers.

b. **Get Answer by ID**- Retrieve details of a specific answer using its unique identifier.

c. **Create a New Answer**

-   Add a new answer to a question.
-   **Required Fields:** `body`
-   **Optional Fields:** `questionId`, `userId`

d. **Update Answer by ID**- Modify the details of an existing answer by its unique identifier.

e. **Delete Answer by ID** - Remove an answer from the database using its unique identifier.

---

### 4. Comments

a. **Get All Comments** Fetch a list of all comments.

b. **Create a New Comment**

-   Add a new comment.
-   **Required Fields:** `body`
-   **Optional Fields:** `questionId`, `answerId`, `userId`

c. **Update Comment by ID**

-   Modify the details of an existing comment by its unique identifier.
-   **Note:** Either `questionId` or `answerId` should be provided, but not both.

d. **Delete Comment by ID** Remove a comment from the database using its unique identifier.

---

## Code Setup

Follow these steps to set up the project on your local machine:

### Prerequisites

Make sure you have the following installed:

-   **Node.js** (version 14.x or higher)
-   **MongoDB** (local or cloud-based)

### Steps to Set Up the Project

1. **Clone the Repository**

    Start by cloning the repository to your local machine.

    ```bash
    git clone https://github.com/your-username/stackoverflow-clone.git
    ```

2. **Navigate to the Project Directory**

    Change to the project's directory.

    ```bash
    cd stackoverflow-clone
    ```

3. **Install Dependencies**

    Install all the required dependencies using npm.

    ```bash
    npm install
    ```

4. **Configure Environment Variables**

    Create a `.env` file in the root directory and set the following environment variables:

    ```
    PORT=3000
    MONGODB_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    ```

    - Replace `<your-mongodb-uri>` with your MongoDB connection string.
    - Replace `<your-jwt-secret>` with a secret key for JWT token generation.

5. **Start the MongoDB Server**

    Make sure your MongoDB server is running. If using a local instance, you can start it with:

    ```bash
    mongod
    ```

6. **Start the Development Server**

    Run the server in development mode.

    ```bash
    npm run dev
    ```

    The server should now be running at `http://localhost:3000`.

7. **Access the Application**

    Open your web browser and navigate to:

    ```
    http://localhost:3000
    ```

### Troubleshooting

-   **MongoDB Connection Issues:** Ensure your MongoDB server is running and the `MONGODB_URI` is correctly configured.
-   **Port Conflicts:** If port 3000 is already in use, change the `PORT` value in the `.env` file.

---

Now you're all set to start contributing to the project! Feel free to open issues or pull requests if you encounter any problems. Please Refer [CONTRIBUTING.md](CONTRIBUTING.md)
