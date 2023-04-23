# Fresh Tomato

Pomodoro app written in Deno Fresh

## Usage

```
deno task start
```

## Todo

- Time editing
- Testing
- Visual indicator for time
- Applying settings as submit form
  - Right now any changes to settings automatically update the state
- Clicking on different buttons should update timer type (e.g. pomodoro to short
  break)
- Fix errors for custom twind types
- Generalizing icon colors

# On Deno Fresh

## Pros

- Built in linting and formatting config
- File structure seems very well thought out
- Incredibly fast
- Preact signals seems very intuitive and seems to work without much issue
- I did not have to waste too much time on setup, except for `twind`

## Cons

- So many bugs and compatibility issues. Generally really hard to get things to
  work properly (compared to say, a React Vite stack on Node)
- Difficult to understand and dig out the differences between `tailwindcss`,
  `twind`, and the Deno `twind` plugin

### Potential bugs

- I could not get Modals to work from Headless UI, even after following
  [instructions from here](https://github.com/denoland/fresh/discussions/606)
- React hook form seems to work, although the `watch` seems to be broken a bit.
  Often needs to continually redownload
  `https://esm.sh/v117/preact@10.13.1/compat~.d.ts`, and does not seem properly
  cached. Not sure how to configure.
- VSCode intellisense does not import properly from `import_map.json`, and keeps
  grabbing from urls
- Had trouble working with `twind` plugin
  - Still have unresolved issue with color types being implemented properly, and
    is really difficult to figure out with documentation
  - TS plugin did not work at the time of writing, and spent a lot of time
    figuring out that I had to downgrade to 1.76.2

## Final thoughts

In general, I really love the philosophy, but even if the API and design feels
great, it's really hard to love when things don't work half the time.
