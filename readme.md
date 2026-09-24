# AutomationExercise Login Automation

A simple login automation project using **Playwright** and **JavaScript**.

The automation performs the following flow:

**Open Website → Login Page → Enter Email & Password → Login → Verify Successful Login**

---

## Project Setup

### Step 1: Install Node.js

Download and install Node.js:

https://nodejs.org/en/download

_(If Node.js is already installed, skip this step.)_

---

### Step 2: Install Playwright

1. Create a folder.
2. Open the folder in your code editor.
3. Open the Terminal in the same folder.

Run:

```bash
npm init -y
```

Then install Playwright:

```bash
npm init playwright@latest
npx playwright install
npm install @playwright/test
npm install -D @playwright/test@latest
```

---

### Step 3: Clone the Repository

Clone this repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Go to the project folder:

```bash
cd automationexercise-login-automation
```

Install the dependencies:

```bash
npm install
```

---

### Step 4: Setup Environment Variables

Create a `.env` file in the project root:

```text
automationexercise-login-automation/
│
├── .env
├── tests/
│   └── login.spec.js
└── ...
```

Add your registered AutomationExercise account credentials:

```env
EMAIL=your_registered_email@example.com
PASSWORD=your_registered_password
```

The `.env` file is used to keep login credentials outside the test code.

---

### Step 5: Run the Automation

From the project root, run:

```bash
node tests/login.spec.js
```

The browser will open and perform the login automatically.

---

## Automation Flow

```text
Open AutomationExercise
        ↓
Click Signup / Login
        ↓
Enter Email
        ↓
Enter Password
        ↓
Click Login
        ↓
Verify "Logged in as"
        ↓
Login Successful
```

---

## Project Structure

```text
automationexercise-login-automation/
│
├── tests/
│   └── login.spec.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js
```

---

## Important

- Create a registered account on AutomationExercise before running the test.
- Add your credentials to `.env`.
- Do not upload `.env` to GitHub.
- Make sure `.env` is included in `.gitignore`.
