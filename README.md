# angular-ivy-gokuq1

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-gokuq1)




This GitHub Action is triggered when a new tag is pushed (on: push: tags: '*'). It then checks the commit message to extract the tag name and environment name (grep commands in the get-vars step). If either tag name or environment name is missing, the Action will fail.

Assuming the tag and environment names are defined, the Action creates a Git tag (git tag command) and pushes it to the remote (git push command). It then builds a Docker image using the docker/build-push-action Action. The Docker image is tagged with two tags: one with the format $TAG_NAME-$ENV_NAME (e.g., v1.0.0-dev) and another with the format $TAG_NAME-latest (e.g., v1.0.0-latest). The build arguments for the Docker build are passed through the build-args parameter with the ZXBUILD argument set to the environment name ($ENV_NAME). Note that the push parameter is set to false, so the image is not pushed to a Docker registry. You can change this if you want to push the image to a registry.

I hope this helps! Let me know if you have any questions.