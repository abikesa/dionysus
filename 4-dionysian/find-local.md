```sh
find local -type f -exec du -h {} + | sort -rh | head -n 10

# 256MG!!! WTF does it do? And its hidden!
rm local/.git/objects/pack/pack-df71aa0deae6d558002db9554b659b336dc90672.pack
```

If the large pack file is from a repository you used as a template and you no longer need that specific repository's history or objects, you can safely remove the entire `.git` directory to start fresh. Here's how you can do it:

1. **Remove the `.git` Directory**:
   ```sh
   rm -rf local/.git
   ```

2. **Reinitialize the Git Repository**:
   Navigate to your `local` directory and initialize a new Git repository:
   ```sh
   cd local
   git init
   ```

3. **Add Your Files**:
   Add all your files to the new repository:
   ```sh
   git add .
   ```

4. **Commit Your Changes**:
   Commit the changes:
   ```sh
   git commit -m "Initial commit"
   ```

By doing this, you will remove all the old repository data, including the large pack file, and start with a clean Git history. This approach is particularly useful when you want to discard the old history and begin anew with just the current state of your files.
