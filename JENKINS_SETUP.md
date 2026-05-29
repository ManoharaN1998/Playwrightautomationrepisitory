# Jenkins Local Setup Guide

## Prerequisites

This guide helps you install and run Jenkins locally on Windows to automate this Playwright test framework.

## Step 1: Install Java

### Option A: Install via Choco (recommended)
```powershell
choco install jdk17 -y
```

### Option B: Download and Install Manually
1. Visit: https://www.oracle.com/java/technologies/downloads/#java17
2. Download OpenJDK 17 for Windows (x64)
3. Run the installer and follow the prompts
4. Verify installation:
   ```powershell
   java -version
   ```

## Step 2: Download Jenkins WAR File

1. Visit: https://www.jenkins.io/download/
2. Download the latest **Windows native package** or **Generic Java package (WAR)** (recommended for portable setup)
3. Save to: `C:\jenkins\` (create folder if needed)

### Or download via PowerShell:
```powershell
mkdir C:\jenkins
cd C:\jenkins
Invoke-WebRequest -Uri "http://mirrors.jenkins.io/war-stable/latest/jenkins.war" -OutFile "jenkins.war"
```

## Step 3: Start Jenkins

### Option A: Run WAR file directly
```powershell
cd C:\jenkins
java -jar jenkins.war
```

Jenkins will start on `http://localhost:8080`

### Option B: Run as Windows Service
1. Download and run Jenkins Windows Installer from: https://www.jenkins.io/download/
2. During installation, choose "Install as Windows Service"
3. Jenkins will start automatically

## Step 4: Initial Jenkins Setup

1. Open browser: `http://localhost:8080`
2. Retrieve the initial admin password:
   - If running WAR: Check console output or `C:\Users\<YourUser>\.jenkins\secrets\initialAdminPassword`
   - If installed as service: Check `Program Files\Jenkins\secrets\initialAdminPassword`
3. Paste the password and continue setup
4. Install recommended plugins
5. Create your first admin user

## Step 5: Create a Pipeline Job

1. Click **New Item**
2. Name: `OrangeHRM-Automation`
3. Select **Pipeline**
4. In **Pipeline** section, choose **Pipeline script from SCM**
5. Set SCM to **Git**
6. Repository URL: (your repository URL)
7. Branch specifier: `*/main` or your branch
8. Script path: `Jenkinsfile`
9. Click **Save**

## Step 6: Configure GitHub Webhook (Optional)

### In GitHub:
1. Go to repository settings → **Webhooks**
2. Click **Add webhook**
3. Payload URL: `http://<YOUR_IP>:8080/github-webhook/`
   - Replace `<YOUR_IP>` with your machine IP
4. Content type: `application/json`
5. Events: **Just the push event**
6. Click **Add webhook**

### In Jenkins:
1. Click **Configure** on your job
2. Under **Build Triggers**, enable **GitHub hook trigger for GITScm polling**
3. Click **Save**

## Step 7: Run Your First Build

1. Click **Build Now** on your job
2. Monitor the build in the left panel
3. Check console output to see test results
4. After build, view the HTML report at: `./reports/cucumber-report.html`

## Troubleshooting

### Jenkins won't start
- Verify Java is installed: `java -version`
- Check port 8080 is not in use: `netstat -ano | findstr :8080`
- Kill process on 8080: `taskkill /PID <PID> /F`

### Steps are undefined
- Ensure `.require` paths in `Jenkinsfile` match your repository structure
- Check that step definitions are in: `stepDefinitions/**/*.js`

### Build fails with "Playwright browsers not found"
- Jenkins job should run: `npx playwright install chromium`
- This is included in the `Jenkinsfile` under the "Install Playwright Browsers" stage

### Can't connect from another machine
- Check Windows Firewall allows port 8080:
  ```powershell
  netsh advfirewall firewall add rule name="Jenkins" dir=in action=allow protocol=tcp localport=8080
  ```

## Next Steps

1. Once Jenkins is running, go to `http://localhost:8080`
2. Create your pipeline job pointing to this repository
3. The `Jenkinsfile` will automatically discover and run all tests
4. Reports will be archived after each build

## Additional Resources

- Jenkins Docs: https://www.jenkins.io/doc/
- Jenkinsfile Reference: https://www.jenkins.io/doc/book/pipeline/jenkinsfile/
- GitHub + Jenkins Integration: https://www.jenkins.io/solutions/github/
