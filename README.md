# angular-ivy-gokuq1

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-gokuq1)





This GitHub Action is triggered when a new tag is pushed (on: push: tags: '*'). It then checks the commit message to extract the tag name and environment name (grep commands in the get-vars step). If either tag name or environment name is missing, the Action will fail.

Assuming the tag and environment names are defined, the Action creates a Git tag (git tag command) and pushes it to the remote (git push command). It then builds a Docker image using the docker/build-push-action Action. The Docker image is tagged with two tags: one with the format $TAG_NAME-$ENV_NAME (e.g., v1.0.0-dev) and another with the format $TAG_NAME-latest (e.g., v1.0.0-latest). The build arguments for the Docker build are passed through the build-args parameter with the ZXBUILD argument set to the environment name ($ENV_NAME). Note that the push parameter is set to false, so the image is not pushed to a Docker registry. You can change this if you want to push the image to a registry.

I hope this helps! Let me know if you have any questions.








The error "Tag name and environment name must be defined in commit message" suggests that the script is not able to extract the tag and environment name from the commit message.

One possible solution is to ensure that you are using the correct format for the commit message. The script is looking for the tags and environment names in the commit message in the following format: "[tag=TAG_NAME] [env=ENV_NAME]". Therefore, make sure that you are adding the tag and environment name in the commit message in this format.

Another possible solution is to use the env context to set the TAG_NAME and ENV_NAME variables instead of using grep to extract the values from the commit message. Here's an updated version of the script that uses the env context:

bash
Copy code
on:
  push:
    tags:
      - '*'

jobs:
  create-tag-and-build:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set tag and environment name from ref
      id: set-vars
      run: |
        echo "TAG_NAME=${GITHUB_REF#refs/tags/}" >> $GITHUB_ENV
        echo "ENV_NAME=${GITHUB_REF#refs/tags/*/}" >> $GITHUB_ENV

    - name: Check if tag and environment name are defined
      run: |
        if [[ -z "$TAG_NAME" || -z "$ENV_NAME" ]]; then
          echo "Tag name and environment name must be defined in commit message"
          exit 1
        fi

    - name: Create Git tag
      if: success()
      run: |
        git tag "$TAG_NAME"
        git push origin "$TAG_NAME"

    - name: Build Docker image
      if: success()
      uses: docker/build-push-action@v2
      with:
        context: .
        push: false
        tags: |
          my-docker-registry/my-docker-image:$TAG_NAME-$ENV_NAME
          my-docker-registry/my-docker-image:$TAG_NAME-latest
        build-args: |
          ZXBUILD=$ENV_NAME
This updated script uses the echo command to set the TAG_NAME and ENV_NAME variables in the env context. The TAG_NAME variable is set to the value of $GITHUB_REF with the refs/tags/ prefix removed. The ENV_NAME variable is set to the value of $GITHUB_REF with the refs/tags/*/ prefix removed. This should work as long as your tags follow the format vX.X.X-[ENV_NAME].

Note that the set-vars step uses the id attribute to define a unique identifier for the step. This is necessary because we want to set variables using the env context, which can only be done in a separate step. The id attribute allows us to reference the TAG_NAME and ENV_NAME variables in the subsequent steps.