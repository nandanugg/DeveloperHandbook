# Git 🌲

### What is git? 🤔
Git is an app that comes built-in in all Linux, and it helps us save our job and keep track every time we save.
Or job is saved, and when we do mistakes, we can easily load the previous save and continue from there.

## Installation 🛠
1. Open a directory in VSC / Terminal
2. At terminal, type `git init .` means "initiate git ini this directory
3. Done, start our job!

## Things to note 📝
There are lots of git command, don't force to memorize it, just learn the basics and after the project starting to be more complex, we will slowly remember most of the command.

----------

# Command list 🤖
## Local command 🏡
Initialization
- `git init .` initiate git in current folder in terminal

Saving
> Remember, everytime we save, means we **stack** our save
> 
> Which means all of our saves are stacking everytime we save
- `git add .` stage files and changes before save
- `git commit` commit / save files and changes
  - `-m "<message>"` message we want to say to our save

Branching
> Our save is saved in a branch
> 
> If we create a new branch and save, then our save is saved in that new branch
- `git branch <new branch name>` creating new branch
- `git checkout <branch name>` move to another branch, this is called "checkout"
  - `-d <branch name>` delete a branch, we can't delete a branch that we still checking out 
  - `-m <new branch name>` rename our current checkouted branch
  - `–a` see list of branches

Merging
> Merging is a way to use another branch saves and merge it into our branch
- `git merge <branch we want to merge>` merge another branch to current checkouted branch
  - `-X theirs` accept all changes from incoming (another branch we want to merge) 
  - `-X ours` accept all changes from current (our current checkouted branch) 
  - `git checkout --theirs .` if we in currently in a conflict and want to accept all incoming changes
  - `git checkout --ours .` if we in currently in a conflict and want to accept all current changes
  - `--abort` cancel merge if we currently in a conflict

Rebasing
> we can imagine that creating a new branch means literally like a tree creating a branch
> 
> So rebasing means update the tree of our branch, if the tree grows, then the branch
> shoud go higher with the tree, that "should go higher with the tree" means the branch
> should "rebase" with tree development
- `git rebase <branch name>` make all changes from branch we want into our current checkouted branch
  - `-X theirs` accept all changes from incoming (another branch we want to merge) 
  - `-X ours` accept all changes from current (our current checkouted branch) 

Stashing
> Stashing is very useful if we forget to change our branch while doing our work
> 
> By Stashing, we stash our current changes, and then we can checkout to the branch
> that should be worked on, and then restore the stash there
- `git stash` keep (stash) our current changes in memory, usually used if we forget to change branch
  - `-m <message>` attach a message to our stash, do not put spaces
- `git stash pop` restore (pop) our latest stash into current checkouted branch and deletes the stash
- `git stash list` see stashes we make
- `git stash apply <stash message or name>` apply our stash into current checkouted branch
- `git stash drop <stash message or name>` delete our stash

Resetting
> Sometimes we broke things up, these commands will help you fix things by resetting
- `git log` see commit list
  - `--oneline` simplify the output
- `git checkout <commit hash>` go to commit that `git log` shows, usually used for checking
- `git reset <commit hash>` reset to commit that `git log` shows
  - After running `git reset`, remember to `git checkout` to our branch that we reset to avoid errors in the future
- `git reset --hard` reset changes that we not commit
----------

## Remote command 🌐
Remotes
> Remotes is an alias for repository
> 
> And a repository is more like a Google Drive, but for codes, we can save our work
> to the repository and access it anywhere, even we can collaborate with another
> developer by working in the same repository
- `git remote add <remote name> <remote url>` add a remote (repository) to our current folder
- `git remote -v` lists of remotes that we already add
- `git remote rename <old remote name> <new remote name>` rename a remote alias
- `git remote remove <remote name>` remove a remote alias

Pushing
> Pushing means we push our local commit in our branch to the repository
> 
> After we push, we can access our pushed code from another computer, and another developer
> can access it too
> 
> Just a reminder that if you push from a branch called master, means in the repository
> will also have a branch called master too, and so on
- `git push <remote name> <current checkouted branch>` push all commits from our current checkouted branch to repository
  - `-u` set upstream, means if we want to push again next time, we don't need to type `git push <remote name> <current checkouted branch>` again
- `git push` push current checkouted branch to remote, only can be run if we already use `git push -u ...`

Pulling
> Pulling means we load the pushes in the repository branch into our local
> project by updating the code
> 
> By pulling, we can access another developer pushes, or update our work that has
> been done in another computer
- `git pull` pull changes from remote
- `git pull -X theirs` accept all changes from remote
- `git pull -X ours` accept all changes from our current branch
- `git checkout --theirs .` if we in currently in a conflict and want to accept all changes from remote
- `git checkout --ours .` if we in currently in a conflict and want to accept all changes from our current branch

Cloning
> Cloning means we can copy a work from somebody repository and place it into
> our local computer
> 
> By clone, we don't need to add remote or create a folder for the project, all are
> handled by git
- `git clone <git repository url> .` clone a git repository in the internet into our current directory in terminal
- `git clone <git repository url> <folder name>` same as above, but by this we can tell to git what folder name should it create, rather than relying from the repository project name

Fetching
> Fetching means we update our repository information
> 
> If somebody has added a new branch in the repository, we can't directly see it
> unless we fetch, then we can see the new branch by running `git branch -a`
- `git fetch` update information about new / deleted branch in the repository

Pruning
> Pruning means we clean our local branches according to repository branch
> 
> Let's say somebody has deleted or rename a branch in repository, but our branch in local
> is still unchanged,
> means that our local branch can't push because the repository branch is modified, prune solve
> this by adjusting our branch to the repository branch, so any renames, deletes, can be aligned
- `git remote prune` prune changes between local and repository

----------
# Quiz
Complete each task and tell me what git commands did you use to achieve the task

But before the task start, you need to prepare:
1. Create a folder called "git-practice"
2. Open that folder using VSC
3. run `git init` in VSC terminal

### Task 1
  1. Create a file called aboutMe.md
  2. Fill it with information about
     - Your name
     - One paragraph long bio about you
     - Your motivation for joining this program
     - What job role that you want to take after following this program
  3. Add & Commit (we will call it "commit" in the future) by message "first commit"
  4. Create a new branch called development
  5. Checkout to that branch
  6. Edit aboutMe.md by adding
     - Things that might disturb you while learning
     - What you usualy do to make yourself entertained while learning
  7. Commit by message "add disturbance and self entertaiment strat"
  8. Checkout to master branch
  9. Merge from development branch to master branch

### Task 2
  1. Still in master branch, create a file called buyList.md
  2. That file was meant to be a grocery buy list, so make an introduction to that file that says it was a grocery buy list
  3. Commit by any message you want, but try to tell what you do in short words
  4. Checkout to development branch
  5. Merge from master branch to development branch
  6. Fill buyList.md with fake grocery list, use your imagination to fill it
  7. Commit, as usual, try to tell what you do in short words
  8. Checkout to master branch
  9. Merge from development branch to master branch

### Task 3
  1. Create a github repository, make the project name same as our current git folder name
  2. Copy the git HTTPS url and add remote to our local git
  3. Push to github
  4. Create a file called readme.md (still in master branch)
  5. Fill that file with introduction telling that this is your git practice repository
  6. Commit & push

### Homework
  1. Checkout to development branch
  2. Push development branch to remote (`git push -u origin developlemnt`)
     - Remember this code, in future we will only say like "push development branch" and you should understand what should you type
  3. Create branch called "staging"
  4. Checkout to staging branch
  5. Add new file called "todo.md"
     - Give a introduction
     - Fill it with imaginary todo
  6. Commit
  7. Checkout to master branch
  8. Merge from staging branch to master branch
  9. Push
<!-- TODO add conflict practice -->
<!-- TODO add git pull practice -->
<!-- TODO add git modify local brach practice -->
<!-- TODO add git modify repository brach practice -->
