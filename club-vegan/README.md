### Step 1: Create a New GitHub Repository

1. **Log in to GitHub**: Go to [GitHub](https://github.com) and log in to your account.
2. **Create a New Repository**:
   - Click on the "+" icon in the top right corner and select "New repository".
   - Fill in the repository name (e.g., `club-vegan`).
   - Optionally, add a description.
   - Choose the visibility (public or private).
   - Do not initialize the repository with a README, .gitignore, or license (you'll add these later).
   - Click on "Create repository".

### Step 2: Set Up Your Local Repository

1. **Open Terminal/Command Prompt**: Navigate to the directory where your React application is located. For example:
   ```bash
   cd "C:\Users\SHRUTI SINHA\Downloads\club vegan"
   ```

2. **Initialize Git**:
   ```bash
   git init
   ```

3. **Add Your Files**:
   - If you want to add all files in the directory, run:
     ```bash
     git add .
     ```
   - If you want to add only the `App.tsx` file, run:
     ```bash
     git add src/App.tsx
     ```

4. **Commit Your Changes**:
   ```bash
   git commit -m "Initial commit of React application"
   ```

### Step 3: Link Your Local Repository to GitHub

1. **Add the Remote Repository**: Replace `USERNAME` with your GitHub username and `REPOSITORY_NAME` with the name of your repository.
   ```bash
   git remote add origin https://github.com/USERNAME/club-vegan.git
   ```

### Step 4: Push Your Code to GitHub

1. **Push Your Code**:
   ```bash
   git push -u origin master
   ```

### Step 5: Verify Your Code on GitHub

1. **Go to Your Repository**: Open your web browser and navigate to your GitHub repository URL (e.g., `https://github.com/USERNAME/club-vegan`).
2. **Check Your Files**: You should see your `App.tsx` file and any other files you added.

### Additional Steps (Optional)

- **Create a README**: You can create a `README.md` file to describe your project.
- **Add a .gitignore**: If you have files or directories you want to ignore (like `node_modules`), create a `.gitignore` file.

### Example Commands Summary

Here’s a summary of the commands you would run in your terminal:

```bash
cd "C:\Users\SHRUTI SINHA\Downloads\club vegan"
git init
git add .
git commit -m "Initial commit of React application"
git remote add origin https://github.com/USERNAME/club-vegan.git
git push -u origin master
```

Replace `USERNAME` with your actual GitHub username. After executing these commands, your React application code should be successfully pushed to your new GitHub repository.