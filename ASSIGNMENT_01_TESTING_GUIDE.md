# Assignment 01: Automation Testing - Complete Lab & Execution Guide

---

## 📌 Project Overview & Test Environment

This guide provides full instructions for **Assignment 01: Automation Testing**, utilizing:
- **Test Application**: Registration Portal engineered for QA Automation
- **Testing Tools**: **Selenium IDE** & **TestCase Studio (by SelectorsHub)**
- **Test URL (Local Server)**: `http://localhost:3000/registration.html` (or `http://localhost:3000/register`)
- **Direct File URL (No server needed)**: `file:///d:/Snap-Contact/public/registration.html`

All input fields, buttons, and alert notifications have explicit, deterministic IDs (`id="username"`, `id="email"`, `id="btn-submit"`, etc.) and `data-testid` attributes so your Selenium IDE and TestCase Studio extensions capture clean, unambiguous locators.

---

## 🚀 Step 01: Installation & Launch Guide

### 1. Install Selenium IDE
1. Open **Google Chrome** (or Edge / Firefox).
2. Go to the Chrome Web Store:
   [Selenium IDE on Chrome Web Store](https://chromewebstore.google.com/detail/selenium-ide/mooikfagbdgahhkgcbnfdgahaganbiap)
3. Click **Add to Chrome** -> Confirm installation.
4. Pin the **Selenium IDE** icon to your browser extension toolbar for quick access.

### 2. Install TestCase Studio (by SelectorsHub)
1. In Google Chrome, visit:
   [TestCase Studio on Chrome Web Store](https://chromewebstore.google.com/detail/testcase-studio/loopjjegnlccnhgfehekecpanpmielcj)
2. Click **Add to Chrome** -> Confirm installation.
3. Pin **TestCase Studio** next to Selenium IDE in your toolbar.

---

### 3. Launching & Initializing Selenium IDE
1. Click the **Selenium IDE icon** in your browser toolbar. A popup window will appear.
2. Select **"Record a new test in a new project"**.
3. **Project Name**: Enter `Registration_Automation_Suite`.
4. **Base URL**: Enter your test URL:
   ```text
   http://localhost:3000/registration.html
   ```
   *(Note: If testing without a local dev server, you can also use `http://localhost:3000/register` or the absolute file URL).*
5. Click **START RECORDING**. A new browser window will open automatically, navigating to the registration portal, and Selenium IDE will begin listening for actions.

---

### 4. Opening TestCase Studio Side-by-Side
1. Before or during recording, click the **TestCase Studio** extension icon.
2. A compact TestCase Studio window will open.
3. As you interact with the Registration Form, TestCase Studio will automatically record:
   - Plain English step descriptions (e.g. `Type "john_tester" into "Username"`).
   - Corresponding XPath (`//input[@id='username']`) and CSS Selectors (`#username`).
   - Screenshots of each clicked element.

---

## 🧪 Step 02: Test Cases Suite & Selenium IDE Log Explanation

### Test Scenarios Matrix

| Test Case ID | Test Scenario | Test Type | Expected Result |
|---|---|---|---|
| **TC01** | Successful User Registration with Valid Data | Positive | Success alert visible: *"Registration Successful!"* |
| **TC02** | Password Mismatch Validation | Negative | Error alert visible: *"Passwords do not match."* |
| **TC03** | Mandatory Blank Fields Submission | Negative | Error alert visible: *"Validation Failed"* on required fields |
| **TC04** | Invalid Email Format Validation | Negative | Error alert visible: *"Please enter a valid email address."* |

---

### Detailed Test Execution: TC01 (Positive Registration)

#### Test Steps & Input Data:
1. **Open** `http://localhost:3000/registration.html`
2. **Type** into `#fullName`: `Johnathan Doe`
3. **Type** into `#username`: `john_tester`
4. **Type** into `#email`: `john.tester@example.com`
5. **Type** into `#phone`: `+1 555 987 6543`
6. **Select** `#gender`: `Male`
7. **Type** into `#password`: `P@ssword2026!`
8. **Type** into `#confirmPassword`: `P@ssword2026!`
9. **Check** `#terms`: `checked`
10. **Click** `#btn-submit`
11. **Assert** `#success-alert` is present
12. **Assert** `#success-title` contains `Registration Successful!`

> [!TIP]
> **Pro Tip**: You can also click the built-in **"TC01: Valid Data"** button (`#btn-fill-valid`) on the portal, which auto-populates all valid fields instantly!

---

### Selenium IDE Command Table for TC01

In your Selenium IDE project, your recorded test will look like this:

| # | Command | Target | Value | Description |
|---|---|---|---|---|
| 1 | `open` | `/registration.html` | | Navigates to base URL |
| 2 | `setWindowSize` | `1280x800` | | Sets consistent browser viewport |
| 3 | `type` | `id=fullName` | `Johnathan Doe` | Enters applicant's full name |
| 4 | `type` | `id=username` | `john_tester` | Enters unique username |
| 5 | `type` | `id=email` | `john.tester@example.com` | Enters valid email |
| 6 | `type` | `id=phone` | `+1 555 987 6543` | Enters contact number |
| 7 | `select` | `id=gender` | `label=Male` | Selects dropdown value |
| 8 | `type` | `id=password` | `P@ssword2026!` | Enters complex password |
| 9 | `type` | `id=confirmPassword` | `P@ssword2026!` | Enters matching confirmation password |
| 10 | `check` | `id=terms` | | Checks required terms checkbox |
| 11 | `click` | `id=btn-submit` | | Submits registration form |
| 12 | `assertElementPresent` | `id=success-alert` | | Asserts success banner is displayed in DOM |
| 13 | `assertText` | `id=success-title` | `Registration Successful!` | Verifies exact success heading text |

---

### 🔍 In-Depth Explanation of the Selenium IDE Log Section

When you execute the test in Selenium IDE (by clicking the **Play current test** button), look at the **bottom Log panel**.

#### Sample Log Output:
```text
[1] Running 'TC01_Valid_Registration'...
[2] Executing: | open | /registration.html | |
[3] Executing: | setWindowSize | 1280x800 | |
[4] Executing: | type | id=fullName | Johnathan Doe |
[5] Executing: | type | id=username | john_tester |
[6] Executing: | type | id=email | john.tester@example.com |
[7] Executing: | type | id=phone | +1 555 987 6543 |
[8] Executing: | select | id=gender | label=Male |
[9] Executing: | type | id=password | P@ssword2026! |
[10] Executing: | type | id=confirmPassword | P@ssword2026! |
[11] Executing: | check | id=terms | |
[12] Executing: | click | id=btn-submit | |
[13] Executing: | assertElementPresent | id=success-alert | |
[14] Executing: | assertText | id=success-title | Registration Successful! |
[15] 'TC01_Valid_Registration' completed successfully in 1420ms.
```

#### Breakdown of Each Log Component:

1. **Test Start Log (`Running 'TC01_Valid_Registration'...`)**:
   - Indicates the test runner initialized the execution engine and loaded the test suite context.
2. **Command Dispatch (`Executing: | command | target | value |`)**:
   - **Command (`type`, `click`, `assertText`)**: The automation action requested by Selenese.
   - **Target (`id=username`, `id=btn-submit`)**: The locator strategy Selenium uses to find the element in the DOM. Using IDs guarantees the fastest lookup without brittle relative paths.
   - **Value (`john_tester`, `P@ssword2026!`)**: The payload passed into the DOM element or the expected comparison string for assertion.
3. **Execution Status Indicators**:
   - **Green Bar / Green Bullet**: Means the locator was resolved and the action executed with HTTP status 200 / DOM mutation success.
   - **Red Indicator (if any)**: Means an element was not found within the timeout threshold or an `assert` check did not match.
4. **Assertion Logs (`assertElementPresent` & `assertText`)**:
   - `assertElementPresent`: Confirms that the registration backend validation passed and dynamically rendered `#success-alert` in the DOM.
   - `assertText`: Verifies that the string rendered inside `#success-title` matches `Registration Successful!` identically. If the text differs by even one character, the log turns red and halts with `AssertionError`.
5. **Run Summary (`completed successfully in 1420ms`)**:
   - Reports the total duration taken for test playback, confirming zero failed assertions.

---

### TestCase Studio Generated Output

When you have **TestCase Studio** running in Chrome alongside your test, it outputs:

| Step # | User Action Description | XPath Locator | CSS Selector | Recorded Data |
|---|---|---|---|---|
| 1 | Open browser | - | - | `http://localhost:3000/registration.html` |
| 2 | Click on "Full Name *" | `//input[@id='fullName']` | `#fullName` | - |
| 3 | Type "Johnathan Doe" into "Full Name *" | `//input[@id='fullName']` | `#fullName` | `Johnathan Doe` |
| 4 | Type "john_tester" into "Username *" | `//input[@id='username']` | `#username` | `john_tester` |
| 5 | Type "john.tester@example.com" into "Email *" | `//input[@id='email']` | `#email` | `john.tester@example.com` |
| 6 | Select "Male" from "Gender" | `//select[@id='gender']` | `#gender` | `Male` |
| 7 | Type "P@ssword2026!" into "Password *" | `//input[@id='password']` | `#password` | `••••••••` |
| 8 | Click on "I agree to the QA Terms..." | `//input[@id='terms']` | `#terms` | - |
| 9 | Click on "Register Account" | `//button[@id='btn-submit']` | `#btn-submit` | - |

You can click **Download** in TestCase Studio to save this test case as an Excel or PDF report!

---

## 📹 Step 03: Video Recording & Google Drive Sharing Guide

### 1. How to Record Your Screen on Windows

You can record your test execution using any of the following free tools:

#### Method A: Built-in Windows Game Bar (Easiest, No Download Needed)
1. Press `Win + Alt + R` on your keyboard to instantly start screen recording.
   *(Or press `Win + G` to open the Game Bar overlay and click the record button).*
2. Perform your test playback.
3. Press `Win + Alt + R` again to stop recording.
4. Your video is automatically saved in: `C:\Users\<YourUsername>\Videos\Captures\`.

#### Method B: Built-in Snipping Tool (Windows 11)
1. Press `Win + Shift + S`.
2. Select the **Video** camera icon at the top.
3. Draw a rectangle around your screen and click **Start**.

#### Method C: Chrome Extensions
- Use **Loom**, **Screenity**, or **Scrnli** from the Chrome Web Store.

---

### 2. Recommended Video Flow (2-3 Minutes):
To get full marks from your teacher or evaluator, follow this structure:

1. **0:00 - 0:30 (Setup Presentation)**:
   - Position your screen side-by-side: **Chrome Browser on Left**, **Selenium IDE & TestCase Studio on Right**.
   - Show the base URL and explain that this is Assignment 01 Automation Testing on the Registration Form.
2. **0:30 - 1:30 (Running TC01)**:
   - In Selenium IDE, click the **"Play current test"** button.
   - Show the form being typed and submitted automatically.
   - Point out the green **"Registration Successful!"** banner appearing on the web page.
3. **1:30 - 2:00 (Explaining the Log Section)**:
   - Highlight the **Selenium IDE Log panel** at the bottom.
   - Explain commands: `open`, `type`, `click`, and how `assertText` verified the success banner.
   - Show that all steps passed in green with total execution time.
4. **2:00 - 2:30 (TestCase Studio Overview & Conclusion)**:
   - Switch to the TestCase Studio window to show the captured plain-English steps and XPath locators.
   - Conclude your video.

---

### 3. Uploading & Sharing via Google Drive (CRITICAL STEP)

> [!WARNING]
> If you do not change Google Drive permissions to **"Anyone with the link"**, your evaluator will get an **"Access Denied"** error! Follow these exact steps:

1. Open your browser and go to [Google Drive](https://drive.google.com).
2. Click **+ New** (top-left) -> select **File upload**.
3. Select your recorded `.mp4` video from your computer (e.g. from `Videos\Captures\`).
4. Wait for the upload to complete.
5. In Google Drive, locate your uploaded video:
   - **Right-click** on the video file.
   - Click **Share** -> **Share** (or click the 🔗 icon).
6. In the sharing modal, locate the **General access** section:
   - Default is set to: `Restricted`.
   - **Change it to: "Anyone with the link"**.
   - Ensure the dropdown role on the right is set to **"Viewer"**.
7. Click the **"Copy link"** button.
8. Paste this link into your assignment submission portal or report!

---

## 📋 Submission Checklist

- [x] Selenium IDE installed and configured with Base URL
- [x] TestCase Studio extension active and recording actions
- [x] Registration form tested with valid credentials (TC01)
- [x] Negative validation cases tested (password mismatch & blank fields)
- [x] Selenium IDE Log section inspected and verified green
- [x] Screen video recorded showing side-by-side browser + IDE execution
- [x] Video uploaded to Google Drive
- [x] Google Drive sharing set to **"Anyone with the link can view"**
- [x] Shareable link copied and verified in an Incognito window
