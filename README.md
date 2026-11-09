# maehr.github.io

This repository redirects [maehr.github.io](https://maehr.github.io) to [moritzmaehr.ch](https://moritzmaehr.ch/).

## Files

- `index.html` sends the root URL to moritzmaehr.ch.
- `404.html` sends all other URLs to moritzmaehr.ch.
- `.nojekyll` stops the Jekyll build on GitHub Pages.

The redirect uses a zero-second `meta refresh`. It contains no JavaScript.

Project sites such as `maehr.github.io/<repository>/` come from their own repositories. This redirect does not change them.

## Publish

GitHub Pages publishes the `main` branch. Push to `main` to publish a change.

## License

This project uses the MIT License. See [LICENSE](LICENSE).
