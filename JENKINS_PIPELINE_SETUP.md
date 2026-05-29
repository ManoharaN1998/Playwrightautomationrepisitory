# How to Create a Jenkins Pipeline Job

## Step 1: Open Jenkins Dashboard

1. Start Jenkins (if not running):
   ```powershell
   cd C:\jenkins
   java -jar jenkins.war
   ```

2. Open browser: **http://localhost:8080**
3. Log in with your admin credentials

## Step 2: Create a New Job

1. Click **New Item** (top-left menu)
2. Enter job name: `OrangeHRM-Automation-Tests`
3. Select **Pipeline** (not "Freestyle project")
4. Click **OK**

## Step 3: Configure the Pipeline Job

### A. General Settings
- **Description**: `Automated BDD Playwright tests for OrangeHRM`
- **Discard old builds**: Enable and set max builds to `30`

### B. Build Triggers
Enable automatic builds when code changes:

**Option 1: Poll SCM (checks every 5 minutes)**
1. Check: **Poll SCM**
2. Schedule: `H/5 * * * *`
   - This means: check every 5 minutes for changes

**Option 2: GitHub Webhook (immediate trigger - requires GitHub connection)**
1. Check: **GitHub hook trigger for GITScm polling**
   - This triggers immediately on push to GitHub

Choose **Option 1** if you're just starting. Later you can add GitHub webhook.

### C. Pipeline Configuration

1. **Definition**: Select `Pipeline script from SCM`
2. **SCM**: Select `Git`
3. **Repository URL**: 
   ```
   https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
   ```
   Example:
   ```
   https://github.com/nmano/Playwrightautomationrepisitory-main.git
   ```
4. **Credentials**: 
   - If private repo: Click **Add** → **Jenkins** to add GitHub credentials
   - Leave blank if public repo
5. **Branch Specifier**: `*/main` (or your default branch)
6. **Script Path**: `Jenkinsfile`

### D. Save Configuration

Click **Save** at bottom-right

## Step 4: Run Your First Build

### Method 1: Manual Trigger (Test Build)
1. On job dashboard, click **Build Now** (left menu)
2. A build will appear in the "Build History" (bottom-left)
3. Click on build number (e.g., `#1`)
4. Click **Console Output** to see logs

### Method 2: Automatic Trigger
1. Make a change to any file in your GitHub repo
2. Commit and push:
   ```powershell
   git add .
   git commit -m "Test Jenkins trigger"
   git push origin main
   ```
3. Jenkins will detect the change within 5 minutes and auto-trigger

## Step 5: Monitor Build Progress

While build is running:
- **Console Output**: Shows live logs (test execution, install commands, etc.)
- **Build Status**: 
  - Blue ball = **Success** ✓
  - Red ball = **Failed** ✗
  - Yellow ball = **Unstable** (tests ran but some failed)

## Step 6: View Test Reports

After build completes:

1. Click on build number in history
2. Scroll down to **Artifacts** section
3. Download or view:
   - `reports/cucumber-report.html` - Full HTML test report
   - `reports/cucumber-report.json` - Raw test data
   - `screenshots/` - Failure screenshots

Or directly browse:
```
C:\Users\<YourUser>\.jenkins\workspace\OrangeHRM-Automation-Tests\reports\cucumber-report.html
```

## Step 7: Configure GitHub Webhook (Optional - for instant triggers)

### In Jenkins:

1. Go to job **Configure**
2. Under **Build Triggers**, check: **GitHub hook trigger for GITScm polling**
3. Click **Save**

### In GitHub:

1. Go to your repo **Settings** → **Webhooks**
2. Click **Add webhook**
3. **Payload URL**: 
   ```
   http://<YOUR_MACHINE_IP>:8080/github-webhook/
   ```
   - Get your IP: Open PowerShell
     ```powershell
     ipconfig | findstr "IPv4"
     ```
   - Use local IP like: `http://192.168.x.x:8080/github-webhook/`
4. **Content type**: `application/json`
5. **Events**: Select `Just the push event`
6. Click **Add webhook**

### Enable GitHub plugin in Jenkins:

1. Jenkins **Manage Jenkins** → **Manage Plugins**
2. Search: `GitHub`
3. Install: `GitHub` plugin (if not already installed)
4. Restart Jenkins

## Step 8: Verify Everything Works

### Test 1: Manual Build
1. Click **Build Now**
2. Should complete with SUCCESS (blue) ✓

### Test 2: Auto-trigger via Push
1. Edit any file in repo
2. Commit and push
3. Check Jenkins - build should start automatically

## Common Jenkinsfile Variables

Your `Jenkinsfile` automatically sets:
- `BROWSER=chromium` (uses Chromium browser)
- `HEADLESS=true` (runs in headless mode = no visual window)
- `REPORT_PATH=reports/cucumber-report.json` (where test results go)

## Troubleshooting

### Build shows "No Such File: Jenkinsfile"
- Ensure `Jenkinsfile` exists in repo root
- Check branch is correct: `*/main`

### "npm: command not found"
- Jenkins needs Node.js installed
- On Jenkins machine, install: https://nodejs.org/
- Or configure Jenkins to use system Node

### "Playwright browsers not found"
- Jenkins runs: `npx playwright install chromium`
- First build will take longer (installing browsers)

### "Steps are undefined"
- Check your feature files match step definitions
- Ensure all `stepDefinitions/*.js` files are committed to repo

### Build succeeds but no reports
- Reports are generated in: `reports/cucumber-report.html`
- Check **Artifacts** section after build completes

## Next: GitHub Webhook Setup (Recommended)

Once basic Pipeline works, set up GitHub webhook for instant builds:

1. **In GitHub**: Settings → Webhooks → Add Jenkins webhook URL
2. **In Jenkins**: Enable "GitHub hook trigger" in job config
3. **Test**: Push code → instant build trigger

This way, every `git push` automatically runs your tests!

## Architecture Overview

```
You push code to GitHub
         ↓
GitHub sends webhook to Jenkins (http://yourIP:8080/github-webhook/)
         ↓
Jenkins detects change
         ↓
Jenkins clones repo (git clone)
         ↓
Jenkins runs Jenkinsfile stages:
  - Checkout ✓
  - Install Dependencies (npm ci)
  - Install Playwright browsers
  - Lint code (npm run lint)
  - Run tests (npm test)
  - Generate report (npm run report:generate)
         ↓
Jenkins archives reports/screenshots/logs
         ↓
You see results in Jenkins UI + HTML report
```

## Summary

| Step | What to Do | Result |
|------|-----------|--------|
| 1 | Start Jenkins | http://localhost:8080 |
| 2 | Create Pipeline job | Job created in Jenkins |
| 3 | Configure Git repo URL | Jenkins knows where code is |
| 4 | Enable Build Triggers | Polls for changes every 5 min |
| 5 | Click "Build Now" | First test runs |
| 6 | View reports | HTML test report generated |
| 7 | Setup GitHub webhook | Instant builds on push |
| 8 | Push code | Auto-trigger confirmed |

You're done! 🎉
