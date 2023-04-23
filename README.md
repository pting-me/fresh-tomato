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

# On Deno Fresh

## Pros

- Built in linting and formatting config
- File structure seems very well thought out
- Incredibly fast
- Preact signals seems very intuitive and seems to work without much issue
- I did not have to waste too much time on setup, except for `twind`

## Cons

- Generally really hard to get things to work properly (compared to say, a React
  Vite stack on Node)
  - I could not get Modals to work from Headless UI, even after following
    [instructions from here](https://github.com/denoland/fresh/discussions/606)
  - I feel discouraged from including any libraries that aren't included as part
    of the default Deno Fresh install
- VSCode intellisense does not import properly from `import_map.json`, and keeps
  grabbing from urls
- Had trouble working with `twind` plugin
  - Still have unresolved issue with color types being implemented properly, and
    is really difficult to figure out with documentation
  - Half the time, docs feel like they don't apply to the current Deno Fresh use
    cases
  - TS plugin did not work at the time of writing, and spent a lot of time
    figuring out that I had to downgrade to 1.76.2

## Final thoughts

In general, I really love the philosophy, but even if the API and design feels
great, it's really hard to love when things don't work half the time.
